import { Request, Response } from "express";

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
  sender: string;
  sender_type: "user" | "agent" | "system";
  text: string;
  timestamp: string;
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
  id: string;
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

// In-memory persistent ticket store initialized with reference ticket MC-2026-000482
let nextTicketNumber = 483;

function formatTime(date: Date): string {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 becomes 12
  const minutesStr = minutes < 10 ? "0" + minutes : minutes;
  return `${hours}:${minutesStr} ${ampm}`;
}

export const ticketsStore: Map<string, SupportTicket> = new Map([
  [
    "MC-2026-000482",
    {
      id: "MC-2026-000482",
      application_id: "moneta_chain",
      category: "Validator & Node Setup",
      subject: "RPC Node peer sync issue on block #8492104",
      description: "Validator peer count dropped, need bootnode verification.",
      status: "open",
      user_id: "MCH-VALIDATOR-01",
      user_name: "Validator Operator 01",
      user_email: "ops@moneta-chain.com",
      safe_context: {
        chain_id: "moneta-1",
        client_node_type: "validator",
        latest_block_height: "8492104",
        source_page: "/developers"
      },
      created_at: new Date(Date.now() - 3600000).toISOString(),
      updated_at: new Date(Date.now() - 1800000).toISOString(),
      messages: [
        {
          id: "msg_init_1",
          ticket_id: "MC-2026-000482",
          sender: "MONETA SUPPORT",
          sender_type: "agent",
          text: "Hello! How can we help you today?",
          timestamp: "8:41 PM",
          created_at: new Date(Date.now() - 3600000).toISOString(),
          status: "read",
          attachments: []
        },
        {
          id: "msg_init_2",
          ticket_id: "MC-2026-000482",
          sender: "USER",
          sender_type: "user",
          text: "I have a problem with my account.",
          timestamp: "8:42 PM",
          created_at: new Date(Date.now() - 3500000).toISOString(),
          status: "read",
          attachments: []
        },
        {
          id: "msg_init_3",
          ticket_id: "MC-2026-000482",
          sender: "MONETA SUPPORT",
          sender_type: "agent",
          text: "Thanks. Please tell us what is happening.",
          timestamp: "8:42 PM",
          created_at: new Date(Date.now() - 3400000).toISOString(),
          status: "read",
          attachments: []
        }
      ]
    }
  ]
]);

// Real-time SSE subscribers
const sseClients: Set<Response> = new Set();

export function broadcastEvent(event: string, data: any) {
  const payload = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
  for (const client of sseClients) {
    try {
      client.write(payload);
    } catch {
      sseClients.delete(client);
    }
  }
}

// Heartbeat every 15 seconds to keep SSE connection active
setInterval(() => {
  for (const client of sseClients) {
    try {
      client.write(": ping\n\n");
    } catch {
      sseClients.delete(client);
    }
  }
}, 15000);

// Generate authoritative MONETA support response
function generateAgentResponse(userText: string, context?: SupportSafeContext): string {
  const lower = userText.toLowerCase();

  // Safety checks - never ask for or accept secrets
  if (lower.includes("private key") || lower.includes("seed phrase") || lower.includes("password") || lower.includes("recovery phrase") || lower.includes("mnemonic")) {
    return "SECURITY ADVISORY: MONETA Support will NEVER ask for or store your private key, seed phrase, password, or recovery phrase. Never share these credentials with anyone. If you suspect any unauthorized access, please verify you are on our official domains.";
  }

  if (lower.includes("validator") || lower.includes("node") || lower.includes("sync") || lower.includes("peer") || lower.includes("bootnode")) {
    return "Thank you for reaching out regarding MONETA validator operations. Node infrastructure and validator staking are currently in private consortium testnet. The public devnet bootnodes will be announced in the official Developer Documentation. Would you like us to register your node operator profile for the upcoming validator cohort?";
  }

  if (lower.includes("presale") || lower.includes("token") || lower.includes("buy") || lower.includes("allocation")) {
    return "The MONETA Token Presale is currently active. All transactions are securely processed through the official presale smart contracts. For purchase inquiries or tier confirmations, you can also access the dedicated Presale Support portal directly from our official portal.";
  }

  if (lower.includes("mining") || lower.includes("hash") || lower.includes("rig")) {
    return "MONETA CHAIN utilizes hybrid consensus coordination. Mining parameters and mining client downloads will be released in Phase 2 alongside the public testnet. You can review the mining timeline in our Roadmap.";
  }

  if (lower.includes("wallet") || lower.includes("app") || lower.includes("download") || lower.includes("waitlist")) {
    return "The MONETA Secure Web3 Wallet is currently in early-access waitlist. Users registered on the waitlist will receive priority access upon initial app release. You can join the waitlist directly from the Wallet page.";
  }

  if (lower.includes("smart contract") || lower.includes("mqvm") || lower.includes("solidity") || lower.includes("deploy")) {
    return "The MONETA Quantum Virtual Machine (MQVM) is currently under active engineering. Developer SDKs and local CLI testnets will be distributed to approved developers in the next development cycle.";
  }

  if (context?.feature_status === "under_development") {
    return `This MONETA CHAIN component (${context.feature_id || "feature"}) is currently under active engineering. Our team is actively tracking development updates. Let us know if you need technical documentation or have specific integration requirements.`;
  }

  return "Thank you for your message. A MONETA CHAIN support specialist has logged this in our Unified Support System. If you have screenshots or logs, please feel free to attach them using the 📎 button.";
}

