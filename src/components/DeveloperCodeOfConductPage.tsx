import { FadeIn } from "./FadeIn";
import { Terminal, ShieldCheck, HeartHandshake, AlertTriangle } from "lucide-react";

export function DeveloperCodeOfConductPage() {
  return (
    <div className="pt-24 pb-16 min-h-[100svh] relative overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-16 text-center mx-auto">
          <FadeIn>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-sm font-bold uppercase tracking-wider mb-6">
              <Terminal size={14} />
              <span>Developer Area</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">
              Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-blue">Code of Conduct</span>
            </h1>
          </FadeIn>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <FadeIn delay={0.2} className="glass-card p-8 border-electric-blue/20">
             <div className="text-golden-yellow font-bold text-sm tracking-widest uppercase mb-6 inline-block bg-golden-yellow/10 px-3 py-1 rounded-full border border-golden-yellow/20">
               Status: COMING SOON
             </div>
             
             <div className="space-y-6 text-gray-300 font-display leading-relaxed text-sm md:text-base">
                <p>
                  The MONETA Developer Code of Conduct is a set of rules and principles that will guide everyone building on MONETA Chain. It is currently marked Coming Soon because MONETA is still under development, but it is being designed early so the ecosystem stays safe, fair, and trustworthy from day one.
                </p>

                <h3 className="font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2 flex items-center space-x-2">
                  <ShieldCheck size={20} className="text-electric-blue" />
                  <span>What This Code of Conduct Is</span>
                </h3>
                <p>The Developer Code of Conduct is not just a rulebook. It is a trust framework for how developers behave, build, and interact inside the MONETA ecosystem.</p>
                <p>It ensures that everything built on MONETA Chain:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  <li>is secure</li>
                  <li>is fair</li>
                  <li>respects users</li>
                  <li>does not harm the network</li>
                  <li>and supports long-term ecosystem growth</li>
                </ul>

                <h3 className="font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2">Why It Exists</h3>
                <p>MONETA is designed to become a global infrastructure system. That means: thousands of applications, millions of users (eventually billions), financial systems, identity systems, and governance systems.</p>
                <p>Without rules, such a system could become unsafe or chaotic. So the Code of Conduct exists to make sure:</p>
                <p className="font-bold text-white">Builders can innovate freely, but not irresponsibly.</p>

                <h3 className="font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2 flex items-center space-x-2">
                  <AlertTriangle size={20} className="text-golden-yellow" />
                  <span>Core Principles (Planned)</span>
                </h3>
                <p className="text-gray-400 mb-4">Even though it is not live yet, the structure will include:</p>
                
                <div className="space-y-4">
                  <div className="glass-card p-4 bg-black/40 border-white/5">
                    <h4 className="font-bold text-white mb-2 text-sm">1. Security First</h4>
                    <p className="text-xs text-gray-400">Developers must not release applications that: steal user data, harm wallets or funds, exploit smart contracts, or damage the network.</p>
                  </div>
                  <div className="glass-card p-4 bg-black/40 border-white/5">
                    <h4 className="font-bold text-white mb-2 text-sm">2. Transparency</h4>
                    <p className="text-xs text-gray-400">All smart contracts and applications should: behave as declared, avoid hidden malicious logic, be verifiable on-chain.</p>
                  </div>
                  <div className="glass-card p-4 bg-black/40 border-white/5">
                    <h4 className="font-bold text-white mb-2 text-sm">3. Respect for Users</h4>
                    <p className="text-xs text-gray-400">Applications built on MONETA must: protect user privacy, avoid manipulation or fraud, clearly explain what they do.</p>
                  </div>
                  <div className="glass-card p-4 bg-black/40 border-white/5">
                    <h4 className="font-bold text-white mb-2 text-sm">4. Network Responsibility</h4>
                    <p className="text-xs text-gray-400">Developers must not: spam the network, overload the blockchain with useless transactions, attempt to attack consensus or validators.</p>
                  </div>
                  <div className="glass-card p-4 bg-black/40 border-white/5">
                    <h4 className="font-bold text-white mb-2 text-sm">5. Fair Use of Resources</h4>
                    <p className="text-xs text-gray-400">All apps must: use blockchain resources efficiently, respect gas and execution limits, avoid unnecessary computation waste.</p>
                  </div>
                </div>

                <h3 className="font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2">Developer Accountability System (Planned)</h3>
                <p>MONETA will likely introduce a reputation-based system where:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  <li>developers earn trust over time</li>
                  <li>safe applications gain visibility</li>
                  <li>malicious behavior reduces reputation</li>
                  <li>repeated abuse may block access</li>
                </ul>
                <p>This ensures the ecosystem stays healthy and self-regulating.</p>

                <h3 className="font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2">Enforcement (Future Stage)</h3>
                <p>When active, enforcement may include:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  <li>smart contract restrictions</li>
                  <li>automatic AI monitoring (MQVM layer)</li>
                  <li>validator-level blocking of malicious transactions</li>
                  <li>ecosystem-wide blacklisting for severe abuse</li>
                </ul>

                <h3 className="font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2">Why It Matters</h3>
                <p>The Developer Code of Conduct ensures:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  <li>MONETA stays stable at global scale</li>
                  <li>users can trust applications</li>
                  <li>businesses can safely build on the chain</li>
                  <li>governments and institutions can adopt it</li>
                  <li>developers have clear rules, not confusion</li>
                </ul>

                <div className="mt-8 bg-electric-blue/5 p-6 rounded border border-electric-blue/10">
                  <h3 className="font-bold text-white mb-2">📢 Current Status</h3>
                  <ul className="space-y-2 text-sm text-electric-blue/90">
                    <li className="flex items-center space-x-2"><span>🔒 Status: Coming Soon</span></li>
                    <li className="flex items-center space-x-2"><span>📍 Under design and review during MONETA development phase</span></li>
                    <li className="flex items-center space-x-2"><span>⚙️ Will be released before full developer testnet access</span></li>
                  </ul>
                </div>
                
                <div className="mt-8 text-center pt-8 border-t border-white/10">
                   <h3 className="font-heading font-black text-xl mb-4 text-white uppercase tracking-wider">Final Message</h3>
                   <p className="text-gray-400 mb-4">The MONETA Developer Code of Conduct is not about restricting innovation. It is about:</p>
                   <p className="font-bold text-electric-blue text-lg mb-6">Creating a safe, global, decentralized ecosystem where developers can build freely without harming users or the network.</p>
                   <p className="text-sm font-bold text-white">If you want to build the future responsibly, MONETA CHAIN is the place.</p>
                </div>
             </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
