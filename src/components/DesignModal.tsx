"use client";

import { useEffect } from "react";
import { X, CheckCircle, ExternalLink, Tag } from "lucide-react";

export interface DesignItem {
  id: string;
  title: string;
  category: string;
  client: string;
  impact: string;
  description: string;
  highlights: string[];
  visualType: "a-plus" | "listing" | "storefront" | "brand";
  accentColor?: string;
}

interface DesignModalProps {
  item: DesignItem | null;
  onClose: () => void;
}

export default function DesignModal({ item, onClose }: DesignModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0f0f1a] border border-[#e63946]/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(230,57,70,0.25)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-[#e63946] text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-[#e63946]/20 text-[#e63946] border border-[#e63946]/30">
            {item.category}
          </span>
          <span className="text-xs text-[#b0b0b0] font-mono">
            Client: <strong className="text-white">{item.client}</strong>
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
          {item.title}
        </h3>

        <div className="p-3 mb-6 rounded-xl bg-[#e63946]/10 border border-[#e63946]/20 text-sm text-white font-medium flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-[#e63946] shrink-0" />
          <span>Impact Achieved: {item.impact}</span>
        </div>

        {/* Visual Mockup Container */}
        <div className="relative mb-6 rounded-xl border border-white/10 bg-[#0a0a0a] p-6 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#e63946] to-transparent" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-5 rounded-lg bg-[#0f0f1a] border border-white/5">
              <span className="text-xs text-[#b0b0b0] block mb-1 uppercase font-mono">Module 1</span>
              <h4 className="text-base font-semibold text-white">Hero Brand Header</h4>
              <p className="text-xs text-[#b0b0b0] mt-1">High-impact brand positioning with clear value proposition</p>
            </div>
            <div className="p-5 rounded-lg bg-[#0f0f1a] border border-white/5">
              <span className="text-xs text-[#b0b0b0] block mb-1 uppercase font-mono">Module 2</span>
              <h4 className="text-base font-semibold text-white">Feature Deep-Dive</h4>
              <p className="text-xs text-[#b0b0b0] mt-1">Exploded diagram + material callouts stopping shopper questions</p>
            </div>
            <div className="p-5 rounded-lg bg-[#0f0f1a] border border-white/5">
              <span className="text-xs text-[#b0b0b0] block mb-1 uppercase font-mono">Module 3</span>
              <h4 className="text-base font-semibold text-white">Cross-Sell Matrix</h4>
              <p className="text-xs text-[#b0b0b0] mt-1">Direct comparison matrix increasing account average order value</p>
            </div>
          </div>

          <div className="mt-4 p-4 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs text-[#b0b0b0]">
            <span>Asset Specs: 300 DPI • RGB Color Profile • Amazon 970x600 &amp; 1464x600 Compliant</span>
            <span className="text-[#e63946] font-mono">Ready for Seller Central</span>
          </div>
        </div>

        {/* Description & Highlights */}
        <div className="space-y-4 text-sm text-[#b0b0b0] leading-relaxed">
          <p>{item.description}</p>
          
          <div className="pt-2">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">
              Key Deliverables &amp; Strategy:
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {item.highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#b0b0b0]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e63946]" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold transition-colors"
          >
            Close Viewer
          </button>
          <a
            href="#contact"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#e63946] hover:bg-[#d62828] text-white text-xs font-semibold flex items-center gap-2 transition-colors shadow-[0_0_15px_rgba(230,57,70,0.3)]"
          >
            <span>Commission Similar Design</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
