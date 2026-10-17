import { FadeIn } from "./FadeIn";
import { Zap, ShieldCheck, Link as LinkIcon, LayoutGrid, Terminal, AlertTriangle } from "lucide-react";

export function AboutSection() {
  return (
    <div id="about" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-16 text-center mx-auto border-b border-white/5 pb-12">
          <FadeIn>
            <h2 className="text-electric-blue font-bold tracking-widest uppercase mb-4 text-sm">Experience Crypto Like Never Before</h2>
            <h1 className="font-heading text-4xl md:text-6xl font-black mb-8 tracking-tight uppercase">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-blue">MONETA CHAIN</span>
            </h1>
          </FadeIn>
        </div>

                {/* What is MONETA CHAIN? */}
        <FadeIn delay={0.2} className="max-w-4xl mx-auto mb-20 text-gray-300 font-display text-lg leading-relaxed">
          <h2 className="font-heading text-3xl font-black text-white uppercase tracking-wider mb-6">What is MONETA CHAIN?</h2>
          <div className="space-y-6">
            <p className="text-xl text-electric-blue font-bold leading-relaxed mb-6">
              MONETA CHAIN is a hybrid blockchain infrastructure designed to support public applications, institutional environments, and consortium-based networks within one connected digital ecosystem.
            </p>
            <p>
              MONETA CHAIN is a blockchain infrastructure designed to connect people, businesses, developers, and institutions through a secure and scalable digital network.
            </p>
            <p>
              It provides the foundation for blockchain-based applications, digital assets, transactions, and industry-specific services while supporting different levels of network access and governance.
            </p>
            <p>
              MONETA CHAIN is designed around a hybrid architecture, bringing together public blockchain accessibility, controlled environments for institutions, and trusted consortium-based participation within one connected ecosystem.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-8">
              <div className="glass-card p-6 border-white/5 bg-black/40 flex flex-col h-full">
                <span className="text-electric-blue font-bold text-sm mb-3">01 — PUBLIC NETWORK</span>
                <p className="text-gray-300 text-sm leading-relaxed">Open blockchain applications and digital experiences.</p>
              </div>
              <div className="glass-card p-6 border-white/5 bg-black/40 flex flex-col h-full">
                <span className="text-electric-blue font-bold text-sm mb-3">02 — INSTITUTIONAL INFRASTRUCTURE</span>
                <p className="text-gray-300 text-sm leading-relaxed">Controlled environments for organizations and enterprises.</p>
              </div>
              <div className="glass-card p-6 border-white/5 bg-black/40 flex flex-col h-full">
                <span className="text-electric-blue font-bold text-sm mb-3">03 — CONSORTIUM NETWORKS</span>
                <p className="text-gray-300 text-sm leading-relaxed">Trusted networks connecting approved institutions, validators, and industry participants.</p>
              </div>
            </div>
            
            <p className="font-bold text-xl text-white mt-12 text-center tracking-wide">
              One infrastructure. Multiple environments. Connected possibilities.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-5xl mx-auto space-y-24 mb-12">
          
          {/* PROBLEMS WE ARE SOLVING */}
          <FadeIn delay={0.3}>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-1 bg-electric-blue"></div>
              <h2 className="font-heading text-3xl font-black text-white uppercase tracking-wider">Problems We Are Solving</h2>
            </div>
            
            <div className="space-y-8">
              {/* Problem 1 */}
              <div className="glass-card p-8 border-electric-blue/20">
                <h3 className="font-bold text-xl text-white mb-3">1️⃣ Lack of Transparency in Financial Cooperative Systems</h3>
                <p className="text-gray-400 mb-6 font-display text-sm md:text-base">Many SACCOs and community financial systems suffer from limited transparency, delayed reporting, and weak accountability structures. Members often cannot independently verify how funds are managed, which can create mistrust and inefficiencies.</p>
                <div className="bg-electric-blue/5 border border-electric-blue/20 p-5 rounded-lg border-l-4 border-l-electric-blue">
                  <h4 className="font-bold text-electric-blue uppercase tracking-wider text-sm mb-3">How MONETA CHAIN solves this</h4>
                  <p className="text-gray-300 text-sm mb-4">MONETA CHAIN introduces transparent SACCO smart contracts where:</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center space-x-2"><ShieldCheck className="w-4 h-4 text-electric-blue"/><span>Members can verify balances in real time</span></li>
                    <li className="flex items-center space-x-2"><ShieldCheck className="w-4 h-4 text-electric-blue"/><span>Every transaction generates immutable blockchain receipts</span></li>
                    <li className="flex items-center space-x-2"><ShieldCheck className="w-4 h-4 text-electric-blue"/><span>Audit trails cannot be altered</span></li>
                    <li className="flex items-center space-x-2"><ShieldCheck className="w-4 h-4 text-electric-blue"/><span>Multi-member approvals reduce misuse of funds</span></li>
                  </ul>
                  <p className="text-gray-300 text-sm mt-4 italic font-bold">This creates a system where transparency becomes built into the infrastructure itself.</p>
                </div>
              </div>

              {/* Problem 2 */}
              <div className="glass-card p-8 border-electric-blue/20">
                <h3 className="font-bold text-xl text-white mb-3">2️⃣ Fragmented Digital Financial Systems</h3>
                <p className="text-gray-400 mb-2 font-display text-sm md:text-base">Many financial platforms operate in isolation:</p>
                <ul className="list-disc list-inside text-gray-500 text-sm mb-4">
                  <li>Wallets disconnected from marketplaces</li>
                  <li>Separate systems for governance</li>
                  <li>Weak interoperability</li>
                  <li>Multiple layers of manual verification</li>
                </ul>
                <p className="text-gray-400 mb-6 font-display text-sm">This creates friction and slows digital adoption.</p>
                
                <div className="bg-electric-blue/5 border border-electric-blue/20 p-5 rounded-lg border-l-4 border-l-electric-blue">
                  <h4 className="font-bold text-electric-blue uppercase tracking-wider text-sm mb-3">How MONETA CHAIN solves this</h4>
                  <p className="text-gray-300 text-sm mb-4">MONETA CHAIN is being designed as an integrated ecosystem where:</p>
                  <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-400 mb-4">
                    <li className="flex items-center space-x-2"><LayoutGrid className="w-4 h-4 text-electric-blue"/><span>Wallets</span></li>
                    <li className="flex items-center space-x-2"><LayoutGrid className="w-4 h-4 text-electric-blue"/><span>SACCO systems</span></li>
                    <li className="flex items-center space-x-2"><LayoutGrid className="w-4 h-4 text-electric-blue"/><span>Marketplaces</span></li>
                    <li className="flex items-center space-x-2"><LayoutGrid className="w-4 h-4 text-electric-blue"/><span>NFTs</span></li>
                    <li className="flex items-center space-x-2"><LayoutGrid className="w-4 h-4 text-electric-blue"/><span>Smart contracts</span></li>
                    <li className="flex items-center space-x-2"><LayoutGrid className="w-4 h-4 text-electric-blue"/><span>Governance systems</span></li>
                  </ul>
                  <p className="text-gray-300 text-sm italic font-bold">...all operate within one connected blockchain environment.</p>
                </div>
              </div>

              {/* Problem 3 */}
              <div className="glass-card p-8 border-electric-blue/20">
                <h3 className="font-bold text-xl text-white mb-3">3️⃣ Poor Transaction Traceability</h3>
                <p className="text-gray-400 mb-6 font-display text-sm md:text-base">In many digital systems, proving ownership, confirming transactions, or tracking records becomes difficult over time.</p>
                
                <div className="bg-electric-blue/5 border border-electric-blue/20 p-5 rounded-lg border-l-4 border-l-electric-blue">
                  <h4 className="font-bold text-electric-blue uppercase tracking-wider text-sm mb-3">How MONETA CHAIN solves this</h4>
                  <p className="text-gray-300 text-sm mb-4">Every action on MONETA CHAIN generates:</p>
                  <ul className="space-y-2 text-sm text-gray-400 mb-4">
                    <li className="flex items-center space-x-2"><Terminal className="w-4 h-4 text-electric-blue"/><span>Immutable blockchain records</span></li>
                    <li className="flex items-center space-x-2"><Terminal className="w-4 h-4 text-electric-blue"/><span>Digital receipts</span></li>
                    <li className="flex items-center space-x-2"><Terminal className="w-4 h-4 text-electric-blue"/><span>Time-stamped verification</span></li>
                    <li className="flex items-center space-x-2"><Terminal className="w-4 h-4 text-electric-blue"/><span>Smart contract event logs</span></li>
                  </ul>
                  <p className="text-gray-300 text-sm italic font-bold">This creates permanent traceability for all verified activities.</p>
                </div>
              </div>

              {/* Problem 4 */}
              <div className="glass-card p-8 border-electric-blue/20">
                <h3 className="font-bold text-xl text-white mb-3">4️⃣ Limited Scalability in Existing Systems</h3>
                <p className="text-gray-400 mb-2 font-display text-sm md:text-base">Many blockchain systems struggle when transaction demand increases:</p>
                <ul className="list-disc list-inside text-gray-500 text-sm mb-6">
                  <li>Network congestion</li>
                  <li>High fees</li>
                  <li>Slow confirmations</li>
                  <li>Reduced efficiency</li>
                </ul>
                
                <div className="bg-electric-blue/5 border border-electric-blue/20 p-5 rounded-lg border-l-4 border-l-electric-blue">
                  <h4 className="font-bold text-electric-blue uppercase tracking-wider text-sm mb-3">How MONETA CHAIN solves this</h4>
                  <p className="text-gray-300 text-sm mb-4">MONETA CHAIN is being developed with a hybrid architecture designed to:</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center space-x-2"><Zap className="w-4 h-4 text-electric-blue"/><span>Optimize validator coordination</span></li>
                    <li className="flex items-center space-x-2"><Zap className="w-4 h-4 text-electric-blue"/><span>Improve transaction throughput</span></li>
                    <li className="flex items-center space-x-2"><Zap className="w-4 h-4 text-electric-blue"/><span>Reduce unnecessary computational overhead</span></li>
                    <li className="flex items-center space-x-2"><Zap className="w-4 h-4 text-electric-blue"/><span>Support scalable consortium operations</span></li>
                  </ul>
                </div>
              </div>

              {/* Problem 5 */}
              <div className="glass-card p-8 border-electric-blue/20">
                <h3 className="font-bold text-xl text-white mb-3">5️⃣ Weak Trust Models in Digital Transactions</h3>
                <p className="text-gray-400 mb-6 font-display text-sm md:text-base">Traditional systems often depend heavily on centralized trust, intermediaries, or manual approval systems.</p>
                
                <div className="bg-electric-blue/5 border border-electric-blue/20 p-5 rounded-lg border-l-4 border-l-electric-blue">
                  <h4 className="font-bold text-electric-blue uppercase tracking-wider text-sm mb-3">How MONETA CHAIN solves this</h4>
                  <p className="text-gray-300 text-sm mb-4">MONETA CHAIN automates trust through:</p>
                  <ul className="space-y-2 text-sm text-gray-400 mb-4">
                    <li className="flex items-center space-x-2"><ShieldCheck className="w-4 h-4 text-electric-blue"/><span>Smart contracts</span></li>
                    <li className="flex items-center space-x-2"><ShieldCheck className="w-4 h-4 text-electric-blue"/><span>Cryptographic verification</span></li>
                    <li className="flex items-center space-x-2"><ShieldCheck className="w-4 h-4 text-electric-blue"/><span>Consensus validation</span></li>
                    <li className="flex items-center space-x-2"><ShieldCheck className="w-4 h-4 text-electric-blue"/><span>Multi-signature governance systems</span></li>
                  </ul>
                  <p className="text-gray-300 text-sm italic font-bold">This reduces dependency on single points of control.</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* PROBLEMS WITH EXISTING BLOCKCHAINS */}
          <FadeIn delay={0.4}>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-1 bg-royal-purple"></div>
              <h2 className="font-heading text-3xl font-black text-white uppercase tracking-wider flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-royal-purple" />
                Problems With Existing Blockchains
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-6 border-white/5 bg-black/40">
                <h3 className="font-bold text-white mb-2">1️⃣ High Energy Consumption</h3>
                <p className="text-gray-400 text-sm">Some traditional blockchains require massive computational power, increasing operational costs and limiting sustainability.</p>
              </div>
              <div className="glass-card p-6 border-white/5 bg-black/40">
                <h3 className="font-bold text-white mb-2">2️⃣ Scalability Bottlenecks</h3>
                <p className="text-gray-400 text-sm">As transaction volume grows, many blockchains experience delays, expensive fees, and reduced network performance.</p>
              </div>
              <div className="glass-card p-6 border-white/5 bg-black/40">
                <h3 className="font-bold text-white mb-2">3️⃣ Limited Real-World Integration</h3>
                <p className="text-gray-400 text-sm">Many existing blockchains focus mainly on token transfers rather than real-world financial coordination systems like SACCOs, cooperative governance, and transparent community finance.</p>
              </div>
              <div className="glass-card p-6 border-white/5 bg-black/40">
                <h3 className="font-bold text-white mb-2">4️⃣ Smart Contract Security Risks</h3>
                <p className="text-gray-400 text-sm">Poorly designed contract execution systems can expose vulnerabilities, exploits, and unexpected behaviors.</p>
              </div>
              <div className="glass-card p-6 border-white/5 bg-black/40 md:col-span-2">
                <h3 className="font-bold text-white mb-2">5️⃣ Fragmented User Experience</h3>
                <p className="text-gray-400 text-sm">Users often need multiple platforms, wallets, and external tools to complete simple operations across blockchain ecosystems.</p>
              </div>
            </div>
          </FadeIn>

          {/* MONETA CHAIN SOLUTIONS */}
          <FadeIn delay={0.5}>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-1 bg-green-500"></div>
              <h2 className="font-heading text-3xl font-black text-white uppercase tracking-wider">MONETA CHAIN Solutions</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "1️⃣ Hybrid Consortium Blockchain", desc: "Combines consortium validation, decentralized distribution, and hybrid consensus to balance security, speed, governance, and scalability." },
                { title: "2️⃣ MONETA Quantum Virtual Machine (MQVM)", desc: "The execution engine for smart contracts, automated finance, and decentralized applications designed for isolation, deterministic processing, and future quantum-resistant adaptability." },
                { title: "3️⃣ Transparent SACCO Infrastructure", desc: "Every SACCO operates on-chain with real-time balance visibility, immutable receipts, automated approvals, and blockchain audit trails." },
                { title: "4️⃣ Multi-Signature Governance", desc: "Critical financial actions require multiple approvals, validator confirmations, and contract verification to strengthen accountability." },
                { title: "5️⃣ Integrated Marketplace Ecosystem", desc: "Supports digital commerce, NFT systems, service marketplaces, and blockchain receipts for ownership verification." },
                { title: "6️⃣ Immutable Transaction Receipts", desc: "Every activity produces verifiable digital receipts, time-stamped records, and signed transaction proofs to improve confidence." },
                { title: "7️⃣ Scalable Validator Coordination", desc: "Designed to optimize block creation efficiency, validator synchronization, and hybrid consensus balancing." },
                { title: "8️⃣ Advanced Audit Logging", desc: "All critical actions generate permanent logs for governance tracking, financial verification, security investigations, and transparency." },
                { title: "9️⃣ Unified Ecosystem Design", desc: "Reduces fragmentation by integrating wallet systems, smart contracts, governance, marketplaces, and financial tools." },
                { title: "🔟 Future-Ready Infrastructure", desc: "Adaptable architecture preparing for advanced cryptography, AI integrations, scalable distributed systems, and next-gen decentralized apps." },
              ].map((solution, i) => (
                <div key={i} className="glass-card p-6 border-green-500/20 bg-green-500/5 hover:border-green-500/40 transition-colors">
                  <h3 className="font-bold text-white mb-3 text-sm">{solution.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{solution.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* ADVANCED FEATURES */}
          <FadeIn delay={0.6}>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-1 bg-electric-blue"></div>
              <h2 className="font-heading text-3xl font-black text-white uppercase tracking-wider">Advanced Features</h2>
            </div>

            <div className="space-y-6">
              <div className="glass-card p-6 border-white/5 border-l-4 border-l-electric-blue">
                <h3 className="font-bold text-xl text-white mb-3">1️⃣ MONETA Quantum Virtual Machine (MQVM)</h3>
                <p className="text-gray-400 text-sm mb-4">The MQVM is the intelligent execution environment powering MONETA CHAIN. Designed capabilities include:</p>
                <div className="flex flex-wrap gap-2 mb-4 text-xs font-mono text-electric-blue bg-black/40 p-3 rounded">
                  <span>[ SMART CONTRACT EXECUTION ]</span>
                  <span>[ STATE ISOLATION ]</span>
                  <span>[ SECURE MEMORY HANDLING ]</span>
                  <span>[ CONTRACT STORAGE MANAGEMENT ]</span>
                  <span>[ DETERMINISTIC COMPUTATION ]</span>
                  <span>[ FUTURE EXTENSIBILITY ]</span>
                </div>
                <p className="text-gray-300 text-sm italic">MQVM is intended to become the programmable foundation of the MONETA ecosystem.</p>
              </div>

              <div className="glass-card p-6 border-white/5 border-l-4 border-l-electric-blue">
                <h3 className="font-bold text-xl text-white mb-3">2️⃣ Hybrid Consensus Coordination</h3>
                <p className="text-gray-400 text-sm mb-4">MONETA CHAIN combines consortium governance with decentralized validation mechanisms. Benefits:</p>
                <ul className="list-disc list-inside text-gray-500 text-sm mb-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li>Faster confirmations</li>
                  <li>Reduced congestion</li>
                  <li>Greater validator coordination</li>
                  <li>Enhanced governance flexibility</li>
                </ul>
                <p className="text-gray-300 text-sm italic">This creates a balanced infrastructure for institutional and community participation.</p>
              </div>

              <div className="glass-card p-6 border-white/5 border-l-4 border-l-electric-blue">
                <h3 className="font-bold text-xl text-white mb-3">3️⃣ Transparent SACCO Smart Contracts</h3>
                <p className="text-gray-400 text-sm mb-3">MONETA introduces programmable cooperative finance systems where:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300">
                   <div className="bg-black/30 p-3 rounded border border-white/5">Members can verify funds</div>
                   <div className="bg-black/30 p-3 rounded border border-white/5">Transactions are immutable</div>
                   <div className="bg-black/30 p-3 rounded border border-white/5">Withdrawals require multi-party approvals</div>
                   <div className="bg-black/30 p-3 rounded border border-white/5 text-electric-blue font-bold">Financial transparency becomes automated</div>
                </div>
              </div>

              <div className="glass-card p-6 border-white/5 border-l-4 border-l-electric-blue">
                <h3 className="font-bold text-xl text-white mb-3">4️⃣ Integrated Blockchain Receipt Infrastructure</h3>
                <p className="text-gray-400 text-sm mb-4">Every transaction creates blockchain-native proof containing:</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-electric-blue/10 text-electric-blue text-xs rounded-full border border-electric-blue/20">Wallet references</span>
                  <span className="px-3 py-1 bg-electric-blue/10 text-electric-blue text-xs rounded-full border border-electric-blue/20">Digital signatures</span>
                  <span className="px-3 py-1 bg-electric-blue/10 text-electric-blue text-xs rounded-full border border-electric-blue/20">Timestamps</span>
                  <span className="px-3 py-1 bg-electric-blue/10 text-electric-blue text-xs rounded-full border border-electric-blue/20">Smart contract verification</span>
                  <span className="px-3 py-1 bg-electric-blue/10 text-electric-blue text-xs rounded-full border border-electric-blue/20">Blockchain references</span>
                </div>
                <p className="text-gray-300 text-sm italic">This infrastructure improves trust and traceability across the ecosystem.</p>
              </div>
            </div>
          </FadeIn>

          {/* VISION & MISSION & DIFFERENT */}
          <FadeIn delay={0.7} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 border-electric-blue/20 bg-gradient-to-b from-electric-blue/5 to-transparent">
              <h3 className="font-heading text-2xl font-black mb-4 uppercase text-electric-blue">Vision</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                To become the world's most trusted digital infrastructure, empowering billions of people, businesses, and governments to securely connect, innovate, transact, and prosper in a borderless digital economy. Through intelligent technology, decentralized infrastructure, and continuous innovation, MONETA will redefine trust, ownership, identity, commerce, and financial freedom for current and future generations.
              </p>
            </div>
            
            <div className="glass-card p-8 border-electric-blue/20 bg-gradient-to-b from-electric-blue/5 to-transparent">
              <h3 className="font-heading text-2xl font-black mb-4 uppercase text-electric-blue">Mission</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Our mission is to build secure, intelligent, and scalable digital technologies that empower individuals, businesses, communities, and governments to connect, transact, innovate, and grow with confidence. We are committed to delivering trusted blockchain infrastructure, digital identity, financial services, enterprise solutions, marketplaces, education, and emerging technologies that are accessible, inclusive, and designed to create lasting value for people everywhere.
              </p>
            </div>

            <div className="glass-card p-8 border-white/10 md:col-span-2">
              <h3 className="font-heading text-2xl font-black mb-4 uppercase text-white">What Makes MONETA CHAIN Different</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 font-bold">
                MONETA CHAIN is not being designed as a simple cryptocurrency network. It is being developed as:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="bg-black/40 p-4 rounded border border-white/5 text-sm text-gray-300 flex items-center space-x-3"><Zap className="w-4 h-4 text-electric-blue"/><span>A hybrid consortium blockchain</span></div>
                <div className="bg-black/40 p-4 rounded border border-white/5 text-sm text-gray-300 flex items-center space-x-3"><Zap className="w-4 h-4 text-electric-blue"/><span>A transparent SACCO infrastructure</span></div>
                <div className="bg-black/40 p-4 rounded border border-white/5 text-sm text-gray-300 flex items-center space-x-3"><Zap className="w-4 h-4 text-electric-blue"/><span>A programmable smart contract ecosystem</span></div>
                <div className="bg-black/40 p-4 rounded border border-white/5 text-sm text-gray-300 flex items-center space-x-3"><Zap className="w-4 h-4 text-electric-blue"/><span>A marketplace coordination layer</span></div>
                <div className="bg-black/40 p-4 rounded border border-white/5 text-sm text-gray-300 flex items-center space-x-3"><Zap className="w-4 h-4 text-electric-blue"/><span>A blockchain receipt verification network</span></div>
                <div className="bg-black/40 p-4 rounded border border-white/5 text-sm text-gray-300 flex items-center space-x-3"><Zap className="w-4 h-4 text-electric-blue"/><span>A future-ready virtual machine platform</span></div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                The focus is on combining <span className="text-white font-bold">Transparency</span>, <span className="text-white font-bold">Security</span>, <span className="text-white font-bold">Governance</span>, <span className="text-white font-bold">Scalability</span>, and <span className="text-white font-bold">Real-world financial coordination</span> inside one unified ecosystem.
              </p>
            </div>
          </FadeIn>

          {/* CLOSING STATEMENT */}
          <FadeIn delay={0.8} className="max-w-4xl mx-auto text-center pt-16 border-t border-white/10">
            <h2 className="font-heading text-3xl font-black mb-8 uppercase tracking-wide">The Future of Transparent Digital Infrastructure</h2>
            <div className="glass-card p-10 border-electric-blue/30 bg-black/60 relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 to-electric-blue/10 group-hover:scale-105 transition-transform duration-1000"></div>
               <p className="text-lg text-gray-300 font-display mb-6 relative z-10">
                 MONETA CHAIN represents an ambitious step toward the future of transparent digital infrastructure.
               </p>
               <p className="text-lg text-gray-300 font-display mb-6 relative z-10">
                 By combining hybrid blockchain architecture, smart contract automation, consortium coordination, advanced receipt systems, and the MONETA Quantum Virtual Machine, the ecosystem is being designed to support scalable, secure, and accountable digital interactions for the next generation of decentralized systems.
               </p>
               <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-blue uppercase tracking-widest relative z-10">
                 As development continues, MONETA CHAIN aims to evolve into a platform where trust is programmable, transparency is built into the protocol itself, and digital systems become more connected, efficient, and verifiable than ever before.
               </p>
            </div>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}
