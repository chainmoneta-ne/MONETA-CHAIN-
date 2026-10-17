import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, Server, Terminal, Code, Cpu, Database, 
  Layers, Lock, Compass, Wallet, Pickaxe, BrainCircuit, 
  HelpCircle, ExternalLink, ChevronRight, Activity, Globe
} from "lucide-react";
import { FeatureConfig, getFeatureConfig, getStatusBadgeData } from "../../config/featureStatus";
import { StatusBadge } from "./StatusBadge";
import { ContextualSupportModal } from "./ContextualSupportModal";

interface FeatureStatusCardProps {
  featureId?: string;
  feature?: FeatureConfig;
  className?: string;
  sourcePage?: string;
}

export function FeatureStatusCard({ featureId, feature: propFeature, className = "", sourcePage }: FeatureStatusCardProps) {
  const [supportModalOpen, setSupportModalOpen] = useState(false);
  
  const feature: FeatureConfig = propFeature || (featureId ? getFeatureConfig(featureId) : getFeatureConfig("validators"));
  const badgeData = getStatusBadgeData(feature.status);

  // Icon mapping
  const getFeatureIcon = (id: string) => {
    switch (id) {
      case "validators": return <ShieldCheck className="text-amber-400" size={24} />;
      case "nodes": return <Server className="text-amber-400" size={24} />;
      case "wallet": return <Wallet className="text-emerald-400" size={24} />;
      case "explorer": return <Compass className="text-amber-400" size={24} />;
      case "smartContracts": return <Code className="text-electric-blue" size={24} />;
      case "developerTools": return <Terminal className="text-amber-400" size={24} />;
      case "rpc": return <Activity className="text-crimson-red" size={24} />;
      case "mainnet": return <Database className="text-amber-400" size={24} />;
      case "testnet": return <Layers className="text-amber-400" size={24} />;
      case "presale": return <Layers className="text-golden-yellow" size={24} />;
      case "mining": return <Pickaxe className="text-amber-400" size={24} />;
      case "vera": return <BrainCircuit className="text-amber-400" size={24} />;
      case "academy": return <Globe className="text-emerald-400" size={24} />;
      default: return <Cpu className="text-electric-blue" size={24} />;
    }
  };

  return (
    <>
      <div className={`glass-card p-6 md:p-7 border ${badgeData.badgeClass.replace('bg-', 'border-').split(' ')[2] || 'border-white/10'} bg-black/50 flex flex-col justify-between hover:scale-[1.01] transition-all relative overflow-hidden group ${className}`}>
        
        {/* Subtle background status accent */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10 bg-gradient-to-bl from-white pointer-events-none rounded-bl-full" />

        <div>
          {/* Header row: Icon & Status Badge */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                {getFeatureIcon(feature.id)}
              </div>
              <h3 className="font-heading font-black text-lg md:text-xl text-white uppercase tracking-wider">
                {feature.name}
              </h3>
            </div>
          </div>

          {/* Body Notice / Description (Respects exact development status) */}
          <div className="mb-5 space-y-2">
            <p className="text-gray-300 font-display text-sm leading-relaxed">
              {feature.status === "under_development" 
                ? (feature.developmentNotice || `${feature.name} infrastructure is currently under development.`)
                : feature.status === "coming_soon"
                ? (feature.developmentNotice || `${feature.name} is planned for a future release.`)
                : feature.status === "temporarily_unavailable"
                ? (feature.statusDetails || `${feature.name} services are temporarily unavailable.`)
                : feature.description}
            </p>
          </div>

          {/* Visual Badge Display */}
          <div className="mb-6">
            <StatusBadge status={feature.status} size="md" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
          {feature.learnMorePath && (
            <Link
              to={feature.learnMorePath}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 hover:text-white text-xs font-heading font-bold uppercase tracking-wider transition-colors flex items-center space-x-1"
            >
              <span>[ LEARN MORE ]</span>
            </Link>
          )}

          {feature.status === "temporarily_unavailable" ? (
            <button
              onClick={() => setSupportModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-crimson-red/20 hover:bg-crimson-red/30 border border-crimson-red/40 text-white text-xs font-heading font-black uppercase tracking-wider transition-colors flex items-center space-x-1 cursor-pointer"
            >
              <span>[ VIEW STATUS ]</span>
            </button>
          ) : null}

          <button
            onClick={() => setSupportModalOpen(true)}
            className="px-4 py-2 rounded-xl bg-electric-blue/15 hover:bg-electric-blue/25 border border-electric-blue/40 text-electric-blue hover:text-white text-xs font-heading font-black uppercase tracking-wider transition-all flex items-center space-x-1 cursor-pointer"
          >
            <span>[ GET SUPPORT ]</span>
          </button>
        </div>
      </div>

      {/* Contextual Support Modal */}
      <ContextualSupportModal
        feature={feature}
        isOpen={supportModalOpen}
        onClose={() => setSupportModalOpen(false)}
        sourcePage={sourcePage || window.location.pathname}
      />
    </>
  );
}
