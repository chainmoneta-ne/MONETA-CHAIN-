import React, { useState } from "react";
import { FadeIn } from "./FadeIn";
import { Terminal, Github, Code, Box, Server, Shield, ArrowRight, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FeatureStatusCard } from "./support/FeatureStatusCard";
import { monetaChainFeatures } from "../config/featureStatus";
import { ContextualSupportModal } from "./support/ContextualSupportModal";

export function DevelopersSection() {
  const navigate = useNavigate();
  const [validatorSupportOpen, setValidatorSupportOpen] = useState(false);
  const [nodeSupportOpen, setNodeSupportOpen] = useState(false);

  return (
    <div id="developers">
      {/* DEVELOPERS & APIs */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden bg-royal-purple/5">
        {/* Background glow */}
        <div className="absolute top-1/2 -left-[200px] -translate-y-1/2 w-[500px] h-[500px] bg-royal-purple/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <FadeIn>
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
                Build on <span className="text-royal-purple">MONETA</span>
              </h2>
              <p className="text-gray-400 font-display max-w-xl mb-6">
                Access professional-grade tools, comprehensive documentation, and scalable RPC infrastructure to build borderless decentralized applications.
              </p>
              <button 
                className="px-8 py-3 btn-primary flex items-center shadow-[0_0_20px_rgba(157,78,221,0.4)]"
                onClick={() => navigate('/developers')}
              >
                <span>Navigate to Developer Portal</span>
                <ArrowRight size={18} className="ml-2" />
              </button>
            </FadeIn>
            <FadeIn delay={0.2}>
              <button className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center space-x-2 font-display text-sm">
                <Github size={18} />
                <span>View GitHub Repos</span>
              </button>
            </FadeIn>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-8 flex flex-col space-y-4">
              {/* Code Snippet Mock */}
              <FadeIn className="glass-card p-6 h-full font-mono text-sm overflow-x-auto relative">
                <div className="absolute top-4 right-4 text-xs text-gray-500 uppercase tracking-widest">Rust / WASM</div>
                <div className="text-electric-blue mb-4">// Initialize MONETA Client</div>
                <div className="text-gray-300">
                  <span className="text-royal-purple">let</span> client = <span className="text-electric-blue">MonetaClient</span>::new(
                  <br />&nbsp;&nbsp;<span className="text-emerald-green">"https://mainnet.moneta.network"</span>,
                  <br />&nbsp;&nbsp;Config::default()
                  <br />);
                </div>
                <br />
                <div className="text-electric-blue mb-4">// Deploy intelligent smart contract</div>
                <div className="text-gray-300">
                  <span className="text-royal-purple">async fn</span> <span className="text-electric-blue">deploy_contract</span>() -&gt; Result&lt;TxHash&gt; {"{"}
                  <br />&nbsp;&nbsp;<span className="text-royal-purple">let</span> compiled = compile_wasm(<span className="text-emerald-green">"./contracts/ai_vault.wasm"</span>);
                  <br />&nbsp;&nbsp;client.deploy(compiled).<span className="text-royal-purple">await</span>
                  <br />{"}"}
                </div>
              </FadeIn>
            </div>

             <div className="lg:col-span-4 flex flex-col space-y-4">
               <FadeIn delay={0.1} className="glass-card p-6 hover:border-royal-purple transition-colors cursor-pointer group flex flex-col h-full justify-center">
                 <Terminal className="text-royal-purple mb-4 group-hover:scale-110 transition-transform" size={32} />
                 <h3 className="font-heading font-bold text-lg mb-2">JSON RPC API</h3>
                 <p className="text-sm font-display text-gray-400 mb-4">High-throughput endpoints for on-chain data retrieval and interaction.</p>
                 <span className="text-xs text-royal-purple flex items-center space-x-1 mt-auto font-bold uppercase tracking-wide">
                   <span>Read Docs</span> <ArrowRight size={14} />
                 </span>
               </FadeIn>
               
               <FadeIn delay={0.2} className="glass-card p-6 hover:border-electric-blue transition-colors cursor-pointer group flex flex-col h-full justify-center">
                 <Code className="text-electric-blue mb-4 group-hover:scale-110 transition-transform" size={32} />
                 <h3 className="font-heading font-bold text-lg mb-2">SDK Downloads</h3>
                 <p className="text-sm font-display text-gray-400 mb-4">Official libraries for TS, Python, Rust, and Go.</p>
                 <span className="text-xs text-electric-blue flex items-center space-x-1 mt-auto font-bold uppercase tracking-wide">
                   <span>Download</span> <ArrowRight size={14} />
                 </span>
               </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* NODES & VALIDATORS */}
      <section id="nodes" className="py-24 bg-background relative">
        <div className="container mx-auto px-6 text-center">
           <FadeIn>
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
                Nodes & <span className="text-electric-blue">Validators</span>
              </h2>
              <p className="text-gray-400 font-display max-w-2xl mx-auto mb-12">
                MONETA thrives on true decentralization. Explore our planned Proof-of-Stake consensus, low-hardware entry, and AI-assisted anti-slashing security.
              </p>
           </FadeIn>

           {/* Feature Status Cards for Validators and Nodes */}
           <div className="grid md:grid-cols-2 gap-8 text-left mb-12 max-w-4xl mx-auto">
             <FeatureStatusCard feature={monetaChainFeatures.validators} sourcePage="/home#nodes" />
             <FeatureStatusCard feature={monetaChainFeatures.nodes} sourcePage="/home#nodes" />
           </div>

           <div className="grid md:grid-cols-3 gap-6 text-left mb-12 max-w-5xl mx-auto">
             {[
               { icon: <Server size={24} className="text-golden-yellow" />, title: "Low Hardware Entry", desc: "Optimized consensus mechanism allows verification on standard consumer hardware once live." },
               { icon: <Shield size={24} className="text-electric-blue" />, title: "Anti-Slashing AI", desc: "VERA AI protects honest validators from accidental slashing via predictive alerts." },
               { icon: <Box size={24} className="text-golden-yellow" />, title: "1-Click Node Setup", desc: "Deploy via Docker or our CLI tool upon testnet availability." }
             ].map((item, i) => (
                <FadeIn key={i} delay={0.1 * i} className="glass-card p-6 border-white/5 bg-black/30">
                  <div className="w-10 h-10 rounded-full bg-electric-blue/10 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-heading text-base font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-xs font-display">{item.desc}</p>
                </FadeIn>
             ))}
           </div>
           
           <FadeIn delay={0.3} className="flex flex-wrap items-center justify-center gap-4">
              <button 
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-golden-yellow to-amber-400 text-black font-heading font-black text-sm uppercase tracking-wider hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer shadow-lg shadow-golden-yellow/20" 
                onClick={() => setValidatorSupportOpen(true)}
              >
                [ GET VALIDATOR SUPPORT ]
              </button>
              <button 
                className="px-8 py-3.5 rounded-xl bg-white/5 border border-white/20 text-white font-heading font-bold text-sm uppercase tracking-wider hover:bg-white/10 transition-all cursor-pointer" 
                onClick={() => navigate('/developers')}
              >
                [ DEVELOPER & APIS PORTAL ]
              </button>
           </FadeIn>
        </div>

        {/* Validator Support Modal */}
        <ContextualSupportModal
          feature={monetaChainFeatures.validators}
          isOpen={validatorSupportOpen}
          onClose={() => setValidatorSupportOpen(false)}
          sourcePage="/home#nodes"
        />

        {/* Node Support Modal */}
        <ContextualSupportModal
          feature={monetaChainFeatures.nodes}
          isOpen={nodeSupportOpen}
          onClose={() => setNodeSupportOpen(false)}
          sourcePage="/home#nodes"
        />
      </section>
    </div>
  );
}
