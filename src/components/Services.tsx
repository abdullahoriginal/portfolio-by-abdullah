"use client";

import {
  Sparkles,
  BarChart3,
  Image as ImageIcon,
  Boxes,
  FileText,
  Terminal,
  Check
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Listing Optimization & A+ Content",
      icon: Sparkles,
      desc: "Conversion-focused Amazon A+, EBC & image stack designed to lift CTR and sales velocity.",
      bullets: ["Brand Storytelling Modules", "Comparison Matrix Design", "Mobile-First Image Stack"],
    },
    {
      title: "Amazon & Noon PPC Management",
      icon: BarChart3,
      desc: "Profitable ROAS with automated bid optimization, search query harvesting, and target ACoS controls.",
      bullets: ["Sponsored Products & Brands", "Negative Keyword Sculpting", "Verified 136% ROI on Noon"],
    },
    {
      title: "Product Design & Creative Assets",
      icon: ImageIcon,
      desc: "High-contrast hero renders, lifestyle infographics, and multi-page Amazon Brand Storefronts.",
      bullets: ["Compliant 1:1 Hero Renders", "Dimension & Feature Graphics", "Packaging Inserts & Guides"],
    },
    {
      title: "Product Sourcing & Operations",
      icon: Boxes,
      desc: "End-to-end supply chain logistics, supplier qualification, customs routing, and FBA/FBN inventory health.",
      bullets: ["Supplier Vetting & RFQs", "Shipment & Barcode Labels", "Demand & Stock Forecasting"],
    },
    {
      title: "SEO Copywriting & Indexation",
      icon: FileText,
      desc: "Deep competitor reverse-ASIN gap analysis, benefit-driven bullet points, and backend search terms.",
      bullets: ["Reverse-ASIN Keyword Mining", "Search Volume Mapping", "Backend Terms Optimization"],
    },
    {
      title: "Technical Automation & Tools",
      icon: Terminal,
      desc: "Custom Python scrapers, competitor price tracking scripts, and multi-marketplace dashboards.",
      bullets: ["Playwright / Selenium Scrapers", "Price & Rank Tracking Bots", "Analytics Dashboards"],
    },
  ];

  return (
    <section id="services" className="py-16 relative bg-[#0a0a0a]">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#e63946] font-mono font-semibold">
              Core Capabilities
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-1">
              Full-Stack E-Commerce Services
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#b0b0b0] max-w-sm">
            Bridging creative graphic design with technical automation to scale direct-to-consumer and marketplace operations.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="card-hover-glow p-5 rounded-2xl bg-[#0f0f1a] border border-white/5 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-[#e63946]/10 text-[#e63946] border border-[#e63946]/20 group-hover:bg-[#e63946] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-[#b0b0b0]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-white mb-1.5 group-hover:text-[#e63946] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#b0b0b0] leading-relaxed mb-3">
                    {service.desc}
                  </p>
                </div>

                <ul className="space-y-1.5 pt-3 border-t border-white/5 text-[11px] text-[#b0b0b0]">
                  {service.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-1.5">
                      <Check className="w-3 h-3 text-[#e63946] shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
