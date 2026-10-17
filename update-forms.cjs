const fs = require('fs');

let waitlist = fs.readFileSync('src/components/WaitlistPage.tsx', 'utf8');
waitlist = waitlist.replace(
  `const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };`,
  `const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      full_name: formData.get('full_name') as string,
      email: formData.get('email') as string,
      country: formData.get('country') as string,
      gender: formData.get('gender') as string,
      phone: formData.get('phone') as string,
      telegram: formData.get('telegram') as string,
      twitter: formData.get('twitter') as string,
      investment_amount: Number(formData.get('investment_amount')),
      uses_crypto: formData.get('use_crypto') === 'yes',
      wallet_type: formData.get('wallet') === 'other' ? formData.get('wallet_other') : formData.get('wallet'),
      feedback: formData.get('feedback') as string,
      motivation: formData.get('motivation') as string,
      source: formData.get('source') as string,
    };

    try {
      const { supabase } = await import('../lib/supabase');
      const { error: insertError } = await supabase.from('waitlist').insert([data]);
      if (insertError) throw insertError;
      setIsSubmitted(true);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to submit the form.');
    } finally {
      setIsSubmitting(false);
    }
  };`
);

waitlist = waitlist.replace('placeholder="e.g. Satoshi Nakamoto" />', 'name="full_name" placeholder="e.g. Satoshi Nakamoto" />');
waitlist = waitlist.replace('placeholder="satoshi@example.com" />', 'name="email" placeholder="satoshi@example.com" />');
waitlist = waitlist.replace('placeholder="e.g. Japan" />', 'name="country" placeholder="e.g. Japan" />');
waitlist = waitlist.replace('placeholder="+1 234 567 8900" />', 'name="phone" placeholder="+1 234 567 8900" />');
waitlist = waitlist.replace('placeholder="@username" />', 'name="telegram" placeholder="@username" />');
waitlist = waitlist.replace('className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors" placeholder="@username"', 'name="twitter" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors" placeholder="@username"');
waitlist = waitlist.replace('placeholder="e.g. 1000" />', 'name="investment_amount" placeholder="e.g. 1000" />');
waitlist = waitlist.replace('placeholder="Specify here..." />', 'name="wallet_other" placeholder="Specify here..." />');
waitlist = waitlist.replace('placeholder="Your thoughts..."></textarea>', 'name="feedback" placeholder="Your thoughts..."></textarea>');
waitlist = waitlist.replace('placeholder="Your motivation..."></textarea>', 'name="motivation" placeholder="Your motivation..."></textarea>');

waitlist = waitlist.replace('<span>Submit</span>', '{isSubmitting ? "Submitting..." : "Submit"}');

if (!waitlist.includes('error &&')) {
  waitlist = waitlist.replace('</button>', '</button>\n{error && <p className="text-red-500 mt-4 text-sm">{error}</p>}');
}

fs.writeFileSync('src/components/WaitlistPage.tsx', waitlist);

let dev = fs.readFileSync('src/components/DeveloperRegistrationPage.tsx', 'utf8');
dev = dev.replace(
  `const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };`,
  `const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const languages = formData.getAll('languages');
    if (formData.get('language_other')) {
      languages.push(formData.get('language_other') as string);
    }

    const data = {
      full_name: formData.get('full_name') as string,
      email: formData.get('email') as string,
      country: formData.get('country') as string,
      primary_role: formData.get('primary_role') as string,
      experience_level: formData.get('experience') as string,
      languages_known: languages,
      blockchain_experience: formData.get('blockchain_experience') as string,
      desired_username: formData.get('desired_username') as string,
      wallet_address: formData.get('wallet_address') as string,
      github_url: formData.get('github_url') as string,
      portfolio_url: formData.get('portfolio_url') as string,
      reason_to_join: formData.get('reason_to_join') as string,
    };

    try {
      const { supabase } = await import('../lib/supabase');
      const { error: insertError } = await supabase.from('developer_registrations').insert([data]);
      if (insertError) throw insertError;
      setIsSubmitted(true);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to submit the form.');
    } finally {
      setIsSubmitting(false);
    }
  };`
);

dev = dev.replace('placeholder="John Doe" />', 'name="full_name" placeholder="John Doe" />');
dev = dev.replace('placeholder="john@example.com" />', 'name="email" placeholder="john@example.com" />');
dev = dev.replace('placeholder="e.g. United Kingdom" />', 'name="country" placeholder="e.g. United Kingdom" />');
dev = dev.replace('<select required className="w-full bg-black/50', '<select name="primary_role" required className="w-full bg-black/50');
dev = dev.replace('type="checkbox" className="text-electric-blue rounded focus:ring-electric-blue bg-black/50 border-white/20"', 'type="checkbox" name="languages" value={lang} className="text-electric-blue rounded focus:ring-electric-blue bg-black/50 border-white/20"');
dev = dev.replace('placeholder="Other languages..." />', 'name="language_other" placeholder="Other languages..." />');
dev = dev.replace('<select className="w-full bg-black/50', '<select name="blockchain_experience" className="w-full bg-black/50');
dev = dev.replace('placeholder="e.g. alex" />', 'name="desired_username" placeholder="e.g. alex" />');
dev = dev.replace('placeholder="0x..." />', 'name="wallet_address" placeholder="0x..." />');
dev = dev.replace('placeholder="https://github.com/..." />', 'name="github_url" placeholder="https://github.com/..." />');
dev = dev.replace('placeholder="https://..." />', 'name="portfolio_url" placeholder="https://..." />');
dev = dev.replace('placeholder="Tell us about yourself, your project, or why you are interested in our ecosystem..."></textarea>', 'name="reason_to_join" placeholder="Tell us about yourself, your project, or why you are interested in our ecosystem..."></textarea>');

dev = dev.replace('<span>JOIN EARLY ACCESS</span>', '<span>{isSubmitting ? "SUBMITTING..." : "JOIN EARLY ACCESS"}</span>');
if (!dev.includes('error &&')) {
  dev = dev.replace('</button>', '</button>\n{error && <p className="text-red-500 mt-4 text-sm font-display">{error}</p>}');
}

fs.writeFileSync('src/components/DeveloperRegistrationPage.tsx', dev);
