import { FadeIn } from "./FadeIn";
import { useState } from "react";
import { ChevronDown, Mail, ArrowRight, CheckCircle2, HelpCircle } from "lucide-react";

export function InteractSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "What is MONETA Chain?", a: "MONETA is a highly scalable, independent Layer-1 blockchain constructed around a unique consensus model integrating VERA AI for unmatched speed, low fees, and intelligent security." },
    { q: "How is it different from Ethereum or Solana?", a: "Unlike Ethereum, we have native AI protocol-level integration. Unlike Solana, our consensus allows for completely decentralized governance without high hardware requirements for validators." },
    { q: "How can I buy MONETA tokens?", a: "Currently, MONETA is in the Waitlist/Presale phase. You can join the presale by connecting your wallet when the countdown reaches zero." },
    { q: "Is there a staking mechanism?", a: "Yes. Validators lock tokens to secure the network and receive block rewards. Delegators can also stake securely to trusted validators to earn yield." },
    { q: "What wallets support MONETA?", a: "At mainnet launch, MONETA will support its native MONETA Vault wallet, MetaMask (via custom RPC), Trust Wallet, and multiple hardware wallets." }
  ];

  return (
    <>
      {/* PARTNERSHIPS - simple logo strip */}
      <section className="py-12 border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6 text-center">
           <FadeIn>
             <p className="text-sm text-gray-500 font-display uppercase tracking-widest font-semibold mb-8">Strategic Partners & Supported By</p>
             <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Placeholders for partner logos */}
               <h4 className="text-2xl font-heading font-black">NEXA<span className="text-electric-blue">LABS</span></h4>
               <h4 className="text-2xl font-heading font-bold italic">CypherSec</h4>
               <h4 className="text-2xl font-sans font-black tracking-tighter">GLOBAL<span className="font-light">YIELD</span></h4>
               <h4 className="text-2xl font-display font-bold">FIN<span className="text-electric-blue">TECH</span></h4>
             </div>
           </FadeIn>
        </div>
      </section>

      {/* WHY CRYPTO MATTERS & FAQ - Side by side layout on desktop */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Why Crypto Matters - Educational Trust Section */}
            <div className="lg:col-span-5">
              <FadeIn>
                <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-display tracking-widest uppercase text-gray-400 mb-6">
                   Education
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Why <span className="text-white">Cryptocurrencies</span> Matter.</h2>
                <p className="text-gray-400 font-display leading-relaxed mb-6">
                   We believe the future of money is borderless, inclusive, and fundamentally digital. For the first time in history, human beings can truly own their financial assets without relying on intermediaries.
                </p>
                <p className="text-gray-400 font-display leading-relaxed mb-8">
                   MONETA isn't just about fast transactions; it's about providing the robust, secure infrastructure needed to bring financial inclusion to billions across the globe.
                </p>
                
                <h3 className="font-heading font-bold text-lg mb-4">Core Philosophy:</h3>
                <ul className="space-y-3 font-display text-sm text-gray-300">
                  <li className="flex items-center space-x-3"><div className="w-1.5 h-1.5 rounded-full bg-electric-blue"/> <span>Absolute Digital Ownership</span></li>
                  <li className="flex items-center space-x-3"><div className="w-1.5 h-1.5 rounded-full bg-electric-blue"/> <span>Zero-Censorship Transactions</span></li>
                  <li className="flex items-center space-x-3"><div className="w-1.5 h-1.5 rounded-full bg-electric-blue"/> <span>Global Financial Inclusion</span></li>
                </ul>
              </FadeIn>
            </div>

            {/* FAQ Accordion */}
            <div className="lg:col-span-7">
              <FadeIn delay={0.2}>
                <h2 className="font-heading text-2xl font-bold mb-8 flex items-center space-x-3">
                  <HelpCircle className="text-electric-blue" /> <span>Frequently Asked Questions</span>
                </h2>
                
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div 
                      key={i} 
                      className={`glass-card overflow-hidden transition-all duration-300 cursor-pointer ${openFaq === i ? 'border-electric-blue/50' : ''}`}
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <div className="p-6 flex items-center justify-between font-heading font-medium">
                        <h3>{faq.q}</h3>
                        <ChevronDown className={`text-electric-blue transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                      </div>
                      <div 
                        className={`px-6 pb-6 text-sm text-gray-400 font-display leading-relaxed overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 pb-0'}`}
                      >
                        {faq.a}
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
