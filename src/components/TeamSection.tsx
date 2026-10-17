import { FadeIn } from "./FadeIn";
import { Users, UserPlus } from "lucide-react";

export function TeamSection() {
  return (
    <section id="team" className="py-32 relative bg-black border-t border-electric-blue/10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-sm font-bold uppercase tracking-wider mb-6">
              <Users size={14} />
              <span>THE TEAM BEHIND MONETA CHAIN</span>
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">
              BUILT BY <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-blue">PEOPLE.</span> POWERED BY <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-blue">PURPOSE.</span>
            </h2>
            
            <div className="text-lg text-gray-300 font-display leading-relaxed space-y-4 max-w-3xl mx-auto">
              <p>
                MONETA CHAIN is being developed by a dedicated team of innovators, engineers, researchers, designers, and technology professionals working together to build the next generation of blockchain infrastructure.
              </p>
              <p>
                The project is focused on creating technology that is secure, scalable, transparent, and accessible across industries and communities.
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0.2} className="glass-card p-10 md:p-12 border-electric-blue/20 flex flex-col items-center text-center bg-black/60">
             
             <div className="w-16 h-16 rounded-full bg-electric-blue/10 border border-electric-blue/30 flex items-center justify-center mb-6">
               <UserPlus className="w-8 h-8 text-electric-blue" />
             </div>
             
             <h3 className="text-2xl font-heading font-black text-white uppercase tracking-wider mb-6">OUR TEAM WILL BE REVEALED SOON</h3>
             
             <div className="space-y-6 text-gray-400 font-display text-lg leading-relaxed mb-10 max-w-2xl">
               <p>
                 The individuals behind MONETA CHAIN are currently being prepared for an official introduction.
               </p>
               <p>
                 Team profiles, leadership roles, technical contributors, and key members will be revealed soon.
               </p>
               <p>
                 We believe transparency matters. When the official announcement is made, visitors will be able to learn more about the people building and contributing to the MONETA CHAIN project.
               </p>
             </div>
             
             <div className="glass-card px-8 py-6 w-full max-w-xl border-white/5 bg-white/5">
                <h4 className="text-electric-blue font-bold tracking-widest uppercase mb-2">COMING SOON</h4>
                <p className="text-white font-display font-medium mb-1">Meet the people behind MONETA CHAIN.</p>
                <p className="text-gray-400 text-sm font-display">The team will be officially revealed soon.</p>
             </div>
             
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
