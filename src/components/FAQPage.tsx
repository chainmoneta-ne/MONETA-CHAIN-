import { FadeIn } from "./FadeIn";
import { HelpCircle, ChevronDown } from "lucide-react";
import React, { useState } from "react";

const faqs = [
  {
    question: "What is MONETA CHAIN?",
    answer: "MONETA CHAIN is an independent Layer-1 blockchain built from scratch in Rust, designed to support ultra-fast transactions, AI-assisted governance, and a multi-sector digital economy (DeFi, music, education, SACCOs, and more)."
  },
  {
    question: "Is MONETA CHAIN already live?",
    answer: "No. MONETA CHAIN is currently under active development. Core architecture, consensus systems, and the MONETA Quantum Virtual Machine are being designed and tested."
  },
  {
    question: "What makes MONETA CHAIN different?",
    answer: "It combines:\n\n• High-speed blockchain execution\n• AI-powered system coordination (VERA AI)\n• Consortium governance (institutions + community)\n• Human verification systems\n• A custom virtual machine (MQVM)"
  },
  {
    question: "What is the MONETA Quantum Virtual Machine (MQVM)?",
    answer: "MQVM is the execution engine of MONETA CHAIN. It runs smart contracts with:\n\n• Parallel execution\n• AI-assisted optimization\n• Low-latency processing\n• Multi-language smart contract support\n\nIt is designed to be faster and more flexible than traditional EVM-based systems."
  },
  {
    question: "How fast is MONETA CHAIN?",
    answer: "The design goal is sub-second finality, meaning transactions are confirmed almost instantly using:\n\n• Sharding\n• Parallel processing\n• AI routing optimization"
  },
  {
    question: "What is VERA AI?",
    answer: "VERA AI is the intelligent system layer of MONETA CHAIN that:\n\n• Detects fraud\n• Optimizes transactions\n• Supports governance decisions\n• Automates smart contract behavior\n• Enhances network efficiency"
  },
  {
    question: "Is MONETA CHAIN decentralized?",
    answer: "Yes, but it is a hybrid-consortium blockchain, meaning:\n\n• Public users can participate freely\n• Institutions run validator nodes\n• Governance is shared between AI + consortium + community"
  },
  {
    question: "What programming language is MONETA CHAIN built in?",
    answer: "MONETA CHAIN is being built primarily in Rust, chosen for:\n\n• Memory safety\n• High performance\n• System-level control\n• Scalability"
  },
  {
    question: "What can users do on MONETA CHAIN?",
    answer: "Users can:\n\n• Send and receive crypto\n• Run smart contracts\n• Participate in SACCO systems\n• Trade NFTs\n• Access education platforms\n• Use decentralized apps (DApps)"
  },
  {
    question: "What industries does MONETA CHAIN support?",
    answer: "MONETA CHAIN integrates multiple sectors:\n\n• Finance (DeFi, SACCOs)\n• Music & royalties\n• Education systems\n• E-commerce\n• Tourism\n• Metaverse applications"
  },
  {
    question: "What is Proof-of-Human?",
    answer: "Proof-of-Human ensures every participant is a real verified person, reducing bots, spam, and fake accounts using identity verification methods (biometric or credential-based systems)."
  },
  {
    question: "How are smart contracts executed?",
    answer: "Smart contracts run on the MONETA Quantum Virtual Machine (MQVM) which:\n\n• Executes logic in parallel\n• Uses AI optimization\n• Ensures fast and predictable outcomes"
  },
  {
    question: "Is MONETA CHAIN secure?",
    answer: "Yes. Security is built using:\n\n• Cryptographic encryption\n• AI anomaly detection (VERA AI)\n• Validator consensus\n• Human verification systems"
  },
  {
    question: "What is a consortium in MONETA CHAIN?",
    answer: "A consortium is a group of trusted institutions (like SACCOs, schools, enterprises, etc.) that help validate transactions, govern sectors, and maintain network integrity."
  },
  {
    question: "Will MONETA have its own token?",
    answer: "Yes. A native token is planned to power:\n\n• Transactions\n• Governance\n• Staking\n• Smart contract execution\n• Ecosystem rewards"
  },
  {
    question: "Can developers build on MONETA CHAIN?",
    answer: "Yes. Developers will be able to:\n\n• Deploy smart contracts on MQVM\n• Build decentralized applications\n• Integrate APIs and SDKs\n• Access AI tools via VERA AI"
  },
  {
    question: "What is the MONETA Explorer?",
    answer: "It is a blockchain visualization tool that allows users to:\n\n• View transactions\n• Track blocks\n• Monitor network health\n• Analyze smart contract activity"
  },
  {
    question: "How is MONETA different from Ethereum or Solana?",
    answer: "MONETA CHAIN differs because it:\n\n• Uses a custom VM (MQVM) instead of EVM\n• Has built-in AI governance (VERA AI)\n• Uses consortium + human verification\n• Targets multi-sector real-world integration"
  },
  {
    question: "Is MONETA CHAIN only for crypto users?",
    answer: "No. It is designed for:\n\n• Businesses\n• Schools\n• SACCOs\n• Creators\n• Governments\n• Everyday users\n\nIt is a full digital infrastructure, not just a crypto platform."
  },
  {
    question: "When will MONETA CHAIN be available?",
    answer: "MONETA CHAIN is currently in development.\nFuture phases include:\n\n• Testnet release\n• Developer tools rollout\n• Ecosystem applications\n• Mainnet launch"
  },
  {
    question: "What problem does MONETA CHAIN actually solve?",
    answer: "MONETA CHAIN solves the problem of fragmented digital economies. Today, most platforms operate separately, with no shared value system. MONETA CHAIN connects services, users, and developers into one unified economy where MINT becomes the common language of value exchange."
  },
  {
    question: "Why is a unified token system important?",
    answer: "Without a unified token:\n• Value becomes scattered across platforms\n• Users struggle with multiple currencies\n• Developers cannot build interoperable systems\n\nWith MINT:\n• One token powers everything\n• Value flows across applications\n• Ecosystem becomes interconnected"
  },
  {
    question: "What makes MINT different from other crypto tokens?",
    answer: "MINT is designed as a multi-functional ecosystem engine, not just a speculative asset. It combines:\n• Utility (services & payments)\n• Governance (decision-making)\n• Incentives (rewards & staking)\n• Economic control (burning & emissions)"
  },
  {
    question: "What is the long-term vision of MONETA?",
    answer: "The long-term vision is to build a self-sustaining digital economy where:\n• Users earn through participation\n• Developers build decentralized services\n• Transactions are powered internally by MINT\n• The ecosystem grows without centralized control"
  },
  {
    question: "Why is ecosystem participation important?",
    answer: "Because MONETA CHAIN only grows when users:\n• Use services\n• Stake tokens\n• Vote in governance\n• Participate in network activity\n\n👉 The ecosystem is not passive — it is driven by participation."
  },
  {
    question: "What is the economic engine of MINT?",
    answer: "The economic engine is built on:\n• Token demand (usage)\n• Token supply control (emissions)\n• Token reduction (burning)\n\nThis balance creates a controlled circular economy."
  },
  {
    question: "How does MINT create real demand?",
    answer: "Demand is created when users need MINT to:\n• Pay for ecosystem services\n• Access licenses\n• Use applications\n• Participate in governance\n• Pay transaction fees"
  },
  {
    question: "What happens if demand increases over time?",
    answer: "If demand increases while supply is controlled:\n• Ecosystem activity increases\n• Token usage becomes more frequent\n• Scarcity pressure strengthens\n• Long-term value stability improves"
  },
  {
    question: "Why is early ecosystem support important?",
    answer: "Early support helps:\n• Build infrastructure\n• Fund development\n• Attract developers\n• Create initial liquidity\n\n👉 Without early supporters, ecosystems often fail before reaching maturity."
  },
  {
    question: "What is liquidity and why does it matter?",
    answer: "Liquidity ensures:\n• Tokens can be traded easily\n• Price stability improves\n• Market entry and exit is smooth\n\nWithout liquidity, markets become unstable and inefficient."
  },
  {
    question: "What risks does early-stage token adoption carry?",
    answer: "Early-stage risks include:\n• Project development delays\n• Market volatility\n• Adoption uncertainty\n• Ecosystem execution risk\n\nHowever, structured tokenomics aim to reduce these risks over time."
  },
  {
    question: "How does MONETA CHAIN ensure sustainability?",
    answer: "Through:\n• Controlled emissions\n• Token burning\n• Ecosystem funding\n• Balanced distribution\n\nThis prevents uncontrolled inflation or collapse."
  },
  {
    question: "What is the role of developers in MONETA CHAIN?",
    answer: "Developers:\n• Build applications\n• Integrate services\n• Expand ecosystem functionality\n• Receive funding and incentives from ecosystem pools"
  },
  {
    question: "Can MONETA CHAIN scale globally?",
    answer: "Yes, because:\n• It is digital and borderless\n• Uses a unified token system\n• Supports multiple use cases\n• Designed for ecosystem expansion"
  },
  {
    question: "Why is decentralization important?",
    answer: "Decentralization ensures:\n• No single point of control\n• Transparent governance\n• Community-driven decision-making\n• Fair participation opportunities"
  },
  {
    question: "How does governance improve the ecosystem?",
    answer: "Governance allows the community to:\n• Vote on upgrades\n• Approve proposals\n• Shape future development\n\nThis creates a user-owned ecosystem structure."
  },
  {
    question: "What is the benefit of staking MINT?",
    answer: "Staking provides:\n• Passive income rewards\n• Ecosystem influence\n• Network stability contribution\n\nIt encourages long-term holding behavior."
  },
  {
    question: "Why is long-term holding encouraged?",
    answer: "Long-term holding:\n• Reduces market volatility\n• Supports price stability\n• Strengthens ecosystem confidence\n• Encourages sustainable growth"
  },
  {
    question: "What is token utility strength?",
    answer: "Utility strength refers to how often a token is actually used. MINT has strong utility because it is required for:\n• Payments\n• Services\n• Governance\n• Ecosystem access"
  },
  {
    question: "What is the presale opportunity about?",
    answer: "The presale is about early access to an ecosystem before mass adoption begins. It allows early participants to:\n• Support development\n• Enter before wider exposure\n• Join foundational growth stages"
  },
  {
    question: "Why do presales attract early attention?",
    answer: "Because presales often represent:\n• Early-stage ecosystem pricing\n• Limited early access\n• High engagement opportunity\n• Foundational participation phase"
  },
  {
    question: "What is the importance of timing in crypto ecosystems?",
    answer: "Timing matters because:\n• Early ecosystems have lower awareness\n• Growth happens before public attention peaks\n• Entry position affects long-term participation"
  },
  {
    question: "How does MONETA reward early ecosystem participation?",
    answer: "Through:\n• Mining rewards\n• Staking incentives\n• Ecosystem grants\n• Governance participation rights"
  },
  {
    question: "What happens when MONETA ecosystem expands?",
    answer: "Expansion leads to:\n• Increased token usage\n• Higher transaction volume\n• More developers joining\n• Stronger network effect"
  },
  {
    question: "What is network effect in MONETA CHAIN?",
    answer: "Network effect means: 👉 The more people use MONETA CHAIN, the more valuable it becomes for everyone inside it."
  },
  {
    question: "Why is MONETA considered a utility ecosystem token?",
    answer: "Because it is required to:\n• Access ecosystem services\n• Power transactions\n• Participate in governance\n• Earn rewards"
  },
  {
    question: "Can MINT be used outside MONETA CHAIN?",
    answer: "Initially, its primary use is inside the ecosystem, but as adoption grows:\n• External integrations may expand\n• Partnerships may increase usage scope"
  },
  {
    question: "What ensures fairness in MONETA distribution?",
    answer: "Fairness is ensured through:\n• Mining allocation\n• Controlled emissions\n• Ecosystem rewards\n• Gradual token release"
  },
  {
    question: "What is the biggest advantage of early ecosystem understanding?",
    answer: "Early understanding allows users to:\n• Position themselves before growth phases\n• Understand utility before adoption expansion\n• Participate in shaping ecosystem direction"
  },
  {
    question: "Final important message about MONETA Coin?",
    answer: "MONETA Coin (MINT) represents a structured attempt to build a unified digital economy where value is not fragmented, but connected across services, users, and applications.\n\nIts long-term success depends on:\n• Ecosystem adoption\n• Real utility usage\n• Community participation\n• Sustainable tokenomics execution"
  }
];

