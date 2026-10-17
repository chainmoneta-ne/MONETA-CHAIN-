/**
 * MONETA Unified Support System - Real-time API Client
 * Application: moneta_chain
 */

export interface SupportAttachment {
  id: string;
  name: string;
  type: string;
  size: number;
  url: string;
  thumbnail_url?: string;
}

export interface SupportMessage {
  id: string;
  ticket_id: string;
  sender: string; // "USER" | "MONETA SUPPORT" | "SYSTEM"
  sender_type: "user" | "agent" | "system";
  text: string;
  timestamp: string; // e.g. "8:41 PM"
  created_at: string;
  status: "sending" | "sent" | "delivered" | "read" | "failed";
  attachments?: SupportAttachment[];
}

export interface SupportSafeContext {
  source_page?: string;
  feature_id?: string;
  feature_status?: string;
  chain_id?: string;
  client_node_type?: string;
  latest_block_height?: string;
  [key: string]: any;
}

export interface SupportTicket {
  id: string; // e.g. "MC-2026-000482"
  application_id: "moneta_chain";
  category: string;
  subject: string;
  description?: string;
  status: "open" | "in_progress" | "resolved";
  user_id: string;
  user_name: string;
  user_email?: string;
  safe_context?: SupportSafeContext;
  created_at: string;
  updated_at: string;
  messages: SupportMessage[];
}

export type ConnectionStatus = "connected" | "reconnecting" | "offline";

export interface SupportEvent {
  event: "message" | "typing" | "status_update" | "ticket_updated" | "ping";
  data: any;
}

const DEFAULT_USER_ID = "MN-USER-001";
const DEFAULT_USER_NAME = "Moneta Chain User";

// Get persistent user identification without sensitive data
export function getMonetaUserId(): string {
  if (typeof window !== "undefined") {
    const globalId = (window as any).__MONETA_USER_ID__;
    if (globalId) return globalId;
    const stored = localStorage.getItem("moneta_public_user_id");
    if (stored) return stored;
    const randomSuffix = Math.floor(100 + Math.random() * 900);
    const newId = `MN-USER-${randomSuffix}`;
    localStorage.setItem("moneta_public_user_id", newId);
    return newId;
  }
  return DEFAULT_USER_ID;
}

export function getMonetaUserName(): string {
  if (typeof window !== "undefined") {
    const globalName = (window as any).__MONETA_USER_NAME__;
    if (globalName) return globalName;
    const stored = localStorage.getItem("moneta_public_user_name");
    if (stored) return stored;
  }
  return DEFAULT_USER_NAME;
}

// Fetch tickets for moneta_chain
export async function fetchTickets(userId?: string): Promise<SupportTicket[]> {
  try {
    const uid = userId || getMonetaUserId();
    const res = await fetch(`/api/v1/tickets?application_id=moneta_chain&user_id=${encodeURIComponent(uid)}`, {
      headers: {
        "Accept": "application/json",
        "X-Moneta-App-Id": "moneta_chain"
      }
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch tickets: ${res.status}`);
    }
    const data = await res.json();
    return data.tickets || [];
  } catch (error) {
    console.error("[SupportAPI] fetchTickets error:", error);
    return [];
  }
}

// Create a new support ticket
export async function createTicket(params: {
  category?: string;
  subject?: string;
  description?: string;
  safe_context?: SupportSafeContext;
  user_id?: string;
  user_name?: string;
  user_email?: string;
}): Promise<SupportTicket> {
  const payload = {
    application_id: "moneta_chain",
    category: params.category || "General Support",
    subject: params.subject || "Live Support Inquiry",
    description: params.description || "Started live support conversation",
    user_id: params.user_id || getMonetaUserId(),
    user_name: params.user_name || getMonetaUserName(),
    user_email: params.user_email || "user@moneta-chain.com",
    safe_context: {
      source_page: window.location.pathname,
      ...params.safe_context
    }
  };

  const res = await fetch("/api/v1/tickets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Moneta-App-Id": "moneta_chain"
    },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    throw new Error(`Failed to create ticket: ${res.status}`);
  }

  const data = await res.json();
  return data.ticket;
}

// Send a chat message
export async function sendChatMessage(ticketId: string, message: {
  text: string;
  attachments?: SupportAttachment[];
  sender_name?: string;
}): Promise<SupportMessage> {
  const payload = {
    sender: "USER",
    sender_name: message.sender_name || getMonetaUserName(),
    text: message.text,
    attachments: message.attachments || []
  };

  const res = await fetch(`/api/v1/tickets/${encodeURIComponent(ticketId)}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Moneta-App-Id": "moneta_chain"
    },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    throw new Error(`Failed to send message: ${res.status}`);
  }

  const data = await res.json();
  return data.message;
}

// Upload attachment with progress tracking and validation
export function uploadSupportAttachment(
  ticketId: string,
  file: File,
  onProgress?: (percent: number) => void
): { promise: Promise<SupportAttachment>; abort: () => void } {
  // Client-side pre-validation
  const allowedMime = ["image/png", "image/jpeg", "image/webp", "application/pdf"];
  const maxBytes = 10 * 1024 * 1024; // 10MB

  if (!allowedMime.includes(file.type)) {
    return {
      promise: Promise.reject(new Error("Unsupported file format. Please attach PNG, JPG, WEBP, or PDF.")),
      abort: () => {}
    };
  }

  if (file.size > maxBytes) {
    return {
      promise: Promise.reject(new Error("File size exceeds 10 MB limit.")),
      abort: () => {}
    };
  }

  const xhr = new XMLHttpRequest();

  const promise = new Promise<SupportAttachment>((resolve, reject) => {
    xhr.upload.addEventListener("progress", (event) => {
      if (event.lengthComputable && onProgress) {
        const percent = Math.round((event.loaded / event.total) * 100);
        onProgress(percent);
      }
    });

    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const res = JSON.parse(xhr.responseText);
          if (onProgress) onProgress(100);
          resolve(res.attachment);
        } catch (err) {
          reject(new Error("Invalid response from server"));
        }
      } else {
        try {
          const errRes = JSON.parse(xhr.responseText);
          reject(new Error(errRes.error || `Upload failed with status ${xhr.status}`));
        } catch {
          reject(new Error(`Upload failed with status ${xhr.status}`));
        }
      }
    });

    xhr.addEventListener("error", () => reject(new Error("Network upload error")));
    xhr.addEventListener("abort", () => reject(new Error("Upload cancelled")));

    // Read as Base64/DataURL to submit via JSON
    const reader = new FileReader();
    reader.onload = () => {
      xhr.open("POST", `/api/v1/tickets/${encodeURIComponent(ticketId)}/attachments`);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("X-Moneta-App-Id", "moneta_chain");
      xhr.send(JSON.stringify({
        filename: file.name,
        file_type: file.type,
        file_size: file.size,
        data_base64: reader.result
      }));
    };
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });

  return {
    promise,
    abort: () => xhr.abort()
  };
}

