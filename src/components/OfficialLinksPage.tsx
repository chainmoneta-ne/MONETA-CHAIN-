import { FadeIn } from "./FadeIn";
import { ArrowRight, Link as LinkIcon, ShieldAlert, Blocks, Heart, Sparkles, Globe2, Eye } from "lucide-react";
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
      status: "Official website link coming soon."
    },
    {
      title: "VORTEX INNOVATIONS",
      category: "Technology & Innovation",
      desc: "Visit the official VORTEX INNOVATIONS company website.",
      actionText: "VISIT VORTEX INNOVATIONS",
      status: "Official website link coming soon."
    },
    {
      title: "MONETA ORACLE",
      category: "Decentralized Data Feed",
      desc: "Visit the official MONETA ORACLE website.",
      actionText: "VISIT MONETA ORACLE",
      status: "Official website link coming soon."
    },
    {
      title: "MONETA EXPLORER",
      category: "Blockchain Explorer",
      desc: "Explore the official MONETA CHAIN blockchain explorer.",
      actionText: "VISIT MONETA EXPLORER",
      status: "Official website link coming soon."
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
                        className="px-6 py-3 rounded bg-electric-blue text-black font-bold uppercase tracking-wider text-sm flex items-center gap-2 hover:bg-white transition-colors"
                      >
                        <span>{link.actionText}</span> <ArrowRight className="w-4 h-4" />
                      </Link>
                    ) : (
                      <button 
                        disabled 
                        className="px-6 py-3 rounded bg-electric-blue/10 text-electric-blue font-bold uppercase tracking-wider text-sm flex items-center gap-2 border border-electric-blue/30 opacity-70 cursor-not-allowed"
                      >
                        <span>{link.actionText}</span> <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                      {link.status}
                    </span>
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
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="w-10 h-10 rounded-lg bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center mx-auto mb-3 text-electric-blue">
                  <Sparkles size={20} />
                </div>
                <h4 className="font-heading font-black text-base text-white uppercase tracking-wider mb-1">
                  VORTEX INNOVATIONS
                </h4>
                <p className="text-electric-blue font-mono text-xs uppercase font-bold tracking-wider">
                  Technology & Innovation
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="w-10 h-10 rounded-lg bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center mx-auto mb-3 text-electric-blue">
                  <Blocks size={20} />
                </div>
                <h4 className="font-heading font-black text-base text-white uppercase tracking-wider mb-1">
                  MONETA CHAIN
                </h4>
                <p className="text-electric-blue font-mono text-xs uppercase font-bold tracking-wider">
                  Blockchain Infrastructure
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="w-10 h-10 rounded-lg bg-royal-purple/10 border border-royal-purple/20 flex items-center justify-center mx-auto mb-3 text-royal-purple">
                  <Globe2 size={20} />
                </div>
                <h4 className="font-heading font-black text-base text-white uppercase tracking-wider mb-1">
                  MONETA GLOBAL FOUNDATION
                </h4>
                <p className="text-royal-purple font-mono text-xs uppercase font-bold tracking-wider">
                  Global Community Impact
                </p>
              </div>
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
              <h4 className="text-lg font-heading font-black text-white uppercase tracking-wider mb-2">OFFICIAL LINKS COMING SOON</h4>
              <p className="text-gray-300 font-display text-sm mb-3">
                The official website links will be published here soon.
              </p>
              <p className="text-gray-400 font-display text-xs max-w-2xl mx-auto italic">
                Always use the links provided directly through the official MONETA CHAIN website to ensure you are visiting authentic platforms.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
