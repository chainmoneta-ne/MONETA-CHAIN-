import React, { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { 
  Link, Instagram, Facebook, Linkedin, Youtube, Send, 
  X as XIconLucide, Cpu, ShieldCheck, Zap, Globe2, Menu, Headset 
} from "lucide-react";
import { NewsletterSignup } from './NewsletterSignup';
import logoImg from "../assets/images/moneta_chain_logo_1788243584482.jpg";
import { FloatingSupportLauncher } from "./support/FloatingSupportLauncher";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const TiktokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.25-.97 4.54-2.58 6.18-1.55 1.57-3.8 2.53-6.02 2.62-2.31.09-4.71-.35-6.57-1.84-1.92-1.54-2.88-4.04-2.61-6.52.26-2.5 1.68-4.82 3.82-6.05 1.94-1.11 4.34-1.28 6.47-.7v4.13c-1.02-.32-2.14-.37-3.14-.09-1.04.29-1.94 1.05-2.42 2.01-.5 1 .05 2.51.59 3.39.54.88 1.48 1.46 2.51 1.52 1.25.07 2.61-.41 3.3-1.48.51-.8.74-1.74.74-2.68.01-6.66-.01-13.31.02-19.98z"/>
  </svg>
);

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
  </svg>
);

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.888-.662 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const marqueeWords = [
  "CRYPTO", "BLOCKCHAIN", "MONETA", "VERA AI", "SMART CONTRACTS", "SACCO", 
  "WEB3", "DECENTRALIZATION", "FINANCE", "INNOVATION", "QUANTUM", "SCALABILITY", 
  "SECURITY", "DIGITAL ASSETS", "FUTURE"
];