// Routes handlers
export function handleGetTickets(req: Request, res: Response) {
  const appId = (req.query.application_id as string) || req.headers["x-moneta-app-id"];
  const userId = req.query.user_id as string;

  const tickets = Array.from(ticketsStore.values())
    .filter((t) => {
      if (appId && t.application_id !== appId) return false;
      if (userId && t.user_id !== userId && t.user_id !== "MCH-VALIDATOR-01" && t.user_id !== "MN-USER-001") {
        return false;
      }
      return true;
    })
    .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());

  res.json({ tickets });
}

export function handleCreateTicket(req: Request, res: Response) {
  const {
    application_id = "moneta_chain",
    category = "General Support",
    subject = "Live Support Inquiry",
    description = "",
    user_id = "MN-USER-001",
    user_name = "Moneta Chain User",
    user_email = "user@moneta-chain.com",
    safe_context = {}
  } = req.body;

  // Generate authoritative Ticket ID: MC-2026-XXXXXX
  const paddedId = String(nextTicketNumber++).padStart(6, "0");
  const ticketId = `MC-2026-${paddedId}`;
  const now = new Date();

  // Strip any unsafe fields from safe_context
  const sanitizedContext: SupportSafeContext = {};
  for (const key of Object.keys(safe_context || {})) {
    const k = key.toLowerCase();
    if (!k.includes("key") && !k.includes("pass") && !k.includes("secret") && !k.includes("token") && !k.includes("cookie")) {
      sanitizedContext[key] = safe_context[key];
    }
  }

  const initialMessage: SupportMessage = {
    id: `msg_${Date.now()}_init`,
    ticket_id: ticketId,
    sender: "MONETA SUPPORT",
    sender_type: "agent",
    text: "Hello! How can we help you today?",
    timestamp: formatTime(now),
    created_at: now.toISOString(),
    status: "read",
    attachments: []
  };

  const newTicket: SupportTicket = {
    id: ticketId,
    application_id: "moneta_chain",
    category,
    subject,
    description,
    status: "open",
    user_id,
    user_name,
    user_email,
    safe_context: sanitizedContext,
    created_at: now.toISOString(),
    updated_at: now.toISOString(),
    messages: [initialMessage]
  };

  ticketsStore.set(ticketId, newTicket);

  // Broadcast ticket created
  broadcastEvent("ticket_updated", { ticket: newTicket });

  res.status(201).json({ success: true, ticket: newTicket });
}

export function handleGetTicketById(req: Request, res: Response) {
  const { id } = req.params;
  const ticket = ticketsStore.get(id);
  if (!ticket) {
    return res.status(404).json({ error: "Ticket not found." });
  }
  res.json({ ticket });
}

