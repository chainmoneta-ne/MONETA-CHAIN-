import veraAvatar from '../assets/images/vera_black_woman_avatar_1779390780706.png';
import { FadeIn } from "./FadeIn";
import { BrainCircuit, BookOpen, Blocks, TerminalSquare, Wallet, Scale, Sparkles, Globe2, ArrowRight } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

export function EcosystemSection() {
  return (
    <div id="ecosystem">
      {/* FULL ECOSYSTEM GRID */}
      <section className="py-24 border-t border-white/5 relative">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="mb-14">
              <span className="text-xs font-mono text-electric-blue font-bold tracking-widest uppercase mb-2 block">
                ONE VISION. ONE ECOSYSTEM. A FUTURE BUILT TOGETHER.
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
                EXPLORE THE <span className="text-electric-blue">MONETA ECOSYSTEM</span>
              </h2>
              <p className="text-gray-300 font-display text-lg max-w-3xl">
                <strong className="text-white">VORTEX INNOVATIONS</strong> is connected to a growing ecosystem of technology, blockchain, and community-focused initiatives.
              </p>
            </div>
          </FadeIn>

          {/* Core Ecosystem Pillars Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <FadeIn delay={0.1}>
              <div className="glass-card p-6 border-white/10 bg-black/40 h-full flex flex-col justify-between hover:border-electric-blue/40 transition-colors">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-electric-blue/10 flex items-center justify-center text-electric-blue mb-4">
                    <Sparkles size={20} />
                  </div>
                  <h3 className="text-xl font-heading font-black text-white uppercase tracking-wider mb-1">
                    VORTEX INNOVATIONS
                  </h3>
                  <p className="text-xs font-mono text-electric-blue font-bold uppercase tracking-wider mb-3">
                    Technology & Innovation
                  </p>
                  <p className="text-gray-400 text-sm font-display mb-4">
                    Cutting-edge engineering and frontier technologies powering next-generation decentralized ecosystems.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-500">
                  <span>STATUS: ACTIVE</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="glass-card p-6 border-electric-blue/30 bg-black/40 h-full flex flex-col justify-between hover:border-electric-blue transition-colors">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-electric-blue/20 flex items-center justify-center text-electric-blue mb-4">
                    <Blocks size={20} />
                  </div>
                  <h3 className="text-xl font-heading font-black text-white uppercase tracking-wider mb-1">
                    MONETA CHAIN
                  </h3>
                  <p className="text-xs font-mono text-electric-blue font-bold uppercase tracking-wider mb-3">
                    Blockchain Infrastructure
                  </p>
                  <p className="text-gray-300 text-sm font-display mb-4">
                    Explore the blockchain infrastructure, technology, and ecosystem developed within the MONETA ecosystem.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <RouterLink to="/ecosystem" className="text-xs font-bold text-electric-blue hover:underline flex items-center gap-1">
                    <span>VISIT MONETA CHAIN</span> <ArrowRight size={14} />
                  </RouterLink>
                  <span className="text-[10px] font-mono text-gray-400">COMING SOON</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="glass-card p-6 border-royal-purple/30 bg-black/40 h-full flex flex-col justify-between hover:border-royal-purple transition-colors">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-royal-purple/20 flex items-center justify-center text-royal-purple mb-4">
                    <Globe2 size={20} />
                  </div>
                  <h3 className="text-xl font-heading font-black text-white uppercase tracking-wider mb-1">
                    MONETA GLOBAL FOUNDATION
                  </h3>
                  <p className="text-xs font-mono text-royal-purple font-bold uppercase tracking-wider mb-3">
                    Global Community Impact
                  </p>
                  <p className="text-gray-300 text-sm font-display mb-4">
                    Discover the foundation's initiatives focused on community impact, social development, and creating positive change.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-bold text-royal-purple flex items-center gap-1 opacity-90">
                    <span>VISIT FOUNDATION</span> <ArrowRight size={14} />
                  </span>
                  <span className="text-[10px] font-mono text-gray-400">COMING SOON</span>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            {[
              { title: "MONETA Chain", desc: "The core Layer-1 blockchain network.", icon: <Blocks size={28}/>, span: "md:col-span-8 lg:col-span-8", height: "h-64" },
              { title: "VERA AI", desc: "Intelligent analytics and security engine natively integrated.", icon: <img src={veraAvatar} alt="VERA AI" referrerPolicy="no-referrer" className="w-8 h-8 rounded-full object-cover" />, span: "md:col-span-4 lg:col-span-4", height: "h-64", link: "/vera" },
              { title: "MONETA Academy", desc: "Comprehensive learning platform for education.", icon: <BookOpen size={28}/>, span: "md:col-span-4 lg:col-span-4", height: "h-48", link: "/academy" },
              { title: "Developer APIs", desc: "SDKs, APIs, and tools for building the future.", icon: <TerminalSquare size={28}/>, span: "md:col-span-4 lg:col-span-4", height: "h-48" },
              { title: "Wallets & Identity", desc: "Secure multi-sig digital asset storage protocols.", icon: <Wallet size={28}/>, span: "md:col-span-4 lg:col-span-4", height: "h-48" },
              { title: "Governance", desc: "Decentralized community voting protocols.", icon: <Scale size={28}/>, span: "md:col-span-12 lg:col-span-12", height: "h-40" }
            ].map((feature, i) => {
              const CardContent = (
                <div className={`glass-card p-8 hover:-translate-y-1 transition-transform group cursor-pointer flex flex-col h-full ${feature.height}`}>
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-electric-blue mb-6 group-hover:bg-electric-blue/10 transition-colors">
                     {feature.icon}
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3 mt-auto">{feature.title}</h3>
                  <p className="text-gray-400 text-sm font-display">{feature.desc}</p>
                </div>
              );

              return feature.link ? (
                <RouterLink to={feature.link} key={i} className={`${feature.span} block`}>
                  {CardContent}
                </RouterLink>
              ) : (
                <div key={i} className={`${feature.span} block`}>
                  {CardContent}
                </div>
              );
            })}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-12 text-center">
              <RouterLink to="/ecosystem" className="btn-primary inline-flex items-center space-x-2">
                <span>Explore Full Ecosystem</span>
                <span className="opacity-70 group-hover:translate-x-1 transition-transform">→</span>
              </RouterLink>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* VERA AI SPOTLIGHT */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Neon AI visual background */}
        <div className="absolute top-0 right-0 w-[50%] h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-electric-blue/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-royal-purple/30 bg-royal-purple/10 mb-6 text-royal-purple">
                <BrainCircuit size={14} />
                <span className="text-xs font-display tracking-widest uppercase">Artificial Intelligence Edge</span>
              </div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
                Meet <RouterLink to="/vera" className="hover:opacity-80 transition-opacity"><span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-royal-purple">VERA AI</span></RouterLink>
              </h2>
              <p className="text-lg text-gray-400 font-display leading-relaxed mb-8">
                VERA AI isn't an add-on; it's baked into the MONETA DNA. It provides smart automation, predictive threat detection, intelligent analytics, and generates natural-language insights over raw block data.
              </p>
              
              <ul className="space-y-4 font-display text-sm text-gray-300">
                 <li className="flex items-center space-x-3"><div className="w-1.5 h-1.5 rounded-full bg-electric-blue"/> <span>Intelligent Smart Contract Auditing</span></li>
                 <li className="flex items-center space-x-3"><div className="w-1.5 h-1.5 rounded-full bg-electric-blue"/> <span>AI-Generated Analytics and Reporting</span></li>
                 <li className="flex items-center space-x-3"><div className="w-1.5 h-1.5 rounded-full bg-electric-blue"/> <span>Automated Threat & Anomaly Mitigation</span></li>
                 <li className="flex items-center space-x-3"><div className="w-1.5 h-1.5 rounded-full bg-electric-blue"/> <span>Developer AI Co-Pilot Integrations</span></li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.2} className="relative">
               <RouterLink to="/vera" className="relative aspect-square md:aspect-auto md:h-[400px] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-500">
                 <img src={veraAvatar} alt="VERA AI" referrerPolicy="no-referrer" className="w-full h-full max-h-[380px] rounded-2xl object-cover border border-royal-purple/30 shadow-[0_0_40px_rgba(138,43,226,0.3)]" />
               </RouterLink>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