function Marquee() {
  return (
    <div className="w-full bg-electric-blue/10 border-b border-electric-blue/20 overflow-hidden py-1.5 relative z-40 flex">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* We double the list to ensure seamless looping */}
        {[...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords].map((word, i) => (
          <div key={i} className="flex items-center mx-4">
            <span className="text-xs font-mono font-bold tracking-widest text-electric-blue uppercase">
              {word}
            </span>
            <span className="mx-8 text-electric-blue/30">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);


  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md flex flex-col pt-0">
        <Marquee />
        <div className="container mx-auto px-6 h-20 flex outline-none items-center justify-between border-b border-white/5">
          <RouterLink to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-electric-blue flex items-center justify-center p-[2px] box-glow">
              <div className="bg-background w-full h-full rounded-full flex items-center justify-center overflow-hidden">
                <img src={logoImg} alt="MONETA CHAIN" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
              </div>
            </div>
            <span className="font-brand font-bold text-xl tracking-wider">MONETA CHAIN</span>
          </RouterLink>

          <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-400">
            <RouterLink to="/home" className="hover:text-electric-blue transition-colors">Home</RouterLink>
            <RouterLink to="/roadmap" className="hover:text-electric-blue transition-colors">Roadmap</RouterLink>
            <RouterLink to="/vera" className="hover:text-electric-blue transition-colors flex items-center space-x-1"><span className="w-1.5 h-1.5 bg-electric-blue rounded-full animate-pulse"></span><span>VERA AI</span></RouterLink>
            <RouterLink to="/presale" className="hover:text-electric-blue transition-colors text-golden-yellow">Pre-Sale</RouterLink>
            <RouterLink to="/academy" className="hover:text-electric-blue transition-colors">Academy</RouterLink>
            <RouterLink to="/tokenomics" className="hover:text-electric-blue transition-colors">Tokenomics</RouterLink>
            <RouterLink to="/ecosystem" className="hover:text-electric-blue transition-colors">Ecosystem</RouterLink>
            <RouterLink to="/features" className="hover:text-electric-blue transition-colors">Features</RouterLink>
            <RouterLink to="/vision" className="hover:text-electric-blue transition-colors">Vision</RouterLink>
            <RouterLink to="/developers" className="hover:text-electric-blue transition-colors">Developers</RouterLink>
            <RouterLink to="/support" className="hover:text-electric-blue transition-colors flex items-center space-x-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              <span>Support</span>
            </RouterLink>
          </div>

          <div className="flex items-center space-x-4">
            <RouterLink to="/waitlist" className="hidden md:inline-block px-5 py-2.5 btn-primary hover:box-glow transition-all text-center mr-2">Join Waitlist</RouterLink>
            <button aria-label="Toggle Mobile Menu" className="md:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <XIconLucide /> : <Menu />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-charcoal-black border-b border-white/10 absolute top-full left-0 right-0 max-h-[80vh] overflow-y-auto z-50 p-6 flex flex-col space-y-4 shadow-xl">
            <RouterLink to="/home" className="hover:text-electric-blue transition-colors font-medium">Home</RouterLink>
            <RouterLink to="/roadmap" className="hover:text-electric-blue transition-colors font-medium">Roadmap</RouterLink>
            <RouterLink to="/vera" className="hover:text-electric-blue transition-colors flex items-center space-x-2 font-medium"><span className="w-2 h-2 bg-electric-blue rounded-full animate-pulse"></span><span>VERA AI</span></RouterLink>
            <RouterLink to="/presale" className="hover:text-electric-blue transition-colors text-golden-yellow font-medium">Pre-Sale</RouterLink>
            <RouterLink to="/academy" className="hover:text-electric-blue transition-colors font-medium">Academy</RouterLink>
            <RouterLink to="/tokenomics" className="hover:text-electric-blue transition-colors font-medium">Tokenomics</RouterLink>
            <RouterLink to="/ecosystem" className="hover:text-electric-blue transition-colors font-medium">Ecosystem</RouterLink>
            <RouterLink to="/features" className="hover:text-electric-blue transition-colors font-medium">Features</RouterLink>
            <RouterLink to="/vision" className="hover:text-electric-blue transition-colors font-medium">Vision</RouterLink>
            <RouterLink to="/developers" className="hover:text-electric-blue transition-colors font-medium">Developers</RouterLink>
            <RouterLink to="/support" className="text-emerald-400 hover:text-emerald-300 transition-colors font-bold flex items-center space-x-2">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span>Support & Feature Status</span>
            </RouterLink>
            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col">
               <RouterLink to="/waitlist" className="px-5 py-3 btn-primary text-center w-full">Join Waitlist</RouterLink>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Professional Footer */}
      <footer className="border-t border-white/10 bg-black pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-4">
              <RouterLink to="/" className="flex items-center space-x-3 mb-6">
                <span className="font-brand font-bold text-2xl tracking-wider">MONETA CHAIN</span>
              </RouterLink>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 font-display pr-12">
                A decentralized blockchain ecosystem built for the future of secure, transparent, and borderless digital value exchange.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 font-display pr-12">
                This platform is continuously evolving. New developments, features, and ecosystem expansions will be introduced over time as the project progresses.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 font-display pr-12">
                MONETA CHAIN is committed to innovation, security, and long-term ecosystem growth.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-8 max-w-sm">
                 <a href="#" onClick={(e) => { e.preventDefault(); alert("COMING SOON - Official link will be provided soon."); }} title="Official link coming soon" aria-label="Social media link - Coming Soon" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-electric-blue hover:text-electric-blue hover:bg-white/5 transition-all cursor-pointer" ><XIcon className="w-4 h-4"/></a>
                 <a href="#" onClick={(e) => { e.preventDefault(); alert("COMING SOON - Official link will be provided soon."); }} title="Official link coming soon" aria-label="Social media link - Coming Soon" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-electric-blue hover:text-electric-blue hover:bg-white/5 transition-all cursor-pointer" ><Instagram size={18}/></a>
                 <a href="#" onClick={(e) => { e.preventDefault(); alert("COMING SOON - Official link will be provided soon."); }} title="Official link coming soon" aria-label="Social media link - Coming Soon" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-electric-blue hover:text-electric-blue hover:bg-white/5 transition-all cursor-pointer" ><Facebook size={18}/></a>
                 <a href="#" onClick={(e) => { e.preventDefault(); alert("COMING SOON - Official link will be provided soon."); }} title="Official link coming soon" aria-label="Social media link - Coming Soon" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-electric-blue hover:text-electric-blue hover:bg-white/5 transition-all cursor-pointer" ><Linkedin size={18}/></a>
                 <a href="#" onClick={(e) => { e.preventDefault(); alert("COMING SOON - Official link will be provided soon."); }} title="Official link coming soon" aria-label="Social media link - Coming Soon" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-electric-blue hover:text-electric-blue hover:bg-white/5 transition-all cursor-pointer" ><TiktokIcon className="w-4 h-4"/></a>
                 <a href="#" onClick={(e) => { e.preventDefault(); alert("COMING SOON - Official link will be provided soon."); }} title="Official link coming soon" aria-label="Social media link - Coming Soon" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-electric-blue hover:text-electric-blue hover:bg-white/5 transition-all cursor-pointer" ><Youtube size={18}/></a>
                 <a href="#" onClick={(e) => { e.preventDefault(); alert("COMING SOON - Official link will be provided soon."); }} title="Official link coming soon" aria-label="Social media link - Coming Soon" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-electric-blue hover:text-electric-blue hover:bg-white/5 transition-all cursor-pointer" ><TelegramIcon className="w-4 h-4"/></a>
                 <a href="#" onClick={(e) => { e.preventDefault(); alert("COMING SOON - Official link will be provided soon."); }} title="Official link coming soon" aria-label="Social media link - Coming Soon" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-electric-blue hover:text-electric-blue hover:bg-white/5 transition-all cursor-pointer" ><DiscordIcon className="w-5 h-5"/></a>
              </div>
              
              <h4 className="font-heading text-sm font-semibold mb-3">Newsletter</h4>
              <NewsletterSignup />
            </div>

            <div className="lg:col-span-2">
              <h4 className="font-heading text-sm font-semibold mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-gray-400 font-display">
                <li className="hover:text-electric-blue cursor-pointer">
                   <RouterLink to="/about">About Us</RouterLink>
                </li>
                <li className="hover:text-electric-blue cursor-pointer">
                   <RouterLink to="/roadmap">Roadmap</RouterLink>
                </li>
                <li className="hover:text-electric-blue cursor-pointer">
                   <RouterLink to="/vision">Vision</RouterLink>
                </li>
                <li className="hover:text-electric-blue cursor-pointer">
                   <RouterLink to="/features">Features</RouterLink>
                </li>
                <li className="hover:text-electric-blue cursor-pointer">
                   <RouterLink to="/tokenomics">Tokenomics</RouterLink>
                </li>
                <li className="hover:text-electric-blue cursor-pointer">
                   <RouterLink to="/presale">Pre-Sale</RouterLink>
                </li>
                <li className="hover:text-electric-blue cursor-pointer">
                   <RouterLink to="/countdowns">Countdowns</RouterLink>
                </li>
                <li className="hover:text-electric-blue cursor-pointer">
                   <RouterLink to="/home#team">Team</RouterLink>
                </li>
                <li className="hover:text-electric-blue cursor-pointer">
                   <RouterLink to="/home#partnerships">Partnerships</RouterLink>
                </li>
                <li className="hover:text-electric-blue cursor-pointer">
                   <RouterLink to="/home#social">Social Media</RouterLink>
                </li>
                <li className="hover:text-electric-blue cursor-pointer">
                   <RouterLink to="/faq">FAQ</RouterLink>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="font-heading text-sm font-semibold mb-6">Developers</h4>
              <ul className="space-y-4 text-sm text-gray-400 font-display">
                <li className="hover:text-electric-blue cursor-pointer">
                   <RouterLink to="/developers">APIs & SDKs</RouterLink>
                </li>
                <li className="hover:text-electric-blue cursor-pointer">
                   <RouterLink to="/developers">Documentation</RouterLink>
                </li>
                <li className="hover:text-electric-blue cursor-pointer">
                   <RouterLink to="/conduct">Code of Conduct</RouterLink>
                </li>
                <li className="hover:text-electric-blue cursor-pointer">
                   <RouterLink to="/developer-registration">Developer Registration</RouterLink>
                </li>
                <li className="hover:text-electric-blue cursor-pointer"><a href="#" onClick={(e) => { e.preventDefault(); alert("Official link coming soon."); }} title="Official link coming soon">GitHub</a></li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="font-heading text-sm font-semibold mb-6">Ecosystem</h4>
              <ul className="space-y-4 text-sm text-gray-400 font-display">
                <li className="hover:text-electric-blue cursor-pointer">
                  <RouterLink to="/ecosystem">Explore Ecosystem</RouterLink>
                </li>
                <li className="hover:text-electric-blue cursor-pointer">
                  <RouterLink to="/roadmap">Roadmap</RouterLink>
                </li>
                <li className="hover:text-electric-blue cursor-pointer">
                  <RouterLink to="/official-links">Official Links</RouterLink>
                </li>
                <li className="hover:text-electric-blue cursor-pointer">
                  <a href="https://vortex-innvations.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                    <span>VORTEX INNOVATIONS</span>
                    <span className="text-[10px] bg-electric-blue/10 text-electric-blue px-1.5 py-0.5 rounded border border-electric-blue/20">WEBSITE</span>
                  </a>
                </li>
                <li className="hover:text-electric-blue cursor-pointer">
                   <RouterLink to="/vera" className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-electric-blue rounded-full animate-pulse"></span><span>VERA AI</span></RouterLink>
                </li>
                <li className="hover:text-electric-blue cursor-pointer">
                  <RouterLink to="/academy">MONETA ACADEMY</RouterLink>
                </li>
                <li className="hover:text-electric-blue cursor-pointer">
                  <RouterLink to="/coverage">Coverage</RouterLink>
                </li>
                <li className="hover:text-electric-blue cursor-pointer">
                  <RouterLink to="/mining">Mining</RouterLink>
                </li>
                <li className="hover:text-electric-blue cursor-pointer">
                  <RouterLink to="/waitlist">Join Waitlist</RouterLink>
                </li>
                <li className="hover:text-electric-blue cursor-pointer">
                  <RouterLink to="/home#nodes">Validator Network</RouterLink>
                </li>
                <li className="hover:text-electric-blue cursor-pointer"><a href="#" onClick={(e) => { e.preventDefault(); alert("Official link coming soon."); }} title="Official link coming soon">Block Explorer</a></li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="font-heading text-sm font-semibold mb-6">Support & Status</h4>
              <ul className="space-y-4 text-sm text-gray-400 font-display">
                <li className="hover:text-electric-blue cursor-pointer">
                  <RouterLink to="/support" className="flex items-center space-x-1.5 text-emerald-400 font-bold">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    <span>Support Hub (🟢 LIVE)</span>
                  </RouterLink>
                </li>
                <li className="hover:text-electric-blue cursor-pointer">
                  <RouterLink to="/support">System & Feature Status</RouterLink>
                </li>
                <li className="hover:text-electric-blue cursor-pointer">
                  <RouterLink to="/support?feature=presale">Presale Support</RouterLink>
                </li>
                <li className="hover:text-electric-blue cursor-pointer">
                  <RouterLink to="/support?feature=mining">Mining Support</RouterLink>
                </li>
                <li className="hover:text-electric-blue cursor-pointer">
                  <RouterLink to="/support?feature=validators">Validator Support</RouterLink>
                </li>
                <li className="hover:text-electric-blue cursor-pointer">
                  <RouterLink to="/support?feature=wallet">Wallet Support</RouterLink>
                </li>
                <li className="hover:text-electric-blue cursor-pointer">
                  <RouterLink to="/faq">Help Center & FAQ</RouterLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-sm text-gray-500 font-display text-center md:text-left">
            <p className="mb-4">
              All information presented on this website is for informational purposes only and may be updated without prior notice.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p>&copy; MONETA CHAIN. All Rights Reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                 <RouterLink to="/support" className="text-gray-400 hover:text-white transition-colors">
                   Support & Feature Status: <strong className="text-emerald-green font-normal">🟢 Support Operational</strong>
                 </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Global Context-Aware Floating Support Launcher */}
      <FloatingSupportLauncher />
    </div>
  );
}
