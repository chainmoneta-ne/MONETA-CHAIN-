import { FadeIn } from "./FadeIn";
import { Scale } from "lucide-react";

export function TermsOfServicePage() {
  return (
    <div className="pt-24 pb-16 min-h-[100svh] relative overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="max-w-4xl mb-16 text-center mx-auto">
          <FadeIn>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-sm font-bold uppercase tracking-wider mb-6">
              <Scale size={14} />
              <span>Legal Guidelines</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">
              Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-blue">Service</span>
            </h1>
            <p className="text-xl text-gray-400 font-display leading-relaxed">
              These terms define how users interact with MONETA CHAIN.
            </p>
          </FadeIn>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <FadeIn delay={0.2} className="glass-card p-8 border-electric-blue/20">
             <div className="text-golden-yellow font-bold text-sm tracking-widest uppercase mb-6 inline-block bg-golden-yellow/10 px-3 py-1 rounded-full border border-golden-yellow/20">
               Status: COMING SOON
             </div>
             
             <h2 className="font-heading text-2xl font-bold mb-4 text-white">
               It includes:
             </h2>
             <ul className="list-disc list-inside space-y-4 text-gray-400 font-display leading-relaxed">
               <li>Rules for using the blockchain</li>
               <li>Developer responsibilities</li>
               <li>Prohibited activities (attacks, spam, fraud)</li>
               <li>Smart contract usage rules</li>
               <li>Ecosystem participation guidelines</li>
             </ul>
             
             <p className="mt-8 text-white font-bold font-display bg-white/5 p-4 rounded border border-white/10">
               Important message: MONETA CHAIN is under development, and rules may evolve over time.
             </p>
          </FadeIn>
          <FadeIn delay={0.3} className="text-center">
             <p className="text-sm font-display text-gray-500">
               All legal systems are still under development and will evolve as MONETA CHAIN grows into a global infrastructure.
             </p>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
