import React, { useState } from "react";
import { ArrowLeft, ZoomIn, ZoomOut, RotateCcw, X } from "lucide-react";

interface ImageViewerModalProps {
  imageUrl: string;
  imageName: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageViewerModal({
  imageUrl,
  imageName,
  isOpen,
  onClose
}: ImageViewerModalProps) {
  const [scale, setScale] = useState(1);

  if (!isOpen) return null;

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.25, 0.5));
  const handleReset = () => setScale(1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200">
      {/* Top Controls Bar */}
      <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between z-10">
        <button
          onClick={onClose}
          className="flex items-center space-x-2 text-white hover:text-[#19C37D] transition-colors font-mono text-sm px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20"
        >
          <ArrowLeft size={18} />
          <span>Back to Chat</span>
        </button>

        <span className="text-sm font-mono text-[#B8C4BE] truncate max-w-xs md:max-w-md">
          {imageName}
        </span>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleZoomOut}
            title="Zoom out"
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white hover:text-[#19C37D] transition-colors"
          >
            <ZoomOut size={18} />
          </button>
          <button
            onClick={handleZoomIn}
            title="Zoom in"
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white hover:text-[#19C37D] transition-colors"
          >
            <ZoomIn size={18} />
          </button>
          <button
            onClick={handleReset}
            title="Reset Zoom"
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white hover:text-[#19C37D] transition-colors"
          >
            <RotateCcw size={18} />
          </button>
          <button
            onClick={onClose}
            title="Close"
            className="p-2 rounded-lg bg-white/10 hover:bg-red-500/30 text-white hover:text-red-400 transition-colors ml-2"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Image Preview Container */}
      <div className="w-full h-full flex items-center justify-center overflow-auto p-8 pt-16">
        <img
          src={imageUrl}
          alt={imageName}
          style={{ transform: `scale(${scale})` }}
          className="max-h-[85vh] max-w-[90vw] object-contain transition-transform duration-150 rounded-lg shadow-2xl select-none"
        />
      </div>
    </div>
  );
}
