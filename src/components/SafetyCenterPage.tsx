import { FadeIn } from "./FadeIn";
import { Shield } from "lucide-react";

export function SafetyCenterPage() {
  return (
    <div className="pt-24 pb-16 min-h-[100svh] relative overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="max-w-4xl mb-16 text-center mx-auto">
          <FadeIn>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-green/10 border border-emerald-green/20 text-emerald-green text-sm font-bold uppercase tracking-wider mb-6">
              <Shield size={14} />
              <span>Safety & Security</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">
              Safety <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-green to-electric-blue">Center</span>
            </h1>
            <p className="text-xl text-gray-400 font-display leading-relaxed">
              The Safety Center protects the MONETA CHAIN ecosystem from threats.
            </p>
          </FadeIn>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <FadeIn delay={0.2} className="glass-card p-8 border-emerald-green/20">
             <div className="text-golden-yellow font-bold text-sm tracking-widest uppercase mb-6 inline-block bg-golden-yellow/10 px-3 py-1 rounded-full border border-golden-yellow/20">
               Status: IN DEVELOPMENT
             </div>
             
             <h2 className="font-heading text-2xl font-bold mb-4 text-white">
               It includes:
             </h2>
             <ul className="list-disc list-inside space-y-4 text-gray-400 font-display leading-relaxed">
               <li>Network security monitoring</li>
               <li>Fraud detection systems</li>
               <li>Smart contract safety checks</li>
               <li>Validator behavior tracking</li>
               <li>AI-based threat detection (MQVM layer)</li>
             </ul>
             
             <div className="mt-8 bg-emerald-green/5 p-4 rounded border border-emerald-green/10 text-emerald-green/90 font-display text-sm leading-relaxed">
               <strong>Purpose:</strong> To ensure MONETA remains safe, stable, and reliable as it grows globally.
             </div>
          </FadeIn>
          
          <FadeIn delay={0.3} className="text-center">
             <p className="text-sm font-display text-gray-500 max-w-xl mx-auto">
               MONETA CHAIN is building a transparent and secure ecosystem where users understand their rights, developers understand their responsibilities, and the network stays safe and trustworthy. All legal systems are still under development and will evolve as MONETA CHAIN grows into a global infrastructure.
             </p>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
