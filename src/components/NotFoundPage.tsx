import { Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { FadeIn } from './FadeIn';

export function NotFoundPage() {
  return (
    <div className="pt-32 pb-20 min-h-[80svh] flex items-center justify-center relative bg-charcoal-black">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <FadeIn>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-electric-blue/10 border border-electric-blue/20 mb-6">
            <AlertTriangle className="w-8 h-8 text-electric-blue" />
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-black mb-6 tracking-tight uppercase">
            404 <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-blue">Not Found</span>
          </h1>
          <p className="text-xl text-gray-300 font-display mb-10 max-w-2xl mx-auto">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-white text-black px-8 py-4 rounded font-bold uppercase tracking-wider text-sm hover:bg-silver transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}
