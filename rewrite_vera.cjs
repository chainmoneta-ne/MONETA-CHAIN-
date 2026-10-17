const fs = require('fs');
const content = `import { FadeIn } from "./FadeIn";
import { Brain, Bot, Send, Loader2, Sparkles, Zap, Shield, Cpu, Activity, Network, ShieldCheck } from "lucide-react";
import React, { useState, useRef, useEffect, KeyboardEvent } from "react";
import { getRandomGreeting } from "../lib/greetings";

// @ts-ignore
import veraAvatar from "../assets/images/vera_black_woman_avatar_1779390780706.png";

type Message = {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: Date;
  isStreaming?: boolean;
};

// Typewriter component for progressive text display
const TypewriterMessage = ({ text, onComplete, isStreaming }: { text: string, onComplete?: () => void, isStreaming?: boolean }) => {
  const [displayedText, setDisplayedText] = useState(isStreaming ? "" : text);
  
  useEffect(() => {
    if (!isStreaming) {
      setDisplayedText(text);
      return;
    }
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex += Math.floor(Math.random() * 3) + 1; // Type 1-3 chars at a time
      } else {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, 15);
    
    return () => clearInterval(interval);
  }, [text, isStreaming, onComplete]);

  return <>{displayedText}{isStreaming && displayedText.length < text.length && <span className="inline-block w-1.5 h-4 ml-1 bg-electric-blue animate-pulse align-middle" />}</>;
};

export function VeraAIPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "greeting",
      role: 'assistant',
      text: getRandomGreeting(),
      timestamp: new Date(),
      isStreaming: false
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = \`\${Math.min(textarea.scrollHeight, 150)}px\`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [input]);

  const handleSubmit = async (e: React.FormEvent | KeyboardEvent) => {
    if (e.preventDefault) e.preventDefault();
    if (!input.trim() || isLoading) return;

    // Cancel any ongoing request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();

    const userText = input.trim();
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: userText,
      timestamp: new Date(),
      isStreaming: false
    };

    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);
    
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

    try {
      const history = messages.map(m => ({
        role: m.role,
        text: m.text
      }));

      const response = await fetch("/api/vera/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText, history }),
        signal: abortControllerRef.current.signal
      });

      let data;
      if (!response.ok) {
        try {
          data = await response.json();
        } catch (err) {}
        throw new Error(data?.error || data?.details || "Failed to communicate with VERA AI");
      } else {
        data = await response.json();
      }
      
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        text: data.response || "I apologize, but I encountered an error processing your request.",
        timestamp: new Date(),
        isStreaming: true
      };
      
      setMessages(prev => [...prev, aiMsg]);
    } catch (error: any) {
      if (error.name === 'AbortError') return;
      console.error(error);
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        text: \`System Notice: \${error.message || "Connection disrupted. Please try again."}\`,
        timestamp: new Date(),
        isStreaming: true
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-[100svh] relative overflow-hidden bg-background vera-ai-component">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-electric-blue/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
      
      <div className="container mx-auto px-6 relative z-10 space-y-6">
        
        {/* Top Header Section */}
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-electric-blue" />
              <span className="text-electric-blue text-xs font-bold uppercase tracking-widest">MONETA Intelligence Core</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-black tracking-tight uppercase flex items-center space-x-3">
              <span>VERA</span> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-blue">SYSTEM</span>
            </h1>
          </div>
          
          <div className="flex gap-4">
             <div className="glass-card px-4 py-2 border-white/5 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs font-mono text-gray-300 uppercase tracking-wider">Network Online</span>
             </div>
             <div className="glass-card px-4 py-2 border-white/5 flex items-center gap-3">
                <Shield className="w-4 h-4 text-electric-blue" />
                <span className="text-xs font-mono text-gray-300 uppercase tracking-wider">Secure Channel</span>
             </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Left Column - Chat Interface (Span 7) */}
        <div className="col-span-1 lg:col-span-8 flex flex-col h-[650px] lg:h-[750px]">
           <FadeIn className="flex-1 glass-card border border-electric-blue/20 flex flex-col overflow-hidden bg-black/60 relative">
             
             {/* Chat Header */}
             <div className="p-4 border-b border-electric-blue/20 bg-electric-blue/5 flex justify-between items-center z-10 backdrop-blur-md shrink-0">
               <div className="flex items-center space-x-3">
                 <div className="w-10 h-10 rounded-full overflow-hidden border border-electric-blue/50 relative shrink-0">
                   <img src={veraAvatar} alt="VERA Avatar" className="w-full h-full object-cover" />
                 </div>
                 <div>
                   <h3 className="font-bold text-white tracking-widest text-sm uppercase leading-tight">VERA AI Interface</h3>
                   <p className="text-xs text-electric-blue font-mono flex items-center space-x-1 mt-0.5">
                     <span className="w-1.5 h-1.5 bg-electric-blue rounded-full animate-pulse mr-1"></span>
                     SECURE SESSION ACTIVE
                   </p>
                 </div>
               </div>
               <div className="text-xs text-gray-500 font-mono hidden sm:flex items-center gap-2 bg-black/40 px-3 py-1 rounded-full border border-white/5">
                 <Network className="w-3 h-3 text-electric-blue" />
                 MQVM INTEGRATION: ACTIVE
               </div>
             </div>

             {/* Chat Messages */}
             <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 z-10 custom-scrollbar relative">
                {messages.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-70">
                    <Brain className="w-16 h-16 text-electric-blue/40 mb-4" />
                    <p className="text-gray-400 font-display text-sm mb-2 max-w-sm">
                      VERA AI is ready to assist you. Ask questions about the MONETA ecosystem, tokenomics, or hybrid blockchain infrastructure.
                    </p>
                    <p className="text-electric-blue text-xs font-mono">INITIATE COMMUNICATION PROTOCOL</p>
                  </div>
                ) : (
                  messages.map((msg, idx) => (
                    <div 
                      key={msg.id} 
                      className={\`flex \${msg.role === 'user' ? 'justify-end' : 'justify-start'}\`}
                    >
                      <div className={\`flex max-w-[90%] md:max-w-[85%] \${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-end gap-2 md:gap-3\`}>
                        
                        {/* Avatar */}
                        <div className={\`w-8 h-8 rounded-full overflow-hidden flex shrink-0 items-center justify-center \${msg.role === 'user' ? 'bg-white/10' : 'border border-electric-blue/30'}\`}>
                          {msg.role === 'user' ? (
                            <div className="w-full h-full rounded-full bg-white/20" />
                          ) : (
                            <img src={veraAvatar} alt="VERA" className="w-full h-full object-cover" />
                          )}
                        </div>

                        {/* Bubble */}
                        <div 
                          className={\`px-4 py-3 rounded-2xl \${
                            msg.role === 'user' 
                              ? 'bg-electric-blue/20 border border-electric-blue/30 text-white rounded-br-sm' 
                              : 'bg-black/50 border border-electric-blue/20 text-gray-200 rounded-bl-sm font-display leading-relaxed whitespace-pre-wrap'
                          }\`}
                        >
                          {msg.role === 'assistant' ? (
                            <TypewriterMessage 
                              text={msg.text} 
                              isStreaming={msg.isStreaming} 
                              onComplete={() => {
                                setMessages(prev => prev.map(m => m.id === msg.id ? { ...m, isStreaming: false } : m));
                              }} 
                            />
                          ) : (
                            msg.text
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex flex-row items-end gap-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden border border-electric-blue/30 shrink-0">
                        <img src={veraAvatar} alt="VERA" className="w-full h-full object-cover grayscale opacity-70" />
                      </div>
                      <div className="px-5 py-4 rounded-2xl bg-black/50 border border-electric-blue/20 rounded-bl-sm flex items-center space-x-2">
                         <div className="flex gap-1">
                           <span className="w-1.5 h-1.5 rounded-full bg-electric-blue animate-bounce" style={{ animationDelay: '0ms' }} />
                           <span className="w-1.5 h-1.5 rounded-full bg-electric-blue animate-bounce" style={{ animationDelay: '150ms' }} />
                           <span className="w-1.5 h-1.5 rounded-full bg-electric-blue animate-bounce" style={{ animationDelay: '300ms' }} />
                         </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} className="h-1" />
             </div>

             {/* Chat Input */}
             <div className="p-4 border-t border-electric-blue/20 bg-black/80 z-10 backdrop-blur-md shrink-0">
               <form onSubmit={handleSubmit} className="relative flex items-end gap-3">
                 <div className="flex-1 relative group">
                   <textarea
                     ref={textareaRef}
                     value={input}
                     onChange={(e) => setInput(e.target.value)}
                     onKeyDown={handleKeyDown}
                     placeholder="Message VERA AI..."
                     rows={1}
                     className="w-full bg-black/50 border border-electric-blue/30 focus:border-electric-blue rounded-xl pl-4 pr-4 py-3.5 text-white placeholder:text-gray-500 outline-none transition-all focus:ring-1 focus:ring-electric-blue/50 font-display text-sm resize-none custom-scrollbar min-h-[50px] max-h-[150px]"
                     disabled={isLoading}
                     style={{ wordBreak: 'break-word' }}
                   />
                   <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-electric-blue 0% to-transparent 100% opacity-50 transform scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left pointer-events-none" />
                 </div>
                 
                 <button
                   type="submit"
                   disabled={isLoading || !input.trim()}
                   className="w-12 h-12 rounded-xl bg-electric-blue/20 hover:bg-electric-blue/30 text-electric-blue flex items-center justify-center transition-colors border border-electric-blue/30 disabled:opacity-50 disabled:cursor-not-allowed group shrink-0 mb-0.5"
                 >
                   {isLoading ? (
                     <Loader2 className="w-5 h-5 animate-spin" />
                   ) : (
                     <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                   )}
                 </button>
               </form>
               <div className="mt-2 text-center">
                 <p className="text-[10px] text-gray-500 font-display">VERA AI is an experimental system. Press Shift + Enter for a new line.</p>
               </div>
             </div>
             
           </FadeIn>
        </div>

        {/* Right Column - Avatar & Identity (Span 4) */}
        <div className="col-span-1 lg:col-span-4 space-y-8">
          
          {/* Avatar Identity Card */}
          <FadeIn delay={0.2} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-electric-blue to-electric-blue rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative glass-card border border-electric-blue/20 p-1 overflow-hidden bg-black/80 rounded-2xl">
              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-black/50 border border-white/5">
                <img 
                  src={veraAvatar} 
                  alt="VERA AI System Avatar" 
                  className="w-full h-full object-cover object-top mix-blend-lighten"
                />
                
                {/* Visual Overlays for AI feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
                
                {/* Tech Accents */}
                <div className="absolute top-4 left-4 p-2 bg-black/40 backdrop-blur-md rounded border border-electric-blue/30 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-electric-blue animate-pulse shadow-[0_0_8px_#06b6d4]"></div>
                  <span className="text-[10px] font-mono font-bold text-electric-blue tracking-widest uppercase">System Core</span>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div>
                    <h2 className="text-2xl font-heading font-black text-white tracking-tight uppercase leading-none">VERA AI</h2>
                    <p className="text-sm font-mono text-electric-blue uppercase tracking-wider mt-1">MONETA Intelligence System</p>
                  </div>
                  <QrCode className="w-10 h-10 text-white/20" />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* System Framework Info Panel */}
          <FadeIn delay={0.3} className="space-y-4">
            <div className="glass-card h-[380px] flex flex-col border border-white/5 bg-black/40 font-display text-gray-300 relative overflow-hidden">
              {/* Scanline effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-blue/5 to-transparent h-[200%] w-full -translate-y-full hover:animate-[scan_3s_linear_infinite] pointer-events-none" />
              
              <div className="p-5 border-b border-white/5 bg-black/60 shrink-0 relative z-10 backdrop-blur-md">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                  <Brain className="w-4 h-4 text-electric-blue" />
                  Core Intelligence Framework
                </h3>
              </div>
              
              <div className="p-5 overflow-y-auto custom-scrollbar relative z-10 space-y-6">
                <p className="text-sm leading-relaxed text-gray-400">
                  <strong className="text-white">VERA AI</strong> is an advanced, complex, hybrid core intelligence system currently in development by the MONETA CHAIN team. It is a foundational AI layer designed to operate as the cognitive and communication engine of the MONETA ecosystem.
                </p>
                <div className="space-y-3">
                  <h4 className="text-[10px] font-mono text-electric-blue uppercase tracking-widest border-b border-electric-blue/20 pb-2 mb-3">How VERA AI Functions</h4>
                  
                  <div className="bg-black/50 border border-white/5 p-3 rounded-lg relative overflow-hidden group">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-electric-blue/50 group-hover:bg-electric-blue transition-colors" />
                    <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-1 flex items-center justify-between">
                      1. Decision Processing Layer
                      <Cpu className="w-3 h-3 text-electric-blue" />
                    </h5>
                    <p className="text-[11px] text-gray-400">Interprets user requests, system data, and events to convert them into structured executable decisions.</p>
                  </div>
                  <div className="bg-black/50 border border-white/5 p-3 rounded-lg relative overflow-hidden group">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-electric-blue/50 group-hover:bg-electric-blue transition-colors" />
                    <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-1 flex items-center justify-between">
                      2. Adaptive Comm Engine
                      <Sparkles className="w-3 h-3 text-electric-blue" />
                    </h5>
                    <p className="text-[11px] text-gray-400">Dynamically adjusts info presentation, simplifying complex data into clear, understandable responses.</p>
                  </div>
                  <div className="bg-black/50 border border-white/5 p-3 rounded-lg relative overflow-hidden group">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-electric-blue/50 group-hover:bg-electric-blue transition-colors" />
                    <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-1 flex items-center justify-between">
                      3. Multi-System Core
                      <Network className="w-3 h-3 text-electric-blue" />
                    </h5>
                    <p className="text-[11px] text-gray-400">Connects and coordinates MONETA services (SACCO, marketplaces, identity, contracts) into one workflow.</p>
                  </div>
                  <div className="bg-black/50 border border-white/5 p-3 rounded-lg relative overflow-hidden group">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-electric-blue/50 group-hover:bg-electric-blue transition-colors" />
                    <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-1 flex items-center justify-between">
                      4. Real-Time Data Layer
                      <Activity className="w-3 h-3 text-electric-blue" />
                    </h5>
                    <p className="text-[11px] text-gray-400">Processes live blockchain data, financial movements, and external oracles for real-time insights.</p>
                  </div>
                  <div className="bg-black/50 border border-white/5 p-3 rounded-lg relative overflow-hidden group">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-electric-blue/50 group-hover:bg-electric-blue transition-colors" />
                    <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-1 flex items-center justify-between">
                      5. Secure Controller
                      <ShieldCheck className="w-3 h-3 text-electric-blue" />
                    </h5>
                    <p className="text-[11px] text-gray-400">Supports MONETA security by assisting fraud detection, anomaly monitoring, and identity validation.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
    </div>
  );
}

// Extract small QrCode and Database icon components internally if missing from lucide imports
function QrCode(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="6" height="6" rx="1" />
      <rect x="15" y="3" width="6" height="6" rx="1" />
      <rect x="3" y="15" width="6" height="6" rx="1" />
      <path d="M15 15h6v6h-6z" />
      <path d="M10 3v6M14 3v6M10 15v6M14 15v6M3 10h6M15 10h6M3 14h6M15 14h6" opacity="0.3" />
    </svg>
  );
}
function Database(props: any) {
  return <Cpu {...props} /> // Fallback mapping since it wasn't extracted
}
`
fs.writeFileSync('src/components/VeraAIPage.tsx', content);
console.log("Successfully wrote updated VERA AI page.");
