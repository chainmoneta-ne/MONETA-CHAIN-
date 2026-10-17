import { FadeIn } from "./FadeIn";
import { Globe, AlertTriangle, Lightbulb, Zap, Shield, Bot, LayoutTemplate, Activity, Wallet, Cpu, CheckCircle2 } from "lucide-react";

export function VisionPage() {
  return (
    <div className="pt-24 pb-16 min-h-[100svh] relative overflow-hidden bg-background">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mb-20 text-center mx-auto">
          <FadeIn>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-sm font-bold uppercase tracking-wider mb-6">
              <Globe size={14} />
              <span>Vision & Reality</span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-black mb-6 tracking-tight">
              Why Cryptocurrencies <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-golden-yellow">Matter.</span>
            </h1>
            <p className="text-xl text-gray-400 font-display leading-relaxed">
              Here’s a clear, grounded explanation you can share with anyone — no hype, just reality and vision.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 space-y-16">
            
            {/* Why Crypto is Here to Stay */}
            <FadeIn delay={0.2}>
              <h2 className="font-heading text-3xl font-bold mb-8 flex items-center space-x-3 border-b border-white/10 pb-4">
                <Globe className="text-electric-blue" /> 
                <span>Why Cryptocurrencies Are Here to Stay</span>
              </h2>
              <p className="text-gray-300 font-display mb-8">
                Cryptocurrencies are not just a trend. They exist because they solve real problems in the global financial system that are not going away.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "1. Money is becoming digital everywhere", desc: "People already send money using mobile money, apps, and online banking. Crypto is the next step: money that moves like the internet — instantly and globally." },
                  { title: "2. Global access is still unequal", desc: "Billions of people are still unbanked or underbanked, paying high fees for transfers, and blocked from global financial systems. Crypto offers an alternative system that does not require traditional banks." },
                  { title: "3. Cross-border payments are too slow and expensive", desc: "Traditional transfers can take days and cost high fees. Crypto enables near-instant global transfers at low cost." },
                  { title: "4. People want financial control", desc: "With crypto, users can hold their own money without relying fully on banks or governments. This idea of self-custody is powerful and permanent." },
                  { title: "5. Digital economies are growing", desc: "Online work, gaming economies, digital assets, and AI economies all need native digital money systems." },
                ].map((item, i) => (
                  <div key={i} className="glass-card p-6 border-l-4 border-l-electric-blue hover:border-electric-blue/50 transition-colors">
                    <h3 className="font-heading text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-gray-400 font-display text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
                
                <div className="glass-card p-6 bg-electric-blue/5 border-electric-blue/30 text-center">
                  <p className="font-bold text-electric-blue">👉 So crypto is not replacing everything — it is becoming the financial layer of the internet.</p>
                </div>
              </div>
            </FadeIn>

            {/* Real Problems */}
            <FadeIn delay={0.3}>
              <h2 className="font-heading text-3xl font-bold mb-8 flex items-center space-x-3 border-b border-white/10 pb-4 text-crimson-red">
                <AlertTriangle className="text-crimson-red" /> 
                <span className="text-white">Real Problems Cryptocurrencies Have Today</span>
              </h2>
              <p className="text-gray-300 font-display mb-8">
                Even though crypto is powerful, it is not perfect. These are real issues:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Scalability (speed & congestion)", desc: "Many blockchains become slow or expensive when too many people use them.", icon: <Activity size={20} /> },
                  { title: "High fees (gas costs)", desc: "Some networks become too expensive for small transactions.", icon: <Zap size={20} /> },
                  { title: "Complexity", desc: "Normal users struggle with wallets, seed phrases, private keys, and networks.", icon: <LayoutTemplate size={20} /> },
                  { title: "Volatility", desc: "Prices of many cryptocurrencies go up and down too much to be stable for daily life.", icon: <Activity size={20} /> },
                  { title: "Security risks", desc: "Hacks, scams, and lost keys are common.", icon: <Shield size={20} /> },
                  { title: "Lack of real-world usability", desc: "Many crypto systems are used for trading, not everyday life (buying food, paying school fees, etc.).", icon: <Wallet size={20} /> },
                ].map((item, i) => (
                  <div key={i} className="glass-card p-5 hover:border-crimson-red/30 transition-colors group">
                    <div className="text-crimson-red mb-3 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
                    <h3 className="font-heading font-bold text-lg mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-400 font-display text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Where MONETA CHAIN Fits In */}
            <FadeIn delay={0.4}>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 flex items-center space-x-4 border-b border-white/10 pb-4">
                <div className="p-2 bg-brand-orange/10 rounded-lg text-brand-orange">
                  <Lightbulb size={28} /> 
                </div>
                <span>Where MONETA CHAIN Fits In</span>
              </h2>
              <p className="text-gray-300 font-display mb-8 text-lg">
                MONETA CHAIN is being designed as a <span className="text-brand-orange font-bold">real-world usability layer</span>, not just another speculative crypto project. 
                Since it is still under development, the focus is on solving the exact problems above step by step.
              </p>

              <div className="space-y-6">
                {[
                  { 
                    id: 1, 
                    title: "Solving Complexity (Simple Access)", 
                    color: "border-l-electric-blue",
                    icon: <LayoutTemplate size={24} className="text-electric-blue" />,
                    content: (
                      <>
                        <ul className="space-y-2 mt-3 list-disc list-inside text-gray-400 text-sm">
                          <li>Replace complicated wallet setups with simple mobile onboarding</li>
                          <li>Use human-friendly accounts (like phone numbers or IDs instead of long addresses)</li>
                          <li>Add AI support so users can ask: <em className="text-gray-300">"Send money to John"</em> instead of typing long crypto addresses</li>
                        </ul>
                      </>
                    )
                  },
                  { 
                    id: 2, 
                    title: "Solving High Fees & Speed", 
                    color: "border-l-golden-yellow",
                    icon: <Zap size={24} className="text-golden-yellow" />,
                    content: (
                      <>
                        <ul className="space-y-2 mt-3 list-disc list-inside text-gray-400 text-sm">
                          <li>Low-cost transactions</li>
                          <li>High throughput (more transactions per second)</li>
                          <li>Optimized consensus design to reduce congestion</li>
                        </ul>
                        <p className="mt-3 text-sm font-bold text-golden-yellow">Goal: make micro-payments possible (even a few cents).</p>
                      </>
                    )
                  },
                  { 
                    id: 3, 
                    title: "Real-World Usage First", 
                    color: "border-l-brand-orange",
                    icon: <Globe size={24} className="text-brand-orange" />,
                    content: (
                      <>
                        <p className="text-sm text-gray-400 mb-2">Instead of only trading, MONETA focuses on:</p>
                        <ul className="space-y-2 list-disc list-inside text-gray-400 text-sm">
                          <li>Payments (local + global)</li>
                          <li>Savings systems (community wallets / SACCO-style finance)</li>
                          <li>Freelance & gig payments</li>
                          <li>Merchant adoption (shops, services, businesses)</li>
                        </ul>
                        <p className="mt-3 text-sm font-bold text-brand-orange">👉 The goal is not speculation — it’s daily economic activity.</p>
                      </>
                    )
                  },
                  { 
                    id: 4, 
                    title: "Security & Trust Layer", 
                    color: "border-l-royal-purple",
                    icon: <Shield size={24} className="text-royal-purple" />,
                    content: (
                      <>
                        <ul className="space-y-2 mt-3 list-disc list-inside text-gray-400 text-sm">
                          <li>Strong identity verification options (including lightweight digital ID tools)</li>
                          <li>Fraud detection systems using AI</li>
                          <li>Safer wallet recovery systems (to reduce lost funds)</li>
                        </ul>
                      </>
                    )
                  },
                  { 
                    id: 5, 
                    title: "Stability Systems", 
                    color: "border-l-emerald-green",
                    icon: <CheckCircle2 size={24} className="text-emerald-green" />,
                    content: (
                      <>
                        <p className="text-sm text-gray-400 mb-2">To make MONETA usable in real life:</p>
                        <ul className="space-y-2 list-disc list-inside text-gray-400 text-sm">
                          <li>Stablecoin integration (for pricing stability)</li>
                          <li>Currency bridges (MONETA ↔ local currencies)</li>
                          <li>Financial buffering tools for merchants and users</li>
                        </ul>
                      </>
                    )
                  },
                  { 
                    id: 6, 
                    title: "AI Integration (Key Difference)", 
                    color: "border-l-electric-blue",
                    icon: <Bot size={24} className="text-electric-blue" />,
                    content: (
                      <>
                        <p className="text-sm text-gray-400 mb-2">MONETA CHAIN includes AI assistance to:</p>
                        <ul className="space-y-2 list-disc list-inside text-gray-400 text-sm">
                          <li>Guide users step-by-step</li>
                          <li>Prevent scams</li>
                          <li>Automate transactions safely</li>
                          <li>Teach financial literacy</li>
                        </ul>
                      </>
                    )
                  }
                ].map((section) => (
                  <div key={section.id} className={`glass-card p-6 border-l-4 ${section.color}`}>
                    <div className="flex items-center space-x-3 mb-2">
                       {section.icon}
                       <h3 className="font-heading text-xl font-bold text-white">{section.id}. {section.title}</h3>
                    </div>
                    {section.content}
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* The Big Idea */}
            <FadeIn delay={0.5} className="mt-16 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/10 via-golden-yellow/10 to-transparent blur-xl pointer-events-none" />
              <div className="glass-card p-8 md:p-12 border-brand-orange/30 relative z-10 box-glow overflow-hidden">
                <Globe size={48} className="absolute -right-6 -bottom-6 text-brand-orange/10" />
                <h2 className="font-heading text-3xl font-bold mb-6 text-white pb-4 border-b border-brand-orange/20">Our Vision</h2>
                <div className="text-gray-300 font-display space-y-4">
                  <p>
                    To become the world's most trusted digital infrastructure, empowering billions of people, businesses, and governments to securely connect, innovate, transact, and prosper in a borderless digital economy. Through intelligent technology, decentralized infrastructure, and continuous innovation, MONETA will redefine trust, ownership, identity, commerce, and financial freedom for current and future generations.
                  </p>
                </div>
              </div>
              
              <div className="glass-card p-8 md:p-12 border-electric-blue/30 relative z-10 box-glow overflow-hidden mt-8">
                <Globe size={48} className="absolute -right-6 -bottom-6 text-electric-blue/10" />
                <h2 className="font-heading text-3xl font-bold mb-6 text-white pb-4 border-b border-electric-blue/20">Our Mission</h2>
                <div className="text-gray-300 font-display space-y-4">
                  <p>
                    Our mission is to build secure, intelligent, and scalable digital technologies that empower individuals, businesses, communities, and governments to connect, transact, innovate, and grow with confidence. We are committed to delivering trusted blockchain infrastructure, digital identity, financial services, enterprise solutions, marketplaces, education, and emerging technologies that are accessible, inclusive, and designed to create lasting value for people everywhere.
                  </p>
                </div>
              </div>
              
              <div className="glass-card p-8 md:p-12 border-electric-blue/30 relative z-10 box-glow overflow-hidden mt-8">
                <Globe size={48} className="absolute -right-6 -bottom-6 text-electric-blue/10" />
                <h2 className="font-heading text-3xl font-bold mb-6 text-white pb-4 border-b border-electric-blue/20">Short-Term Goals</h2>
                <div className="text-gray-300 font-display space-y-4">
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Build and launch a secure, scalable, and reliable MONETA platform.</li>
                    <li>Develop core products, including digital identity, payments, wallets, APIs, marketplaces, and enterprise solutions.</li>
                    <li>Grow a strong community of users, developers, creators, and business partners.</li>
                    <li>Establish strategic partnerships with businesses, educational institutions, financial organizations, and government agencies.</li>
                    <li>Maintain high standards of security, privacy, compliance, and transparency.</li>
                    <li>Expand operations into multiple countries and support multiple languages and currencies.</li>
                    <li>Build a sustainable business through diverse revenue streams and continuous innovation.</li>
                    <li>Invest in research, development, and talent to keep MONETA at the forefront of technology.</li>
                  </ol>
                </div>
              </div>

              <div className="glass-card p-8 md:p-12 border-brand-orange/30 relative z-10 box-glow overflow-hidden mt-8">
                <Globe size={48} className="absolute -right-6 -bottom-6 text-brand-orange/10" />
                <h2 className="font-heading text-3xl font-bold mb-6 text-white pb-4 border-b border-brand-orange/20">Long-Term Goals</h2>
                <div className="text-gray-300 font-display space-y-4">
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Become one of the world's leading digital infrastructure and technology platforms.</li>
                    <li>Connect billions of people, businesses, and governments through a trusted digital ecosystem.</li>
                    <li>Lead global innovation in blockchain, artificial intelligence, digital identity, finance, and enterprise technology.</li>
                    <li>Support economic growth by enabling secure digital commerce and financial inclusion worldwide.</li>
                    <li>Build a resilient ecosystem that powers education, healthcare, trade, entertainment, government services, and future industries.</li>
                    <li>Continuously innovate while maintaining the highest standards of security, reliability, and sustainability.</li>
                    <li>Create lasting value for customers, partners, developers, investors, employees, and society.</li>
                    <li>Help shape a more connected, inclusive, and trusted global digital economy.</li>
                  </ol>
                </div>
              </div>

              <div className="glass-card p-8 md:p-12 border-electric-blue/30 relative z-10 box-glow overflow-hidden mt-8">
                <Globe size={48} className="absolute -right-6 -bottom-6 text-electric-blue/10" />
                <h2 className="font-heading text-3xl font-bold mb-6 text-white pb-4 border-b border-electric-blue/20">Strategic Objectives</h2>
                <div className="text-gray-300 font-display space-y-4">
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Deliver innovative, secure, and user-focused digital solutions.</li>
                    <li>Ensure platform scalability, performance, and reliability.</li>
                    <li>Protect user data through strong cybersecurity and privacy practices.</li>
                    <li>Promote transparency, accountability, and ethical innovation.</li>
                    <li>Foster collaboration with developers, enterprises, governments, and communities.</li>
                    <li>Expand global accessibility through multilingual and multicurrency support.</li>
                    <li>Encourage innovation through open APIs, developer tools, and ecosystem partnerships.</li>
                    <li>Achieve long-term financial sustainability while creating measurable social and economic impact.</li>
                  </ol>
                </div>
              </div>
              
              <div className="glass-card p-8 md:p-12 border-brand-orange/30 relative z-10 box-glow overflow-hidden mt-12">
                <Globe size={48} className="absolute -right-6 -bottom-6 text-brand-orange/10" />
                <h2 className="font-heading text-3xl font-bold mb-6 text-white pb-4 border-b border-brand-orange/20">The Big Idea</h2>
                <div className="text-gray-300 font-display space-y-4">
                  <p>Cryptocurrency is here to stay because it solves real global problems in money, access, and digital trade.</p>
                  <p>But today's systems are still: <strong>too complex</strong>, <strong>too expensive in some cases</strong>, and <strong>too technical for mass adoption</strong>.</p>
                  <div className="mt-6 p-6 bg-brand-orange/10 border border-brand-orange/20 rounded-xl relative">
                    <p className="font-bold text-lg text-white mb-2">👉 MONETA CHAIN is being built with a different focus:</p>
                    <p className="text-brand-orange text-xl font-heading leading-relaxed italic">
                      "Not just a crypto system for experts — but a financial system that anyone in the world can actually use."
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4 space-y-8">
            <FadeIn delay={0.6} className="glass-card p-6 border-golden-yellow/30 bg-golden-yellow/5">
              <h3 className="font-heading font-bold text-xl mb-4 text-white flex items-center space-x-2">
                <AlertTriangle size={20} className="text-golden-yellow" />
                <span>Important Reality Check</span>
              </h3>
              <div className="space-y-4 text-sm font-display text-gray-300">
                <p>Since MONETA CHAIN is still under development:</p>
                <p>These solutions are goals and design direction, not finished features yet.</p>
                <p>Real success depends on execution, testing, adoption, and growth</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.7} className="glass-card p-6 text-center">
               <Shield size={32} className="mx-auto mb-4 text-brand-orange" />
               <h3 className="font-heading font-bold text-lg mb-2">Built For The Real World</h3>
               <p className="text-sm text-gray-400 font-display mb-4">
                 Our architecture is designed around solving tangible problems.
               </p>
            </FadeIn>
          </div>

        </div>
      </div>
    </div>
  );
}
