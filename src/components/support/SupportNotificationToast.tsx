import React, { useState, useEffect } from "react";
import { Bell, X } from "lucide-react";
import { subscribeToSupportStream, SupportMessage } from "../../services/supportApi";

interface SupportNotificationToastProps {
  isChatOpen: boolean;
  onOpenChat: (ticketId?: string) => void;
}

export function SupportNotificationToast({
  isChatOpen,
  onOpenChat
}: SupportNotificationToastProps) {
  const [notification, setNotification] = useState<{
    ticketId: string;
    message: SupportMessage;
  } | null>(null);

  useEffect(() => {
    const unsubscribe = subscribeToSupportStream((event) => {
      if (event.event === "message") {
        const { ticket_id, message } = event.data;
        // Only notify if sent by agent and chat is NOT open
        if (message.sender_type === "agent" && !isChatOpen) {
          setNotification({ ticketId: ticket_id, message });
        }
      }
    });

    return () => {
      unsubscribe();
    };
  }, [isChatOpen]);

  // Clear notification when chat opens
  useEffect(() => {
    if (isChatOpen) {
      setNotification(null);
    }
  }, [isChatOpen]);

  if (!notification || isChatOpen) return null;

  return (
    <div className="fixed top-20 right-6 z-50 max-w-sm w-full bg-[#0D1914] border-2 border-[#19C37D] rounded-2xl shadow-2xl p-4 animate-in slide-in-from-top-4 duration-300">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-full bg-[#19C37D]/20 text-[#19C37D] flex items-center justify-center flex-shrink-0 animate-bounce">
            <Bell size={20} />
          </div>

          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-heading font-black text-white uppercase tracking-wider">
                MONETA CHAIN SUPPORT
              </span>
              <span className="w-2 h-2 rounded-full bg-[#19C37D] animate-ping" />
            </div>

            <p className="text-xs text-[#B8C4BE] font-sans">
              You have a new support message.
            </p>

            <p className="text-[11px] font-mono text-gray-400 truncate max-w-[210px] italic">
              "{notification.message.text}"
            </p>

            <div className="pt-2">
              <button
                onClick={() => {
                  onOpenChat(notification.ticketId);
                  setNotification(null);
                }}
                className="px-3.5 py-1.5 rounded-lg bg-[#19C37D] hover:bg-[#0E8F61] text-black font-heading font-black text-[11px] uppercase tracking-wider transition-colors shadow-md cursor-pointer"
              >
                [ OPEN SUPPORT ]
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={() => setNotification(null)}
          className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
