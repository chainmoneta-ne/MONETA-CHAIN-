import { Link } from 'react-router-dom';
import { Shield, Zap, Globe, Users, ArrowRight, LayoutTemplate, Handshake, Target, Rocket, Cpu, Briefcase, FileText, BookOpen } from 'lucide-react';
import { FadeIn } from './FadeIn';
import bgImage from '../assets/images/moneta_chain_network_1779394341057.png';

export function LandingPage() {
  const mainPages = [
    { name: "Portal Home", path: "/home", desc: "The main portal of MONETA Chain" },
    { name: "About", path: "/about", desc: "Learn about our mission and vision" },
    { name: "Vision", path: "/vision", desc: "Why cryptocurrencies matter" },
    { name: "Features", path: "/features", desc: "Explore MONETA Chain features" },
    { name: "Ecosystem", path: "/ecosystem", desc: "The digital ecosystem" },
    { name: "Tokenomics", path: "/tokenomics", desc: "MINT token economics" },
    { name: "Pre-Sale", path: "/presale", desc: "Join the early token sale" },
    { name: "Mining", path: "/mining", desc: "Start mining MINT" },
    { name: "Academy", path: "/academy", desc: "Learn about blockchain" },
    { name: "Developers", path: "/developers", desc: "Build on MONETA Chain" },
    { name: "VERA AI", path: "/vera", desc: "AI-powered blockchain assistant" },
  ];

  const secondaryPages = [
    { name: "Waitlist", path: "/waitlist" },
    { name: "FAQ", path: "/faq" },
    { name: "Coverage", path: "/coverage" },
    { name: "Countdowns", path: "/countdowns" },
    { name: "Safety Center", path: "/safety" },
    { name: "Developer Registration", path: "/developer-registration" },
    { name: "Code of Conduct", path: "/conduct" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Official Links", path: "/official-links" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Trademark", path: "/trademark" },
  ];

  return (
    <div className="pt-24 pb-16 min-h-[100svh] relative overflow-hidden bg-charcoal-black">
      {/* Background matching the image - dark space/globe vibe */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cover bg-center opacity-60 mix-blend-screen" style={{ backgroundImage: `url(${bgImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-black via-charcoal-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-black via-transparent to-charcoal-black" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col min-h-[80vh]">
        
        {/* Hero Section */}
        <FadeIn>
          <div className="max-w-4xl pt-10 mb-20 relative z-10">
            <h1 className="font-heading text-6xl md:text-8xl lg:text-[100px] font-black mb-6 tracking-tighter leading-[0.9]">
              <span className="block text-emerald-green">TRUST.</span>
              <span className="block text-electric-blue">FREEDOM.</span>
              <span className="block text-royal-purple">TOMORROW.</span>
            </h1>
            
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-white tracking-wide mb-6 leading-tight">
              THE NEXT GENERATION<br/>BLOCKCHAIN INFRASTRUCTURE
            </h2>
            
            <p className="text-lg md:text-xl text-silver font-display tracking-[0.2em] uppercase mb-12">
              BUILDING A GLOBAL DIGITAL FUTURE
            </p>

            <div className="flex flex-wrap items-center gap-6 md:gap-10 text-sm md:text-base font-bold tracking-widest uppercase">
              <div className="flex items-center space-x-2 text-emerald-green">
                <Shield className="w-6 h-6" />
                <span>SECURE</span>
              </div>
              <div className="flex items-center space-x-2 text-electric-blue">
                <Zap className="w-6 h-6" />
                <span>FAST</span>
              </div>
              <div className="flex items-center space-x-2 text-royal-purple">
                <Globe className="w-6 h-6" />
                <span>DECENTRALIZED</span>
              </div>
              <div className="flex items-center space-x-2 text-golden-yellow">
                <Users className="w-6 h-6" />
                <span>GLOBAL</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Navigation Grid */}
        <div className="mt-12 relative z-10">
          <FadeIn delay={0.2}>
            <div className="mb-16">
              <h3 className="text-2xl font-heading font-bold text-white mb-8 flex items-center">
                <span className="w-8 h-1 bg-electric-blue mr-4"></span>
                Core Network & Platform
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {mainPages.map((page, i) => (
                  <Link 
                    key={i} 
                    to={page.path}
                    className="glass-card p-6 border-white/10 bg-white/5 hover:bg-white/10 hover:border-electric-blue/50 hover:-translate-y-1 transition-all group flex flex-col justify-between h-full"
                  >
                    <div>
                      <h4 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-electric-blue transition-colors">
                        {page.name}
                      </h4>
                      <p className="text-xs text-silver font-display">
                        {page.desc}
                      </p>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <ArrowRight className="w-4 h-4 text-silver group-hover:text-electric-blue transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div>
              <h3 className="text-xl font-heading font-bold text-white mb-6 flex items-center">
                <span className="w-6 h-1 bg-silver mr-4"></span>
                Resources & Documentation
              </h3>
              <div className="flex flex-wrap gap-3">
                {secondaryPages.map((page, i) => (
                  <Link 
                    key={i} 
                    to={page.path}
                    className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-silver hover:bg-white/15 hover:text-white transition-colors"
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </div>
  );
}
