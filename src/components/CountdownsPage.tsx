import { FadeIn } from "./FadeIn";
import { Timer, Rocket, Link as LinkIcon, DollarSign, Globe, Shield, AlertCircle } from "lucide-react";

export function CountdownsPage() {
  return (
    <div className="pt-24 pb-16 min-h-[100svh] relative overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-16 text-center mx-auto">
          <FadeIn>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-sm font-bold uppercase tracking-wider mb-6">
              <Timer size={14} />
              <span>Timelines & Milestones</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase border-b-2 border-electric-blue/20 pb-6 inline-block">
              MONETA CHAIN <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-blue">COUNTDOWN TIMERS</span>
            </h1>
            <p className="text-xl text-gray-300 font-display leading-relaxed max-w-3xl mx-auto mt-6">
              The following key milestones are scheduled for the MONETA CHAIN ecosystem. Each phase represents an important step toward full blockchain deployment, ecosystem expansion, and market integration.
            </p>
          </FadeIn>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Phase 1: PRESALE */}
          <FadeIn delay={0.2} className="glass-card p-8 border-electric-blue/20 relative overflow-hidden group hover:border-electric-blue/40 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-electric-blue/5 rounded-bl-full pointer-events-none group-hover:bg-electric-blue/10 transition-colors" />
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center">
                <Rocket className="w-8 h-8 text-electric-blue group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex-grow space-y-2">
                <h2 className="text-2xl font-heading font-black text-white uppercase tracking-widest flex items-center">
                  PRESALE COUNTDOWN
                </h2>
                <p className="text-gray-400 font-display leading-relaxed">
                  The official MONETA CHAIN presale will begin after final preparation of the token distribution framework, smart contract verification, and initial ecosystem setup.
                </p>
              </div>
              <div className="shrink-0 flex items-center justify-center">
                <div className="bg-black/60 px-6 py-3 rounded-xl border border-electric-blue/30 flex flex-col items-center justify-center w-full md:w-auto mt-4 md:mt-0">
                  <span className="text-xs text-gray-500 font-mono mb-1 uppercase">Status</span>
                  <span className="text-electric-blue font-bold font-mono tracking-widest group-hover:animate-pulse">COMING SOON</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Phase 2: BLOCKCHAIN LAUNCH */}
          <FadeIn delay={0.3} className="glass-card p-8 border-electric-blue/20 relative overflow-hidden group hover:border-electric-blue/40 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-electric-blue/5 rounded-bl-full pointer-events-none group-hover:bg-electric-blue/10 transition-colors" />
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center">
                <LinkIcon className="w-8 h-8 text-electric-blue group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex-grow space-y-2">
                <h2 className="text-2xl font-heading font-black text-white uppercase tracking-widest flex items-center">
                  BLOCKCHAIN LAUNCH COUNTDOWN
                </h2>
                <p className="text-gray-400 font-display leading-relaxed">
                  The MONETA CHAIN mainnet launch marks the activation of the core blockchain network, enabling full decentralized operation, transaction processing, and network participation.
                </p>
              </div>
              <div className="shrink-0 flex items-center justify-center">
                <div className="bg-black/60 px-6 py-3 rounded-xl border border-electric-blue/30 flex flex-col items-center justify-center w-full md:w-auto mt-4 md:mt-0">
                  <span className="text-xs text-gray-500 font-mono mb-1 uppercase">Status</span>
                  <span className="text-electric-blue font-bold font-mono tracking-widest group-hover:animate-pulse">COMING SOON</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Phase 3: COIN LISTING */}
          <FadeIn delay={0.4} className="glass-card p-8 border-golden-yellow/20 relative overflow-hidden group hover:border-golden-yellow/40 transition-colors">
             <div className="absolute top-0 right-0 w-32 h-32 bg-golden-yellow/5 rounded-bl-full pointer-events-none group-hover:bg-golden-yellow/10 transition-colors" />
             <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
               <div className="w-16 h-16 shrink-0 rounded-2xl bg-golden-yellow/10 border border-golden-yellow/20 flex items-center justify-center">
                 <DollarSign className="w-8 h-8 text-golden-yellow group-hover:scale-110 transition-transform" />
               </div>
               <div className="flex-grow space-y-2">
                 <h2 className="text-2xl font-heading font-black text-white uppercase tracking-widest flex items-center">
                   COIN LISTING COUNTDOWN
                 </h2>
                 <p className="text-gray-400 font-display leading-relaxed">
                   The official listing of MONETA CHAIN token on exchanges will follow successful launch phases and ecosystem stabilization, enabling public trading access.
                 </p>
               </div>
               <div className="shrink-0 flex items-center justify-center">
                 <div className="bg-black/60 px-6 py-3 rounded-xl border border-golden-yellow/30 flex flex-col items-center justify-center w-full md:w-auto mt-4 md:mt-0">
                   <span className="text-xs text-gray-500 font-mono mb-1 uppercase">Status</span>
                   <span className="text-golden-yellow font-bold font-mono tracking-widest group-hover:animate-pulse">COMING SOON</span>
                 </div>
               </div>
             </div>
          </FadeIn>

          {/* Phase 4: ECOSYSTEM EXPANSION */}
          <FadeIn delay={0.5} className="glass-card p-8 border-royal-purple/20 relative overflow-hidden group hover:border-royal-purple/40 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-royal-purple/5 rounded-bl-full pointer-events-none group-hover:bg-royal-purple/10 transition-colors" />
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
               <div className="w-16 h-16 shrink-0 rounded-2xl bg-royal-purple/10 border border-royal-purple/20 flex items-center justify-center">
                 <Globe className="w-8 h-8 text-royal-purple group-hover:scale-110 transition-transform" />
               </div>
               <div className="flex-grow space-y-2">
                 <h2 className="text-2xl font-heading font-black text-white uppercase tracking-widest flex items-center">
                   ECOSYSTEM EXPANSION COUNTDOWN
                 </h2>
                 <p className="text-gray-400 font-display leading-relaxed">
                   This phase will introduce additional infrastructure growth, integrations, and global accessibility improvements across the MONETA CHAIN network.
                 </p>
               </div>
               <div className="shrink-0 flex items-center justify-center">
                 <div className="bg-black/60 px-6 py-3 rounded-xl border border-royal-purple/30 flex flex-col items-center justify-center w-full md:w-auto mt-4 md:mt-0">
                   <span className="text-xs text-gray-500 font-mono mb-1 uppercase">Status</span>
                   <span className="text-royal-purple font-bold font-mono tracking-widest group-hover:animate-pulse">COMING SOON</span>
                 </div>
               </div>
             </div>
          </FadeIn>

          {/* Phase 5: SECURITY & AUDIT */}
          <FadeIn delay={0.6} className="glass-card p-8 border-green-500/20 relative overflow-hidden group hover:border-green-500/40 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-bl-full pointer-events-none group-hover:bg-green-500/10 transition-colors" />
             <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
               <div className="w-16 h-16 shrink-0 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                 <Shield className="w-8 h-8 text-green-500 group-hover:scale-110 transition-transform" />
               </div>
               <div className="flex-grow space-y-2">
                 <h2 className="text-2xl font-heading font-black text-white uppercase tracking-widest flex items-center">
                   SECURITY & AUDIT FINALIZATION
                 </h2>
                 <p className="text-gray-400 font-display leading-relaxed">
                   Final system audits and security validations will be completed to ensure network integrity, transparency, and long-term stability.
                 </p>
               </div>
               <div className="shrink-0 flex items-center justify-center">
                 <div className="bg-black/60 px-6 py-3 rounded-xl border border-green-500/30 flex flex-col items-center justify-center w-full md:w-auto mt-4 md:mt-0">
                   <span className="text-xs text-gray-500 font-mono mb-1 uppercase">Status</span>
                   <span className="text-green-500 font-bold font-mono tracking-widest group-hover:animate-pulse">COMING SOON</span>
                 </div>
               </div>
             </div>
          </FadeIn>

          {/* IMP NOTE */}
          <FadeIn delay={0.7} className="mt-12">
            <div className="bg-black/60 border border-white/10 rounded-xl p-6 flex gap-4 items-start relative overflow-hidden">
               <div className="absolute top-0 left-0 w-1 h-full bg-electric-blue" />
               <AlertCircle className="w-6 h-6 text-electric-blue shrink-0 mt-0.5" />
               <div>
                  <h3 className="font-heading font-bold text-white uppercase tracking-widest mb-2 text-sm">IMPORTANT NOTE</h3>
                  <p className="text-sm text-gray-400 font-display leading-relaxed">
                    All timelines are subject to development progress, security verification, and ecosystem readiness. Updates will be announced through official MONETA CHAIN channels.
                  </p>
               </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}
