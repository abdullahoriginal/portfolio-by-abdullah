"use client";

import { ArrowRight, Boxes, Palette, BarChart3, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-24 sm:pt-28 pb-12 overflow-hidden bg-grid-pattern w-full">
      {/* Hardware-accelerated radial ambient gradient */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[550px] opacity-25"
        style={{
          background: "radial-gradient(ellipse at center, #e63946 0%, rgba(230,57,70,0) 70%)",
        }}
      />

      <div className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 text-center flex flex-col items-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0f0f1a] border border-[#e63946]/30 text-xs font-medium text-white mb-5 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e63946] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e63946]"></span>
          </span>
          <span>Available for Freelance &amp; Consulting</span>
          <span className="text-zinc-700">|</span>
          <span className="text-zinc-300 hidden sm:inline font-mono">Amazon &amp; Noon Specialist</span>
        </div>

        {/* Main Headline with refined letter spacing */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.12] mb-1 tracking-[0.035em] max-w-5xl">
          E-Commerce Specialist{" "}
          <span className="text-[#e63946] font-normal italic">×</span>{" "}
          Amazon Creative Manager
        </h1>

        {/* High-Contrast, Perfectly Legible Subheading (eliminates the empty dark gap illusion) */}
        <p className="max-w-3xl text-sm sm:text-base md:text-lg text-zinc-200 font-normal leading-relaxed mb-2">
          Building profitable marketplaces from product sourcing to high-converting A+ design.
          Full-stack Amazon &amp; Noon specialist combining visual architecture with data-driven advertising and custom automation.
        </p>

        {/* CTAs with tight, balanced vertical rhythm */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto mb-7">
          <a
            href="#work"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#e63946] hover:bg-[#d62828] text-white font-semibold text-sm flex items-center justify-center gap-2.5 transition-all duration-200 shadow-[0_0_20px_rgba(230,57,70,0.4)] hover:shadow-[0_0_30px_rgba(230,57,70,0.65)] hover:-translate-y-0.5"
          >
            <span>View Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#experience"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#0f0f1a] hover:bg-[#161628] text-white font-semibold text-sm border border-white/10 hover:border-[#e63946]/50 flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Experience Timeline</span>
          </a>
        </div>

        {/* Credibility Ribbon: Spans wide across desktop to eliminate awkward empty margins */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 w-full max-w-6xl pt-5 border-t border-white/10 text-left">
          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#0f0f1a]/80 border border-white/10 hover:border-[#e63946]/40 transition-colors">
            <div className="p-2.5 rounded-lg bg-[#e63946]/10 text-[#e63946] shrink-0">
              <Boxes className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Procurement, Sourcing &amp; Shipments</h4>
              <p className="text-xs text-zinc-400 mt-0.5">Reliable supply chain coordination</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#0f0f1a]/80 border border-white/10 hover:border-[#e63946]/40 transition-colors">
            <div className="p-2.5 rounded-lg bg-[#e63946]/10 text-[#e63946] shrink-0">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Product Design &amp; Creative Assets</h4>
              <p className="text-xs text-zinc-400 mt-0.5">Conversion-focused visual systems</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#0f0f1a]/80 border border-white/10 hover:border-[#e63946]/40 transition-colors">
            <div className="p-2.5 rounded-lg bg-[#e63946]/10 text-[#e63946] shrink-0">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Amazon &amp; Noon Ads</h4>
              <p className="text-xs text-zinc-400 mt-0.5">Data-led marketplace growth</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#0f0f1a]/80 border border-white/10 hover:border-[#e63946]/40 transition-colors">
            <div className="p-2.5 rounded-lg bg-[#e63946]/10 text-[#e63946] shrink-0">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">CS &amp; Automation</h4>
              <p className="text-xs text-zinc-400 mt-0.5">Custom tools and workflow systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
