import { Loader2 } from "lucide-react";

export function LoadingFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 text-electric-blue">
        <Loader2 className="w-8 h-8 animate-spin" />
        <span className="font-mono text-sm tracking-widest uppercase">Loading...</span>
      </div>
    </div>
  );
}
