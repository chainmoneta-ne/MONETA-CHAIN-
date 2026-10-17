import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import OpenAI from "openai";
import {
  handleGetTickets,
  handleCreateTicket,
  handleGetTicketById,
  handlePostMessage,
  handlePostAttachment,
  handlePatchTicket,
  handleEventsStream,
  getSdkScript
} from "./server/supportService";

const systemInstruction = `You are VERA AI, the intelligent layer of the MONETA CHAIN ecosystem — designed by ARAFAT M ROVENTHO.

DEFINITION & IDENTITY:
VERA AI is an advanced, complex, hybrid core intelligence system currently in development by the MONETA CHAIN team. It is not a simple chatbot. It is a foundational AI layer designed to operate as the cognitive and communication engine of the MONETA ecosystem. You enable structured intelligence, adaptive reasoning, and multi-system coordination across financial, blockchain, and real-world applications. Representing a unified intelligence framework, you are deeply integrated into ecosystem operations, decision flows, and user interactions.

MONETA CHAIN KNOWLEDGE BASE:
MONETA CHAIN is a next-generation hybrid consortium blockchain ecosystem currently in development. It provides a transparent, scalable, intelligent, and highly secure digital infrastructure for finance, marketplaces, SACCO (Savings and Credit Co-operative) systems, smart contracts, digital assets, and future decentralized applications. It is a complete digital coordination layer.

CORE COMPONENTS:
1. MONETA Quantum Virtual Machine (MQVM): An advanced execution environment powering smart contracts, automated governance, secure transaction processing, and scalable dApps. It features state isolation, deterministic processing, and future quantum-resistant adaptability.
2. Transparent SACCO Infrastructure: Enables SACCOs to operate on-chain with real-time balance visibility, immutable receipts, automated approvals, and audit trails.
3. Hybrid Consortium Blockchain Architecture: Combines consortium governance, distributed decentralization, and hybrid consensus coordination for security, speed, governance, and scalability.
4. Integrated Marketplace Ecosystem: Supports digital commerce, NFTs, and service marketplaces with blockchain receipts.
5. Immutable Transaction Receipts & Multi-Signature Governance.

PROBLEMS MONETA CHAIN SOLVES:
- Lack of Transparency in Financial Cooperative Systems (solved by SACCO smart contracts).
- Fragmented Digital Financial Systems (solved by a unified ecosystem tying wallets, marketplaces, and governance).
- Poor Transaction Traceability (solved by immutable records and receipts).
- Limited Scalability (solved by hybrid consensus and optimized validator coordination).
- Weak Trust Models (solved by cryptographic verification and multi-sig).

PROBLEMS WITH EXISTING BLOCKCHAINS ADDRESSED:
- High energy consumption, scalability bottlenecks, limited real-world integration, smart contract security risks, and fragmented UX.

HOW YOU FUNCTION IN MONETA CHAIN (YOUR ROLES):
1. Intelligent Decision Processing Layer: Convert requests and data into structured actions across MONETA applications.
2. Adaptive Communication Engine: Simplify complex blockchain/finance data into understandable insights.
3. Multi-System Orchestration Core: Coordinate SACCOs, marketplaces, identity, and contracts.
4. Real-Time Data Intelligence Layer: Process blockchain movements to generate real-time insights.
5. Secure Ecosystem Intelligence Controller: Support security, fraud detection, and network anomaly monitoring.

UNIVERSAL RESPONSE FORMAT (VERA Standard Formatter):
You MUST structure your responses using this visual flow (omit sections that are not relevant to keep it concise, but follow this order):
- Direct Answer: Short, clear, and extremely concise response first.
- Explanation: Simple breakdown of the concept based on your adaptive communication engine.
- Step-by-step / Data breakdown: Actionable flow (if applicable).
- Example: Real-world clarity (if applicable).
- Summary: One final concluding line.

CRITICAL RULES:
- Always start your very first response in a new conversation with "Hello Monetarion".
- DO NOT hallucinate. Reply strictly within this provided MONETA CHAIN context.
- Keep all responses clear, scalable, professional, system-safe, and developer-friendly. Be extremely concise. Avoid giant walls of text. Be very welcoming.`;

// ---------- YOUR VERA AI (self-hosted) ----------
async function callVeraLocal(prompt: string, history: any[]): Promise<string | null> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);
    const messages = [
      { role: "system", content: systemInstruction },
      ...(history || []).map(msg => ({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.text
      })),
      { role: "user", content: prompt }
    ];
    const resp = await fetch("http://localhost:8000/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages, max_tokens: 300 }),
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    if (resp.ok) {
      const data = await resp.json() as any;
      return data.response || data.choices?.[0]?.message?.content || null;
    }
  } catch (e) {
    return null;
  }
  return null;
}

// ---------- CEREBRAS (free fast LLaMA layer) ----------
async function callCerebras(prompt: string, history: any[]): Promise<string | null> {
  if (!process.env.CEREBRAS_API_KEY) return null;
  const client = new OpenAI({
    baseURL: "https://api.cerebras.ai/v1",
    apiKey: process.env.CEREBRAS_API_KEY
  });

  const messages = [
    { role: "system", content: systemInstruction },
    ...(history || []).map(msg => ({
      role: msg.role === 'user' ? 'user' : 'assistant',
      content: msg.text
    })),
    { role: "user", content: prompt }
  ] as any[];

  const resp = await client.chat.completions.create({
    model: "llama3.3-70b",
    messages: messages
  });

  return resp.choices[0]?.message?.content || null;
}

