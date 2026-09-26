"use client";

import {
  GraduationCap,
  Globe,
  Film,
  Gamepad2,
  Terminal,
  Award,
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 relative bg-[#0a0a0a] border-t border-white/5">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Visual Profile & Badges */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative p-6 sm:p-7 rounded-2xl bg-[#0f0f1a] border border-white/10 card-hover-glow overflow-hidden">
              {/* Profile Avatar / Initials */}
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#e63946] to-[#9d0208] flex items-center justify-center text-white font-serif text-xl font-bold shadow-[0_0_15px_rgba(230,57,70,0.4)]">
                  AA
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">
                    Abdullah A.
                  </h3>
                </div>
              </div>

              {/* Credentials List */}
              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <GraduationCap className="w-4 h-4 text-[#e63946]" />
                    <div>
                      <strong className="text-white block">Technical Systems Builder</strong>
                      <span className="text-[11px] text-[#b0b0b0]">Automation, data, and web workflows</span>
                    </div>
                  </div>
                  <span className="font-mono font-bold text-white bg-white/5 px-2 py-0.5 rounded">
                    3.52 CGPA
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-[#e63946]" />
                    <div>
                      <strong className="text-white block">Marketplace Seller</strong>
                      <span className="text-[11px] text-[#b0b0b0]">Amazon &amp; Noon GCC</span>
                    </div>
                  </div>
                  <span className="font-mono text-emerald-400">130k+ SAR GMV</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <Globe className="w-4 h-4 text-[#e63946]" />
                    <div>
                      <strong className="text-white block">Global Freelancer</strong>
                      <span className="text-[11px] text-[#b0b0b0]">Fiverr &amp; International Brands</span>
                    </div>
                  </div>
                  <span className="font-mono text-[#e63946]">Top Rated</span>
                </div>
              </div>

              {/* Spoken Languages */}
              <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap gap-1.5 text-[11px] font-mono">
                <span className="px-2 py-0.5 rounded bg-white/[0.03] text-[#b0b0b0]">
                  English (Professional)
                </span>
                <span className="px-2 py-0.5 rounded bg-white/[0.03] text-[#b0b0b0]">
                  Urdu (Native)
                </span>
                <span className="px-2 py-0.5 rounded bg-white/[0.03] text-[#b0b0b0]">
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Passions */}
          <div className="lg:col-span-7 space-y-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#e63946] font-mono font-semibold">
                Profile
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                Where Analytical Engineering Meets Commercial Design
              </h2>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#b0b0b0] leading-relaxed">
              <p>
                I am a full-stack e-commerce specialist and conversion designer. Over the past 3+ years, I have navigated the full marketplace spectrum—sourcing profitable factory catalog lines, crafting Amazon A+ storefronts, and scaling multi-thousand dollar PPC budgets.
              </p>
              <p>
                My strength lies in marrying rigorous automation with commercial aesthetics. Traditional designers make pretty images that don&apos;t convert; traditional marketers manipulate spreadsheets without aesthetic cohesion. I engineer high-conversion visual systems backed by data to lower advertising acquisition costs while multiplying catalog sales velocity.
              </p>
            </div>

            {/* Passions Ribbon */}
            <div className="pt-2 grid grid-cols-3 gap-2.5">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2">
                <Film className="w-4 h-4 text-[#e63946] shrink-0" />
                <span className="text-xs text-white">Cinema</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#e63946] shrink-0" />
                <span className="text-xs text-white">Python Bots</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2">
                <Gamepad2 className="w-4 h-4 text-[#e63946] shrink-0" />
                <span className="text-xs text-white">Gaming</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
