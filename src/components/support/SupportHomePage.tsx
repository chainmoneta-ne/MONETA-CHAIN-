import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { SupportChatWindow } from "./SupportChatWindow";
import { 
  fetchTickets, 
  SupportTicket, 
  createTicket, 
  getMonetaUserId 
} from "../../services/supportApi";
import { 
  monetaChainFeatures, 
  FeatureConfig, 
  GLOBAL_DEVELOPMENT_NOTICE 
} from "../../config/featureStatus";
import { 
  MessageSquare, 
  Plus, 
  FileText, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  HelpCircle, 
  ExternalLink 
} from "lucide-react";

export function SupportHomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const featureParam = searchParams.get("feature");
  const ticketParam = searchParams.get("ticket");

  const [activeTicketId, setActiveTicketId] = useState<string | undefined>(ticketParam || undefined);
  const [tickets, setTickets] = useState<SupportTicket[]>([]);
  const [showHistoryDrawer, setShowHistoryDrawer] = useState(false);
  const [activeTab, setActiveTab] = useState<"chat" | "tickets" | "faq">("chat");

  const selectedFeature: FeatureConfig | undefined = featureParam
    ? monetaChainFeatures[featureParam]
    : undefined;

  // Load tickets on mount
  useEffect(() => {
    fetchTickets().then((loaded) => {
      setTickets(loaded);
      if (!activeTicketId && loaded.length > 0) {
        setActiveTicketId(loaded[0].id);
      }
    });
  }, [activeTicketId]);

  // Sync ticket param
  useEffect(() => {
    if (ticketParam) {
      setActiveTicketId(ticketParam);
    }
  }, [ticketParam]);

  const handleSelectTicket = (id: string) => {
    setActiveTicketId(id);
    setSearchParams({ ticket: id });
    setActiveTab("chat");
  };

  const handleStartNewTicket = async () => {
    try {
      const newTicket = await createTicket({
        category: selectedFeature ? `Feature: ${selectedFeature.name}` : "General Support",
        subject: selectedFeature ? `Inquiry regarding ${selectedFeature.name}` : "New Support Request",
        safe_context: {
          source_page: window.location.pathname,
          feature_id: selectedFeature?.id,
          feature_status: selectedFeature?.status
        }
      });
      setTickets((prev) => {
        if (prev.some((t) => t.id === newTicket.id)) {
          return prev.map((t) => (t.id === newTicket.id ? newTicket : t));
        }
        return [newTicket, ...prev];
      });
      setActiveTicketId(newTicket.id);
      setSearchParams({ ticket: newTicket.id });
      setActiveTab("chat");
    } catch (err) {
      console.error("Failed to create ticket:", err);
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-[100svh] bg-[#07110D] text-white">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        
        {/* Support Navigation Header Tabs */}
        <div className="flex flex-wrap items-center justify-between mb-4 gap-3">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveTab("chat")}
              className={`px-4 py-2 rounded-xl text-xs font-heading font-black uppercase tracking-wider transition-colors flex items-center space-x-2 cursor-pointer ${
                activeTab === "chat"
                  ? "bg-[#19C37D] text-black shadow-lg"
                  : "bg-[#0D1914] text-[#B8C4BE] border border-[#1D3028] hover:text-white"
              }`}
            >
              <MessageSquare size={14} />
              <span>Live Support Chat</span>
            </button>

            <button
              onClick={() => setActiveTab("tickets")}
              className={`px-4 py-2 rounded-xl text-xs font-heading font-black uppercase tracking-wider transition-colors flex items-center space-x-2 cursor-pointer ${
                activeTab === "tickets"
                  ? "bg-[#19C37D] text-black shadow-lg"
                  : "bg-[#0D1914] text-[#B8C4BE] border border-[#1D3028] hover:text-white"
              }`}
            >
              <FileText size={14} />
              <span>My Tickets ({tickets.length})</span>
            </button>
          </div>

          <button
            onClick={handleStartNewTicket}
            className="px-3.5 py-2 rounded-xl bg-[#0D1914] border border-[#19C37D]/50 hover:bg-[#19C37D]/20 text-[#19C37D] text-xs font-mono font-bold uppercase tracking-wider flex items-center space-x-1.5 transition-colors cursor-pointer"
          >
            <Plus size={14} />
            <span>New Ticket</span>
          </button>
        </div>

        {/* View 1: Primary Real-Time Support Chat */}
        {activeTab === "chat" && (
          <div className="w-full">
            <SupportChatWindow
              key={activeTicketId || "default"}
              initialTicketId={activeTicketId}
              sourcePage={window.location.pathname}
              safeContext={{
                source_page: "/support",
                feature_id: selectedFeature?.id,
                feature_status: selectedFeature?.status
              }}
              onBack={() => navigate("/")}
              isModal={false}
            />
          </div>
        )}

        {/* View 2: User's Tickets History List */}
        {activeTab === "tickets" && (
          <div className="bg-[#0D1914] border border-[#1D3028] rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-[#1D3028] pb-4">
              <div>
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-wider">
                  My Support Conversations
                </h3>
                <p className="text-xs text-[#B8C4BE] font-mono mt-1">
                  User ID: {getMonetaUserId()} • Real-Time Ticket Store
                </p>
              </div>

              <button
                onClick={handleStartNewTicket}
                className="px-4 py-2 rounded-xl bg-[#19C37D] text-black font-heading font-black text-xs uppercase tracking-wider flex items-center space-x-1.5"
              >
                <Plus size={14} />
                <span>Start A Support Request</span>
              </button>
            </div>

            {tickets.length === 0 ? (
              <div className="text-center py-12 text-[#B8C4BE] space-y-3">
                <FileText size={32} className="mx-auto text-gray-500" />
                <p className="font-heading font-bold text-base text-white">No Support Tickets Yet</p>
                <p className="text-xs max-w-sm mx-auto">
                  Click the button below to connect immediately with MONETA Support specialists.
                </p>
                <button
                  onClick={handleStartNewTicket}
                  className="mt-2 px-5 py-2.5 rounded-xl bg-[#19C37D] text-black font-heading font-black text-xs uppercase tracking-wider"
                >
                  START A SUPPORT REQUEST
                </button>
              </div>
            ) : (
              <div className="divide-y divide-[#1D3028]">
                {tickets.map((t, tIdx) => (
                  <div
                    key={t.id ? `${t.id}_${tIdx}` : `ticket_${tIdx}`}
                    onClick={() => handleSelectTicket(t.id)}
                    className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-3 hover:bg-white/5 p-3 rounded-xl cursor-pointer transition-colors"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center space-x-3">
                        <span className="font-mono font-bold text-sm text-white">
                          {t.id}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded uppercase font-bold ${
                            t.status === "resolved"
                              ? "bg-gray-700 text-gray-300"
                              : "bg-[#19C37D]/20 text-[#19C37D]"
                          }`}
                        >
                          {t.status}
                        </span>
                        <span className="text-xs text-gray-400 font-mono">
                          {t.category}
                        </span>
                      </div>
                      <p className="text-sm text-gray-200 font-medium">
                        {t.subject}
                      </p>
                      <p className="text-xs text-[#B8C4BE] font-sans truncate max-w-md">
                        {t.messages[t.messages.length - 1]?.text || "No messages yet"}
                      </p>
                    </div>

                    <div className="flex items-center space-x-4 text-xs font-mono text-gray-400">
                      <span>{new Date(t.updated_at).toLocaleDateString()}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelectTicket(t.id);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#19C37D] hover:text-black text-white font-bold transition-colors"
                      >
                        OPEN CHAT →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
