import { FadeIn } from "./FadeIn";
import { Terminal } from "lucide-react";
import React, { useState } from "react";

const COUNTRIES = [
  "United States", "United Kingdom", "Canada", "Australia", "Germany", "France", 
  "Japan", "South Korea", "Singapore", "United Arab Emirates", "India", "Brazil",
  "Nigeria", "South Africa", "Mexico", "Spain", "Italy", "Netherlands", "Switzerland", "Other"
];

const PROGRAMMING_LANGUAGES = [
  "Rust", "JavaScript", "TypeScript", "Python", "Go", "C/C++", "Java", "Solidity"
];

export function DeveloperRegistrationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const normalizeUsername = (username: string) => {
    let normalized = username.trim();
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
    const languages = formData.getAll('languages');
    if (formData.get('language_other')) {
      languages.push((formData.get('language_other') as string).trim());
    }
    
    const fullName = (formData.get('full_name') as string).trim();
    if (/^\d+$/.test(fullName)) {
      setError("Please enter a valid name, not just numbers.");
      setIsSubmitting(false);
      return;
    }

    const email = (formData.get('email') as string).trim().toLowerCase();
    
    const github = formData.get('github_url') as string;
    if (github && !github.includes('github.com')) {
      setError("Please enter a valid GitHub URL (e.g. https://github.com/username).");
      setIsSubmitting(false);
      return;
    }

    const desiredUsername = formData.get('desired_username') ? normalizeUsername(formData.get('desired_username') as string) : null;

    const data = {
      full_name: fullName,
      email: email,
      country: formData.get('country') as string || null,
      primary_role: formData.get('primary_role') as string,
      experience_level: formData.get('experience') as string || null,
      languages_known: languages.length > 0 ? languages : null,
      blockchain_experience: formData.get('blockchain_experience') as string || null,
      desired_username: desiredUsername,
      wallet_address: (formData.get('wallet_address') as string).trim() || null,
      github_url: github.trim() || null,
      portfolio_url: (formData.get('portfolio_url') as string).trim() || null,
      reason_to_join: (formData.get('reason_to_join') as string).trim(),
    };

    try {
      const { supabase } = await import('../lib/supabase');
      const { error: insertError } = await supabase.from('developer_registrations').insert([data]);
      
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

  return (
    <div className="pt-24 pb-16 min-h-[100svh] relative overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-12 text-center mx-auto">
          <FadeIn>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-golden-yellow/10 border border-golden-yellow/20 text-golden-yellow text-sm font-bold uppercase tracking-wider mb-6">
              <Terminal size={14} />
              <span>UNDER DEVELOPMENT • LIMITED ACCESS</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">
              Join MONETA CHAIN <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-blue">Early Access</span>
            </h1>
            <p className="text-xl text-gray-400 font-display leading-relaxed">
              Be among the first builders, users, and partners in the MONETA ecosystem.
            </p>
          </FadeIn>
        </div>

        <div className="max-w-3xl mx-auto">
          {isSubmitted ? (
            <FadeIn>
              <div className="glass-card p-12 text-center border-electric-blue/30 bg-electric-blue/5">
                <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Terminal size={32} className="text-electric-blue" />
                </div>
                <h2 className="text-3xl font-heading font-black text-white uppercase tracking-wider mb-4">Registration Received</h2>
                <p className="text-gray-300 font-display text-lg mb-6">
                  Thank you. Your information has been submitted successfully.
                </p>
                <p className="text-electric-blue font-bold mb-8">
                  Your request will be reviewed as MONETA CHAIN continues development.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-sm text-electric-blue hover:text-white transition-colors underline"
                >
                  Submit another response
                </button>
              </div>
            </FadeIn>
          ) : (
            <FadeIn delay={0.2}>
              {error && (
                <div className="mb-8 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm font-bold text-center">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-8">
                
                <div className="glass-card p-8 border-white/5">
                  <h3 className="text-xl font-heading font-black text-white uppercase mb-6 flex items-center space-x-2 border-b border-white/10 pb-3">
                    <span className="text-electric-blue">01.</span>
                    <span>Personal Information</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-1 font-display">Full Name *</label>
                      <input required type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors" name="full_name" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-1 font-display">Email Address *</label>
                      <input required type="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors" name="email" placeholder="name@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-1 font-display">Country (Optional)</label>
                      <select name="country" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors appearance-none">
                        <option value="">Select a country</option>
                        {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-1 font-display">Primary Role *</label>
                      <select name="primary_role" required className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors appearance-none">
                        <option value="">Select your role</option>
                        <option value="Developer">Developer</option>
                        <option value="Validator">Validator</option>
                        <option value="Partner">Partner</option>
                        <option value="Researcher">Researcher</option>
                        <option value="Community Contributor">Community Contributor</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-8 border-white/5">
                  <h3 className="text-xl font-heading font-black text-white uppercase mb-6 flex items-center space-x-2 border-b border-white/10 pb-3">
                    <span className="text-electric-blue">02.</span>
                    <span>Technical Profile</span>
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-300 mb-1 font-display">Programming Experience (Optional)</label>
                        <select name="experience" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors appearance-none">
                          <option value="">Select level</option>
                          <option value="Beginner">Beginner</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Advanced">Advanced</option>
                          <option value="Professional">Professional</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-300 mb-1 font-display">Blockchain Experience (Optional)</label>
                        <select name="blockchain_experience" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors appearance-none">
                          <option value="">Select level</option>
                          <option value="Beginner">Beginner (Learning)</option>
                          <option value="Intermediate">Intermediate (Built basic smart contracts)</option>
                          <option value="Advanced">Advanced (Deployed to mainnet)</option>
                          <option value="Professional">Professional (Security/Core Dev)</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-3 font-display">Programming Languages Known (Optional)</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {PROGRAMMING_LANGUAGES.map(lang => (
                          <label key={lang} className="flex items-center space-x-2 cursor-pointer group">
                            <input type="checkbox" name="languages" value={lang} className="text-electric-blue rounded focus:ring-electric-blue bg-black/50 border-white/20" />
                            <span className="text-gray-400 group-hover:text-white transition-colors text-sm">{lang}</span>
                          </label>
                        ))}
                      </div>
                      <div className="mt-4">
                        <input type="text" name="language_other" className="w-full md:w-1/2 bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors text-sm" placeholder="Other languages (comma separated)..." />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-8 border-white/5">
                  <h3 className="text-xl font-heading font-black text-white uppercase mb-6 flex items-center space-x-2 border-b border-white/10 pb-3">
                    <span className="text-electric-blue">03.</span>
                    <span>Ecosystem & Web3 Details</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-1 font-display">Desired .mon Username (Optional)</label>
                      <p className="text-xs text-gray-500 mb-2">Reserve a future naming service handle.</p>
                      <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors" name="desired_username" placeholder="e.g. @alex" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-1 font-display">Public Wallet Address (Optional)</label>
                      <p className="text-xs text-red-400 mb-2 font-bold uppercase">Never provide a private key or seed phrase.</p>
                      <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors" name="wallet_address" placeholder="0x..." />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-1 font-display">GitHub Profile (Optional)</label>
                      <input type="url" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors" name="github_url" placeholder="https://github.com/username" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-1 font-display">Portfolio / Website (Optional)</label>
                      <input type="url" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors" name="portfolio_url" placeholder="https://..." />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-gray-300 mb-1 font-display">Tell us why you want to contribute to the MONETA CHAIN ecosystem. *</label>
                      <textarea required rows={4} maxLength={1500} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors resize-none" name="reason_to_join" placeholder="Tell us about yourself, your project, or why you are interested in our ecosystem..."></textarea>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-8 border-electric-blue/20 bg-electric-blue/5">
                  <label className="flex items-start space-x-3 cursor-pointer group hover:bg-electric-blue/10 p-4 -m-4 rounded-lg transition-colors">
                    <input required type="checkbox" className="mt-1 text-electric-blue rounded focus:ring-electric-blue bg-black border-electric-blue w-5 h-5 flex-shrink-0" />
                    <span className="text-white font-bold leading-tight flex-1">
                      I agree to the Terms of Service and acknowledge that providing this information does not guarantee early access.
                    </span>
                  </label>
                </div>

                <div className="text-center pt-4 pb-8">
                  <button type="submit" disabled={isSubmitting} className="btn-primary inline-flex items-center space-x-2 px-12 py-4 text-lg font-bold tracking-widest w-full md:w-auto justify-center uppercase disabled:opacity-50">
                    {isSubmitting ? "SUBMITTING..." : "JOIN EARLY ACCESS"}
                  </button>
                </div>
              </form>
            </FadeIn>
          )}
        </div>
      </div>
    </div>
  );
}