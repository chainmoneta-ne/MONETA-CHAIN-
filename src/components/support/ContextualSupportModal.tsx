import React from "react";
import { FeatureConfig } from "../../config/featureStatus";
import { SupportChatWindow } from "./SupportChatWindow";
import { SupportSafeContext } from "../../services/supportApi";

export interface SupportTicketRecord {
  id: string;
  application: string;
  feature: string;
  feature_name: string;
  feature_status: string;
  source_page: string;
  inquiry_type: string;
  inquiry_label: string;
  user_email: string;
  user_name: string;
  message: string;
  created_at: string;
  status: "received" | "under_review" | "resolved";
}

interface ContextualSupportModalProps {
  feature?: FeatureConfig;
  isOpen: boolean;
  onClose: () => void;
  sourcePage?: string;
  initialInquiryType?: string;
  initialTicketId?: string;
  safeContext?: SupportSafeContext;
}

export function ContextualSupportModal({
  feature,
  isOpen,
  onClose,
  sourcePage = typeof window !== "undefined" ? window.location.pathname : "/",
  initialTicketId,
  safeContext
}: ContextualSupportModalProps) {
  if (!isOpen) return null;

  const resolvedSafeContext: SupportSafeContext = {
    source_page: sourcePage,
    feature_id: feature?.id,
    feature_name: feature?.name,
    feature_status: feature?.status,
    ...safeContext
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 md:p-6 animate-in fade-in duration-200">
      <SupportChatWindow
        initialTicketId={initialTicketId}
        sourcePage={sourcePage}
        safeContext={resolvedSafeContext}
        onBack={onClose}
        isModal={true}
      />
    </div>
  );
}
