import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic Validation
    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Email address is required.');
      setTimeout(() => setStatus('idle'), 5000);
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      setTimeout(() => setStatus('idle'), 5000);
      return;
    }

    setStatus('loading');

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email: email.trim().toLowerCase() }]);

      if (error) {
        if (error.code === '23505') {
          throw new Error("You're already subscribed.");
        }
        throw error;
      }
      
      setStatus('success');
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
      
    } catch (err: any) {
      console.warn('Newsletter Notice:', err.message);
      setStatus('error');
      setErrorMessage(err.message || 'Connection failed. Please check your Supabase setup.');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  return (
    <div className="w-full max-w-sm">
      <form 
        className="flex relative group" 
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-golden-yellow/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <input 
          type="email" 
          placeholder="name@example.com" 
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === 'error') setStatus('idle');
          }}
          className={`relative bg-black/60 border ${status === 'error' ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-electric-blue'} rounded-l-xl px-4 py-3 w-full text-sm outline-none text-white transition-colors backdrop-blur-sm z-10`} 
          required 
          disabled={status === 'loading' || status === 'success'}
        />
        <button 
          type="submit" 
          className="relative bg-electric-blue font-semibold text-white rounded-r-xl px-6 py-3 text-sm hover:bg-electric-blue/90 disabled:opacity-50 transition-colors z-10 flex items-center justify-center min-w-[120px]"
          disabled={status === 'loading' || status === 'success'}
        >
          {status === 'loading' ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : status === 'success' ? (
            <CheckCircle className="w-5 h-5" />
          ) : (
            <>
              <span className="mr-2">Subscribe</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
      
      <div className="h-6 mt-2 overflow-hidden">
        <div className={`transition-all duration-300 transform ${status === 'success' ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
          <p className="text-green-400 text-xs flex items-center">
            <CheckCircle className="w-3 h-3 mr-1" />
            You're subscribed to MONETA CHAIN updates.
          </p>
        </div>
        <div className={`transition-all duration-300 transform ${status === 'error' ? '-translate-y-6 opacity-100' : '-translate-y-full opacity-0'}`}>
          <p className="text-red-400 text-xs flex items-center">
            <AlertCircle className="w-3 h-3 mr-1" />
            {errorMessage}
          </p>
        </div>
      </div>
    </div>
  );
}