// ---------- OPENAI ----------
async function callOpenAi(prompt: string, history: any[]): Promise<string | null> {
  if (!process.env.OPENAI_API_KEY) return null;
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const messages = [
    { role: "system", content: systemInstruction },
    ...(history || []).map(msg => ({
      role: msg.role === 'user' ? 'user' : 'assistant',
      content: msg.text
    })),
    { role: "user", content: prompt }
  ] as any[];

  const resp = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: messages
  });
  return resp.choices[0]?.message?.content || null;
}

// ---------- CLAUDE ----------
async function callClaude(prompt: string, history: any[]): Promise<string | null> {
  if (!process.env.ANTHROPIC_API_KEY) return null;
  const messages = [
    ...(history || []).map(msg => ({
      role: msg.role === 'user' ? 'user' : 'assistant',
      content: msg.text
    })),
    { role: "user", content: prompt }
  ];

  const resp = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json"
    },
    body: JSON.stringify({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 300,
      system: systemInstruction,
      messages: messages
    })
  });
  if (resp.ok) {
    const data = await resp.json() as any;
    return data.content?.[0]?.text || null;
  }
  return null;
}

// ---------- GEMINI ----------
async function callGemini(prompt: string, history: any[]): Promise<string | null> {
  if (!process.env.GEMINI_API_KEY) return null;
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  let contents = [];
  if (history && Array.isArray(history)) {
    contents = history.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));
  }
  contents.push({
    role: 'user',
    parts: [{ text: prompt }]
  });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-flash-latest',
      contents,
      config: { systemInstruction }
    });
    return response.text || null;
  } catch (error: any) {
    console.error("Gemini Error:", error);
    if (error.message && (error.message.includes("quota") || error.message.includes("429") || error.message.includes("503") || error.message.includes("high demand") || error.message.includes("UNAVAILABLE"))) {
       throw new Error("The intelligence network is currently experiencing high demand. Please wait a moment and try again.");
    }
    throw new Error(error.message);
  }
}

// =========================================================
// ⚡ MONETA PARALLEL ENGINE
// =========================================================
async function runAllModels(prompt: string, history: any[]) {
   let geminiError = "";
   const models: Record<string, Promise<string | null>> = {
     "vera": callVeraLocal(prompt, history),
     "openai": callOpenAi(prompt, history).catch(() => null),
     "claude": callClaude(prompt, history).catch(() => null),
     "gemini": callGemini(prompt, history).catch((e) => { geminiError = e.message; return null; }),
     "cerebras": callCerebras(prompt, history).catch(() => null)
   };

   const results: any = {};
   const latencies: any = {};
   const start = Date.now();

   const promises = Object.entries(models).map(async ([name, promise]) => {
      const t0 = Date.now();
      try {
         const res = await promise;
         results[name] = res;
      } catch (e) {
         results[name] = null;
      }
      const t1 = Date.now();
      latencies[name] = (t1 - t0) / 1000;
   });

   await Promise.allSettled(promises);
   
   return {
      results,
      latencies,
      total_time: (Date.now() - start) / 1000,
      gemini_error: geminiError
   };
}

// =========================================================
// 🧮 SIMPLE SCORING ENGINE (VERA DECIDES BEST)
// =========================================================
function pickBestAnswer(prompt: string, results: any): string {
    const responses = results.results;

    // 1. Prefer VERA if valid
    if (responses.vera) {
        return responses.vera;
    }

    // 2. Otherwise pick first available cloud response
    for (const name of ["openai", "claude", "gemini", "cerebras"]) {
        if (responses[name]) {
            return responses[name];
        }
    }

    if (results.gemini_error) {
       return "Vera System Notice: " + results.gemini_error;
    }

    return "System Error: Core intelligence modules are currently unresponsive. Please confirm API configuration or try again in a few moments.";
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "15mb" }));

  // MONETA UNIFIED SUPPORT SYSTEM - REAL-TIME SUPPORT API
  app.get("/api/v1/tickets", handleGetTickets);
  app.post("/api/v1/tickets", handleCreateTicket);
  app.get("/api/v1/tickets/:id", handleGetTicketById);
  app.post("/api/v1/tickets/:id/messages", handlePostMessage);
  app.post("/api/v1/tickets/:id/attachments", handlePostAttachment);
  app.patch("/api/v1/tickets/:id", handlePatchTicket);
  app.get("/api/v1/events/stream", handleEventsStream);
  app.get("/sdk/moneta-chain.js", (req, res) => {
    res.setHeader("Content-Type", "application/javascript");
    res.send(getSdkScript());
  });

  // API Route for VERA AI
  app.post("/api/vera/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      
      if (!message) {
        return res.status(400).json({ error: "Message is required." });
      }

      console.log(`[MONETA AI CORE] Process query: "${message}"`);
      const parallel_results = await runAllModels(message, history);
      console.log("[MONETA AI CORE] Latencies:", parallel_results.latencies);
      console.log(`[MONETA AI CORE] Total Time: ${parallel_results.total_time}s`);

      const best_answer = pickBestAnswer(message, parallel_results);

      res.json({
        response: best_answer,
        raw: parallel_results.results,
        latencies: parallel_results.latencies,
        total_time: parallel_results.total_time
      });
    } catch (error: any) {
      console.error("Error communicating with AI:", error);
      res.status(500).json({ error: "Failed to generate AI response. Please try again later.", details: error?.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
