import React, { useState } from "react";
import { HelpCircle, MessageSquare, ArrowRight, ShieldAlert, Sparkles, ChevronRight } from "lucide-react";
import { FeatureConfig, getFeatureConfig } from "../../config/featureStatus";
import { StatusBadge } from "./StatusBadge";
import { ContextualSupportModal } from "./ContextualSupportModal";

interface ContextualSupportBannerProps {
  featureId: string;
  customPrompt?: string;
  customDescription?: string;
  sourcePage?: string;
  className?: string;
  variant?: "inline" | "card" | "floating-trigger";
}

export function ContextualSupportBanner({
  featureId,
  customPrompt,
  customDescription,
  sourcePage,
  className = "",
  variant = "card"
}: ContextualSupportBannerProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const feature = getFeatureConfig(featureId);

  const promptText = customPrompt || feature.contextPrompt;
  const descriptionText = customDescription || 
    (feature.status !== "live" 
      ? (feature.developmentNotice || `${feature.name} is currently under development. Support is active for questions and inquiries.`)
      : feature.description);

  if (variant === "inline") {
    return (
      <>
        <div className={`flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-white/5 border border-white/10 ${className}`}>
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-electric-blue/10 text-electric-blue">
              <HelpCircle size={18} />
            </div>
            <div>
              <p className="text-sm font-heading font-bold text-white uppercase tracking-wide">
                {promptText}
              </p>
              <p className="text-xs text-gray-400 font-display">
                {descriptionText}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 ml-auto">
            <StatusBadge status={feature.status} size="sm" />
            <button
              onClick={() => setModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-electric-blue/15 hover:bg-electric-blue/25 border border-electric-blue/40 text-electric-blue hover:text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              [ GET SUPPORT ]
            </button>
          </div>
        </div>

        <ContextualSupportModal
          feature={feature}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          sourcePage={sourcePage || window.location.pathname}
        />
      </>
    );
  }

  return (
    <>
      <div className={`glass-card p-6 md:p-8 border border-white/10 bg-black/60 relative overflow-hidden ${className}`}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center space-x-3">
              <span className="text-xs font-mono font-bold text-electric-blue uppercase tracking-widest">
                CONTEXTUAL SUPPORT • {feature.context}
              </span>
              <StatusBadge status={feature.status} size="sm" />
            </div>
            
            <h3 className="font-heading text-xl md:text-2xl font-black text-white uppercase tracking-wider">
              {promptText}
            </h3>
            
            <p className="text-sm text-gray-300 font-display leading-relaxed">
              {descriptionText}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-golden-yellow to-amber-400 text-black font-heading font-black text-sm uppercase tracking-wider hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 shadow-lg shadow-golden-yellow/20 cursor-pointer"
            >
              <MessageSquare size={16} />
              <span>[ GET SUPPORT ]</span>
            </button>
          </div>
        </div>
      </div>

      <ContextualSupportModal
        feature={feature}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        sourcePage={sourcePage || window.location.pathname}
      />
    </>
  );
}
