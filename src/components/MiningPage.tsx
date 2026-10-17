import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { 
  Pickaxe, Globe2, Smartphone, ShieldCheck, CheckCircle2, 
  ExternalLink, Layers, Database, Compass, ChevronRight, 
  AlertCircle, Sparkles, LayoutDashboard, Wallet, Users, 
  Trophy, History, Settings, ShieldAlert, Cpu, ArrowRight,
  Clock, Lock
} from "lucide-react";
import { Link } from "react-router-dom";

export function MiningPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const features = [
    { name: "MONETA mining dashboard", icon: <LayoutDashboard size={20} className="text-electric-blue" /> },
    { name: "Mining session management", icon: <Clock size={20} className="text-electric-blue" /> },
    { name: "MINT balance", icon: <Sparkles size={20} className="text-golden-yellow" /> },
    { name: "Mining history", icon: <History size={20} className="text-electric-blue" /> },
    { name: "MONETA CHAIN account", icon: <ShieldCheck size={20} className="text-electric-blue" /> },
    { name: "Wallet", icon: <Wallet size={20} className="text-golden-yellow" /> },
    { name: "Friends and referrals", icon: <Users size={20} className="text-electric-blue" /> },
    { name: "Referral leaderboard", icon: <Trophy size={20} className="text-golden-yellow" /> },
    { name: "MONETA CHAIN Explorer access", icon: <Compass size={20} className="text-electric-blue" /> },
    { name: "Account and security settings", icon: <Settings size={20} className="text-electric-blue" /> },
    { name: "Mining status and rewards information", icon: <Pickaxe size={20} className="text-golden-yellow" /> },
  ];

  const roadmapSteps = [
    {
      step: "STEP 01",
      title: "WEB APPLICATION",
      description: "Build and launch the MONETA MINING Web Application on the official MONETA CHAIN website.",
      tag: "PHASE 1",
      color: "border-electric-blue/40 text-electric-blue"
    },
    {
      step: "STEP 02",
      title: "MONETA CHAIN INTEGRATION",
      description: "Connect the application with the MONETA CHAIN mining and reward infrastructure.",
      tag: "PHASE 2",
      color: "border-electric-blue/40 text-electric-blue"
    },
    {
      step: "STEP 03",
      title: "TESTING & SECURITY",
      description: "Test the mining system, accounts, rewards, wallet functions, and blockchain connections.",
      tag: "PHASE 3",
      color: "border-royal-purple/40 text-royal-purple"
    },
    {
      step: "STEP 04",
      title: "PUBLIC WEB LAUNCH",
      description: "Make the MONETA MINING Web Application accessible through the official website.",
      tag: "PHASE 4",
      color: "border-golden-yellow/40 text-golden-yellow"
    },
    {
      step: "STEP 05",
      title: "ANDROID APPLICATION",
      description: "Develop the MONETA MINING Android application using the same core infrastructure.",
      tag: "PHASE 5",
      color: "border-emerald-green/40 text-emerald-green"
    },
    {
      step: "STEP 06",
      title: "GOOGLE PLAY STORE",
      description: "Release the official MONETA MINING Android application on Google Play, subject to Google's review and approval.",
      tag: "PHASE 6",
      color: "border-emerald-green/40 text-emerald-green"
    }
  ];

  const ecosystemEntities = [
    {
      name: "MONETA CHAIN",
      desc: "The blockchain network.",
      tag: "Layer-1 Blockchain",
      color: "text-electric-blue border-electric-blue/30"
    },
    {
      name: "MONETA COIN — MINT",
      desc: "The native digital asset of the MONETA ecosystem.",
      tag: "Native Digital Asset",
      color: "text-golden-yellow border-golden-yellow/30"
    },
    {
      name: "MONETA MINING",
      desc: "The mining application.",
      tag: "Mining Portal",
      color: "text-emerald-green border-emerald-green/30"
    },
    {
      name: "MONETA EXPLORER",
      desc: "The blockchain explorer for viewing network activity and on-chain information.",
      tag: "Network Explorer",
      color: "text-royal-purple border-royal-purple/30"
    },
    {
      name: "MONETA ORACLE",
      desc: "The data and information infrastructure supporting the MONETA ecosystem.",
      tag: "Data Infrastructure",
      color: "text-electric-blue border-electric-blue/30"
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-[100svh] relative overflow-hidden bg-charcoal-black">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-golden-yellow/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[600px] bg-electric-blue/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Main Hero Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-golden-yellow/10 border border-golden-yellow/30 text-golden-yellow text-xs font-mono font-bold uppercase tracking-widest mb-6">
              <Pickaxe size={14} />
              <span>Official Mining Portal</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight uppercase text-white">
              MONETA <span className="text-transparent bg-clip-text bg-gradient-to-r from-golden-yellow via-electric-blue to-electric-blue">MINING</span>
            </h1>

            <p className="text-xl md:text-2xl font-heading font-black text-golden-yellow uppercase tracking-widest mb-6">
              Mine MONETA COIN. Connect to MONETA CHAIN.
            </p>

            <p className="text-gray-300 font-display text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              MONETA MINING is the official web-based mining application of MONETA CHAIN, designed to provide users with a simple and accessible way to participate in the MONETA mining ecosystem.
            </p>
          </FadeIn>
        </div>

        {/* WEB APPLICATION — AVAILABLE FIRST Card & ACCESS Portal */}
        <FadeIn delay={0.2} className="max-w-4xl mx-auto mb-20">
          <div className="glass-card p-8 md:p-12 border-golden-yellow/30 bg-black/60 relative overflow-hidden text-center box-glow-yellow">
            <div className="absolute top-0 right-0 w-64 h-64 bg-golden-yellow/10 rounded-bl-full pointer-events-none" />
            
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-golden-yellow/10 border border-golden-yellow/20 text-golden-yellow text-xs font-mono font-bold uppercase tracking-widest mb-6">
              <Globe2 size={13} />
              <span>WEB APPLICATION — AVAILABLE FIRST</span>
            </div>

            <h2 className="font-heading text-2xl md:text-4xl font-black text-white uppercase tracking-wider mb-6">
              WEB APPLICATION — AVAILABLE FIRST
            </h2>

            <div className="space-y-4 text-gray-200 font-display text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              <p>
                The <strong className="text-white">MONETA MINING Web Application</strong> will launch first directly through the official MONETA CHAIN website.
              </p>
              <p className="text-gray-300">
                Users will be able to access MONETA MINING through a dedicated link without needing to download an application.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10 max-w-xl mx-auto">
              <span className="text-xs font-mono text-electric-blue font-bold uppercase tracking-widest block mb-2">
                ACCESS MONETA MINING
              </span>
              <h3 className="text-xl md:text-2xl font-heading font-black text-white uppercase tracking-wider mb-6">
                MONETA MINING WEB APPLICATION
              </h3>

              <div className="flex flex-col items-center justify-center gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-golden-yellow via-amber-400 to-golden-yellow text-black font-heading font-black text-lg md:text-xl uppercase tracking-widest rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-golden-yellow/20 flex items-center justify-center space-x-3 cursor-pointer"
                >
                  <Pickaxe size={22} className="text-black" />
                  <span>[ OPEN MONETA MINING ]</span>
                  <ExternalLink size={20} className="text-black" />
                </button>

                <p className="text-xs md:text-sm text-gray-400 font-display italic">
                  The button above will take users directly to the official MONETA MINING Web Application.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* FEATURES GRID */}
        <FadeIn delay={0.3} className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-mono text-electric-blue font-bold tracking-widest uppercase mb-2 block">
              COMPREHENSIVE CAPABILITIES
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-black text-white uppercase tracking-wider">
              FEATURES
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, i) => (
              <div 
                key={i} 
                className="glass-card p-5 border-white/10 bg-black/40 hover:border-electric-blue/40 transition-colors flex items-center space-x-4 group"
              >
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-electric-blue/30 group-hover:bg-electric-blue/10 transition-colors shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <span className="text-sm md:text-base font-display font-medium text-white group-hover:text-electric-blue transition-colors">
                    {feature.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* COMING NEXT — ANDROID APPLICATION */}
        <FadeIn delay={0.4} className="max-w-4xl mx-auto mb-20">
          <div className="glass-card p-8 md:p-10 border-emerald-green/30 bg-black/50 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-green/10 border border-emerald-green/30 flex items-center justify-center text-emerald-green shrink-0">
                <Smartphone size={32} />
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="text-xs font-mono text-emerald-green font-bold uppercase tracking-widest block mb-2">
                  FUTURE EXPANSION
                </span>
                <h2 className="font-heading text-2xl md:text-3xl font-black text-white uppercase tracking-wider mb-4">
                  COMING NEXT — ANDROID APPLICATION
                </h2>
                <div className="space-y-4 text-gray-300 font-display text-base leading-relaxed">
                  <p>
                    After the <strong className="text-white">MONETA MINING Web Application</strong> is fully developed, tested, and operational, MONETA MINING will be developed as an Android application and submitted to the Google Play Store.
                  </p>
                  <p>
                    The Android application will connect to the same MONETA MINING infrastructure, allowing users to access their account and mining information from mobile devices.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-center md:justify-start space-x-2 text-xs font-mono text-emerald-green font-bold uppercase">
                  <span className="w-2 h-2 rounded-full bg-emerald-green animate-pulse" />
                  <span>Google Play Store Deployment Planned Post Web Launch</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* MONETA MINING ROADMAP */}
        <FadeIn delay={0.5} className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-golden-yellow font-bold tracking-widest uppercase mb-2 block">
              EXECUTION PHASES
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-black text-white uppercase tracking-wider mb-4">
              MONETA MINING ROADMAP
            </h2>
            <p className="text-gray-400 font-display text-sm md:text-base max-w-2xl mx-auto">
              A structured step-by-step roadmap guiding the deployment, testing, and multi-platform release of MONETA MINING.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmapSteps.map((step, idx) => (
              <div 
                key={idx} 
                className={`glass-card p-6 border ${step.color} bg-black/40 flex flex-col justify-between hover:scale-[1.01] transition-transform`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold tracking-wider text-white/60">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300 font-bold uppercase">
                      {step.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-heading font-black text-white uppercase tracking-wider mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm font-display leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-golden-yellow font-bold uppercase">
                    STATUS: SCHEDULED
                  </span>
                  <ChevronRight size={14} className="text-gray-500" />
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* ONE ECOSYSTEM */}
        <FadeIn delay={0.6} className="max-w-5xl mx-auto mb-20">
          <div className="glass-card p-8 md:p-12 border-white/10 bg-black/50 relative overflow-hidden">
            <div className="text-center mb-10">
              <span className="text-xs font-mono text-electric-blue font-bold uppercase tracking-widest mb-2 block">
                UNIFIED INFRASTRUCTURE
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-black text-white uppercase tracking-wider">
                ONE ECOSYSTEM
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {ecosystemEntities.map((entity, i) => (
                <div key={i} className={`p-6 rounded-2xl bg-white/5 border ${entity.color} flex flex-col justify-between`}>
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-1">
                      {entity.tag}
                    </span>
                    <h3 className="font-heading font-black text-xl text-white uppercase tracking-wider mb-2">
                      {entity.name}
                    </h3>
                    <p className="text-gray-300 font-display text-sm leading-relaxed">
                      {entity.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center border-t border-white/10 pt-8">
              <p className="font-heading font-black text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-golden-yellow via-electric-blue to-royal-purple uppercase tracking-widest mb-2">
                ONE VISION. ONE ECOSYSTEM. A FUTURE BUILT TOGETHER.
              </p>
              <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                MONETA GLOBAL FOUNDATION
              </p>
            </div>
          </div>
        </FadeIn>

        {/* IMPORTANT NOTICE */}
        <FadeIn delay={0.7} className="max-w-4xl mx-auto mb-16">
          <div className="glass-card p-8 border-golden-yellow/30 bg-golden-yellow/5 relative overflow-hidden">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-golden-yellow/10 border border-golden-yellow/20 text-golden-yellow shrink-0">
                <ShieldAlert size={26} />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-heading font-black text-golden-yellow uppercase tracking-wider mb-3">
                  IMPORTANT
                </h3>
                <p className="text-gray-200 font-display text-sm md:text-base leading-relaxed">
                  MONETA MINING will only display and distribute MINT rewards that are actually recorded and supported by the MONETA CHAIN network. Mining balances shown in the application should correspond to the underlying MONETA CHAIN ledger and reward system.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* FINAL MOTTO & BRANDING */}
        <FadeIn delay={0.8} className="max-w-3xl mx-auto text-center border-t border-white/10 pt-12 pb-6">
          <div className="mb-4">
            <h3 className="font-heading font-black text-2xl md:text-3xl text-white uppercase tracking-wider mb-1">
              MONETA MINING
            </h3>
            <p className="font-mono text-sm md:text-base text-golden-yellow font-bold uppercase tracking-widest">
              Mine. Connect. Participate.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5">
            <h4 className="font-heading font-black text-xl md:text-2xl text-white uppercase tracking-wider mb-2">
              MONETA CHAIN
            </h4>
            <p className="font-heading font-black text-base md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-emerald-green via-electric-blue to-royal-purple uppercase tracking-widest">
              TRUST. FREEDOM. TOMORROW.
            </p>
          </div>
        </FadeIn>

      </div>

      {/* Interactive Modal for [ OPEN MONETA MINING ] */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="glass-card max-w-md w-full p-8 border-golden-yellow/40 bg-charcoal-black relative text-center box-glow-yellow">
            <div className="w-14 h-14 rounded-2xl bg-golden-yellow/10 border border-golden-yellow/30 flex items-center justify-center mx-auto mb-5 text-golden-yellow">
              <Pickaxe size={28} />
            </div>

            <span className="text-xs font-mono text-golden-yellow font-bold uppercase tracking-widest block mb-1">
              OFFICIAL LAUNCH PREPARATION
            </span>
            <h3 className="text-2xl font-heading font-black text-white uppercase tracking-wider mb-4">
              MONETA MINING WEB APPLICATION
            </h3>

            <p className="text-gray-300 font-display text-sm leading-relaxed mb-6">
              The official MONETA MINING Web Application is currently undergoing final deployment and security verification. It will be accessible directly on this domain upon public web launch.
            </p>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-left mb-6 text-xs text-gray-400 space-y-2">
              <div className="flex items-center justify-between text-white">
                <span>Platform:</span>
                <span className="font-bold text-electric-blue font-mono">Web Application</span>
              </div>
              <div className="flex items-center justify-between text-white">
                <span>Status:</span>
                <span className="font-bold text-golden-yellow font-mono">Pre-Launch Integration</span>
              </div>
              <div className="flex items-center justify-between text-white">
                <span>Access:</span>
                <span className="font-bold text-emerald-green font-mono">Direct Web Link (No Download)</span>
              </div>
            </div>

            <button
              onClick={() => setModalOpen(false)}
              className="w-full py-3.5 bg-golden-yellow text-black font-heading font-black uppercase tracking-wider rounded-xl hover:bg-white transition-colors"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