// Mark ticket as resolved
export async function markTicketResolved(ticketId: string): Promise<SupportTicket> {
  const res = await fetch(`/api/v1/tickets/${encodeURIComponent(ticketId)}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "X-Moneta-App-Id": "moneta_chain"
    },
    body: JSON.stringify({ status: "resolved" })
  });

  if (!res.ok) {
    throw new Error(`Failed to update ticket: ${res.status}`);
  }

  const data = await res.json();
  return data.ticket;
}

// Subscribe to SSE events stream
export function subscribeToSupportStream(
  onEvent: (event: SupportEvent) => void,
  onConnectionStatusChange?: (status: ConnectionStatus) => void
): () => void {
  let eventSource: EventSource | null = null;
  let isClosed = false;
  let reconnectTimer: any = null;

  function connect() {
    if (isClosed) return;

    if (!navigator.onLine) {
      if (onConnectionStatusChange) onConnectionStatusChange("offline");
      return;
    }

    try {
      eventSource = new EventSource("/api/v1/events/stream");

      eventSource.onopen = () => {
        if (onConnectionStatusChange) onConnectionStatusChange("connected");
      };

      eventSource.onerror = () => {
        if (eventSource) {
          eventSource.close();
          eventSource = null;
        }
        if (!isClosed) {
          if (!navigator.onLine) {
            if (onConnectionStatusChange) onConnectionStatusChange("offline");
          } else {
            if (onConnectionStatusChange) onConnectionStatusChange("reconnecting");
          }
          // Reconnect with backoff
          clearTimeout(reconnectTimer);
          reconnectTimer = setTimeout(connect, 3000);
        }
      };

      // Custom event listeners
      const eventTypes = ["message", "typing", "status_update", "ticket_updated", "ping"];
      eventTypes.forEach((eventType) => {
        eventSource!.addEventListener(eventType, (e: MessageEvent) => {
          try {
            const data = JSON.parse(e.data);
            onEvent({ event: eventType as any, data });
          } catch (err) {
            console.error("[SSE] Failed to parse event data", err);
          }
        });
      });

      // Default message listener
      eventSource.onmessage = (e: MessageEvent) => {
        try {
          const data = JSON.parse(e.data);
          onEvent({ event: "message", data });
        } catch {
          // ignore
        }
      };

    } catch (err) {
      console.error("[SSE] Connection error:", err);
      if (onConnectionStatusChange) onConnectionStatusChange("reconnecting");
      clearTimeout(reconnectTimer);
      reconnectTimer = setTimeout(connect, 3000);
    }
  }

  connect();

  const handleOnline = () => {
    if (onConnectionStatusChange) onConnectionStatusChange("reconnecting");
    connect();
  };

  const handleOffline = () => {
    if (onConnectionStatusChange) onConnectionStatusChange("offline");
    if (eventSource) {
      eventSource.close();
      eventSource = null;
    }
  };

  window.addEventListener("online", handleOnline);
  window.addEventListener("offline", handleOffline);

  return () => {
    isClosed = true;
    clearTimeout(reconnectTimer);
    window.removeEventListener("online", handleOnline);
    window.removeEventListener("offline", handleOffline);
    if (eventSource) {
      eventSource.close();
      eventSource = null;
    }
  };
}
