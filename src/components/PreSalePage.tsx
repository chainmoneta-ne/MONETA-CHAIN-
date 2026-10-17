import coinImg from '../assets/images/moneta_coin_asset_1788196434934.jpg';
import { FadeIn } from "./FadeIn";
import { Rocket, Brain, Zap, Lock, Users, Clock, Lightbulb, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function PreSalePage() {
  return (
    <div className="pt-24 pb-16 min-h-[100svh] relative overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-golden-yellow/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-16 text-center mx-auto">
          <FadeIn>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-golden-yellow/10 border border-golden-yellow/20 text-golden-yellow text-sm font-bold uppercase tracking-wider mb-6">
              <Rocket size={14} />
              <span>Early Access Notice</span>
            </div>
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-golden-yellow to-electric-blue rounded-full blur-lg opacity-70"></div>
                <img 
                  src={coinImg} 
                  alt="MONETA Pre-Sale" 
                  referrerPolicy="no-referrer"
                  className="relative w-36 h-36 md:w-44 md:h-44 object-cover rounded-full border-2 border-golden-yellow/40 shadow-[0_0_40px_rgba(255,184,0,0.3)]"
                />
              </div>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">
              MONETA <span className="text-transparent bg-clip-text bg-gradient-to-r from-golden-yellow to-electric-blue">Pre-Sale</span>
            </h1>
            <p className="text-2xl text-white font-heading font-black mb-6 uppercase tracking-wider">
              The MONETA Pre-Sale phase is approaching.
            </p>
            <div className="space-y-6 text-gray-300 font-display text-lg leading-relaxed max-w-3xl mx-auto">
              <p>
                This is a limited early opportunity designed for those who understand timing, vision, and long-term digital value participation.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Areas */}
        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          
          <FadeIn delay={0.2} className="glass-card p-8 border-electric-blue/20">
            <h2 className="text-2xl font-heading font-black text-white uppercase tracking-wider mb-6 flex items-center space-x-3">
              <Brain className="text-electric-blue" />
              <span>Positioning Message</span>
            </h2>
            <div className="space-y-4 text-gray-300 font-display text-lg leading-relaxed">
              <p>In every major technological shift, there are three groups:</p>
              <ul className="list-none space-y-2 text-white font-bold pl-4 border-l-2 border-electric-blue/30 my-4">
                <li>• Those who see it early</li>
                <li>• Those who see it late</li>
                <li>• Those who realize it too late</li>
              </ul>
              <p className="text-electric-blue font-bold pt-2">
                MONETA is designed for the first group — the early builders of a new digital economy.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} className="glass-card p-8 border-golden-yellow/20">
            <h2 className="text-2xl font-heading font-black text-white uppercase tracking-wider mb-6 flex items-center space-x-3">
              <Zap className="text-golden-yellow" />
              <span>Pre-Sale Readiness</span>
            </h2>
            <div className="space-y-4 text-gray-300 font-display text-lg leading-relaxed">
              <p>Participants are encouraged to prepare in advance:</p>
              <ul className="text-gray-400 font-display space-y-2 mt-4 ml-2">
                <li className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 bg-golden-yellow rounded-full" />
                  <span>Ensure wallet readiness</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 bg-golden-yellow rounded-full" />
                  <span>Understand the ecosystem structure</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 bg-golden-yellow rounded-full" />
                  <span>Follow official updates</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 bg-golden-yellow rounded-full" />
                  <span>Stay connected to MONETA announcements</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 bg-golden-yellow rounded-full" />
                  <span>Position early awareness before public access begins</span>
                </li>
              </ul>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.4} className="glass-card p-8 border-white/10 hover:border-electric-blue/30 transition-colors opacity-95">
              <h2 className="text-xl font-heading font-black text-white uppercase tracking-wider mb-4 flex items-center space-x-2">
                <Lock className="text-electric-blue w-5 h-5" />
                <span>Early Access Principle</span>
              </h2>
              <div className="space-y-4 text-gray-400 font-display text-base leading-relaxed">
                <p>Pre-sale phases are typically limited in time and participation.</p>
                <p>Early participation is not just about access — it is about alignment with the foundation stage of the ecosystem.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.5} className="glass-card p-8 border-white/10 hover:border-electric-blue/30 transition-colors opacity-95">
              <h2 className="text-xl font-heading font-black text-white uppercase tracking-wider mb-4 flex items-center space-x-2">
                <Users className="text-electric-blue w-5 h-5" />
                <span>Community Mindset</span>
              </h2>
              <div className="space-y-4 text-gray-400 font-display text-base leading-relaxed">
                <p>MONETA is not designed for passive observation. It is built for active participation.</p>
                <p>Those who position early become part of the foundational network — the Monetarions who shape early momentum.</p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.6} className="glass-card p-8 border-white/10 text-center">
            <Clock className="w-12 h-12 text-gray-500 mx-auto mb-4" />
            <h2 className="text-lg font-heading font-bold text-gray-400 uppercase tracking-widest mb-2">STATUS</h2>
            <p className="text-3xl font-heading font-black text-white uppercase tracking-wide">Pre-Sale: Coming Soon</p>
          </FadeIn>
          
          <FadeIn delay={0.7} className="glass-card p-8 border-electric-blue/20 bg-electric-blue/5 text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/5 to-transparent pointer-events-none mix-blend-overlay" />
             <div className="relative z-10">
               <Lightbulb className="w-10 h-10 text-electric-blue mx-auto mb-4" />
               <h2 className="text-xl font-heading font-black text-white uppercase tracking-wider mb-4">Final Note</h2>
               <p className="text-lg text-gray-300 font-display leading-relaxed mb-6 font-bold">
                 Opportunity in emerging systems is defined by awareness, not urgency.
               </p>
               <p className="text-lg text-electric-blue font-bold uppercase tracking-widest">
                 Stay prepared. Stay informed. Stay aligned with MONETA.
               </p>
             </div>
          </FadeIn>

        </div>

        {/* Join CTA */}
        <FadeIn delay={0.8} className="max-w-3xl mx-auto mb-20 text-center glass-card p-12 border-golden-yellow/30 bg-golden-yellow/5">
           <h2 className="font-heading text-3xl md:text-4xl font-black mb-4 uppercase text-white tracking-widest">Get Ready.</h2>
           <p className="text-gray-300 font-display mb-8 text-lg">
             Don't miss the opportunity. Join the Waitlist to get ready for the upcoming elements and ensure you're positioned early.
           </p>
           
           <div>
             <Link to="/waitlist" className="bg-golden-yellow text-black hover:bg-white transition-colors font-bold uppercase tracking-widest px-10 py-4 rounded-lg inline-flex items-center space-x-2 box-glow-yellow text-lg">
               <span>Join The Waitlist</span>
               <ArrowRight size={20} />
             </Link>
           </div>
        </FadeIn>

      </div>
    </div>
  );
}
