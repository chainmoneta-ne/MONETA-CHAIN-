import coinImg from '../assets/images/moneta_coin_asset_1788196434934.jpg';
import { FadeIn } from "./FadeIn";
import { Coins, Target, Settings, PieChart, Lightbulb, TrendingUp, Globe, Eye, BadgeCheck } from "lucide-react";

export function TokenomicsPage() {
  return (
    <div className="pt-24 pb-16 min-h-[100svh] relative overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-16 text-center mx-auto">
          <FadeIn>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-sm font-bold uppercase tracking-wider mb-6">
              <Coins size={14} />
              <span>Tokenomics & System Overview</span>
            </div>
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-electric-blue to-golden-yellow rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <img 
                  src={coinImg} 
                  alt="MONETA COIN (MINT)" 
                  referrerPolicy="no-referrer"
                  className="relative w-44 h-44 md:w-56 md:h-56 object-cover rounded-full border-2 border-electric-blue/40 shadow-[0_0_50px_rgba(0,102,255,0.4)]"
                />
              </div>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">
              MONETA COIN <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-blue">(MINT)</span>
            </h1>
            <p className="text-xl text-gray-300 font-display leading-relaxed">
              The native digital asset and foundation of the MONETA CHAIN ecosystem.
            </p>
          </FadeIn>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* 1. What is MONETA Coin? */}
          <FadeIn delay={0.2} className="glass-card p-8 border-electric-blue/20">
            <h2 className="text-2xl font-heading font-black text-white uppercase tracking-wider mb-6 flex items-center space-x-3">
              <BadgeCheck className="text-electric-blue" />
              <span>1. What is MONETA Coin?</span>
            </h2>
            <div className="space-y-4 text-gray-300 font-display text-lg leading-relaxed">
              <p>
                MONETA Coin is the native digital asset of the MONETA CHAIN ecosystem. It is designed to power transactions, ecosystem participation, decentralized value exchange, and long-term digital economic growth within the MONETA CHAIN network.
              </p>
              <p>
                MONETA Coin (Symbol: <strong className="text-white">MINT</strong>) acts as the core utility asset and economic foundation of the entire MONETA ecosystem.
              </p>
              <p className="text-electric-blue font-bold">
                It is designed to support transparency, scalability, ownership, and sustainable blockchain-powered interaction across the network.
              </p>
            </div>
          </FadeIn>

          {/* 2. Purpose of MONETA Coin */}
          <FadeIn delay={0.3} className="glass-card p-8 border-white/5">
            <h2 className="text-2xl font-heading font-black text-white uppercase tracking-wider mb-6 flex items-center space-x-3 border-b border-white/10 pb-4">
              <Target className="text-electric-blue" />
              <span>2. Purpose of MONETA Coin</span>
            </h2>
            <p className="text-gray-300 font-display mb-6">
              MONETA Coin is designed with multiple ecosystem utilities and long-term economic functions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Payment for Licenses", desc: "Used to access selected infrastructure services, digital permissions, and ecosystem utilities." },
                { title: "Royalty Distribution", desc: "Supports transparent and automated value distribution across the ecosystem." },
                { title: "Community Governance", desc: "Enables Monetarions to participate in ecosystem voting and future governance systems." },
                { title: "Gas and Transaction Fees", desc: "Used to process blockchain transactions and network operations." },
                { title: "Utility Payments", desc: "Supports payments for ecosystem-related digital services and future integrations." },
                { title: "Incentives and Rewards", desc: "Encourages ecosystem participation, engagement, contribution, and activity." },
                { title: "Staking and Financial Products", desc: "Enables future staking systems and decentralized financial participation." },
                { title: "Transparency and Trust", desc: "All blockchain activity remains verifiable through decentralized infrastructure." },
                { title: "Ecosystem Stability and Growth", desc: "Supports long-term network sustainability and economic expansion." },
                { title: "Medium of Exchange", desc: "Acts as a digital exchange asset across the MONETA ecosystem." }
              ].map((item, idx) => (
                <div key={idx} className="bg-black/30 p-5 rounded-lg border border-white/5 hover:border-electric-blue/30 transition-colors">
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* 3. Token Properties */}
          <FadeIn delay={0.4} className="glass-card p-8 border-white/5">
            <h2 className="text-2xl font-heading font-black text-white uppercase tracking-wider mb-6 flex items-center space-x-3">
              <Settings className="text-electric-blue" />
              <span>3. Token Properties</span>
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-gray-300 font-display">
                <tbody className="divide-y divide-white/10">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 font-bold">Token Name</td>
                    <td className="py-4 px-4">MONETA Coin</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 font-bold">Symbol</td>
                    <td className="py-4 px-4 font-mono font-bold text-electric-blue">MINT</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 font-bold">Decimal</td>
                    <td className="py-4 px-4">18</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 font-bold">Initial Supply</td>
                    <td className="py-4 px-4">1,000,000,000 (1 Billion)</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 font-bold">Distribution Model</td>
                    <td className="py-4 px-4">Mining-Based Allocation</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 font-bold">Inflation System</td>
                    <td className="py-4 px-4">Controlled Emissions</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 font-bold">Deflation System</td>
                    <td className="py-4 px-4">Transaction Fee Burning</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 font-bold">Primary Use Case</td>
                    <td className="py-4 px-4">MONETA Ecosystem Utility</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeIn>

          {/* 4. MONETA Coin Distribution & 5. Philosophy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.5} className="glass-card p-8 border-golden-yellow/20">
              <h2 className="text-xl font-heading font-black text-white uppercase tracking-wider mb-6 flex items-center space-x-3">
                <PieChart className="text-golden-yellow" />
                <span>4. Distribution (Total: 100%)</span>
              </h2>
              <ul className="space-y-3 text-sm font-display text-gray-300">
                <li className="flex justify-between items-center bg-black/20 p-2 rounded"><span className="font-bold">Mining</span> <span className="text-golden-yellow font-bold">30%</span></li>
                <li className="flex justify-between items-center p-2"><span className="font-bold">Angel Investors</span> <span>20%</span></li>
                <li className="flex justify-between items-center p-2"><span className="font-bold">Ecosystem Fund</span> <span>10%</span></li>
                <li className="flex justify-between items-center p-2"><span className="font-bold">Development Team</span> <span>9%</span></li>
                <li className="flex justify-between items-center p-2"><span className="font-bold">Staking Rewards & Referrals</span> <span>10%</span></li>
                <li className="flex justify-between items-center p-2"><span className="font-bold">Liquidity Pool</span> <span>4%</span></li>
                <li className="flex justify-between items-center p-2"><span className="font-bold">Advisors</span> <span>2%</span></li>
                <li className="flex justify-between items-center p-2"><span className="font-bold">Partnerships</span> <span>3%</span></li>
                <li className="flex justify-between items-center p-2"><span className="font-bold">Game Ecosystem</span> <span>2%</span></li>
                <li className="flex justify-between items-center p-2"><span className="font-bold">Reserve</span> <span>3%</span></li>
                <li className="flex justify-between items-center p-2"><span className="font-bold">Governance</span> <span>2%</span></li>
                <li className="flex justify-between items-center p-2"><span className="font-bold">Marketing</span> <span>2%</span></li>
                <li className="flex justify-between items-center p-2"><span className="font-bold">MONETA Global Foundation</span> <span>3%</span></li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.6} className="glass-card p-8 border-white/5 opacity-90 h-full flex flex-col">
              <h2 className="text-xl font-heading font-black text-white uppercase tracking-wider mb-6 flex items-center space-x-3">
                <Lightbulb className="text-electric-blue" />
                <span>5. Distribution Philosophy</span>
              </h2>
              <div className="space-y-4 text-gray-400 font-display text-sm leading-relaxed flex-grow">
                <p>The MONETA Coin allocation structure is designed to balance:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Long-term ecosystem sustainability</li>
                  <li>Community participation</li>
                  <li>Network growth</li>
                  <li>Development support</li>
                  <li>Strategic expansion</li>
                  <li>Economic stability</li>
                </ul>
              </div>
              <p className="mt-4 text-electric-blue font-bold text-sm">
                The distribution model prioritizes ecosystem scalability while maintaining controlled allocation mechanisms.
              </p>
            </FadeIn>
          </div>

          {/* 6. Economic Model */}
          <FadeIn delay={0.7} className="glass-card p-8 border-white/5">
              <h2 className="text-2xl font-heading font-black text-white uppercase tracking-wider mb-6 flex items-center space-x-3 border-b border-white/10 pb-4">
                <TrendingUp className="text-electric-blue" />
                <span>6. Economic Model</span>
              </h2>
              <p className="text-gray-300 font-display mb-6">
                MONETA Coin operates using a balanced economic structure designed for long-term sustainability.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="bg-electric-blue/5 p-6 rounded-xl border border-electric-blue/20">
                    <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wider">Inflation Control</h3>
                    <p className="text-sm text-gray-300 mb-4 leading-relaxed">The ecosystem uses controlled emissions to prevent uncontrolled supply expansion.</p>
                    <p className="text-sm font-bold text-gray-400 mb-2">This model supports:</p>
                    <ul className="text-sm text-gray-400 space-y-1 ml-4 list-disc marker:text-electric-blue">
                      <li>Sustainable growth</li>
                      <li>Predictable token release</li>
                      <li>Long-term network balance</li>
                    </ul>
                 </div>
                 
                 <div className="bg-red-500/5 p-6 rounded-xl border border-red-500/20">
                    <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wider">Deflation Mechanism</h3>
                    <p className="text-sm text-gray-300 mb-4 leading-relaxed">A portion of transaction fees may be permanently removed from circulation through burning mechanisms.</p>
                    <p className="text-sm font-bold text-gray-400 mb-2">This helps:</p>
                    <ul className="text-sm text-gray-400 space-y-1 ml-4 list-disc marker:text-red-500">
                      <li>Reduce long-term circulating supply</li>
                      <li>Improve ecosystem balance</li>
                      <li>Support sustainable token economics</li>
                    </ul>
                 </div>
              </div>
          </FadeIn>

          {/* 7. Ecosystem Role */}
          <FadeIn delay={0.8} className="glass-card p-8 border-white/5">
            <h2 className="text-2xl font-heading font-black text-white uppercase tracking-wider mb-6 flex items-center space-x-3">
              <Globe className="text-electric-blue" />
              <span>7. Ecosystem Role</span>
            </h2>
            <div className="space-y-6 text-gray-300 font-display leading-relaxed">
              <p>MONETA Coin serves as the economic engine of the MONETA CHAIN ecosystem.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="bg-black/30 p-5 rounded-lg border border-white/5">
                   <p className="font-bold text-white mb-3">It connects:</p>
                   <ul className="text-electric-blue font-bold space-y-1 ml-2 text-sm">
                     <li>• Monetarions</li>
                     <li>• Developers</li>
                     <li>• Applications</li>
                     <li>• Ecosystem services</li>
                     <li>• Future decentralized infrastructure</li>
                   </ul>
                 </div>
                 <div className="bg-black/30 p-5 rounded-lg border border-white/5">
                   <p className="font-bold text-white mb-3">The token is designed to support:</p>
                   <ul className="text-gray-400 space-y-1 ml-2 text-sm">
                     <li>• Secure ecosystem participation</li>
                     <li>• Transparent blockchain interaction</li>
                     <li>• Scalable digital utility</li>
                     <li>• Sustainable economic growth</li>
                   </ul>
                 </div>
              </div>
            </div>
          </FadeIn>

          {/* 8. Long-Term Vision & 9. Final Statement */}
          <FadeIn delay={0.9} className="glass-card p-10 border-electric-blue/30 text-center relative overflow-hidden bg-electric-blue/5">
            <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-electric-blue/10 pointer-events-none mix-blend-overlay" />
            <div className="relative z-10 flex flex-col items-center">
              <Eye className="w-12 h-12 text-electric-blue mb-6" />
              <h2 className="text-2xl font-heading font-black text-white uppercase tracking-widest mb-6">Long-Term Vision</h2>
              <div className="space-y-4 text-gray-300 font-display text-lg max-w-2xl mx-auto leading-relaxed mb-10">
                <p>
                  To become the world's most trusted digital infrastructure, empowering billions of people, businesses, and governments to securely connect, innovate, transact, and prosper in a borderless digital economy. Through intelligent technology, decentralized infrastructure, and continuous innovation, MONETA will redefine trust, ownership, identity, commerce, and financial freedom for current and future generations.
                </p>
              </div>

              <h2 className="text-2xl font-heading font-black text-white uppercase tracking-widest mb-6">Our Mission</h2>
              <div className="space-y-4 text-gray-300 font-display text-lg max-w-2xl mx-auto leading-relaxed mb-10">
                <p>
                  Our mission is to build secure, intelligent, and scalable digital technologies that empower individuals, businesses, communities, and governments to connect, transact, innovate, and grow with confidence. We are committed to delivering trusted blockchain infrastructure, digital identity, financial services, enterprise solutions, marketplaces, education, and emerging technologies that are accessible, inclusive, and designed to create lasting value for people everywhere.
                </p>
              </div>

              <div className="border-t border-electric-blue/20 pt-8 w-full">
                <p className="font-heading font-black text-xl text-white uppercase tracking-wide mb-4">
                  Final Statement
                </p>
                <p className="text-gray-400 font-display leading-relaxed max-w-2xl mx-auto mb-6">
                  MONETA Coin (MINT) is the foundational economic asset of the MONETA ecosystem. It is designed to power decentralized interaction, support ecosystem growth, and enable long-term participation across the MONETA CHAIN network.
                </p>
                <div className="inline-block bg-black/50 px-6 py-2 rounded-full border border-white/10 font-mono text-golden-yellow font-bold uppercase tracking-widest text-sm">
                  Total Allocation Confirmed: 100%
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}
