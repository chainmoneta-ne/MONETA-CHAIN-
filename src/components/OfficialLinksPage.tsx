import { FadeIn } from "./FadeIn";
import { ArrowRight, Link as LinkIcon, ShieldAlert, Blocks, Heart, Sparkles, Globe2, Eye, ExternalLink, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export function OfficialLinksPage() {
  const links = [
    {
      title: "MONETA CHAIN",
      category: "Blockchain Infrastructure",
      desc: "Explore the blockchain infrastructure, technology, and ecosystem developed within the MONETA ecosystem.",
      actionText: "VISIT MONETA CHAIN",
      internalLink: "/",
      status: "Official website link coming soon."
    },
    {
      title: "MONETA GLOBAL FOUNDATION",
      category: "Global Community Impact",
      desc: "Discover the foundation's initiatives focused on community impact, social development, and creating positive change.",
      actionText: "VISIT MONETA GLOBAL FOUNDATION",
      externalLink: "https://moneta-globle-foundation.vercel.app",
      status: "Official Verified Website",
      verified: true
    },
    {
      title: "VORTEX INNOVATIONS",
      category: "Technology & Innovation",
      desc: "Visit the official VORTEX INNOVATIONS company website.",
      actionText: "VISIT VORTEX INNOVATIONS",
      externalLink: "https://vortex-innvations.vercel.app",
      status: "Official Verified Website",
      verified: true
    },
    {
      title: "MONETA ORACLE",
      category: "Decentralized Data Feed",
      desc: "Access verified external data, smart contract price feeds, and real-time oracle consensus on MONETA CHAIN.",
      actionText: "VISIT MONETA ORACLE",
      externalLink: "https://moneta-chain-oracal.vercel.app",
      status: "Official Verified Website",
      verified: true
    },
    {
      title: "MONETA EXPLORER",
      category: "Blockchain Explorer",
      desc: "Explore the official MONETA CHAIN blockchain explorer, block verification, and real-time transaction ledger.",
      actionText: "VISIT MONETA EXPLORER",
      externalLink: "https://moneta-explorer.vercel.app",
      status: "Official Verified Website",
      verified: true
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-[100svh] relative overflow-hidden bg-charcoal-black">
      {/* Background Graphic Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20">
              <LinkIcon className="w-4 h-4 text-electric-blue" />
              <span className="text-electric-blue font-bold tracking-widest uppercase text-xs">Official Directory</span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-black mb-6 tracking-tight uppercase text-white">
              EXPLORE THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-blue">MONETA ECOSYSTEM</span>
            </h1>
            <p className="text-gray-300 font-display text-lg max-w-3xl mx-auto leading-relaxed">
              <strong className="text-white">VORTEX INNOVATIONS</strong> is connected to a growing ecosystem of technology, blockchain, and community-focused initiatives.
            </p>
          </FadeIn>
        </div>

        {/* Directory Links List */}
        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          <FadeIn delay={0.2}>
            {links.map((link, i) => (
              <div key={i} className="glass-card p-8 border-white/10 mb-6 bg-black/40 hover:bg-black/60 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div className="text-xs font-mono text-electric-blue font-bold uppercase tracking-wider mb-1">
                      {link.category}
                    </div>
                    <h3 className="text-2xl font-heading font-black text-white uppercase tracking-wider mb-2 group-hover:text-electric-blue transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-gray-300 font-display text-sm md:text-base leading-relaxed">
                      {link.desc}
                    </p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                    {link.internalLink ? (
                      <Link 
                        to={link.internalLink} 
                        className="px-6 py-3 rounded bg-electric-blue text-black font-bold uppercase tracking-wider text-sm flex items-center gap-2 hover:bg-white hover:shadow-[0_0_15px_rgba(0,210,255,0.4)] transition-all"
                      >
                        <span>{link.actionText}</span> <ArrowRight className="w-4 h-4" />
                      </Link>
                    ) : link.externalLink ? (
                      <a 
                        href={link.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded bg-electric-blue text-black font-bold uppercase tracking-wider text-sm flex items-center gap-2 hover:bg-white hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all"
                      >
                        <span>{link.actionText}</span> <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <button 
                        disabled 
                        className="px-6 py-3 rounded bg-electric-blue/10 text-electric-blue font-bold uppercase tracking-wider text-sm flex items-center gap-2 border border-electric-blue/30 opacity-70 cursor-not-allowed"
                      >
                        <span>{link.actionText}</span> <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                    {link.verified ? (
                      <div className="flex items-center gap-1.5 text-xs font-mono text-[#19C37D] uppercase tracking-wider font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{link.status}</span>
                      </div>
                    ) : (
                      <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                        {link.status}
                      </span>
                    )}
                    {link.externalLink && (
                      <a
                        href={link.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-mono text-electric-blue/80 hover:text-white transition-colors flex items-center gap-1 underline underline-offset-2"
                      >
                        <span>{link.externalLink}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </FadeIn>
        </div>

        {/* OUR ECOSYSTEM HIGHLIGHT CARD */}
        <FadeIn delay={0.3} className="max-w-4xl mx-auto mb-16">
          <div className="glass-card p-8 md:p-10 border-white/10 bg-black/50 relative overflow-hidden">
            <div className="text-center mb-8">
              <span className="text-xs font-mono text-golden-yellow font-bold uppercase tracking-widest mb-1 block">
                CORE PILLARS
              </span>
              <h2 className="font-heading text-3xl font-black text-white uppercase tracking-wider">
                OUR ECOSYSTEM
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <a
                href="https://vortex-innvations.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-xl bg-white/5 border border-electric-blue/30 text-center hover:border-electric-blue hover:bg-white/[0.08] transition-all group block cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center mx-auto mb-3 text-electric-blue group-hover:scale-110 transition-transform">
                  <Sparkles size={20} />
                </div>
                <h4 className="font-heading font-black text-base text-white uppercase tracking-wider mb-1 flex items-center justify-center gap-1.5 group-hover:text-electric-blue transition-colors">
                  <span>VORTEX INNOVATIONS</span>
                  <ExternalLink size={14} className="text-electric-blue opacity-80" />
                </h4>
                <p className="text-electric-blue font-mono text-xs uppercase font-bold tracking-wider mb-2">
                  Technology & Innovation
                </p>
                <span className="text-[11px] font-mono text-gray-400 group-hover:text-white transition-colors flex items-center justify-center gap-1">
                  <span>vortex-innvations.vercel.app</span>
                  <span>→</span>
                </span>
              </a>

              <Link
                to="/"
                className="p-6 rounded-xl bg-white/5 border border-white/10 text-center hover:border-electric-blue hover:bg-white/[0.08] transition-all group block"
              >
                <div className="w-10 h-10 rounded-lg bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center mx-auto mb-3 text-electric-blue group-hover:scale-110 transition-transform">
                  <Blocks size={20} />
                </div>
                <h4 className="font-heading font-black text-base text-white uppercase tracking-wider mb-1 group-hover:text-electric-blue transition-colors">
                  MONETA CHAIN
                </h4>
                <p className="text-electric-blue font-mono text-xs uppercase font-bold tracking-wider mb-2">
                  Blockchain Infrastructure
                </p>
                <span className="text-[11px] font-mono text-gray-400 group-hover:text-white transition-colors">
                  Current Portal →
                </span>
              </Link>

              <a
                href="https://moneta-globle-foundation.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-xl bg-white/5 border border-royal-purple/30 text-center hover:border-royal-purple hover:bg-white/[0.08] transition-all group block cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-royal-purple/10 border border-royal-purple/20 flex items-center justify-center mx-auto mb-3 text-royal-purple group-hover:scale-110 transition-transform">
                  <Globe2 size={20} />
                </div>
                <h4 className="font-heading font-black text-base text-white uppercase tracking-wider mb-1 flex items-center justify-center gap-1.5 group-hover:text-royal-purple transition-colors">
                  <span>MONETA GLOBAL FOUNDATION</span>
                  <ExternalLink size={14} className="text-royal-purple opacity-80" />
                </h4>
                <p className="text-royal-purple font-mono text-xs uppercase font-bold tracking-wider mb-2">
                  Global Community Impact
                </p>
                <span className="text-[11px] font-mono text-gray-400 group-hover:text-white transition-colors flex items-center justify-center gap-1">
                  <span>moneta-globle-foundation.vercel.app</span>
                  <span>→</span>
                </span>
              </a>
            </div>

            <div className="border-t border-white/10 pt-6 text-center">
              <p className="font-heading font-black text-base md:text-lg text-white uppercase tracking-widest text-glow mb-1">
                ONE VISION. ONE ECOSYSTEM. A FUTURE BUILT TOGETHER.
              </p>
              <p className="font-mono text-xs text-golden-yellow uppercase tracking-widest font-bold">
                MONETA GLOBAL FOUNDATION
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Security Warning Notice */}
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0.4}>
            <div className="glass-card p-8 border-electric-blue/20 bg-electric-blue/5 text-center">
              <ShieldAlert className="w-10 h-10 text-electric-blue mx-auto mb-3 opacity-80" />
              <h4 className="text-lg font-heading font-black text-white uppercase tracking-wider mb-2">OFFICIAL DIRECTORY & AUTHENTICITY</h4>
              <p className="text-gray-300 font-display text-sm mb-3">
                Always verify and use official links published directly through the MONETA ecosystem directory to ensure you are visiting authentic platforms.
              </p>
              <p className="text-gray-400 font-display text-xs max-w-2xl mx-auto italic">
                Verified ecosystem platforms including VORTEX INNOVATIONS, MONETA GLOBAL FOUNDATION, MONETA ORACLE, and MONETA EXPLORER are verified official entities. Always ensure URLs match the official directory.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
