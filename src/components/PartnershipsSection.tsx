import { FadeIn } from "./FadeIn";
import { Handshake, Network } from "lucide-react";

export function PartnershipsSection() {
  return (
    <section id="partnerships" className="py-32 relative bg-charcoal-black border-t border-electric-blue/10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-sm font-bold uppercase tracking-wider mb-6">
              <Handshake size={14} />
              <span>PARTNERSHIPS</span>
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">
              BUILDING <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-blue">TOGETHER.</span> GROWING <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-blue">TOGETHER.</span>
            </h2>
            
            <div className="text-lg text-gray-300 font-display leading-relaxed space-y-4 max-w-3xl mx-auto">
              <p>
                MONETA CHAIN is focused on building meaningful partnerships with organizations, businesses, developers, innovators, and communities that share our vision for the future of blockchain technology.
              </p>
              <p>
                Our partnership ecosystem is currently under development.
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0.2} className="glass-card p-10 md:p-12 border-electric-blue/20 flex flex-col items-center text-center bg-black/60">
             
             <div className="w-16 h-16 rounded-full bg-electric-blue/10 border border-electric-blue/30 flex items-center justify-center mb-6">
               <Network className="w-8 h-8 text-electric-blue" />
             </div>
             
             <h3 className="text-2xl font-heading font-black text-white uppercase tracking-wider mb-6">PARTNERSHIPS WILL BE REVEALED SOON</h3>
             
             <div className="space-y-6 text-gray-400 font-display text-lg leading-relaxed mb-10 max-w-2xl">
               <p>
                 Official partnerships, collaborators, and ecosystem partners will be announced at the appropriate time.
               </p>
               <p>
                 Stay connected. The MONETA CHAIN partnership ecosystem will be revealed soon.
               </p>
             </div>
             
             <div className="glass-card px-8 py-6 w-full max-w-xl border-white/5 bg-white/5">
                <h4 className="text-electric-blue font-bold tracking-widest uppercase mb-0">PARTNERSHIPS — COMING SOON.</h4>
             </div>
             
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
