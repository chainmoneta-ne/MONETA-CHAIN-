import { FadeIn } from "./FadeIn";
import { Lock } from "lucide-react";

export function PrivacyPolicyPage() {
  return (
    <div className="pt-24 pb-16 min-h-[100svh] relative overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="max-w-4xl mb-16 text-center mx-auto">
          <FadeIn>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-sm font-bold uppercase tracking-wider mb-6">
              <Lock size={14} />
              <span>Legal Guidelines</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-blue">Policy</span>
            </h1>
            <p className="text-xl text-gray-400 font-display leading-relaxed">
              MONETA CHAIN is committed to protecting user privacy.
            </p>
          </FadeIn>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <FadeIn delay={0.2} className="glass-card p-8 border-electric-blue/20">
             <div className="text-golden-yellow font-bold text-sm tracking-widest uppercase mb-6 inline-block bg-golden-yellow/10 px-3 py-1 rounded-full border border-golden-yellow/20">
               Status: COMING SOON — Under Development
             </div>
             
             <h2 className="font-heading text-2xl font-bold mb-4 text-white">
               This section explains:
             </h2>
             <ul className="list-disc list-inside space-y-4 text-gray-400 font-display leading-relaxed">
               <li>What data is collected (name, email, wallet activity)</li>
               <li>How data is stored securely</li>
               <li>How blockchain transparency works with private user information</li>
               <li>What is never collected (private keys, sensitive personal data)</li>
               <li>How user data is protected using encryption and decentralization</li>
             </ul>
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
