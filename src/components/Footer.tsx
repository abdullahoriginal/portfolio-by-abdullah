"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-transparent border-t border-white/5 py-12 relative overflow-hidden">
      <div aria-hidden="true" className="flow-lines flow-lines-footer" />
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/5">
          {/* Brand & Tagline */}
          <div className="text-center md:text-left space-y-2">
            <a href="#" className="inline-flex items-center gap-2 text-2xl font-serif font-bold text-white">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e63946]" />
              <span>Abdullah</span>
            </a>
            <p className="text-xs text-[#b0b0b0] max-w-sm">
              Full-stack e-commerce specialist, conversion designer &amp; technical systems builder.
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-3 rounded-full bg-[#0f0f1a] border border-white/10 hover:border-[#e63946] text-[#b0b0b0] hover:text-[#e63946] transition-colors group"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        <div className="pt-8 text-center text-xs text-[#b0b0b0]">
          &copy; {new Date().getFullYear()} Abdullah A. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
