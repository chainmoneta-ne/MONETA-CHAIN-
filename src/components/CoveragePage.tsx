import { FadeIn } from "./FadeIn";
import { Globe, Activity, Map, Server, TrendingUp, Cpu, Network } from "lucide-react";

export function CoveragePage() {
  return (
    <div className="pt-24 pb-16 min-h-[100svh] relative overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-16 text-center mx-auto">
          <FadeIn>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-sm font-bold uppercase tracking-wider mb-6">
              <Globe size={14} />
              <span>Global Network</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">
              MONETA <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-blue">Coverage</span>
            </h1>
            <p className="text-xl text-white font-heading font-black mb-6 uppercase tracking-wider">
              Global Infrastructure. Real-Time Connectivity. Borderless Innovation.
            </p>
          </FadeIn>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <FadeIn delay={0.2} className="glass-card p-8 md:p-10 border-electric-blue/20 relative overflow-hidden">
             
             {/* Background Globe subtle element */}
             <div className="absolute right-[-100px] top-[-100px] opacity-10 pointer-events-none hidden md:block">
               <Globe size={400} className="text-electric-blue" strokeWidth={1} />
             </div>

             <div className="relative z-10 space-y-6 text-gray-300 font-display text-lg leading-relaxed">
                <p>
                  <strong className="text-white">MONETA Coverage</strong> represents the expansion and operation of the MONETA blockchain network across the world. It shows how MONETA connects people, businesses, developers, institutions, and digital systems through a fast, decentralized, and secure infrastructure designed for international use.
                </p>
                <p>
                  MONETA is not limited to one country or one region. The network is built to support global transactions, digital identity, governance, smart contracts, and decentralized applications operating across multiple continents in real time.
                </p>
                <p>
                  Through distributed validators, high-speed blockchain architecture, and intelligent network systems, MONETA enables users anywhere in the world to connect, transact, and build without traditional limitations.
                </p>
                <p>
                  Whether it is international payments, digital commerce, institutional systems, or decentralized innovation, MONETA provides a unified infrastructure capable of operating at global scale.
                </p>
             </div>
          </FadeIn>

          <FadeIn delay={0.3}>
             <h2 className="font-heading text-2xl font-black text-center mb-8 uppercase tracking-wide text-white">
               The Coverage System Displays
             </h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="glass-card p-6 border-white/10 flex items-start space-x-4 hover:border-electric-blue/30 transition-colors">
                   <Activity className="text-electric-blue w-6 h-6 flex-shrink-0 mt-1" />
                   <div>
                     <h3 className="font-bold text-white mb-1">Global Network Activity</h3>
                     <p className="text-sm text-gray-400">Real-time transaction flow and system usage worldwide.</p>
                   </div>
                </div>
                <div className="glass-card p-6 border-white/10 flex items-start space-x-4 hover:border-electric-blue/30 transition-colors">
                   <Map className="text-electric-blue w-6 h-6 flex-shrink-0 mt-1" />
                   <div>
                     <h3 className="font-bold text-white mb-1">Connected Regions</h3>
                     <p className="text-sm text-gray-400">Active continental and regional hubs operating on MONETA.</p>
                   </div>
                </div>
                <div className="glass-card p-6 border-white/10 flex items-start space-x-4 hover:border-electric-blue/30 transition-colors">
                   <Server className="text-electric-blue w-6 h-6 flex-shrink-0 mt-1" />
                   <div>
                     <h3 className="font-bold text-white mb-1">Validator Distribution</h3>
                     <p className="text-sm text-gray-400">Geographic footprint of network consensus nodes.</p>
                   </div>
                </div>
                <div className="glass-card p-6 border-white/10 flex items-start space-x-4 hover:border-electric-blue/30 transition-colors">
                   <TrendingUp className="text-electric-blue w-6 h-6 flex-shrink-0 mt-1" />
                   <div>
                     <h3 className="font-bold text-white mb-1">Ecosystem Growth</h3>
                     <p className="text-sm text-gray-400">Expansion of users, institutions, and deployed applications.</p>
                   </div>
                </div>
                <div className="glass-card p-6 border-white/10 flex items-start space-x-4 hover:border-electric-blue/30 transition-colors">
                   <Cpu className="text-electric-blue w-6 h-6 flex-shrink-0 mt-1" />
                   <div>
                     <h3 className="font-bold text-white mb-1">Live Blockchain Performance</h3>
                     <p className="text-sm text-gray-400">Key metrics on speed, latency, and uptime across the globe.</p>
                   </div>
                </div>
                <div className="glass-card p-6 border-white/10 flex items-start space-x-4 hover:border-electric-blue/30 transition-colors">
                   <Network className="text-electric-blue w-6 h-6 flex-shrink-0 mt-1" />
                   <div>
                     <h3 className="font-bold text-white mb-1">International Expansion</h3>
                     <p className="text-sm text-gray-400">Continuous progress tracking of new infrastructure rollouts.</p>
                   </div>
                </div>
             </div>
          </FadeIn>

          <FadeIn delay={0.4} className="glass-card p-8 border-electric-blue/20 text-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/5 to-electric-blue/5 group-hover:from-electric-blue/10 group-hover:to-electric-blue/10 transition-colors" />
             <div className="relative z-10">
               <p className="text-gray-300 font-display text-lg leading-relaxed mb-6">
                 As MONETA continues to expand, the network evolves into a worldwide digital backbone built for speed, transparency, scalability, and accessibility.
               </p>
               <p className="font-heading font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-blue uppercase tracking-wider">
                 MONETA is building a future where digital finance, governance, identity, and technology can operate seamlessly across borders through one decentralized infrastructure.
               </p>
             </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
