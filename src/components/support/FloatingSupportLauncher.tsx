import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Headset } from "lucide-react";
import { monetaChainFeatures, FeatureConfig } from "../../config/featureStatus";
import { StatusBadge } from "./StatusBadge";
import { ContextualSupportModal } from "./ContextualSupportModal";
import { SupportNotificationToast } from "./SupportNotificationToast";

export function FloatingSupportLauncher() {
  const location = useLocation();
  const [modalOpen, setModalOpen] = useState(false);
  const [openTicketId, setOpenTicketId] = useState<string | undefined>(undefined);
  const [drawerPosition, setDrawerPosition] = useState<"left" | "right">("right");

  // Map current path to feature
  const getFeatureForPath = (path: string): FeatureConfig => {
    if (path.includes("mining")) return monetaChainFeatures.mining;
    if (path.includes("presale")) return monetaChainFeatures.presale;
    if (path.includes("developer") || path.includes("conduct")) return monetaChainFeatures.developerTools;
    if (path.includes("vera")) return monetaChainFeatures.vera;
    if (path.includes("academy")) return monetaChainFeatures.academy;
    if (path.includes("tokenomics")) return monetaChainFeatures.mainnet;
    if (path.includes("waitlist")) return monetaChainFeatures.wallet;
    if (path.includes("roadmap")) return monetaChainFeatures.mainnet;
    if (path.includes("support")) return monetaChainFeatures.support;
    return monetaChainFeatures.homepage;
  };

  const currentFeature = getFeatureForPath(location.pathname);

  // Listen to SDK events: window.MonetaChainSupport.open('left' | 'right')
  useEffect(() => {
    const handleOpen = (e: any) => {
      const position = e.detail?.position === "left" ? "left" : "right";
      setDrawerPosition(position);
      setModalOpen(true);
    };

    const handleClose = () => {
      setModalOpen(false);
    };

    window.addEventListener("moneta-support:open", handleOpen);
    window.addEventListener("moneta-support:close", handleClose);

    return () => {
      window.removeEventListener("moneta-support:open", handleOpen);
      window.removeEventListener("moneta-support:close", handleClose);
    };
  }, []);

  // Sync state to SDK isOpen method
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).MonetaChainSupport) {
      // update internal state if needed
    }
  }, [modalOpen]);

  // Do not show floating button if on /support page
  const isSupportPage = location.pathname === "/support";

  return (
    <>
      {/* Global Notification Toast for New Messages while browsing other pages */}
      <SupportNotificationToast
        isChatOpen={modalOpen || isSupportPage}
        onOpenChat={(ticketId) => {
          setOpenTicketId(ticketId);
          setModalOpen(true);
        }}
      />

      {!isSupportPage && (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-2">
          {/* Contextual pill launcher */}
          <div
            onClick={() => {
              setOpenTicketId(undefined);
              setModalOpen(true);
            }}
            className="group flex items-center space-x-3 p-2.5 pr-4 rounded-full bg-[#0D1914]/95 backdrop-blur-md border border-[#1D3028] hover:border-[#19C37D] shadow-2xl transition-all cursor-pointer select-none"
          >
            <div className="w-9 h-9 rounded-full bg-[#19C37D]/20 text-[#19C37D] flex items-center justify-center group-hover:bg-[#19C37D] group-hover:text-black transition-colors">
              <Headset size={18} />
            </div>

            <div className="flex flex-col text-left">
              <div className="flex items-center space-x-1.5">
                <span className="text-[11px] font-heading font-black text-white uppercase tracking-wider">
                  SUPPORT
                </span>
                <span className="inline-flex items-center text-[10px] text-[#19C37D] font-mono font-bold">
                  ● LIVE
                </span>
              </div>
              <span className="text-[10px] text-[#B8C4BE] font-mono tracking-tight group-hover:text-white truncate max-w-[130px]">
                {currentFeature.name}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Real-time Customer Conversation Modal */}
      <ContextualSupportModal
        feature={currentFeature}
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setOpenTicketId(undefined);
          window.dispatchEvent(new CustomEvent("moneta-support:close"));
        }}
        sourcePage={location.pathname}
        initialTicketId={openTicketId}
      />
    </>
  );
}
