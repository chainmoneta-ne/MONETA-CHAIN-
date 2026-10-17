import coinImg from '../assets/images/moneta_coin_asset_1788196434934.jpg';
import { FadeIn } from "./FadeIn";
import { Coins, Flame, ArrowUpRight, BarChart3, Users, Lock } from "lucide-react";

export function TokenSection() {
  return (
    <div id="token">
      <section className="py-32 relative border-t border-white/5 overflow-hidden">
        {/* Tokenomics Glow Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[500px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 flex flex-col items-center">
            <FadeIn>
              <img src={coinImg} referrerPolicy="no-referrer" alt="MONETA Coin" className="w-32 h-32 md:w-40 md:h-40 object-contain mb-10 mx-auto drop-shadow-[0_0_30px_rgba(255,165,0,0.4)] animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
              <h2 className="font-heading text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
                The <span className="text-brand-orange text-glow">MONETA</span> Coin
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 font-display max-w-3xl mx-auto">
                The lifeblood of the global decentralized ecosystem. Used for utility, governance, and network security.
              </p>
            </FadeIn>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn delay={0.1}>
              <h3 className="font-heading text-3xl font-bold mb-8 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <Coins className="text-brand-orange" size={24} />
                </div>
                <span>Token Utility</span>
              </h3>
              <div className="space-y-6 font-display">
                {[
                  { title: "Gas and Transaction Fees", desc: "Used to process blockchain transactions and network operations." },
                  { title: "Community Governance", desc: "Enables Monetarions to participate in ecosystem voting and future governance systems." },
                  { title: "Payment for Licenses", desc: "Used to access selected infrastructure services, digital permissions, and ecosystem utilities." },
                  { title: "Incentives and Rewards", desc: "Encourages ecosystem participation, engagement, contribution, and activity." }
                ].map((item, i) => (
                  <div key={i} className="glass-card p-6 flex items-start space-x-5 hover:border-brand-orange/30 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-3 h-3 rounded-full bg-brand-orange shadow-[0_0_10px_rgba(255,165,0,0.8)]"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white mb-2">{item.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h3 className="font-heading text-3xl font-bold mb-8 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <BarChart3 className="text-brand-orange" size={24} />
                </div>
                <span>Tokenomics</span>
              </h3>
              <div className="glass-card p-10 border-brand-orange/20 box-glow overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 blur-[60px] rounded-full pointer-events-none" />
                
                <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-10 border-b border-white/10 pb-8 gap-6 relative z-10">
                  <div>
                    <p className="text-sm text-gray-400 font-display uppercase tracking-wider mb-2 font-bold">Total Supply</p>
                    <p className="font-heading text-4xl md:text-5xl font-black text-white text-glow shadow-brand-orange/50">1,000,000,000</p>
                  </div>
                  <div className="sm:text-right">
                     <p className="text-sm text-gray-400 font-display uppercase tracking-wider mb-2 font-bold">Deflationary</p>
                     <div className="inline-flex items-center space-x-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full">
                       <Flame size={18} className="text-crimson-red" />
                       <span className="font-heading text-lg text-crimson-red font-bold">Burn Active</span>
                     </div>
                  </div>
                </div>

                <div className="space-y-4 relative z-10">
                   {[
                     { name: "Mining", percent: 30, color: "bg-electric-blue" },
                     { name: "Angel Investors", percent: 20, color: "bg-brand-orange" },
                     { name: "Ecosystem Fund", percent: 10, color: "bg-golden-yellow" },
                     { name: "Staking Rewards & Referrals", percent: 10, color: "bg-royal-purple" },
                     { name: "Development Team", percent: 9, color: "bg-electric-blue" },
                     { name: "Liquidity Pool", percent: 4, color: "bg-electric-blue" },
                     { name: "Reserve & Foundation", percent: 6, color: "bg-emerald-green" },
                     { name: "Partnerships", percent: 3, color: "bg-emerald-green" },
                     { name: "Advisors & Governance", percent: 4, color: "bg-crimson-red" },
                     { name: "Marketing & Game Ecosystem", percent: 4, color: "bg-royal-purple" }
                   ].map((allocation, i) => (
                      <div key={i} className="group">
                         <div className="flex justify-between text-base font-display mb-3">
                            <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{allocation.name}</span>
                            <span className="font-bold text-white text-glow">{allocation.percent}%</span>
                         </div>
                         <div className="h-3 w-full bg-black/50 rounded-full overflow-hidden">
                            <div className={`h-full ${allocation.color} rounded-full`} style={{ width: `${allocation.percent}%`, boxShadow: '0 0 10px currentColor' }} />
                         </div>
                      </div>
                   ))}
                   
                   <div className="pt-6 text-center">
                     <a href="/tokenomics" className="inline-block px-6 py-3 font-bold uppercase tracking-wider text-sm bg-brand-orange/10 hover:bg-brand-orange/20 text-brand-orange border border-brand-orange/30 rounded-lg transition-all hover:scale-105">
                        View Full Tokenomics
                     </a>
                   </div>
                </div>
              </div>
            </FadeIn>
          </div>
          
          {/* Mining / Validator snippet */}
          <FadeIn delay={0.3} className="mt-20 text-center">
             <div className="inline-flex glass-card items-center justify-between px-10 py-8 w-full max-w-4xl hover:border-brand-orange transition-all cursor-pointer group hover:scale-[1.02] duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/0 via-brand-orange/5 to-brand-orange/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="flex items-center space-x-8 text-left relative z-10">
                  <div className="p-5 rounded-2xl bg-brand-orange/10 text-brand-orange shadow-[0_0_20px_rgba(255,165,0,0.2)]">
                     <Lock size={40} />
                  </div>
                  <div>
                    <h4 className="font-heading font-black text-2xl mb-2 text-white">Earn by Validating</h4>
                    <p className="text-base text-gray-400 font-display">Contribute hardware, secure the network, earn block rewards.</p>
                  </div>
                </div>
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-orange group-hover:text-black transition-colors relative z-10">
                  <ArrowUpRight size={24} />
                </div>
             </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
