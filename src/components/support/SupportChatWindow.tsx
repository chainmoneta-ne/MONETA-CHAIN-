import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  ArrowLeft,
  MoreVertical,
  Paperclip,
  Image as ImageIcon,
  Send,
  Check,
  CheckCheck,
  AlertTriangle,
  FileText,
  ExternalLink,
  Shield,
  X,
  RefreshCw,
  Loader2,
  ChevronDown,
  Info,
  HelpCircle,
  ShieldAlert
} from "lucide-react";
import {
  SupportTicket,
  SupportMessage,
  SupportAttachment,
  SupportSafeContext,
  ConnectionStatus,
  fetchTickets,
  createTicket,
  sendChatMessage,
  uploadSupportAttachment,
  markTicketResolved,
  subscribeToSupportStream,
  getMonetaUserId,
  getMonetaUserName
} from "../../services/supportApi";
import { ImageViewerModal } from "./ImageViewerModal";

function deduplicateMessages(messages: SupportMessage[]): SupportMessage[] {
  const seen = new Set<string>();
  const result: SupportMessage[] = [];
  for (const msg of messages) {
    if (!msg) continue;
    const key = msg.id || `${msg.sender}_${msg.created_at}_${msg.text}`;
    if (!seen.has(key)) {
      seen.add(key);
      result.push(msg);
    }
  }
  return result;
}

interface SupportChatWindowProps {
  initialTicketId?: string;
  sourcePage?: string;
  safeContext?: SupportSafeContext;
  onBack?: () => void;
  isModal?: boolean;
}

