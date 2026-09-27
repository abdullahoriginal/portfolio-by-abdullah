"use client";

import { ArrowUp, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 overflow-hidden border-t border-white/10 bg-transparent py-16 sm:py-20">
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-white/10">
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

          <div className="flex flex-col items-center gap-4 text-xs text-[#b0b0b0] md:items-end">
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group inline-flex items-center gap-2 text-xs font-semibold text-white transition-colors hover:text-[#e63946]"
            >
              <span>Back to top</span>
              <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            </button>
            <a
              href="mailto:mirzaabdullahadil666@gmail.com"
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail className="h-3.5 w-3.5 text-[#e63946]" />
              mirzaabdullahadil666@gmail.com
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-8 text-xs text-[#b0b0b0] sm:flex-row">
          <span>&copy; {new Date().getFullYear()} Abdullah A. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/originalabdullah/" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">LinkedIn</a>
            <a href="https://www.instagram.com/abdullahoriginal/" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">Instagram</a>
            <a href="https://github.com/abdullahoriginal" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
