import { FadeIn } from "./FadeIn";
import { Compass, Cpu, Layers, ShieldCheck, CheckCircle2, AlertCircle, ArrowRight, Zap, Target, Server, Network } from "lucide-react";
import { Link } from "react-router-dom";

export function RoadmapPage() {
  return (
    <div className="pt-24 pb-20 min-h-[100svh] relative overflow-hidden bg-background">
      {/* Ambient background glow effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-royal-purple/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-16 text-center mx-auto">
          <FadeIn>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-sm font-bold uppercase tracking-wider mb-6">
              <Compass size={14} />
              <span>Project Trajectory</span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-black mb-6 tracking-tight uppercase">
              MONETA CHAIN <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-royal-purple">ROADMAP</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white font-heading font-black mb-6 uppercase tracking-wider">
              A Clear Path From Vision to Reality
            </p>
            <div className="space-y-4 text-gray-300 font-display text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              <p>
                MONETA CHAIN is being developed step by step.
              </p>
              <p className="text-gray-400 text-base md:text-lg">
                Our roadmap is divided into three major paths: <strong className="text-white">Strategy</strong>, <strong className="text-white">Technology</strong>, and <strong className="text-white">Release</strong>. Each roadmap answers a different question about the future of MONETA CHAIN.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* 3 Overview Quick Cards */}
        <FadeIn delay={0.1} className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="glass-card p-6 border-electric-blue/20 flex flex-col justify-between hover:border-electric-blue/40 transition-all group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center mb-4 text-electric-blue group-hover:scale-110 transition-transform">
                <Target size={24} />
              </div>
              <h3 className="font-heading font-black text-xl text-white uppercase tracking-wider mb-1">Strategy</h3>
              <p className="text-xs font-mono font-bold text-electric-blue tracking-widest uppercase mb-3">WHERE ARE WE GOING?</p>
              <p className="text-gray-400 font-display text-sm leading-relaxed">
                Explains the business, ecosystem, community, and long-term direction of MONETA CHAIN.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs font-mono text-golden-yellow font-bold uppercase tracking-wider">STATUS</span>
              <span className="text-xs font-mono bg-golden-yellow/10 border border-golden-yellow/30 text-golden-yellow px-2.5 py-1 rounded-full font-bold">COMING SOON</span>
            </div>
          </div>

          <div className="glass-card p-6 border-royal-purple/20 flex flex-col justify-between hover:border-royal-purple/40 transition-all group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-royal-purple/10 border border-royal-purple/20 flex items-center justify-center mb-4 text-royal-purple group-hover:scale-110 transition-transform">
                <Cpu size={24} />
              </div>
              <h3 className="font-heading font-black text-xl text-white uppercase tracking-wider mb-1">Technology</h3>
              <p className="text-xs font-mono font-bold text-royal-purple tracking-widest uppercase mb-3">HOW ARE WE BUILDING IT?</p>
              <p className="text-gray-400 font-display text-sm leading-relaxed">
                Explains the engineering journey behind the independent MONETA CHAIN blockchain.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs font-mono text-golden-yellow font-bold uppercase tracking-wider">STATUS</span>
              <span className="text-xs font-mono bg-golden-yellow/10 border border-golden-yellow/30 text-golden-yellow px-2.5 py-1 rounded-full font-bold">COMING SOON</span>
            </div>
          </div>

          <div className="glass-card p-6 border-emerald-green/20 flex flex-col justify-between hover:border-emerald-green/40 transition-all group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-green/10 border border-emerald-green/20 flex items-center justify-center mb-4 text-emerald-green group-hover:scale-110 transition-transform">
                <Layers size={24} />
              </div>
              <h3 className="font-heading font-black text-xl text-white uppercase tracking-wider mb-1">Release</h3>
              <p className="text-xs font-mono font-bold text-emerald-green tracking-widest uppercase mb-3">WHEN DOES IT BECOME AVAILABLE?</p>
              <p className="text-gray-400 font-display text-sm leading-relaxed">
                Explains WHAT MONETA CHAIN will release and in what order across 8 development phases.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs font-mono text-golden-yellow font-bold uppercase tracking-wider">STATUS</span>
              <span className="text-xs font-mono bg-golden-yellow/10 border border-golden-yellow/30 text-golden-yellow px-2.5 py-1 rounded-full font-bold">COMING SOON</span>
            </div>
          </div>
        </FadeIn>

        {/* Detailed Sections */}
        <div className="max-w-5xl mx-auto space-y-16 mb-20">

          {/* 1. STRATEGY ROADMAP */}
          <FadeIn delay={0.2} className="glass-card p-8 md:p-12 border-electric-blue/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-electric-blue/5 rounded-bl-full pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-xs font-mono font-bold uppercase tracking-widest">
                  Path 01
                </div>
                <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-golden-yellow/10 border border-golden-yellow/30 text-golden-yellow text-xs font-mono font-bold uppercase tracking-widest">
                  STATUS: COMING SOON
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-wide mb-2">
                STRATEGY ROADMAP
              </h2>
              <p className="text-lg md:text-xl text-electric-blue font-heading font-bold uppercase tracking-wider mb-6">
                Where are we going?
              </p>

              <p className="text-gray-300 font-display text-base md:text-lg leading-relaxed mb-8">
                The Strategy Roadmap explains the business, ecosystem, community, and long-term direction of MONETA CHAIN.
              </p>

              <div className="bg-black/40 rounded-2xl p-6 md:p-8 border border-white/5 mb-8">
                <h4 className="font-heading font-bold text-white uppercase text-sm tracking-wider mb-6 text-gray-200">
                  It focuses on:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "The long-term vision of MONETA CHAIN",
                    "Ecosystem growth",
                    "Global adoption",
                    "Community development",
                    "Developer and builder programs",
                    "Strategic partnerships",
                    "Enterprise opportunities",
                    "Governance and decentralization",
                    "MONETA ecosystem expansion",
                    "Long-term sustainability"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-gray-300 font-display text-sm md:text-base">
                      <div className="w-2 h-2 rounded-full bg-electric-blue shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl bg-electric-blue/5 border border-electric-blue/20 mb-6">
                <p className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2 font-bold">In simple words:</p>
                <blockquote className="text-white font-display text-lg md:text-xl italic font-semibold text-glow">
                  «The Strategy Roadmap tells you WHY MONETA CHAIN is being built and WHERE we want to take it.»
                </blockquote>
              </div>

              <div className="text-sm text-gray-400 font-display italic">
                The full MONETA CHAIN Strategy Roadmap is currently under development and will be published when the strategic milestones are ready to be announced.
              </div>
            </div>
          </FadeIn>

          {/* 2. TECHNOLOGY ROADMAP */}
          <FadeIn delay={0.3} className="glass-card p-8 md:p-12 border-royal-purple/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-royal-purple/5 rounded-bl-full pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-royal-purple/10 border border-royal-purple/20 text-royal-purple text-xs font-mono font-bold uppercase tracking-widest">
                  Path 02
                </div>
                <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-golden-yellow/10 border border-golden-yellow/30 text-golden-yellow text-xs font-mono font-bold uppercase tracking-widest">
                  STATUS: COMING SOON
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-wide mb-2">
                TECHNOLOGY ROADMAP
              </h2>
              <p className="text-lg md:text-xl text-royal-purple font-heading font-bold uppercase tracking-wider mb-6">
                How are we building it?
              </p>

              <p className="text-gray-300 font-display text-base md:text-lg leading-relaxed mb-4">
                The Technology Roadmap explains the engineering journey behind MONETA CHAIN.
              </p>
              <p className="text-gray-400 font-display text-sm md:text-base leading-relaxed mb-8">
                It will show how the independent MONETA CHAIN blockchain is being designed, developed, tested, secured, and improved.
              </p>

              <div className="bg-black/40 rounded-2xl p-6 md:p-8 border border-white/5 mb-8">
                <h4 className="font-heading font-bold text-white uppercase text-sm tracking-wider mb-6 text-gray-200">
                  It will cover areas such as:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    "Core blockchain architecture",
                    "MONETA consensus technology",
                    "Network and node infrastructure",
                    "Cryptography and security",
                    "Transaction processing",
                    "Data storage",
                    "Execution technology",
                    "MONETA Chain networking",
                    "Wallet infrastructure",
                    "Developer infrastructure",
                    "MONETA Explorer",
                    "MONETA Oracle",
                    "APIs and developer tools",
                    "Test environments",
                    "Performance and scalability testing",
                    "Security testing and audits",
                    "Mainnet infrastructure",
                    "Future protocol upgrades"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-gray-300 font-display text-sm">
                      <div className="w-2 h-2 rounded-full bg-royal-purple shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl bg-royal-purple/5 border border-royal-purple/20 mb-6">
                <p className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2 font-bold">In simple words:</p>
                <blockquote className="text-white font-display text-lg md:text-xl italic font-semibold">
                  «The Technology Roadmap tells you HOW MONETA CHAIN is being built.»
                </blockquote>
              </div>

              <div className="text-sm text-gray-400 font-display italic">
                The technical roadmap will be released as the core architecture and engineering milestones are finalized.
              </div>
            </div>
          </FadeIn>

          {/* 3. RELEASE ROADMAP */}
          <FadeIn delay={0.4} className="glass-card p-8 md:p-12 border-emerald-green/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-green/5 rounded-bl-full pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-green/10 border border-emerald-green/20 text-emerald-green text-xs font-mono font-bold uppercase tracking-widest">
                  Path 03
                </div>
                <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-golden-yellow/10 border border-golden-yellow/30 text-golden-yellow text-xs font-mono font-bold uppercase tracking-widest">
                  STATUS: COMING SOON
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-wide mb-2">
                RELEASE ROADMAP
              </h2>
              <p className="text-lg md:text-xl text-emerald-green font-heading font-bold uppercase tracking-wider mb-6">
                When does it become available?
              </p>

              <p className="text-gray-300 font-display text-base md:text-lg leading-relaxed mb-4">
                The Release Roadmap explains WHAT MONETA CHAIN will release and in what order.
              </p>
              <p className="text-gray-400 font-display text-sm md:text-base leading-relaxed mb-10">
                Instead of showing only dates, MONETA CHAIN will organize releases around verified development milestones.
              </p>

              {/* 8 Release Phases */}
              <div className="space-y-4 mb-10">
                <h4 className="font-heading font-bold text-white uppercase text-sm tracking-wider mb-6">
                  Possible release stages include:
                </h4>

                {[
                  {
                    phase: "PHASE 01",
                    title: "FOUNDATION",
                    desc: "Core research, architecture, specifications, development environment and foundational infrastructure."
                  },
                  {
                    phase: "PHASE 02",
                    title: "DEVELOPMENT",
                    desc: "Core MONETA CHAIN components are built and integrated."
                  },
                  {
                    phase: "PHASE 03",
                    title: "INTERNAL TESTING",
                    desc: "The network undergoes controlled internal testing, debugging and security validation."
                  },
                  {
                    phase: "PHASE 04",
                    title: "TESTNET",
                    desc: "A public or controlled test network becomes available for testing, experimentation and developer participation."
                  },
                  {
                    phase: "PHASE 05",
                    title: "ECOSYSTEM BUILD",
                    desc: "Wallets, explorers, developer tools, infrastructure and ecosystem services begin expanding around the network."
                  },
                  {
                    phase: "PHASE 06",
                    title: "SECURITY & VALIDATION",
                    desc: "The network undergoes deeper testing, security reviews, performance testing and launch preparation."
                  },
                  {
                    phase: "PHASE 07",
                    title: "MAINNET",
                    desc: "The production MONETA CHAIN network is prepared for official launch."
                  },
                  {
                    phase: "PHASE 08",
                    title: "EXPANSION",
                    desc: "MONETA CHAIN continues evolving through upgrades, ecosystem development, applications, integrations and global adoption."
                  }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-5 md:p-6 rounded-xl bg-black/50 border border-white/10 hover:border-emerald-green/40 transition-all flex flex-col md:flex-row md:items-center gap-4 group"
                  >
                    <div className="flex items-center space-x-3 shrink-0 md:w-64">
                      <div className="w-8 h-8 rounded-lg bg-emerald-green/10 border border-emerald-green/20 text-emerald-green flex items-center justify-center font-mono font-bold text-xs group-hover:scale-110 transition-transform">
                        0{idx + 1}
                      </div>
                      <div>
                        <span className="text-xs font-mono text-emerald-green/80 font-bold block">{item.phase}</span>
                        <span className="font-heading font-black text-white text-base tracking-wide uppercase">{item.title}</span>
                      </div>
                    </div>
                    <div className="text-gray-300 font-display text-sm md:text-base leading-relaxed flex-grow">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-xl bg-emerald-green/5 border border-emerald-green/20 mb-6">
                <p className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2 font-bold">In simple words:</p>
                <blockquote className="text-white font-display text-lg md:text-xl italic font-semibold">
                  «The Release Roadmap tells you WHAT MONETA CHAIN is releasing and WHEN each major stage is ready.»
                </blockquote>
              </div>

              <div className="text-sm text-gray-400 font-display italic">
                The official Release Roadmap will be published after the development milestones and release criteria have been finalized.
              </div>
            </div>
          </FadeIn>

          {/* WHY THREE ROADMAPS? */}
          <FadeIn delay={0.5} className="glass-card p-8 md:p-12 border-white/10 relative overflow-hidden bg-black/40">
            <h2 className="text-2xl md:text-3xl font-heading font-black text-white uppercase tracking-wider mb-4 text-center">
              WHY THREE ROADMAPS?
            </h2>
            <p className="text-gray-300 font-display text-center max-w-2xl mx-auto mb-10 text-base md:text-lg">
              MONETA CHAIN believes that a blockchain project should be transparent about more than just launch dates.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="p-6 rounded-2xl bg-electric-blue/5 border border-electric-blue/20 text-center flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-black text-xl text-electric-blue uppercase mb-2">Strategy</h3>
                  <div className="inline-block font-mono text-xs font-bold text-white bg-electric-blue/20 px-3 py-1 rounded-full mb-4">
                    WHY + WHERE
                  </div>
                  <p className="text-gray-300 font-display text-sm">
                    Shows the long-term direction.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-royal-purple/5 border border-royal-purple/20 text-center flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-black text-xl text-royal-purple uppercase mb-2">Technology</h3>
                  <div className="inline-block font-mono text-xs font-bold text-white bg-royal-purple/20 px-3 py-1 rounded-full mb-4">
                    HOW
                  </div>
                  <p className="text-gray-300 font-display text-sm">
                    Shows the engineering and infrastructure journey.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-green/5 border border-emerald-green/20 text-center flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-black text-xl text-emerald-green uppercase mb-2">Release</h3>
                  <div className="inline-block font-mono text-xs font-bold text-white bg-emerald-green/20 px-3 py-1 rounded-full mb-4">
                    WHAT + WHEN
                  </div>
                  <p className="text-gray-300 font-display text-sm">
                    Shows the products, networks, upgrades and major milestones that will become available.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="font-heading font-black text-lg text-white uppercase tracking-wider">
                Together, they provide a complete picture of the MONETA CHAIN journey.
              </p>
            </div>
          </FadeIn>

          {/* ROADMAP PRINCIPLE */}
          <FadeIn delay={0.6} className="glass-card p-8 md:p-12 border-golden-yellow/30 relative overflow-hidden bg-gradient-to-br from-golden-yellow/5 to-transparent">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-golden-yellow/10 border border-golden-yellow/30 flex items-center justify-center text-golden-yellow mb-6">
                <ShieldCheck size={36} />
              </div>
              
              <div className="text-xs font-mono font-bold tracking-widest text-golden-yellow uppercase mb-2">
                ROADMAP PRINCIPLE
              </div>
              <h2 className="font-heading font-black text-3xl md:text-4xl text-white uppercase tracking-tight mb-8">
                BUILD FIRST. VERIFY. THEN RELEASE.
              </h2>

              <div className="space-y-6 text-gray-300 font-display text-base md:text-lg leading-relaxed text-left md:text-center">
                <p>
                  MONETA CHAIN will prioritize development, testing, security and validation before announcing milestones as completed.
                </p>
                <p className="text-gray-400">
                  Roadmap dates and priorities may change when research, engineering, security requirements, regulatory considerations or testing results require adjustments.
                </p>
                <div className="p-4 rounded-xl bg-black/60 border border-golden-yellow/30 text-golden-yellow font-bold font-display text-lg">
                  We would rather delay a release than release technology that is not ready.
                </div>
              </div>
            </div>
          </FadeIn>

          {/* SUMMARY BANNER */}
          <FadeIn delay={0.7} className="glass-card p-10 border-electric-blue/40 text-center relative overflow-hidden bg-black/60">
            <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 via-royal-purple/10 to-electric-blue/10 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="font-heading font-black text-2xl md:text-3xl text-white uppercase tracking-widest mb-6">
                MONETA CHAIN ROADMAP
              </h3>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 font-mono text-sm text-gray-300 font-bold">
                  STRATEGY — <span className="text-golden-yellow">COMING SOON</span>
                </span>
                <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 font-mono text-sm text-gray-300 font-bold">
                  TECHNOLOGY — <span className="text-golden-yellow">COMING SOON</span>
                </span>
                <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 font-mono text-sm text-gray-300 font-bold">
                  RELEASE — <span className="text-golden-yellow">COMING SOON</span>
                </span>
              </div>

              <p className="text-xl md:text-2xl text-gray-200 font-display font-medium mb-3">
                The journey is being built.
              </p>
              <p className="text-lg md:text-xl text-electric-blue font-display font-semibold mb-8">
                The roadmap will show the way.
              </p>

              <div className="pt-6 border-t border-white/10 w-full max-w-md">
                <div className="font-brand font-bold text-2xl text-white tracking-widest mb-2">
                  MONETA CHAIN
                </div>
                <div className="font-mono text-xs font-bold text-electric-blue tracking-[0.3em] uppercase">
                  TRUST. FREEDOM. TOMORROW.
                </div>
              </div>
            </div>
          </FadeIn>

        </div>

      </div>
    </div>
  );
}