export function SupportChatWindow({
  initialTicketId,
  sourcePage,
  safeContext,
  onBack,
  isModal = false
}: SupportChatWindowProps) {
  const [ticket, setTicket] = useState<SupportTicket | null>(null);
  const [ticketsList, setTicketsList] = useState<SupportTicket[]>([]);
  const [isLoadingTicket, setIsLoadingTicket] = useState(true);
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus>("connected");

  // Chat message composition state
  const [inputText, setInputText] = useState(() => {
    return sessionStorage.getItem("moneta_support_draft") || "";
  });
  const [isSending, setIsSending] = useState(false);
  const [failedMessageIds, setFailedMessageIds] = useState<Set<string>>(new Set());

  // Typing indicator
  const [isAgentTyping, setIsAgentTyping] = useState(false);

  // Security banner dismissed state
  const [isSecurityNoticeDismissed, setIsSecurityNoticeDismissed] = useState(() => {
    return localStorage.getItem("moneta_support_security_dismissed") === "true";
  });

  // Staged attachment before sending
  const [stagedFile, setStagedFile] = useState<{
    file: File;
    previewUrl?: string;
    progress: number;
    isUploading: boolean;
    attachment?: SupportAttachment;
    error?: string;
    abortFn?: () => void;
  } | null>(null);

  // Drag and drop overlay
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  // Auto-scroll state
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatScrollContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollBottomPill, setShowScrollBottomPill] = useState(false);
  const [unreadCountSinceScroll, setUnreadCountSinceScroll] = useState(0);

  // Modal views
  const [selectedImage, setSelectedImage] = useState<{ url: string; name: string } | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  const [showTicketDetails, setShowTicketDetails] = useState(false);
  const [showResolveConfirm, setShowResolveConfirm] = useState(false);
  const [showSecurityReportModal, setShowSecurityReportModal] = useState(false);

  // File input refs
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Preserve draft in sessionStorage
  useEffect(() => {
    sessionStorage.setItem("moneta_support_draft", inputText);
  }, [inputText]);

  // Load ticket or create initial conversation
  const loadOrCreateTicket = useCallback(async () => {
    setIsLoadingTicket(true);
    try {
      const tickets = await fetchTickets();
      setTicketsList(tickets);

      if (initialTicketId) {
        const found = tickets.find((t) => t.id === initialTicketId);
        if (found) {
          setTicket(found);
          setIsLoadingTicket(false);
          return;
        }
      }

      // Check for active open ticket
      const activeTicket = tickets.find((t) => t.status !== "resolved");
      if (activeTicket) {
        setTicket(activeTicket);
      } else if (tickets.length > 0) {
        setTicket(tickets[0]);
      } else {
        // Create initial ticket with reference context
        const newTicket = await createTicket({
          category: safeContext?.feature_id ? `Feature: ${safeContext.feature_id}` : "General Support",
          subject: safeContext?.source_page ? `Inquiry from ${safeContext.source_page}` : "General Support Inquiry",
          safe_context: {
            source_page: sourcePage || window.location.pathname,
            ...safeContext
          }
        });
        setTicket(newTicket);
        setTicketsList([newTicket]);
      }
    } catch (err) {
      console.error("[SupportChat] Error loading tickets:", err);
    } finally {
      setIsLoadingTicket(false);
    }
  }, [initialTicketId, sourcePage, safeContext]);

  useEffect(() => {
    loadOrCreateTicket();
  }, [loadOrCreateTicket]);

  // Connect to SSE real-time events stream
  useEffect(() => {
    const unsubscribe = subscribeToSupportStream(
      (event) => {
        if (event.event === "message") {
          const { ticket_id, message } = event.data;
          setTicket((prev) => {
            if (!prev || prev.id !== ticket_id) return prev;

            // 1. If message already exists by ID, update it
            if (prev.messages.some((m) => m.id === message.id)) {
              return {
                ...prev,
                messages: prev.messages.map((m) => (m.id === message.id ? message : m))
              };
            }

            // 2. If it's a message from user, check if there's a temporary optimistic sending message
            const optimisticIndex = prev.messages.findIndex(
              (m) =>
                m.status === "sending" &&
                (m.sender_type === "user" || m.sender === "USER") &&
                m.text === message.text
            );

            let nextMessages: SupportMessage[];
            if (optimisticIndex !== -1) {
              nextMessages = [...prev.messages];
              nextMessages[optimisticIndex] = message;
            } else {
              nextMessages = [...prev.messages, message];
            }

            return {
              ...prev,
              messages: deduplicateMessages(nextMessages)
            };
          });

          // Check if user is scrolled up
          if (chatScrollContainerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = chatScrollContainerRef.current;
            const isAtBottom = scrollHeight - scrollTop - clientHeight < 100;
            if (isAtBottom) {
              setTimeout(() => {
                messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
              }, 50);
            } else {
              setShowScrollBottomPill(true);
              setUnreadCountSinceScroll((c) => c + 1);
            }
          }
        } else if (event.event === "typing") {
          const { ticket_id, is_typing } = event.data;
          setTicket((prev) => {
            if (prev && prev.id === ticket_id) {
              setIsAgentTyping(is_typing);
            }
            return prev;
          });
        } else if (event.event === "status_update") {
          const { ticket_id, message_id, status } = event.data;
          setTicket((prev) => {
            if (!prev || prev.id !== ticket_id) return prev;
            return {
              ...prev,
              messages: prev.messages.map((m) =>
                m.id === message_id ? { ...m, status } : m
              )
            };
          });
        } else if (event.event === "ticket_updated") {
          const { ticket: updated } = event.data;
          setTicket((prev) => (prev && prev.id === updated.id ? updated : prev));
        }
      },
      (status) => {
        setConnectionStatus(status);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  // Monitor scroll position
  const handleScroll = () => {
    if (!chatScrollContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = chatScrollContainerRef.current;
    const isAtBottom = scrollHeight - scrollTop - clientHeight < 60;
    if (isAtBottom) {
      setShowScrollBottomPill(false);
      setUnreadCountSinceScroll(0);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    setShowScrollBottomPill(false);
    setUnreadCountSinceScroll(0);
  };

  // Auto scroll to bottom when ticket first loads
  useEffect(() => {
    if (ticket && !isLoadingTicket) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
      }, 100);
    }
  }, [ticket?.id, isLoadingTicket]);

  // Handle stage file
  const stageFileForReview = (file: File) => {
    if (!ticket) return;

    // Validate size
    if (file.size > 10 * 1024 * 1024) {
      alert("File size exceeds the 10 MB limit.");
      return;
    }

    // Validate type
    const validMimes = ["image/png", "image/jpeg", "image/webp", "application/pdf"];
    if (!validMimes.includes(file.type)) {
      alert("Unsupported file format. Please attach PNG, JPG, WEBP, or PDF.");
      return;
    }

    let previewUrl: string | undefined;
    if (file.type.startsWith("image/")) {
      previewUrl = URL.createObjectURL(file);
    }

    // Begin upload progress
    const uploadJob = uploadSupportAttachment(ticket.id, file, (percent) => {
      setStagedFile((prev) => (prev ? { ...prev, progress: percent } : null));
    });

    setStagedFile({
      file,
      previewUrl,
      progress: 0,
      isUploading: true,
      abortFn: uploadJob.abort
    });

    uploadJob.promise
      .then((attachment) => {
        setStagedFile((prev) =>
          prev ? { ...prev, isUploading: false, progress: 100, attachment } : null
        );
      })
      .catch((err) => {
        setStagedFile((prev) =>
          prev ? { ...prev, isUploading: false, error: err.message } : null
        );
      });
  };

  // Cancel staged attachment
  const handleCancelAttachment = () => {
    if (stagedFile?.abortFn) {
      stagedFile.abortFn();
    }
    if (stagedFile?.previewUrl) {
      URL.revokeObjectURL(stagedFile.previewUrl);
    }
    setStagedFile(null);
  };

  // Send message
  const handleSendMessage = async () => {
    if (!ticket || isSending) return;
    if (connectionStatus === "offline") {
      alert("You are currently offline. Please reconnect to send messages.");
      return;
    }

    const textToSend = inputText.trim();
    const hasAttachment = stagedFile?.attachment;

    if (!textToSend && !hasAttachment) return;
    if (stagedFile?.isUploading) {
      alert("Please wait for the attachment to finish uploading.");
      return;
    }

    const tempId = `temp_${Date.now()}`;
    const attachmentsToSend: SupportAttachment[] = stagedFile?.attachment
      ? [stagedFile.attachment]
      : [];

    // Optimistically insert sending message into UI
    const optimisticMessage: SupportMessage = {
      id: tempId,
      ticket_id: ticket.id,
      sender: "USER",
      sender_type: "user",
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
      created_at: new Date().toISOString(),
      status: "sending",
      attachments: attachmentsToSend
    };

    setTicket((prev) => (prev ? { ...prev, messages: [...prev.messages, optimisticMessage] } : null));
    setInputText("");
    sessionStorage.removeItem("moneta_support_draft");
    handleCancelAttachment();
    scrollToBottom();
    setIsSending(true);

    try {
      const serverMessage = await sendChatMessage(ticket.id, {
        text: textToSend,
        attachments: attachmentsToSend
      });

      // Update optimistic message with real server message or deduplicate
      setTicket((prev) => {
        if (!prev) return prev;
        const alreadyHasServerMessage = prev.messages.some((m) => m.id === serverMessage.id);
        let nextMessages: SupportMessage[];
        if (alreadyHasServerMessage) {
          nextMessages = prev.messages.filter((m) => m.id !== tempId);
        } else {
          nextMessages = prev.messages.map((m) => (m.id === tempId ? serverMessage : m));
        }
        return {
          ...prev,
          messages: deduplicateMessages(nextMessages)
        };
      });
    } catch (err) {
      console.error("[SupportChat] Send error:", err);
      // Mark as failed
      setTicket((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          messages: prev.messages.map((m) =>
            m.id === tempId ? { ...m, status: "failed" } : m
          )
        };
      });
      setFailedMessageIds((prev) => new Set(prev).add(tempId));
    } finally {
      setIsSending(false);
    }
  };

  // Retry sending failed message
  const handleRetryMessage = async (msg: SupportMessage) => {
    if (!ticket) return;
    try {
      // Set to sending
      setTicket((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          messages: prev.messages.map((m) => (m.id === msg.id ? { ...m, status: "sending" } : m))
        };
      });

      const serverMessage = await sendChatMessage(ticket.id, {
        text: msg.text,
        attachments: msg.attachments
      });

      setTicket((prev) => {
        if (!prev) return prev;
        const alreadyHasServerMessage = prev.messages.some((m) => m.id === serverMessage.id);
        let nextMessages: SupportMessage[];
        if (alreadyHasServerMessage) {
          nextMessages = prev.messages.filter((m) => m.id !== msg.id);
        } else {
          nextMessages = prev.messages.map((m) => (m.id === msg.id ? serverMessage : m));
        }
        return {
          ...prev,
          messages: deduplicateMessages(nextMessages)
        };
      });
      setFailedMessageIds((prev) => {
        const next = new Set(prev);
        next.delete(msg.id);
        return next;
      });
    } catch {
      setTicket((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          messages: prev.messages.map((m) => (m.id === msg.id ? { ...m, status: "failed" } : m))
        };
      });
    }
  };

  // Handle textarea keyboard interaction
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Format file sizes
  const formatBytes = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  // Render message status tick marks
  const renderStatusIndicator = (status: SupportMessage["status"]) => {
    if (status === "sending") {
      return <span className="text-[10px] text-gray-400 font-mono">Sending...</span>;
    }
    if (status === "sent") {
      return (
        <span className="flex items-center space-x-0.5 text-[10px] text-gray-300 font-mono" title="Sent">
          <span>Sent</span>
          <Check size={11} className="inline ml-0.5" />
        </span>
      );
    }
    if (status === "delivered") {
      return (
        <span className="flex items-center space-x-0.5 text-[10px] text-gray-300 font-mono" title="Delivered">
          <span>Delivered</span>
          <CheckCheck size={12} className="inline ml-0.5 text-gray-300" />
        </span>
      );
    }
    if (status === "read") {
      return (
        <span className="flex items-center space-x-0.5 text-[10px] text-[#19C37D] font-mono font-medium" title="Read">
          <span>Read</span>
          <CheckCheck size={12} className="inline ml-0.5 text-[#19C37D]" />
        </span>
      );
    }
    if (status === "failed") {
      return (
        <span className="flex items-center space-x-1 text-[10px] text-red-400 font-mono font-semibold">
          <AlertTriangle size={11} />
          <span>⚠ Not sent</span>
        </span>
      );
    }
    return null;
  };

  // Drag & drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingOver(true);
  };
  const handleDragLeave = () => {
    setIsDraggingOver(false);
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      stageFileForReview(e.dataTransfer.files[0]);
    }
  };

  // Start new ticket
  const handleStartNewTicket = async () => {
    try {
      setIsLoadingTicket(true);
      const newTicket = await createTicket({
        category: "General Support",
        subject: "New Support Request",
        safe_context: {
          source_page: window.location.pathname
        }
      });
      setTicket(newTicket);
      setTicketsList((prev) => [newTicket, ...prev]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoadingTicket(false);
    }
  };

  // Resolve current ticket
  const handleConfirmResolve = async () => {
    if (!ticket) return;
    try {
      const updated = await markTicketResolved(ticket.id);
      setTicket(updated);
      setShowResolveConfirm(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className={`flex flex-col bg-[#07110D] border border-[#1D3028] text-white overflow-hidden shadow-2xl relative select-text ${
        isModal
          ? "w-full h-full max-w-4xl max-h-[92vh] rounded-2xl md:rounded-3xl"
          : "w-full min-h-[82vh] rounded-2xl border-t border-[#1D3028]"
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Hidden File Inputs */}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/png,image/jpeg,image/webp,application/pdf"
        onChange={(e) => {
          if (e.target.files?.[0]) stageFileForReview(e.target.files[0]);
          e.target.value = "";
        }}
      />
      <input
        type="file"
        ref={imageInputRef}
        className="hidden"
        accept="image/png,image/jpeg,image/webp"
        onChange={(e) => {
          if (e.target.files?.[0]) stageFileForReview(e.target.files[0]);
          e.target.value = "";
        }}
      />

      {/* Drag and Drop Overlay */}
      {isDraggingOver && (
        <div className="absolute inset-0 z-40 bg-[#07110D]/95 border-2 border-dashed border-[#19C37D] rounded-2xl flex flex-col items-center justify-center space-y-4 pointer-events-none animate-in fade-in duration-150">
          <div className="w-16 h-16 rounded-full bg-[#19C37D]/20 text-[#19C37D] flex items-center justify-center">
            <Paperclip size={32} />
          </div>
          <p className="text-lg font-heading font-black text-white uppercase tracking-wider">
            Drop files here to upload
          </p>
          <p className="text-xs text-[#B8C4BE] font-mono">
            Supported formats: PNG, JPG, WEBP, PDF (Max 10 MB)
          </p>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 1. HEADER (← MONETA CHAIN SUPPORT | ● LIVE | Ticket ID: MC-2026-XXXXXX)   */}
      {/* ========================================================================= */}
      <div className="bg-[#0D1914] border-b border-[#1D3028] px-4 md:px-6 py-3.5 flex items-center justify-between z-20">
        <div className="flex items-center space-x-3">
          {onBack && (
            <button
              onClick={onBack}
              title="Close or go back"
              className="p-1.5 -ml-1 text-[#B8C4BE] hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            >
              <ArrowLeft size={19} />
            </button>
          )}

          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-heading font-black text-sm md:text-base tracking-wide text-white uppercase">
                MONETA CHAIN SUPPORT
              </h3>

              {/* LIVE Status Badge */}
              <div
                className={`inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${
                  connectionStatus === "connected"
                    ? "bg-[#19C37D]/20 text-[#19C37D] border border-[#19C37D]/40"
                    : connectionStatus === "reconnecting"
                    ? "bg-amber-500/20 text-amber-400 border border-amber-500/40"
                    : "bg-red-500/20 text-red-400 border border-red-500/40"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    connectionStatus === "connected"
                      ? "bg-[#19C37D] animate-pulse"
                      : connectionStatus === "reconnecting"
                      ? "bg-amber-400 animate-bounce"
                      : "bg-red-400"
                  }`}
                />
                <span>
                  {connectionStatus === "connected"
                    ? "● LIVE"
                    : connectionStatus === "reconnecting"
                    ? "🟡 RECONNECTING..."
                    : "🔴 OFFLINE"}
                </span>
              </div>
            </div>

            {/* Authoritative Ticket ID */}
            <div className="flex items-center space-x-2 text-xs font-mono text-[#B8C4BE] mt-0.5">
              <span>Ticket ID:</span>
              <span className="text-white font-bold tracking-tight">
                {ticket ? ticket.id : "MC-2026-000482"}
              </span>
              {ticket?.status === "resolved" && (
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-gray-700 text-gray-300 font-sans">
                  Resolved
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Header Actions & Context Menu */}
        <div className="flex items-center space-x-2 relative">
          <button
            onClick={() => setShowTicketDetails(true)}
            title="Ticket Details"
            className="hidden sm:flex items-center space-x-1 text-xs font-mono text-[#B8C4BE] hover:text-white px-2.5 py-1.5 rounded-lg border border-[#1D3028] hover:border-[#19C37D]/40 bg-[#07110D] transition-colors"
          >
            <Info size={13} />
            <span>Details</span>
          </button>

          <button
            onClick={() => setShowMenu(!showMenu)}
            title="Support Options"
            className="p-2 text-[#B8C4BE] hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
          >
            <MoreVertical size={18} />
          </button>

          {/* Context Dropdown Menu */}
          {showMenu && (
            <div className="absolute right-0 top-full mt-2 w-56 bg-[#0D1914] border border-[#1D3028] rounded-xl shadow-2xl py-2 z-30 font-sans text-xs animate-in fade-in slide-in-from-top-2 duration-150">
              <button
                onClick={() => {
                  setShowMenu(false);
                  setShowResolveConfirm(true);
                }}
                disabled={ticket?.status === "resolved"}
                className="w-full text-left px-4 py-2.5 hover:bg-white/5 flex items-center space-x-2 text-gray-200 disabled:opacity-50"
              >
                <Check size={14} className="text-[#19C37D]" />
                <span>Mark resolved</span>
              </button>

              <button
                onClick={() => {
                  setShowMenu(false);
                  setShowTicketDetails(true);
                }}
                className="w-full text-left px-4 py-2.5 hover:bg-white/5 flex items-center space-x-2 text-gray-200"
              >
                <Info size={14} className="text-electric-blue" />
                <span>View ticket details</span>
              </button>

              <button
                onClick={() => {
                  setShowMenu(false);
                  handleStartNewTicket();
                }}
                className="w-full text-left px-4 py-2.5 hover:bg-white/5 flex items-center space-x-2 text-gray-200"
              >
                <RefreshCw size={14} className="text-golden-yellow" />
                <span>Start new request</span>
              </button>

              <a
                href="/faq"
                target="_blank"
                rel="noreferrer"
                onClick={() => setShowMenu(false)}
                className="w-full text-left px-4 py-2.5 hover:bg-white/5 flex items-center space-x-2 text-gray-200"
              >
                <HelpCircle size={14} className="text-gray-400" />
                <span>Help Center & FAQ</span>
              </a>

              <div className="my-1 border-t border-[#1D3028]" />

              <button
                onClick={() => {
                  setShowMenu(false);
                  setShowSecurityReportModal(true);
                }}
                className="w-full text-left px-4 py-2.5 hover:bg-red-500/10 text-red-400 flex items-center space-x-2"
              >
                <ShieldAlert size={14} />
                <span>Report security concern</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. UNDER DEVELOPMENT NOTIFICATION BANNER (Contextual)                     */}
      {/* ========================================================================= */}
      {(ticket?.safe_context?.feature_status === "under_development" ||
        ticket?.safe_context?.source_page?.includes("validator") ||
        ticket?.safe_context?.source_page?.includes("developer") ||
        sourcePage?.includes("validator") ||
        sourcePage?.includes("developer")) && (
        <div className="bg-amber-500/10 border-b border-amber-500/30 px-4 py-2 text-xs flex items-center justify-between text-amber-200">
          <div className="flex items-center space-x-2">
            <span className="text-sm">🟡</span>
            <span className="font-display">
              This MONETA CHAIN feature is currently under development. You can contact Support if you have questions.
            </span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. SUPPORT SECURITY NOTICE (Dismissible)                                  */}
      {/* ========================================================================= */}
      {!isSecurityNoticeDismissed && (
        <div className="bg-[#0D1914] border-b border-[#1D3028] px-4 py-2.5 flex items-center justify-between text-xs text-[#B8C4BE]">
          <div className="flex items-center space-x-2 pr-2">
            <Shield size={14} className="text-[#19C37D] flex-shrink-0" />
            <span>
              <strong className="text-white font-mono uppercase tracking-wider mr-1">
                🔒 SECURE SUPPORT:
              </strong>
              MONETA Support will never ask for your password, private key, recovery phrase or authentication code.
            </span>
          </div>
          <button
            onClick={() => {
              setIsSecurityNoticeDismissed(true);
              localStorage.setItem("moneta_support_security_dismissed", "true");
            }}
            className="text-[11px] font-mono uppercase font-bold text-[#19C37D] hover:text-white px-2 py-1 rounded bg-[#19C37D]/10 hover:bg-[#19C37D]/20 flex-shrink-0 transition-colors cursor-pointer"
          >
            [ GOT IT ]
          </button>
        </div>
      )}

      {/* Offline Alert Banner */}
      {connectionStatus === "offline" && (
        <div className="bg-red-500/15 border-b border-red-500/30 px-4 py-2 text-xs text-red-300 flex items-center justify-between">
          <span className="font-mono">⚠ You are currently offline. Real-time messaging will resume once reconnected.</span>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. CHAT MESSAGES STREAM                                                   */}
      {/* ========================================================================= */}
      <div
        ref={chatScrollContainerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 bg-[#07110D]"
      >
        {isLoadingTicket ? (
          <div className="h-48 flex flex-col items-center justify-center space-y-3 text-[#B8C4BE]">
            <Loader2 size={24} className="animate-spin text-[#19C37D]" />
            <span className="text-xs font-mono">Connecting to MONETA Unified Support...</span>
          </div>
        ) : (
          <>
            {ticket?.messages &&
              deduplicateMessages(ticket.messages).map((msg, index) => {
                const isUser = msg.sender_type === "user" || msg.sender === "USER";
                const messageKey = msg.id ? `${msg.id}_${index}` : `msg_${index}`;

                return (
                  <div
                    key={messageKey}
                    className={`flex flex-col ${isUser ? "items-end" : "items-start"} space-y-1.5 group`}
                  >
                  {/* Sender label */}
                  <div className="flex items-center space-x-2 text-[11px] font-mono text-[#B8C4BE] px-1">
                    <span className={isUser ? "text-gray-300 font-semibold" : "text-[#19C37D] font-bold"}>
                      {isUser ? "USER" : "MONETA SUPPORT"}
                    </span>
                    <span>•</span>
                    <span>{msg.timestamp}</span>
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`max-w-[85%] md:max-w-[70%] p-3.5 md:p-4 rounded-2xl text-sm leading-relaxed ${
                      isUser
                        ? "bg-[#1D3028] text-white rounded-tr-xs border border-[#19C37D]/30 shadow-md"
                        : "bg-[#0D1914] text-[#B8C4BE] rounded-tl-xs border border-[#1D3028] shadow-md"
                    }`}
                  >
                    {/* Message Text */}
                    {msg.text && (
                      <p className={`whitespace-pre-wrap ${!isUser && "text-gray-200"}`}>
                        {msg.text}
                      </p>
                    )}

                    {/* Attachments inside bubble */}
                    {msg.attachments && msg.attachments.length > 0 && (
                      <div className={`space-y-2 ${msg.text ? "mt-3 pt-3 border-t border-white/10" : ""}`}>
                        {msg.attachments.map((att, attIndex) => {
                          const isImage = att.type.startsWith("image/");
                          const attKey = att.id ? `${att.id}_${attIndex}` : `att_${attIndex}`;

                          if (isImage) {
                            return (
                              <div
                                key={attKey}
                                onClick={() => setSelectedImage({ url: att.url, name: att.name })}
                                className="relative rounded-xl overflow-hidden cursor-pointer group/img border border-white/10 max-w-sm bg-black/40"
                              >
                                <img
                                  src={att.url}
                                  alt={att.name}
                                  className="max-h-60 w-full object-cover group-hover/img:scale-102 transition-transform duration-200"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity text-white text-xs font-mono space-x-1">
                                  <span>Click to view</span>
                                  <ExternalLink size={12} />
                                </div>
                              </div>
                            );
                          }

                          // PDF or document
                          return (
                            <div
                              key={attKey}
                              className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/10 text-xs font-mono space-x-3"
                            >
                              <div className="flex items-center space-x-2 truncate">
                                <FileText size={18} className="text-red-400 flex-shrink-0" />
                                <div className="truncate">
                                  <p className="text-white truncate font-medium">{att.name}</p>
                                  <p className="text-[10px] text-gray-400">{formatBytes(att.size)}</p>
                                </div>
                              </div>

                              <a
                                href={att.url}
                                target="_blank"
                                rel="noreferrer"
                                className="px-2.5 py-1 rounded bg-white/10 hover:bg-[#19C37D] hover:text-black transition-colors text-white font-bold"
                              >
                                OPEN
                              </a>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Status Indicator for User Messages */}
                  {isUser && (
                    <div className="flex items-center space-x-2 px-1">
                      {renderStatusIndicator(msg.status)}
                      {msg.status === "failed" && (
                        <button
                          onClick={() => handleRetryMessage(msg)}
                          className="text-[10px] text-[#19C37D] hover:underline font-mono uppercase font-bold cursor-pointer"
                        >
                          [ RETRY ]
                        </button>
                      )}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Support Agent Typing Indicator */}
            {isAgentTyping && (
              <div className="flex flex-col items-start space-y-1 animate-in fade-in duration-150">
                <div className="text-[11px] font-mono text-[#19C37D] px-1 font-bold">
                  MONETA SUPPORT is typing...
                </div>
                <div className="bg-[#0D1914] border border-[#1D3028] p-3 rounded-2xl rounded-tl-xs flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#19C37D] animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-2 h-2 rounded-full bg-[#19C37D] animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-2 h-2 rounded-full bg-[#19C37D] animate-bounce" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Floating "New Messages" Pill if scrolled up */}
      {showScrollBottomPill && (
        <button
          onClick={scrollToBottom}
          className="absolute bottom-28 right-6 z-20 px-3.5 py-1.5 rounded-full bg-[#19C37D] text-black font-heading font-black text-xs uppercase tracking-wider shadow-xl flex items-center space-x-1.5 hover:bg-[#0E8F61] transition-all animate-bounce cursor-pointer"
        >
          <ChevronDown size={14} />
          <span>
            {unreadCountSinceScroll > 0 ? `↓ ${unreadCountSinceScroll} new message` : "↓ Latest"}
          </span>
        </button>
      )}

      {/* ========================================================================= */}
      {/* 5. STAGED ATTACHMENT REVIEW BAR (Before Send)                             */}
      {/* ========================================================================= */}
      {stagedFile && (
        <div className="bg-[#0D1914] border-t border-[#1D3028] p-3 px-4 md:px-6 flex items-center justify-between animate-in slide-in-from-bottom-2 duration-150">
          <div className="flex items-center space-x-3 truncate mr-3">
            {stagedFile.previewUrl ? (
              <img
                src={stagedFile.previewUrl}
                alt="preview"
                className="w-12 h-12 object-cover rounded-lg border border-[#1D3028]"
              />
            ) : (
              <div className="w-12 h-12 rounded-lg bg-black/40 border border-[#1D3028] flex items-center justify-center text-red-400">
                <FileText size={22} />
              </div>
            )}

            <div className="truncate text-xs font-mono">
              <p className="text-white truncate font-medium">{stagedFile.file.name}</p>
              <div className="flex items-center space-x-2 text-[#B8C4BE] text-[11px] mt-0.5">
                <span>{formatBytes(stagedFile.file.size)}</span>
                <span>•</span>
                {stagedFile.isUploading ? (
                  <span className="text-amber-400">Uploading... {stagedFile.progress}%</span>
                ) : stagedFile.error ? (
                  <span className="text-red-400">Upload failed: {stagedFile.error}</span>
                ) : (
                  <span className="text-[#19C37D] font-bold">Uploaded ✓</span>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCancelAttachment}
              className="text-xs font-mono text-gray-400 hover:text-white px-2.5 py-1.5 rounded-lg border border-[#1D3028] hover:bg-white/5 transition-colors cursor-pointer"
            >
              [ CANCEL ]
            </button>
            <button
              onClick={handleSendMessage}
              disabled={stagedFile.isUploading}
              className="text-xs font-mono uppercase font-black bg-[#19C37D] text-black px-3 py-1.5 rounded-lg hover:bg-[#0E8F61] transition-colors disabled:opacity-50 cursor-pointer"
            >
              [ SEND ]
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 6. CHAT COMPOSER                                                          */}
      {/* ========================================================================= */}
      <div className="bg-[#0D1914] border-t border-[#1D3028] p-3 md:p-4 z-20">
        <div className="relative flex flex-col space-y-2">
          <textarea
            ref={textareaRef}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Write a message..."
            rows={2}
            maxLength={2000}
            className="w-full bg-[#07110D] border border-[#1D3028] rounded-xl p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#19C37D] transition-colors font-sans resize-none leading-relaxed"
          />

          {/* Action Bar (Attachments + Character Counter + Send) */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                title="Attach Document or Image (PNG, JPG, WEBP, PDF)"
                className="flex items-center space-x-1 text-xs font-mono text-[#B8C4BE] hover:text-white px-2.5 py-1.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              >
                <Paperclip size={16} className="text-[#19C37D]" />
                <span className="hidden sm:inline">Attach</span>
              </button>

              <button
                type="button"
                onClick={() => imageInputRef.current?.click()}
                title="Attach Image (PNG, JPG, WEBP)"
                className="flex items-center space-x-1 text-xs font-mono text-[#B8C4BE] hover:text-white px-2.5 py-1.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              >
                <ImageIcon size={16} className="text-electric-blue" />
                <span className="hidden sm:inline">Image</span>
              </button>

              {inputText.length > 50 && (
                <span className="text-[10px] font-mono text-gray-500">
                  {inputText.length}/2000
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={handleSendMessage}
              disabled={(!inputText.trim() && !stagedFile?.attachment) || isSending}
              className="bg-[#19C37D] hover:bg-[#0E8F61] text-black font-heading font-black text-xs uppercase tracking-wider px-5 py-2 rounded-xl flex items-center space-x-2 transition-all shadow-md disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <span>SEND</span>
              <Send size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 7. MODALS (Image Viewer, Ticket Details, Resolve Confirm, Security)        */}
      {/* ========================================================================= */}

      {/* Image Viewer Modal */}
      {selectedImage && (
        <ImageViewerModal
          imageUrl={selectedImage.url}
          imageName={selectedImage.name}
          isOpen={true}
          onClose={() => setSelectedImage(null)}
        />
      )}

      {/* Ticket Details Dialog */}
      {showTicketDetails && ticket && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0D1914] border border-[#1D3028] rounded-2xl max-w-md w-full p-6 space-y-4 font-sans text-sm animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-[#1D3028] pb-3">
              <h4 className="font-heading font-black text-base text-white uppercase tracking-wider">
                Support Ticket Details
              </h4>
              <button
                onClick={() => setShowTicketDetails(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-3 font-mono text-xs text-[#B8C4BE]">
              <div>
                <span className="text-gray-500">Ticket ID:</span>
                <p className="text-white font-bold text-sm">{ticket.id}</p>
              </div>
              <div>
                <span className="text-gray-500">Status:</span>
                <p className="text-[#19C37D] uppercase font-bold">{ticket.status}</p>
              </div>
              <div>
                <span className="text-gray-500">User ID:</span>
                <p className="text-white">{ticket.user_id}</p>
              </div>
              <div>
                <span className="text-gray-500">Category:</span>
                <p className="text-white">{ticket.category}</p>
              </div>
              <div>
                <span className="text-gray-500">Subject:</span>
                <p className="text-white">{ticket.subject}</p>
              </div>
              <div>
                <span className="text-gray-500">Source Page:</span>
                <p className="text-white">{ticket.safe_context?.source_page || "/"}</p>
              </div>
              <div>
                <span className="text-gray-500">Created:</span>
                <p className="text-white">{new Date(ticket.created_at).toLocaleString()}</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setShowTicketDetails(false)}
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase font-bold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Resolve Confirmation Modal */}
      {showResolveConfirm && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0D1914] border border-[#1D3028] rounded-2xl max-w-sm w-full p-6 space-y-4 font-sans text-sm animate-in zoom-in-95 duration-150">
            <h4 className="font-heading font-black text-base text-white uppercase tracking-wider">
              Mark Ticket Resolved?
            </h4>
            <p className="text-xs text-[#B8C4BE] leading-relaxed">
              Are you sure you want to mark this support conversation as resolved? You will still be able to view all past messages.
            </p>
            <div className="flex space-x-3 pt-2">
              <button
                onClick={() => setShowResolveConfirm(false)}
                className="flex-1 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold"
              >
                Keep Open
              </button>
              <button
                onClick={handleConfirmResolve}
                className="flex-1 py-2 rounded-xl bg-[#19C37D] hover:bg-[#0E8F61] text-black font-mono text-xs font-black uppercase"
              >
                Confirm Resolved
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Security Concern Report Modal */}
      {showSecurityReportModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0D1914] border border-red-500/40 rounded-2xl max-w-md w-full p-6 space-y-4 font-sans text-sm animate-in zoom-in-95 duration-150">
            <div className="flex items-center space-x-2 text-red-400">
              <ShieldAlert size={20} />
              <h4 className="font-heading font-black text-base text-white uppercase tracking-wider">
                Security Advisory & Report
              </h4>
            </div>
            <p className="text-xs text-[#B8C4BE] leading-relaxed">
              If someone claiming to be MONETA Support asked for your seed phrase, password, private key, or authentication code, this is an unauthorized phishing attempt.
            </p>
            <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-xs text-red-200 font-mono">
              Official MONETA Support will NEVER ask for secrets.
            </div>
            <button
              onClick={() => {
                setShowSecurityReportModal(false);
                setInputText("SECURITY REPORT: I would like to report a potential security/phishing attempt.");
              }}
              className="w-full py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white font-mono text-xs font-bold uppercase"
            >
              Report in Live Chat
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
