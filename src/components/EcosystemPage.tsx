import { FadeIn } from "./FadeIn";
import { Link } from "react-router-dom";
import { 
  Globe2, Heart, Target, Blocks, Fingerprint, Wallet, 
  CreditCard, ShoppingCart, TrendingUp, TerminalSquare, 
  BookOpen, Users, Building2, Palette, BrainCircuit, 
  ShieldCheck, Scale, Server, Handshake, FileText, ChevronRight,
  ArrowRight, Sparkles, Compass, ExternalLink
} from "lucide-react";

const ecosystemSections = [
  {
    id: 1,
    title: "Core Values",
    icon: <Heart className="w-8 h-8 text-royal-purple" />,
    colorClass: "text-royal-purple",
    desc: "The principles that guide every decision, feature, product, and partnership across the MONETA ecosystem.",
    items: [
      "Integrity", "Trust", "Transparency", "Security", "Privacy", "Innovation", 
      "Inclusion", "Accessibility", "Accountability", "Sustainability", "Excellence", 
      "Collaboration", "Reliability", "Community First", "User Empowerment"
    ]
  },
  {
    id: 2,
    title: "Why MONETA Exists",
    icon: <Target className="w-8 h-8 text-brand-orange" />,
    colorClass: "text-brand-orange",
    desc: "Explains the global challenges MONETA is solving and the purpose behind the ecosystem.",
    items: [
      "Financial Inclusion", "Digital Identity", "Global Payments", "Economic Empowerment",
      "Creator Economy", "Business Transformation", "Government Digital Services", "Education",
      "Transparency", "Privacy", "Security", "Connected Digital Ecosystem"
    ]
  },
  {
    id: 3,
    title: "MONETA Chain",
    icon: <Blocks className="w-8 h-8 text-electric-blue" />,
    colorClass: "text-electric-blue",
    desc: "The blockchain infrastructure powering the entire ecosystem.",
    items: [
      "Network Overview", "Architecture", "Consensus", "Smart Contracts", "Virtual Machine",
      "Nodes", "Validators", "Security", "Transaction Processing", "Scalability",
      "Cross-Chain Communication", "Governance", "Storage", "APIs", "Blockchain Explorer"
    ]
  },
  {
    id: 4,
    title: "Digital Identity",
    icon: <Fingerprint className="w-8 h-8 text-electric-blue" />,
    colorClass: "text-electric-blue",
    items: [
      "Personal Identity", "Business Identity", "Organization Identity", "Government Identity",
      "Verification", "Biometrics", "Authentication", "Privacy Controls", "Identity Recovery",
      "Permissions", "Digital Certificates", "Reputation"
    ]
  },
  {
    id: 5,
    title: "MONETA Wallet",
    icon: <Wallet className="w-8 h-8 text-golden-yellow" />,
    colorClass: "text-golden-yellow",
    items: [
      "Wallet Dashboard", "Multi-Asset Wallet", "Send", "Receive", "Exchange", "Savings",
      "Spending", "QR Payments", "Merchant Payments", "Transaction History", "Security",
      "Recovery", "Notifications", "Analytics"
    ]
  },
  {
    id: 6,
    title: "Payments",
    icon: <CreditCard className="w-8 h-8 text-emerald-green" />,
    colorClass: "text-emerald-green",
    items: [
      "Personal Payments", "Business Payments", "Merchant Payments", "Subscription Payments",
      "Salary Payments", "International Transfers", "Bill Payments", "QR Payments",
      "Payment Requests", "Scheduled Payments", "Payment Gateway", "Payment APIs"
    ]
  },
  {
    id: 7,
    title: "Marketplace",
    icon: <ShoppingCart className="w-8 h-8 text-royal-purple" />,
    colorClass: "text-royal-purple",
    items: [
      "B2B", "B2C", "C2C", "C2B", "Digital Products", "Physical Products", "Services",
      "Auctions", "Freelancing", "Rentals", "Digital Downloads", "Store Management",
      "Reviews", "Seller Verification", "Buyer Protection", "Shipping", "Order Tracking"
    ]
  },
  {
    id: 8,
    title: "Finance",
    icon: <TrendingUp className="w-8 h-8 text-electric-blue" />,
    colorClass: "text-electric-blue",
    items: [
      "Savings", "Staking", "Investments", "Lending", "Borrowing", "Insurance", "Treasury",
      "Business Finance", "Credit Scoring", "Wealth Management", "Financial Analytics", "Rewards"
    ]
  },
  {
    id: 9,
    title: "Developer Platform",
    icon: <TerminalSquare className="w-8 h-8 text-gray-300" />,
    colorClass: "text-gray-300",
    items: [
      "Documentation", "APIs", "SDKs", "Smart Contract Development", "Testing", "Sandbox",
      "CLI Tools", "Tutorials", "Sample Projects", "Open Source Resources", "Deployment", "Monitoring"
    ]
  },
  {
    id: 10,
    title: "MONETA Academy",
    icon: <BookOpen className="w-8 h-8 text-electric-blue" />,
    colorClass: "text-electric-blue",
    items: [
      "Learning Paths", "Beginner Courses", "Intermediate Courses", "Advanced Courses",
      "Developer Academy", "Business Academy", "Certifications", "Assessments", "Tutorials",
      "Videos", "Documentation", "Events"
    ]
  },
  {
    id: 11,
    title: "Communities",
    icon: <Users className="w-8 h-8 text-brand-orange" />,
    colorClass: "text-brand-orange",
    items: [
      "Public Communities", "Private Communities", "Schools", "Universities", "Businesses",
      "NGOs", "Government Communities", "Religious Communities", "Clubs", "Associations",
      "SACCOs", "Ambassador Program", "Events", "Governance Participation"
    ]
  },
  {
    id: 12,
    title: "Enterprise Solutions",
    icon: <Building2 className="w-8 h-8 text-emerald-green" />,
    colorClass: "text-emerald-green",
    items: [
      "Enterprise Accounts", "ERP Integration", "Banking Integration", "Government Integration",
      "Supply Chain", "Healthcare", "Education", "Manufacturing", "Retail", "Agriculture",
      "Telecommunications", "Logistics", "APIs", "Enterprise Analytics"
    ]
  },
  {
    id: 13,
    title: "Creator Economy",
    icon: <Palette className="w-8 h-8 text-royal-purple" />,
    colorClass: "text-royal-purple",
    items: [
      "Music", "Videos", "Podcasts", "Books", "NFTs", "Royalties", "Licensing", "Streaming",
      "Monetization", "Fan Communities", "Analytics", "Creator Marketplace"
    ]
  },
  {
    id: 14,
    title: "AI Services",
    icon: <BrainCircuit className="w-8 h-8 text-electric-blue" />,
    colorClass: "text-electric-blue",
    items: [
      "AI Assistant", "Business AI", "Developer AI", "Education AI", "Translation", "Analytics",
      "Fraud Detection", "Automation", "Recommendations", "Predictive Intelligence", "Smart Search"
    ]
  },
  {
    id: 15,
    title: "Security Center",
    icon: <ShieldCheck className="w-8 h-8 text-crimson-red" />,
    colorClass: "text-crimson-red",
    items: [
      "Encryption", "Authentication", "Biometrics", "Threat Detection", "Fraud Monitoring",
      "Risk Management", "Compliance", "Privacy", "Data Protection", "Incident Response",
      "Security Updates", "Best Practices"
    ]
  },
  {
    id: 16,
    title: "Governance",
    icon: <Scale className="w-8 h-8 text-golden-yellow" />,
    colorClass: "text-golden-yellow",
    items: [
      "Governance Overview", "Proposals", "Voting", "Treasury", "Delegation", "Validators",
      "Community Decisions", "Transparency Reports", "Improvement Process"
    ]
  },
  {
    id: 17,
    title: "Validator & Node Network",
    icon: <Server className="w-8 h-8 text-electric-blue" />,
    colorClass: "text-electric-blue",
    items: [
      "Network Overview", "Become a Validator", "Become a Node Operator", "Node Licensing",
      "Hardware Requirements", "Rewards", "Responsibilities", "Monitoring", "Performance",
      "Security", "Governance Participation"
    ]
  },
  {
    id: 18,
    title: "Partnerships (Coming Soon)",
    icon: <Handshake className="w-8 h-8 text-gray-400" />,
    colorClass: "text-gray-400",
    desc: "This section will become available after the launch of the MONETA CHAIN Testnet.",
    comingSoon: true,
    items: [
      "Technology Companies", "Financial Institutions", "Commercial Banks", "Mobile Network Operators",
      "Payment Service Providers", "Government Agencies", "Universities", "Educational Institutions",
      "NGOs", "International Organizations", "Enterprise Businesses", "Startups",
      "Cloud Infrastructure Providers", "Cybersecurity Companies", "AI Companies",
      "Logistics Companies", "E-commerce Platforms"
    ]
  },
  {
    id: 19,
    title: "Resources (Coming Soon)",
    icon: <FileText className="w-8 h-8 text-gray-400" />,
    colorClass: "text-gray-400",
    desc: "This section will become available after the launch of the MONETA CHAIN Testnet.",
    comingSoon: true,
    items: [
      "Whitepaper", "Litepaper", "Technical Papers", "Documentation", "Developer Guides",
      "API Reference", "Roadmap", "FAQs", "Blog", "News", "Research Publications",
      "Downloads", "Brand Assets"
    ]
  }
];

