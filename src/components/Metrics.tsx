"use client";

import { Check, DollarSign, Percent, MousePointerClick, Layers, Clock, Bot } from "lucide-react";

export default function Metrics() {
  const metrics = [
    {
      value: "130,000+",
      unit: "SAR",
      label: "Noon Sales Revenue",
      desc: "Generated through targeted listing restructuring and PPC campaigns",
      icon: DollarSign,
    },
    {
      value: "136%",
      unit: "",
      label: "ROI Achievement",
      desc: "Peak return on advertising spend on high-volume marketplace launches",
      icon: Percent,
    },
    {
      value: "30%+",
      unit: "",
      label: "CTR & Conversion Lift",
      desc: "Measured after deploying redesigned A+ visual storytelling assets",
      icon: MousePointerClick,
    },
    {
      value: "50+",
      unit: "",
      label: "Products Managed",
      desc: "Full lifecycle: sourcing, supplier logistics, FBA/FBN inventory, PPC",
      icon: Layers,
    },
    {
      value: "3+",
      unit: "Years",
      label: "Professional Experience",
      desc: "Continuous hands-on e-commerce operations, design & development",
      icon: Clock,
    },
    {
      value: "E2E",
      unit: "",
      label: "Marketplace Systems",
      desc: "Sourcing, creative, listings, advertising, and operational workflows",
      icon: Bot,
    },
  ];

  return (
    <section id="metrics" className="py-14 relative bg-[#0a0a0a] border-y border-white/5">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#e63946] font-mono font-semibold">
            Track Record
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
            Measurable Commercial Impact
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="card-hover-glow relative p-4 rounded-xl bg-[#0f0f1a] border border-white/5 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Icon className="w-4 h-4 text-[#e63946]" />
                    <span className="flex items-center gap-1 text-[9px] font-mono text-emerald-400">
                      <Check className="w-3 h-3" />
                      Audited
                    </span>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-[#e63946] transition-colors">
                      {item.value}
                    </span>
                    {item.unit && (
                      <span className="text-[11px] font-semibold text-[#e63946]">
                        {item.unit}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xs font-semibold text-white mt-1 line-clamp-1">
                    {item.label}
                  </h3>
                </div>

                <p className="text-[11px] text-[#b0b0b0] mt-2 line-clamp-2 leading-tight">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