export function handlePostMessage(req: Request, res: Response) {
  const { id } = req.params;
  const { text, attachments = [], sender = "USER", sender_name = "User" } = req.body;

  const ticket = ticketsStore.get(id);
  if (!ticket) {
    return res.status(404).json({ error: "Ticket not found." });
  }

  if (!text && (!attachments || attachments.length === 0)) {
    return res.status(400).json({ error: "Message must contain text or attachments." });
  }

  const now = new Date();
  const messageId = `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

  const userMessage: SupportMessage = {
    id: messageId,
    ticket_id: id,
    sender: "USER",
    sender_type: "user",
    text: text || "",
    timestamp: formatTime(now),
    created_at: now.toISOString(),
    status: "sent",
    attachments: attachments || []
  };

  ticket.messages.push(userMessage);
  ticket.updated_at = now.toISOString();

  // Return immediately to user
  res.status(201).json({ success: true, message: userMessage });

  // Broadcast user message to all SSE clients
  broadcastEvent("message", { ticket_id: id, message: userMessage });

  // 1. Deliver receipt after 600ms
  setTimeout(() => {
    userMessage.status = "delivered";
    broadcastEvent("status_update", {
      ticket_id: id,
      message_id: messageId,
      status: "delivered"
    });
  }, 600);

  // 2. Read receipt after 1300ms
  setTimeout(() => {
    userMessage.status = "read";
    broadcastEvent("status_update", {
      ticket_id: id,
      message_id: messageId,
      status: "read"
    });
  }, 1300);

  // 3. Support agent starts typing at 1700ms
  setTimeout(() => {
    broadcastEvent("typing", {
      ticket_id: id,
      sender: "MONETA SUPPORT",
      is_typing: true
    });
  }, 1700);

  // 4. Support agent reply arrives at 3600ms
  setTimeout(() => {
    broadcastEvent("typing", {
      ticket_id: id,
      sender: "MONETA SUPPORT",
      is_typing: false
    });

    const replyTime = new Date();
    const agentReplyText = generateAgentResponse(text, ticket.safe_context);

    const agentMessage: SupportMessage = {
      id: `msg_${Date.now()}_agent`,
      ticket_id: id,
      sender: "MONETA SUPPORT",
      sender_type: "agent",
      text: agentReplyText,
      timestamp: formatTime(replyTime),
      created_at: replyTime.toISOString(),
      status: "read",
      attachments: []
    };

    ticket.messages.push(agentMessage);
    ticket.updated_at = replyTime.toISOString();

    broadcastEvent("message", {
      ticket_id: id,
      message: agentMessage
    });
  }, 3600);
}

export function handlePostAttachment(req: Request, res: Response) {
  const { id } = req.params;
  const { filename, file_type, file_size, data_base64 } = req.body;

  const ticket = ticketsStore.get(id);
  if (!ticket) {
    return res.status(404).json({ error: "Ticket not found." });
  }

  // Authoritative server-side validation
  const allowedMime = ["image/png", "image/jpeg", "image/webp", "application/pdf"];
  if (!allowedMime.includes(file_type)) {
    return res.status(400).json({ error: "Invalid file format. Only PNG, JPG, WEBP, and PDF files are allowed." });
  }

  // Authoritative extension check against executable scripts
  const dangerousExtensions = [".exe", ".bat", ".sh", ".cmd", ".php", ".js", ".py", ".html", ".htm", ".vbs", ".ps1", ".jar"];
  const lowerFilename = (filename || "").toLowerCase();
  for (const ext of dangerousExtensions) {
    if (lowerFilename.endsWith(ext)) {
      return res.status(400).json({ error: "Security restriction: Executable files and scripts are forbidden." });
    }
  }

  // File size limit: 10 MB
  if (file_size > 10 * 1024 * 1024) {
    return res.status(400).json({ error: "Attachment exceeds the maximum allowed size of 10 MB." });
  }

  const attachmentId = `att_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
  const attachment: SupportAttachment = {
    id: attachmentId,
    name: filename || "attachment",
    type: file_type,
    size: file_size,
    url: data_base64 || ""
  };

  res.status(201).json({ success: true, attachment });
}

export function handlePatchTicket(req: Request, res: Response) {
  const { id } = req.params;
  const { status } = req.body;

  const ticket = ticketsStore.get(id);
  if (!ticket) {
    return res.status(404).json({ error: "Ticket not found." });
  }

  if (status && ["open", "in_progress", "resolved"].includes(status)) {
    ticket.status = status;
    ticket.updated_at = new Date().toISOString();
    broadcastEvent("ticket_updated", { ticket });
  }

  res.json({ success: true, ticket });
}

export function handleEventsStream(req: Request, res: Response) {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache, no-transform");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.flushHeaders();

  res.write(`event: ping\ndata: ${JSON.stringify({ type: "connected", time: new Date().toISOString() })}\n\n`);

  sseClients.add(res);

  req.on("close", () => {
    sseClients.delete(res);
  });
}

// Client embed SDK script content
export function getSdkScript(): string {
  return `/**
 * MONETA UNIFIED SUPPORT — REAL-TIME EMBED (MONETA CHAIN ONLY)
 * SDK v2.6.0
 */
(function(window) {
  if (window.MonetaChainSupport) return;

  var currentPosition = 'right';
  var isOpen = false;

  window.MonetaChainSupport = {
    open: function(position) {
      currentPosition = position || 'right';
      isOpen = true;
      window.dispatchEvent(new CustomEvent('moneta-support:open', { detail: { position: currentPosition } }));
    },
    close: function() {
      isOpen = false;
      window.dispatchEvent(new CustomEvent('moneta-support:close'));
    },
    toggle: function(position) {
      if (isOpen) {
        this.close();
      } else {
        this.open(position);
      }
    },
    isOpen: function() {
      return isOpen;
    }
  };

  // Inspect script tag attributes
  var scripts = document.getElementsByTagName('script');
  for (var i = 0; i < scripts.length; i++) {
    var s = scripts[i];
    if (s.src && s.src.indexOf('moneta-chain.js') !== -1) {
      var userId = s.getAttribute('data-user-id');
      var userName = s.getAttribute('data-user-name');
      if (userId) window.__MONETA_USER_ID__ = userId;
      if (userName) window.__MONETA_USER_NAME__ = userName;
      break;
    }
  }
})(window);`;
}