export function EcosystemPage() {
  return (
    <div className="pt-24 pb-16 min-h-[100svh] relative overflow-hidden bg-background">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-sm font-bold uppercase tracking-wider mb-6">
              <Globe2 size={14} />
              <span>MONETA ECOSYSTEM</span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-black mb-6 tracking-tight text-white uppercase">
              EXPLORE THE <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-blue">MONETA ECOSYSTEM</span>
            </h1>
            <p className="text-xl text-gray-300 font-display leading-relaxed max-w-3xl mx-auto">
              <strong className="text-white">VORTEX INNOVATIONS</strong> is connected to a growing ecosystem of technology, blockchain, and community-focused initiatives.
            </p>
          </FadeIn>
        </div>

        {/* Featured Ecosystem Entities */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* MONETA CHAIN */}
          <FadeIn delay={0.1}>
            <div className="glass-card p-8 md:p-10 border-electric-blue/30 h-full flex flex-col justify-between relative overflow-hidden bg-black/40 hover:border-electric-blue transition-all group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-electric-blue/10 rounded-bl-full pointer-events-none" />
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-xs font-mono font-bold uppercase tracking-widest mb-6">
                  <Blocks size={12} />
                  <span>Core Network</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-black text-white uppercase tracking-wider mb-4 group-hover:text-electric-blue transition-colors">
                  MONETA CHAIN
                </h3>
                <p className="text-gray-300 font-display text-base md:text-lg leading-relaxed mb-8">
                  Explore the blockchain infrastructure, technology, and ecosystem developed within the MONETA ecosystem.
                </p>
              </div>
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <Link to="/" className="inline-flex items-center space-x-2 text-electric-blue font-bold uppercase tracking-wider text-sm hover:underline">
                  <span>VISIT MONETA CHAIN</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-xs font-mono text-gray-400">
                  Official website link coming soon.
                </span>
              </div>
            </div>
          </FadeIn>

          {/* MONETA GLOBAL FOUNDATION */}
          <FadeIn delay={0.2}>
            <div className="glass-card p-8 md:p-10 border-royal-purple/30 h-full flex flex-col justify-between relative overflow-hidden bg-black/40 hover:border-royal-purple transition-all group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-royal-purple/10 rounded-bl-full pointer-events-none" />
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-royal-purple/10 border border-royal-purple/20 text-royal-purple text-xs font-mono font-bold uppercase tracking-widest mb-6">
                  <Heart size={12} />
                  <span>Social Impact</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-black text-white uppercase tracking-wider mb-4 group-hover:text-royal-purple transition-colors">
                  MONETA GLOBAL FOUNDATION
                </h3>
                <p className="text-gray-300 font-display text-base md:text-lg leading-relaxed mb-8">
                  Discover the foundation's initiatives focused on community impact, social development, and creating positive change.
                </p>
              </div>
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="inline-flex items-center space-x-2 text-royal-purple font-bold uppercase tracking-wider text-sm opacity-80">
                  <span>VISIT MONETA GLOBAL FOUNDATION</span>
                  <ArrowRight size={16} />
                </div>
                <span className="text-xs font-mono text-gray-400">
                  Official website link coming soon.
                </span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* OUR ECOSYSTEM PILLARS SUMMARY */}
        <FadeIn delay={0.3} className="max-w-6xl mx-auto mb-24">
          <div className="glass-card p-8 md:p-12 border-white/10 bg-black/50 relative overflow-hidden">
            <div className="text-center mb-10">
              <span className="text-xs font-mono text-golden-yellow font-bold uppercase tracking-widest mb-2 block">
                CONNECTED ARCHITECTURE
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-black text-white uppercase tracking-wider">
                OUR ECOSYSTEM
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <a
                href="https://vortex-innvations.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-white/5 border border-electric-blue/30 text-center hover:border-electric-blue hover:bg-white/[0.08] transition-all group block cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center mx-auto mb-4 text-electric-blue group-hover:scale-110 transition-transform">
                  <Sparkles size={24} />
                </div>
                <h4 className="font-heading font-black text-lg text-white uppercase tracking-wider mb-1 flex items-center justify-center gap-1.5 group-hover:text-electric-blue transition-colors">
                  <span>VORTEX INNOVATIONS</span>
                  <ExternalLink size={16} className="text-electric-blue opacity-80" />
                </h4>
                <p className="text-electric-blue font-mono text-xs uppercase font-bold tracking-wider mb-2">
                  Technology & Innovation
                </p>
                <span className="text-[11px] font-mono text-gray-400 group-hover:text-white transition-colors flex items-center justify-center gap-1">
                  <span>vortex-innvations.vercel.app</span>
                  <span>→</span>
                </span>
              </a>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-electric-blue/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center mx-auto mb-4 text-electric-blue">
                  <Blocks size={24} />
                </div>
                <h4 className="font-heading font-black text-lg text-white uppercase tracking-wider mb-1">
                  MONETA CHAIN
                </h4>
                <p className="text-electric-blue font-mono text-xs uppercase font-bold tracking-wider">
                  Blockchain Infrastructure
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-royal-purple/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-royal-purple/10 border border-royal-purple/20 flex items-center justify-center mx-auto mb-4 text-royal-purple">
                  <Globe2 size={24} />
                </div>
                <h4 className="font-heading font-black text-lg text-white uppercase tracking-wider mb-1">
                  MONETA GLOBAL FOUNDATION
                </h4>
                <p className="text-royal-purple font-mono text-xs uppercase font-bold tracking-wider">
                  Global Community Impact
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 text-center max-w-3xl mx-auto">
              <p className="font-heading font-black text-lg md:text-xl text-white uppercase tracking-widest text-glow mb-2">
                ONE VISION. ONE ECOSYSTEM. A FUTURE BUILT TOGETHER.
              </p>
              <p className="font-mono text-xs text-gray-400 uppercase tracking-widest">
                MONETA GLOBAL FOUNDATION
              </p>
            </div>
          </div>
        </FadeIn>

        {/* 19 Detailed Pillars Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-black text-white uppercase tracking-wider mb-4">
            Ecosystem Directory & Modules
          </h2>
          <p className="text-gray-400 font-display text-sm md:text-base">
            Detailed breakdown of core values, infrastructure, products, and developer services across the network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {ecosystemSections.map((section, i) => (
            <FadeIn key={section.id} delay={i * 0.05}>
              <div className={`glass-card p-8 h-full flex flex-col relative overflow-hidden group hover:-translate-y-1 transition-transform border-gray-800 ${section.comingSoon ? 'opacity-80 border-dashed' : ''}`}>
                {section.comingSoon && (
                  <div className="absolute top-0 right-0 bg-golden-yellow/20 text-golden-yellow text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                    Coming Soon
                  </div>
                )}
                
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mr-4 group-hover:bg-white/10 transition-colors">
                    {section.icon}
                  </div>
                  <h2 className="font-heading text-xl font-bold text-white uppercase tracking-wide">
                    {section.id}. {section.title}
                  </h2>
                </div>
                
                {section.desc && (
                  <p className="text-sm text-gray-400 font-display mb-6 pb-4 border-b border-white/5">
                    {section.desc}
                  </p>
                )}
                
                <ul className="space-y-2 mt-auto">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start text-sm text-gray-300 font-display">
                      <ChevronRight size={16} className={`mr-2 flex-shrink-0 ${section.colorClass} mt-0.5`} />
                      {item === "Roadmap" ? (
                        <Link to="/roadmap" className="text-electric-blue hover:underline font-semibold flex items-center gap-1">
                          <span>Roadmap</span>
                          <span className="text-[10px] bg-electric-blue/20 text-electric-blue px-1.5 py-0.5 rounded">NEW</span>
                        </Link>
                      ) : (
                        <span>{item}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