function FAQItem({ question, answer }: { key?: React.Key | number, question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass-card mb-4 border-white/5 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
      >
        <span className="font-heading font-bold text-white pr-8">{question}</span>
        <ChevronDown 
          className={`text-electric-blue transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`} 
          size={20} 
        />
      </button>
      <div 
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="text-gray-400 font-display text-sm leading-relaxed whitespace-pre-wrap">
          {answer}
        </div>
      </div>
    </div>
  );
}

export function FAQPage() {
  return (
    <div className="pt-24 pb-16 min-h-[100svh] relative overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-12 text-center mx-auto">
          <FadeIn>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-sm font-bold uppercase tracking-wider mb-6">
              <HelpCircle size={14} />
              <span>Questions</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-blue">Questions</span>
            </h1>
            <p className="text-xl text-gray-400 font-display leading-relaxed">
              Find answers to the most common questions about MONETA CHAIN.
            </p>
          </FadeIn>
        </div>

        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2} className="space-y-4">
             {faqs.map((faq, idx) => (
                <FAQItem key={idx} question={faq.question} answer={faq.answer} />
             ))}
          </FadeIn>

          <FadeIn delay={0.3} className="mt-12 text-center space-y-6">
             <div className="inline-block glass-card p-8 border-electric-blue/20 w-full max-w-4xl mx-auto">
               <h3 className="font-heading font-black text-xl mb-4 text-white uppercase tracking-wider">
                 Our Vision
               </h3>
               <p className="text-gray-400 font-display text-sm leading-relaxed mb-4">
                 To become the world's most trusted digital infrastructure, empowering billions of people, businesses, and governments to securely connect, innovate, transact, and prosper in a borderless digital economy. Through intelligent technology, decentralized infrastructure, and continuous innovation, MONETA will redefine trust, ownership, identity, commerce, and financial freedom for current and future generations.
               </p>
               <blockquote className="border-l-2 border-electric-blue pl-4 py-1 text-left italic text-white/90">
                 "A system built not just for crypto — but for the future digital economy."
               </blockquote>
             </div>
             
             <div className="inline-block glass-card p-8 border-electric-blue/20 w-full max-w-4xl mx-auto">
               <h3 className="font-heading font-black text-xl mb-4 text-white uppercase tracking-wider">
                 Our Mission
               </h3>
               <p className="text-gray-400 font-display text-sm leading-relaxed">
                 Our mission is to build secure, intelligent, and scalable digital technologies that empower individuals, businesses, communities, and governments to connect, transact, innovate, and grow with confidence. We are committed to delivering trusted blockchain infrastructure, digital identity, financial services, enterprise solutions, marketplaces, education, and emerging technologies that are accessible, inclusive, and designed to create lasting value for people everywhere.
               </p>
             </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
