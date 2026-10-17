import React from "react";
import { FeatureStatus, getStatusBadgeData } from "../../config/featureStatus";

interface StatusBadgeProps {
  status: FeatureStatus;
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
  className?: string;
}

export function StatusBadge({ status, size = "md", showIcon = true, className = "" }: StatusBadgeProps) {
  const badgeData = getStatusBadgeData(status);

  const sizeClasses = {
    sm: "text-[10px] px-2 py-0.5 space-x-1.5",
    md: "text-xs px-2.5 py-1 space-x-2",
    lg: "text-sm px-3.5 py-1.5 space-x-2.5"
  };

  const dotSizes = {
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2",
    lg: "w-2.5 h-2.5"
  };

  return (
    <span
      className={`inline-flex items-center font-mono font-bold uppercase tracking-wider rounded-full border ${badgeData.badgeClass} ${sizeClasses[size]} ${className}`}
      title={badgeData.description}
    >
      {showIcon && (
        <span className={`rounded-full shrink-0 ${badgeData.dotColor} ${dotSizes[size]} ${status === 'live' ? 'animate-pulse' : ''}`} />
      )}
      <span>{badgeData.label}</span>
    </span>
  );
}
