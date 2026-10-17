const fs = require('fs');

let content = fs.readFileSync('src/components/WaitlistPage.tsx', 'utf8');

const replacement = `
import { FadeIn } from "./FadeIn";
import { CheckCircle2, Coins, Globe2, Terminal } from "lucide-react";
import React, { useState } from "react";

const COUNTRIES = [
  "United States", "United Kingdom", "Canada", "Australia", "Germany", "France", 
  "Japan", "South Korea", "Singapore", "United Arab Emirates", "India", "Brazil",
  "Nigeria", "South Africa", "Mexico", "Spain", "Italy", "Netherlands", "Switzerland", "Other"
];

export function WaitlistPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const normalizeUsername = (username: string) => {
    let normalized = username.trim();
    if (normalized.includes('twitter.com/') || normalized.includes('x.com/')) {
      normalized = normalized.split('/').pop() || normalized;
    }
    if (normalized.includes('t.me/')) {
      normalized = normalized.split('/').pop() || normalized;
    }
    if (normalized && !normalized.startsWith('@')) {
      normalized = '@' + normalized;
    }
    return normalized;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    
    const fullName = (formData.get('full_name') as string).trim();
    if (/^\\d+$/.test(fullName)) {
      setError("Please enter a valid name, not just numbers.");
      setIsSubmitting(false);
      return;
    }

    const email = (formData.get('email') as string).trim().toLowerCase();
    const phone = (formData.get('phone') as string).trim();
    
    if (phone && !/^\\+?[0-9\\s\\-\\(\\)]+$/.test(phone)) {
      setError("Please enter a valid phone number (e.g. +256 700 000 000).");
      setIsSubmitting(false);
      return;
    }

    const telegram = normalizeUsername(formData.get('telegram') as string);
    const twitter = formData.get('twitter') ? normalizeUsername(formData.get('twitter') as string) : null;
    
    const data = {
      full_name: fullName,
      email: email,
      country: formData.get('country') as string,
      gender: formData.get('gender') as string,
      phone: phone || null,
      telegram: telegram,
      twitter: twitter,
      investment_amount: Number(formData.get('investment_amount')),
      uses_crypto: formData.get('use_crypto') === 'yes',
      wallet_type: formData.get('wallet') === 'other' ? formData.get('wallet_other') : formData.get('wallet'),
      feedback: (formData.get('feedback') as string).trim(),
      motivation: (formData.get('motivation') as string).trim(),
      source: formData.get('source') as string,
    };

    try {
      const { supabase } = await import('../lib/supabase');
      const { error: insertError } = await supabase.from('waitlist').insert([data]);
      
      if (insertError) {
        if (insertError.code === '23505') {
          throw new Error("You're already registered with this information.");
        }
        throw insertError;
      }
      setIsSubmitted(true);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "We couldn't submit your information right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-32 min-h-[100svh] relative overflow-hidden flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-electric-blue/10 to-electric-blue/10 rounded-[100%] blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
        <div className="container mx-auto px-6 relative z-10 max-w-2xl text-center">
          <FadeIn>
            <div className="glass-card p-12 relative overflow-hidden border-electric-blue/30 box-glow bg-electric-blue/5">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-golden-yellow to-electric-blue" />
              <div className="w-20 h-20 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} className="text-electric-blue" />
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-black mb-6 uppercase tracking-wider text-white">
                Thank You. Your information has been submitted successfully.
              </h1>
              <p className="text-xl text-gray-400 font-display leading-relaxed mb-8">
                You're officially on the MONETA CHAIN waitlist. Keep an eye on your email for early access instructions.
              </p>
              <button onClick={() => setIsSubmitted(false)} className="text-electric-blue hover:text-white transition-colors underline text-sm">
                Submit another response
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-20 min-h-[100svh] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-electric-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <FadeIn>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-sm font-bold uppercase tracking-wider mb-6">
              <Terminal size={14} />
              <span>Phase 1 Registration</span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-black mb-6 tracking-tight uppercase">
              Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-blue">Waitlist</span>
            </h1>
            <p className="text-xl text-gray-400 font-display leading-relaxed max-w-2xl mx-auto">
              Secure your early access to the MONETA ecosystem. Complete the form below to register your interest.
            </p>
          </FadeIn>
        </div>

        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            {error && (
              <div className="mb-8 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm font-bold text-center">
                {error}
              </div>
            )}
            <form className="space-y-8" onSubmit={handleSubmit}>
              
              <div className="glass-card p-8 border-white/5">
                <h3 className="text-xl font-heading font-black text-white uppercase mb-6 flex items-center space-x-2 border-b border-white/10 pb-3">
                  <span className="text-electric-blue">01.</span>
                  <span>Personal Details</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-1 font-display">Full Name *</label>
                    <p className="text-xs text-gray-500 mb-2">Enter your full legal or commonly used name.</p>
                    <input required type="text" name="full_name" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors" placeholder="e.g. Satoshi Nakamoto" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-1 font-display">Email Address *</label>
                    <input required type="email" name="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors" placeholder="name@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-1 font-display">Country *</label>
                    <select required name="country" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors appearance-none">
                      <option value="">Select a country</option>
                      {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-2 font-display">Gender *</label>
                    <div className="flex gap-4">
                       <label className="flex items-center space-x-2 cursor-pointer group">
                         <input required type="radio" name="gender" value="male" className="text-electric-blue focus:ring-electric-blue bg-black/50 border-white/20" />
                         <span className="text-gray-400 group-hover:text-white transition-colors">Male</span>
                       </label>
                       <label className="flex items-center space-x-2 cursor-pointer group">
                         <input required type="radio" name="gender" value="female" className="text-electric-blue focus:ring-electric-blue bg-black/50 border-white/20" />
                         <span className="text-gray-400 group-hover:text-white transition-colors">Female</span>
                       </label>
                       <label className="flex items-center space-x-2 cursor-pointer group">
                         <input required type="radio" name="gender" value="other" className="text-electric-blue focus:ring-electric-blue bg-black/50 border-white/20" />
                         <span className="text-gray-400 group-hover:text-white transition-colors">Other</span>
                       </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 border-white/5">
                <h3 className="text-xl font-heading font-black text-white uppercase mb-6 flex items-center space-x-2 border-b border-white/10 pb-3">
                  <Globe2 size={20} className="text-electric-blue" />
                  <span>Contact & Social</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-1 font-display">Phone Number (Optional)</label>
                    <input type="tel" name="phone" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors" placeholder="+256 700 000 000" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-1 font-display">Telegram Username *</label>
                    <input required type="text" name="telegram" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors" placeholder="@username" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-300 mb-1 font-display">X (Twitter) Username (Optional)</label>
                    <p className="text-xs text-gray-500 mb-2">Enter your X username.</p>
                    <input type="text" name="twitter" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors" placeholder="@username" />
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 border-white/5">
                <h3 className="text-xl font-heading font-black text-white uppercase mb-6 flex items-center space-x-2 border-b border-white/10 pb-3">
                  <Coins size={20} className="text-golden-yellow" />
                  <span>Investment Interest</span>
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-1 font-display">Planned Investment Amount (USD) *</label>
                    <input required type="number" min="0" name="investment_amount" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors" placeholder="e.g. 1000" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-3 font-display">Do you currently use cryptocurrency? *</label>
                    <div className="flex gap-4">
                       <label className="flex items-center space-x-2 cursor-pointer group">
                         <input required type="radio" name="use_crypto" value="yes" className="text-electric-blue focus:ring-electric-blue bg-black/50 border-white/20" />
                         <span className="text-gray-400 group-hover:text-white transition-colors">Yes</span>
                       </label>
                       <label className="flex items-center space-x-2 cursor-pointer group">
                         <input required type="radio" name="use_crypto" value="no" className="text-electric-blue focus:ring-electric-blue bg-black/50 border-white/20" />
                         <span className="text-gray-400 group-hover:text-white transition-colors">No</span>
                       </label>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-1 font-display">Which cryptocurrency wallet do you currently use? *</label>
                    <p className="text-xs text-red-400 mb-3 font-bold uppercase tracking-wider">Security Warning: MONETA CHAIN will never ask for your private key, seed phrase, or wallet recovery phrase.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                       <label className="flex items-center space-x-2 cursor-pointer group">
                         <input required type="radio" name="wallet" value="trust_wallet" className="text-electric-blue focus:ring-electric-blue bg-black/50 border-white/20" />
                         <span className="text-gray-400 group-hover:text-white transition-colors">Trust Wallet</span>
                       </label>
                       <label className="flex items-center space-x-2 cursor-pointer group">
                         <input required type="radio" name="wallet" value="metamask" className="text-electric-blue focus:ring-electric-blue bg-black/50 border-white/20" />
                         <span className="text-gray-400 group-hover:text-white transition-colors">MetaMask</span>
                       </label>
                       <label className="flex items-center space-x-2 cursor-pointer group">
                         <input required type="radio" name="wallet" value="binance" className="text-electric-blue focus:ring-electric-blue bg-black/50 border-white/20" />
                         <span className="text-gray-400 group-hover:text-white transition-colors">Binance Wallet</span>
                       </label>
                       <label className="flex items-center space-x-3 cursor-pointer group">
                         <input required type="radio" name="wallet" value="other" className="text-electric-blue focus:ring-electric-blue bg-black/50 border-white/20 mt-1" />
                         <div className="flex items-center space-x-2 w-full">
                           <span className="text-gray-400 group-hover:text-white transition-colors whitespace-nowrap">Other Wallet Name:</span>
                           <input type="text" name="wallet_other" className="bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-electric-blue transition-colors flex-1 text-sm pb-1" placeholder="Specify here..." />
                         </div>
                       </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 border-white/5">
                <h3 className="text-xl font-heading font-black text-white uppercase mb-6 flex items-center space-x-2 border-b border-white/10 pb-3">
                  <Globe2 size={20} className="text-electric-blue" />
                  <span>Community Feedback</span>
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-1 font-display">Tell us what you think about MONETA CHAIN and what interests you most about the project. *</label>
                    <textarea required rows={3} maxLength={1000} name="feedback" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors resize-none" placeholder="Your thoughts..."></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-1 font-display">Tell us why you want to participate in the MONETA CHAIN ecosystem. *</label>
                    <textarea required rows={3} maxLength={1000} name="motivation" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors resize-none" placeholder="Your motivation..."></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-3 font-display">How did you discover MONETA CHAIN? *</label>
                    <select required name="source" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors appearance-none">
                      <option value="">Select an option</option>
                      <option value="x">X (Twitter)</option>
                      <option value="telegram">Telegram</option>
                      <option value="youtube">YouTube</option>
                      <option value="facebook">Facebook</option>
                      <option value="instagram">Instagram</option>
                      <option value="tiktok">TikTok</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="friend">Friend / Referral</option>
                      <option value="search">Search Engine</option>
                      <option value="website">Website</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 border-electric-blue/20 bg-electric-blue/5">
                <label className="flex items-start space-x-3 cursor-pointer group hover:bg-electric-blue/10 p-4 -m-4 rounded-lg transition-colors">
                  <input required type="checkbox" className="mt-1 text-electric-blue rounded focus:ring-electric-blue bg-black border-electric-blue w-5 h-5 flex-shrink-0" />
                  <span className="text-white font-bold leading-tight flex-1">
                    I agree to receive updates about MONETA COIN and MONETA CHAIN.
                  </span>
                </label>
              </div>

              <div className="text-center pt-4 pb-8">
                <button type="submit" disabled={isSubmitting} className="btn-primary inline-flex items-center space-x-2 px-12 py-4 text-lg font-bold tracking-widest w-full md:w-auto justify-center uppercase disabled:opacity-50">
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
`

fs.writeFileSync('src/components/WaitlistPage.tsx', replacement.trim());
