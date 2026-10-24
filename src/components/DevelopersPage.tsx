import { FadeIn } from "./FadeIn";
import { Terminal, Github, Code, Box, Server, Shield, ArrowRight, LayoutDashboard, Cpu, Smartphone, Lock, Search, BookOpen, Fingerprint, BrainCircuit, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

export function DevelopersPage() {
  return (
    <div className="pt-24 pb-16 min-h-[100svh] relative overflow-hidden bg-background">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-royal-purple/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[1000px] h-[500px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mb-20 text-center mx-auto">
          <FadeIn>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-royal-purple/10 border border-royal-purple/20 text-royal-purple text-sm font-bold uppercase tracking-wider mb-6">
              <Terminal size={14} />
              <span>Developer & APIs</span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-black mb-6 tracking-tight">
              Build the Future on <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-purple to-electric-blue">MONETA CHAIN</span>
            </h1>
            <p className="text-xl text-gray-400 font-display leading-relaxed">
              MONETA CHAIN is an advanced independent blockchain ecosystem designed for speed, security, scalability, and real-world adoption. 
              The Developer & APIs portal is the main gateway for developers, startups, enterprises, researchers, and innovators.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.1} className="mt-8">
            <div className="glass-card p-4 inline-flex items-center space-x-3 text-left border-amber-500/30 bg-amber-500/10">
              <div className="p-2 bg-amber-500/20 rounded text-amber-400">
                <Terminal size={20} />
              </div>
              <div className="font-mono text-xs md:text-sm text-gray-200">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <span className="text-amber-300 font-bold uppercase">DEVELOPER TOOLS & APIS</span>
                </div>
                MONETA CHAIN developer tools, testnets, and RPCs are currently under active development.
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Why Build Section */}
            <FadeIn delay={0.2}>
              <h2 className="font-heading text-3xl font-bold mb-8 flex items-center space-x-3 border-b border-white/10 pb-4">
                <Box className="text-electric-blue" /> 
                <span>Why Build on MONETA CHAIN?</span>
              </h2>
              
              <div className="space-y-8">
                <div className="glass-card p-6 border-l-4 border-l-electric-blue">
                  <h3 className="font-heading text-xl font-bold mb-3 text-white">1. Ultra Fast Infrastructure</h3>
                  <p className="text-gray-400 font-display mb-4 text-sm leading-relaxed">
                    Designed for high-speed blockchain operations with millisecond-level processing architecture for fast transactions, 
                    confirmations, smart contract execution, and cross-chain communication. This allows developers to create applications that feel almost real-time.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-electric-blue/80">
                    <span className="px-2 py-1 bg-electric-blue/10 rounded">Payment Apps</span>
                    <span className="px-2 py-1 bg-electric-blue/10 rounded">AI Systems</span>
                    <span className="px-2 py-1 bg-electric-blue/10 rounded">Gaming</span>
                    <span className="px-2 py-1 bg-electric-blue/10 rounded">Defi Trading</span>
                  </div>
                </div>

                <div className="glass-card p-6 border-l-4 border-l-royal-purple">
                  <h3 className="font-heading text-xl font-bold mb-3 text-white">2. Hybrid On-Chain + Off-Chain</h3>
                  <p className="text-gray-400 font-display mb-4 text-sm leading-relaxed">
                    Combines on-chain security (consensus, ownership, transfers) with off-chain large data processing, AI computations, and high-speed analytics. 
                    This hybrid design helps developers build advanced systems without overloading the blockchain.
                  </p>
                </div>

                <div className="glass-card p-6 border-l-4 border-l-electric-blue">
                  <h3 className="font-heading text-xl font-bold mb-3 text-white">3. Security-First Architecture</h3>
                  <p className="text-gray-400 font-display text-sm leading-relaxed mb-4">
                    Multiple security layers including blockchain core protection, network shell layer, identity verification, anti-spam, 
                    and real-time threat detection protect network inputs/outputs across all environments.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-electric-blue/80">
                    <span className="px-2 py-1 bg-electric-blue/10 rounded">Smart Contract Verification</span>
                    <span className="px-2 py-1 bg-electric-blue/10 rounded">Validator Security</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* APIs */}
            <FadeIn delay={0.3}>
              <h2 className="font-heading text-3xl font-bold mb-8 flex items-center space-x-3 border-b border-white/10 pb-4">
                <Server className="text-royal-purple" /> 
                <span>API Categories</span>
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Blockchain APIs", icon: <Box size={24} />, desc: "Read blocks, verify transactions, check balances.", endpoint: "GET /api/v1/block/latest" },
                  { title: "Wallet APIs", icon: <Lock size={24} />, desc: "Generate wallets, sign transactions, manage assets.", endpoint: "POST /api/v1/wallet/create" },
                  { title: "Smart Contract APIs", icon: <Code size={24} />, desc: "Deploy, execute, and query decentralized programs.", endpoint: "POST /api/v1/contracts/deploy" },
                  { title: "Identity APIs", icon: <Fingerprint size={24} />, desc: "Decentralized identity and access permissions.", endpoint: "POST /api/v1/identity/verify" },
                ].map((api, i) => (
                  <div key={i} className="glass-card p-6 hover:border-royal-purple/50 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                          <div className="p-3 bg-electric-blue/20 rounded-lg text-electric-blue group-hover:scale-110 transition-transform">
                            {api.icon}
                          </div>
                        </div>
                        <h3 className="font-heading font-bold text-lg mb-2 text-white">{api.title}</h3>
                        <p className="text-sm text-gray-400 font-display mb-4 flex-grow">{api.desc}</p>
                        <div className="bg-black/50 p-2.5 rounded border border-white/5 text-xs font-mono text-electric-blue/80 break-all select-all">
                          {api.endpoint}
                        </div>
                      </div>
                    ))}
                    <div className="glass-card p-6 border-golden-yellow/30 bg-golden-yellow/5 hover:border-golden-yellow/50 transition-colors flex flex-col group">
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-golden-yellow/20 rounded-lg text-golden-yellow group-hover:scale-110 transition-transform">
                          <BrainCircuit size={24} />
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-lg mb-2 text-white">5. AI + Data APIs</h3>
                      <p className="text-sm text-gray-400 font-display mb-4 flex-grow">
                        Used for advanced intelligent systems. AI processing, Data analysis, Predictive systems, Analytics.
                      </p>
                      <div className="bg-black/50 p-2.5 rounded border border-white/5 text-xs font-mono text-golden-yellow/80 break-all">
                        Future: AI Smart Agents, Intelligent Contracts
                      </div>
                    </div>
                  </div>
              </FadeIn>

              {/* Devnet & Stages */}
              <FadeIn delay={0.4}>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 flex items-center space-x-4 border-b border-white/10 pb-4">
                  <div className="p-2 bg-electric-blue/10 rounded-lg text-electric-blue">
                    <LayoutDashboard size={28} /> 
                  </div>
                  <span>Network Stages & Devnet</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-6 text-white">Devnet Features</h3>
                    <ul className="space-y-4 text-sm font-display text-gray-400">
                      <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 rounded-full bg-electric-blue" /><span>Free testing environment</span></li>
                      <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 rounded-full bg-electric-blue" /><span>Test tokens</span></li>
                      <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 rounded-full bg-electric-blue" /><span>Smart contract deployment</span></li>
                      <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 rounded-full bg-electric-blue" /><span>Validator simulation</span></li>
                      <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 rounded-full bg-electric-blue" /><span>Performance analysis</span></li>
                    </ul>
                  </div>
                  <div className="relative border-l-2 border-white/10 pl-8 space-y-8">
                    {[
                      { stage: "Stage 1", title: "Private Development", desc: "Internal development and architecture testing.", status: "active" },
                      { stage: "Stage 2", title: "Developer Devnet", desc: "Developers begin testing applications.", status: "upcoming" },
                      { stage: "Stage 3", title: "Public Testnet", desc: "Open public testing environment.", status: "upcoming" },
                      { stage: "Stage 4", title: "Security Audits", desc: "Advanced security reviews and optimizations.", status: "upcoming" },
                      { stage: "Stage 5", title: "Mainnet Launch", desc: "Official global network launch.", status: "upcoming" },
                    ].map((s, i) => (
                      <div key={i} className="relative group">
                        <div className={`absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-background transition-colors ${s.status === 'active' ? 'bg-electric-blue shadow-[0_0_10px_rgba(0,102,255,0.8)]' : 'bg-gray-700 group-hover:bg-gray-500'}`} />
                        <h3 className="font-heading font-bold text-lg mb-1">
                          <span className={s.status === 'active' ? 'text-electric-blue text-glow' : 'text-gray-500'}>{s.stage}</span> — <span className="text-white">{s.title}</span>
                        </h3>
                        <p className="text-gray-400 text-sm font-display">{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Ecosystem & Community */}
              <FadeIn delay={0.5}>
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="glass-card p-8 border-royal-purple/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-royal-purple/10 blur-[40px] pointer-events-none" />
                    <h3 className="font-heading font-black text-2xl mb-4 text-white relative z-10">Developer Community</h3>
                    <p className="text-sm font-display text-gray-400 mb-6 relative z-10">
                      The ecosystem aims to support collaboration and innovation. Future systems include:
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs font-mono text-royal-purple/80 relative z-10">
                      <span className="px-3 py-1 bg-royal-purple/10 rounded">Developer Forums</span>
                      <span className="px-3 py-1 bg-royal-purple/10 rounded">Git Repositories</span>
                      <span className="px-3 py-1 bg-royal-purple/10 rounded">Community Grants</span>
                      <span className="px-3 py-1 bg-royal-purple/10 rounded">Hackathons</span>
                    </div>
                  </div>
                  
                  <div className="glass-card p-8 border-electric-blue/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-electric-blue/10 blur-[40px] pointer-events-none" />
                    <h3 className="font-heading font-black text-2xl mb-4 text-white relative z-10">Monitoring & Analytics</h3>
                    <p className="text-sm font-display text-gray-400 mb-6 relative z-10">
                      Developers will access tools for performance tracking:
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs font-mono text-electric-blue/80 relative z-10">
                      <span className="px-3 py-1 bg-electric-blue/10 rounded">API Usage Analytics</span>
                      <span className="px-3 py-1 bg-electric-blue/10 rounded">Network Health Metrics</span>
                      <span className="px-3 py-1 bg-electric-blue/10 rounded">Performance Dashboards</span>
                      <span className="px-3 py-1 bg-electric-blue/10 rounded">Error Tracking</span>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Developer Terms */}
              <FadeIn delay={0.6}>
                 <div className="glass-card p-8 bg-black/40 border-white/5">
                   <h3 className="font-heading font-bold text-xl mb-6 text-white border-b border-white/10 pb-4">Developer Terms of Use</h3>
                   <div className="space-y-6 text-sm font-display text-gray-400">
                     <div>
                       <h4 className="text-golden-yellow font-bold uppercase tracking-widest text-xs mb-2">Experimental Notice</h4>
                       <p>MONETA CHAIN is under active development. Features may change, be upgraded, or become deprecated. Test carefully before production use.</p>
                     </div>
                     <div className="grid sm:grid-cols-2 gap-6">
                       <div>
                         <h4 className="text-white font-bold mb-2">Acceptable Usage</h4>
                         <p className="text-xs">Developers must not distribute malware, abuse APIs, exploit vulnerabilities maliciously, spam the infrastructure, or steal data.</p>
                       </div>
                       <div>
                         <h4 className="text-white font-bold mb-2">Security Responsibility</h4>
                         <p className="text-xs">You are responsible for protecting private keys, testing smart contracts, and following security best practices.</p>
                       </div>
                     </div>
                   </div>
                 </div>
              </FadeIn>

              {/* Final Message */}
              <FadeIn delay={0.7} className="mt-16 text-center">
                 <div className="inline-block glass-card p-12 border-electric-blue/30 box-glow bg-gradient-to-br from-electric-blue/5 to-transparent relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-electric-blue/20 blur-[80px] pointer-events-none rounded-full" />
                    <Cpu size={48} className="mx-auto text-electric-blue mb-6 relative z-10 drop-shadow-[0_0_20px_rgba(0,255,255,0.5)]" />
                    <h2 className="font-heading font-black text-3xl md:text-5xl mb-6 text-white relative z-10 tracking-tight">Build Beyond Limits.</h2>
                    <p className="text-lg text-gray-300 font-display max-w-2xl mx-auto mb-8 relative z-10">
                      MONETA CHAIN is building an ecosystem focused on speed, scalability, security, innovation, and future technology. 
                      You are invited to build applications, test systems, create tools, and help shape the next-generation decentralized infrastructure.
                    </p>
                    <button className="px-8 py-4 btn-primary relative z-10 font-bold tracking-wide uppercase text-sm shadow-[0_0_30px_rgba(0,255,255,0.3)]">
                      Explore the Developer Devnet
                    </button>
                 </div>
              </FadeIn>
              
            </div>

            {/* Sidebar Area */}
          <div className="lg:col-span-4 space-y-8">
            <FadeIn delay={0.6} className="glass-card p-6 border-royal-purple/30 bg-royal-purple/5">
              <h3 className="font-heading font-bold text-xl mb-4 text-white flex items-center space-x-2">
                <Search size={20} className="text-royal-purple" />
                <span>Documentation</span>
              </h3>
              <ul className="space-y-3 text-sm font-display text-gray-300">
                <li className="hover:text-electric-blue cursor-pointer transition-colors">- Getting Started Guides</li>
                <li className="hover:text-electric-blue cursor-pointer transition-colors">- Network Architecture</li>
                <li className="hover:text-electric-blue cursor-pointer transition-colors">- Running a Node</li>
                <li className="hover:text-electric-blue cursor-pointer transition-colors">- Creating & Deploying Tokens</li>
                <li className="hover:text-electric-blue cursor-pointer transition-colors">- Smart Contract Tutorials</li>
                <li className="hover:text-electric-blue cursor-pointer transition-colors">- Using the RPC APIs</li>
              </ul>
              <button className="w-full mt-6 py-3 btn-secondary flex justify-center items-center space-x-2 text-sm" onClick={(e) => { e.preventDefault(); alert("COMING SOON - Official link will be provided soon."); }}>
                <BookOpen size={16} /> <span>View Full Docs</span>
              </button>
            </FadeIn>

            <FadeIn delay={0.7} className="glass-card p-6">
              <h3 className="font-heading font-bold text-xl mb-4 text-white flex items-center space-x-2">
                <Shield size={20} className="text-emerald-green" />
                <span>Bug Bounty</span>
              </h3>
              <p className="text-gray-400 text-sm mb-4 font-display">
                We support responsible security research. Find vulnerabilities, improve blockchain security, and earn rewards.
              </p>
              <button className="text-xs font-bold text-emerald-green uppercase tracking-widest hover:text-emerald-300 transition-colors" onClick={(e) => { e.preventDefault(); alert("COMING SOON - Official link will be provided soon."); }}>
                Read Rules &rarr;
              </button>
            </FadeIn>

            <FadeIn delay={0.8} className="glass-card p-6 text-center">
               <Cpu size={32} className="mx-auto mb-4 text-electric-blue" />
               <h3 className="font-heading font-bold text-lg mb-2">Build Beyond Limits.</h3>
               <p className="text-xs text-electric-blue/80 font-mono mb-4">API ENDPOINT PREVIEW</p>
               <div className="bg-black/50 p-2 rounded text-[10px] font-mono text-gray-500 break-all text-left">
                 https://devnet-api.monetachain.network<br/>
                 https://testnet-api.monetachain.network<br/>
                 https://mainnet-api.monetachain.network
               </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </div>
  );
}
