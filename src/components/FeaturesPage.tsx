import { FadeIn } from "./FadeIn";
import { 
  Network, Zap, Cpu, Pickaxe, Users, ShoppingCart, 
  Globe, Brain, WifiOff, Database, Shield, Scale, Link2 
} from "lucide-react";

export function FeaturesPage() {
  const features = [
    {
      icon: <Network className="w-8 h-8 text-electric-blue" />,
      title: "1. Hybrid Consortium Blockchain",
      description: "MONETA CHAIN is a next-generation hybrid consortium blockchain that combines institutional-grade control with public blockchain accessibility.",
      points: [
        "Consortium Layer: Trusted institutions such as SACCOs, enterprises, and regulated partners validate high-value and sensitive transactions.",
        "Public Layer: Global users can freely access services, transact, build applications, and participate in the ecosystem.",
        "Balanced system: Combines decentralization, compliance, speed, and trust in one unified network."
      ],
      summary: "This structure makes MONETA CHAIN suitable for both enterprise adoption and everyday user participation."
    },
    {
      icon: <Zap className="w-8 h-8 text-electric-blue" />,
      title: "2. High-Speed Scalable Network",
      description: "MONETA CHAIN is built for global scale and mass adoption.",
      points: [
        "Processes millions of transactions per second",
        "Ultra-low transaction fees",
        "Near-instant confirmations",
        "Advanced sharding and parallel processing architecture",
        "Optimized for mobile-first and low-bandwidth environments"
      ],
      summary: "The system remains fast and stable even under heavy global usage."
    },
    {
      icon: <Cpu className="w-8 h-8 text-electric-blue" />,
      title: "3. MONETA Quantum Virtual Machine (MQVM)",
      description: "At the core of MONETA CHAIN is the MONETA Quantum Virtual Machine (MQVM) — an advanced execution engine for intelligent blockchain operations.",
      points: [
        "Executes complex smart contracts across multiple industries",
        "Automates SACCO operations, payments, loans, and investments",
        "Powers marketplace transactions, NFTs, and digital asset flows",
        "Enables multi-step workflows involving multiple parties",
        "Designed for high-speed, scalable, and secure execution"
      ],
      summary: "MQVM transforms MONETA CHAIN into a programmable digital economy engine."
    },
    {
      icon: <Pickaxe className="w-8 h-8 text-electric-blue" />,
      title: "4. Mining & Reward System",
      description: "MONETA CHAIN features a community-driven mining and reward ecosystem.",
      points: [
        "Mobile-based mining for global accessibility",
        "Rewards active users and early adopters",
        "Referral-based growth system",
        "Structured mining phases for sustainability: Early Stage (Reptilians Phase), Growth Stage (Pleiadians Phase), Mass Adoption Stage (Anunnaku Phase)"
      ],
      summary: "This ensures fair participation and long-term ecosystem growth."
    },
    {
      icon: <Users className="w-8 h-8 text-electric-blue" />,
      title: "5. SACCO & Community Finance System",
      description: "MONETA CHAIN revolutionizes community financial systems.",
      points: [
        "Secure digital SACCO wallets",
        "Multi-member approval for financial actions",
        "Transparent savings, loans, and investment tracking",
        "Automated profit distribution via smart contracts",
        "Fraud-resistant, blockchain-verified transactions"
      ],
      summary: "It brings trust, transparency, and automation to community finance."
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-electric-blue" />,
      title: "6. MONETA Marketplace",
      description: "A powerful decentralized marketplace for goods and digital assets.",
      points: [
        "Supports physical goods, digital products, and NFTs",
        "Real-time commodity pricing (agriculture, energy, and trade goods)",
        "Secure escrow system powered by blockchain",
        "Multiple payment options including crypto and mobile money",
        "Transparent buyer-seller protection system"
      ],
      summary: "A fully trust-based digital commerce environment."
    },
    {
      icon: <Globe className="w-8 h-8 text-electric-blue" />,
      title: "7. Metaverse & Live Experiences",
      description: "MONETA CHAIN enables immersive digital interactions.",
      points: [
        "Virtual events, concerts, classrooms, and exhibitions",
        "Avatar-based real-time participation",
        "Blockchain-based ticketing and access control",
        "Automated revenue distribution for creators and organizers",
        "Seamless integration between physical and digital experiences"
      ],
      summary: "It connects real-world events with the digital universe."
    },
    {
      icon: <Brain className="w-8 h-8 text-electric-blue" />,
      title: "8. AI-Powered Ecosystem",
      description: "MONETA integrates advanced artificial intelligence across the platform.",
      points: [
        "Financial insights and recommendations",
        "Fraud detection and security monitoring",
        "SACCO automation and reporting",
        "Personalized user assistance",
        "Marketplace optimization and content intelligence"
      ],
      summary: "AI enhances efficiency, security, and user experience across the ecosystem."
    },
    {
      icon: <WifiOff className="w-8 h-8 text-electric-blue" />,
      title: "9. Offline & Survival Tools",
      description: "MONETA CHAIN is designed for real-world usability beyond internet access.",
      points: [
        "Offline wallet functionality",
        "Emergency survival guides (forest, desert, rural, urban emergencies)",
        "GPS-independent navigation tools",
        "Solar, compass, and environmental tracking systems",
        "Emergency communication support features"
      ],
      summary: "Ensures usability even in low-connectivity environments."
    },
    {
      icon: <Database className="w-8 h-8 text-electric-blue" />,
      title: "10. Real-World Data Oracles",
      description: "MONETA CHAIN connects blockchain systems to real-world data.",
      points: [
        "Live commodity pricing updates",
        "Weather and environmental data feeds",
        "Market and financial intelligence",
        "Verified real-world event tracking",
        "Secure data input for smart contract execution"
      ],
      summary: "Ensures smart contracts operate using real-time accurate information."
    },
    {
      icon: <Shield className="w-8 h-8 text-electric-blue" />,
      title: "11. Security & Privacy",
      description: "Security is a core foundation of MONETA CHAIN.",
      points: [
        "End-to-end encryption across all systems",
        "Biometric authentication (face, fingerprint, PIN)",
        "Digital identity verification system",
        "AI-powered fraud detection",
        "Consortium-level validation for sensitive transactions"
      ],
      summary: "User data and assets are fully protected at every layer."
    },
    {
      icon: <Scale className="w-8 h-8 text-electric-blue" />,
      title: "12. Governance & Community Control",
      description: "MONETA CHAIN is community-driven and transparent.",
      points: [
        "DAO-based governance system",
        "Token-based voting for ecosystem decisions",
        "Community participation in upgrades and policies",
        "Consortium oversight for compliance and stability",
        "Balanced decision-making between users and institutions"
      ],
      summary: "This ensures fair and transparent ecosystem governance."
    },
    {
      icon: <Link2 className="w-8 h-8 text-electric-blue" />,
      title: "13. Interoperability",
      description: "MONETA CHAIN connects seamlessly with other blockchain networks.",
      points: [
        "Cross-chain bridges with major blockchains",
        "Asset transfer across ecosystems",
        "Multi-chain smart contract compatibility",
        "Global decentralized connectivity"
      ],
      summary: "Ensures MONETA CHAIN operates as part of a larger global blockchain economy."
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-[100svh] relative overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-16 text-center mx-auto">
          <FadeIn>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-sm font-bold uppercase tracking-wider mb-6">
              <Network size={14} />
              <span>Core Protocol</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">
              MONETA CHAIN <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-blue">Features</span>
            </h1>
            <p className="text-xl text-gray-300 font-display leading-relaxed">
              Explore the advanced technologies and infrastructure powering the MONETA ecosystem.
            </p>
          </FadeIn>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={0.1 * (index % 3)} className="glass-card p-6 border-white/5 hover:border-electric-blue/40 transition-colors flex flex-col h-full group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                {feature.icon}
              </div>
              
              <div className="mb-4 bg-electric-blue/10 w-14 h-14 rounded-xl flex items-center justify-center border border-electric-blue/20 group-hover:bg-electric-blue/20 transition-colors">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-heading font-black text-white mb-3 tracking-wide">{feature.title}</h3>
              
              <p className="text-gray-300 font-display text-sm leading-relaxed mb-4">
                {feature.description}
              </p>
              
              <ul className="text-gray-400 font-display text-sm space-y-2 mb-6 flex-grow">
                {feature.points.map((point, pIndex) => (
                  <li key={pIndex} className="flex items-start">
                    <span className="text-electric-blue mr-2 mt-1 shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto pt-4 border-t border-white/10">
                <p className="text-electric-blue text-sm font-bold font-display">
                  {feature.summary}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5} className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 border-electric-blue/30 bg-electric-blue/5 text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 to-electric-blue/10 pointer-events-none mix-blend-overlay" />
             <div className="relative z-10">
               <h2 className="font-heading text-2xl font-black text-white uppercase tracking-wider mb-4">Summary</h2>
               <p className="text-lg text-gray-300 font-display leading-relaxed">
                 MONETA CHAIN is a hybrid consortium blockchain ecosystem powered by the <strong className="text-white">MONETA Quantum Virtual Machine (MQVM)</strong>. It combines scalability, security, AI intelligence, real-world data integration, and decentralized finance into one unified system designed for global adoption.
               </p>
             </div>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
