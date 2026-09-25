"use client";

import { useState } from "react";
import {
  TrendingUp,
  MousePointerClick,
  Sparkles,
  Cpu,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Eye,
  Sliders,
  CheckCircle2,
  BarChart2,
  Layers,
  ArrowUpRight
} from "lucide-react";
import DesignModal, { DesignItem } from "./DesignModal";

export default function FeaturedWork() {
  const [activeTab, setActiveTab] = useState<"noon" | "fonethics" | "design" | "churnsense">("noon");
  const [selectedDesign, setSelectedDesign] = useState<DesignItem | null>(null);
  const [activeGalleryFilter, setActiveGalleryFilter] = useState<string>("all");

  // ChurnSense interactive state
  const [tenure, setTenure] = useState<number>(14);
  const [monthlyCharges, setMonthlyCharges] = useState<number>(75);
  const [contractType, setContractType] = useState<"month-to-month" | "one-year" | "two-year">("month-to-month");

  const calculateChurn = () => {
    let score = 0.5;
    score -= (tenure / 72) * 0.45;
    score += (monthlyCharges / 120) * 0.25;
    if (contractType === "month-to-month") score += 0.22;
    if (contractType === "one-year") score -= 0.15;
    if (contractType === "two-year") score -= 0.32;
    return Math.round(Math.min(Math.max(score, 0.05), 0.94) * 100);
  };

  const churnRisk = calculateChurn();
  const getRiskLabel = (pct: number) => {
    if (pct > 65) return { text: "High Risk", color: "text-[#e63946]", bg: "bg-[#e63946]/10", border: "border-[#e63946]/30" };
    if (pct > 35) return { text: "Moderate Risk", color: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/30" };
    return { text: "Low Risk (Loyal)", color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/30" };
  };
  const riskStatus = getRiskLabel(churnRisk);

  // Design Items
  const designItems: DesignItem[] = [
    {
      id: "cs-aplus-1",
      title: "Amazon Premium A+ Content Overhaul",
      category: "A+ Content",
      client: "Modanoir Brand Store",
      impact: "+38% conversion velocity",
      description: "Complete visual narrative architecture crafted for flagship apparel and accessories line. Structured around brand origin, exploded material quality, and sizing comparison tables.",
      highlights: [
        "Custom 970px & 1464px mobile-responsive banner slices",
        "Brand comparison matrix increasing basket size",
        "Material durability & specification callouts",
      ],
      visualType: "a-plus",
    },
    {
      id: "cs-listing-1",
      title: "Hero Image Stack & Technical Infographics",
      category: "Listing Images",
      client: "Fonethics Electronics",
      impact: "30%+ organic CTR lift",
      description: "Engineered 7-image conversion funnel: Pure white Amazon-compliant 1:1 hero with drop shadow, dimension schematics, lifestyle context, customer FAQ answers, and guarantee seal.",
      highlights: [
        "A/B tested against top 3 Best Sellers in category",
        "Clear feature benefit callouts in DM Sans typography",
        "3D product rendering enhancements",
      ],
      visualType: "listing",
    },
    {
      id: "cs-storefront-1",
      title: "Multi-Page Amazon Brand Storefront",
      category: "Storefronts",
      client: "Sharda Metals Marketplace",
      impact: "+42% storefront revenue",
      description: "Structured multi-tier category navigation for kitchenware brand with seasonal campaign header, curated best-seller carousels, and engaging video integration modules.",
      highlights: [
        "Category routing for 45+ SKU product lines",
        "Dynamic deals & promo discount placement",
        "Enhanced brand equity & cross-selling architecture",
      ],
      visualType: "storefront",
    },
    {
      id: "cs-brand-1",
      title: "E-Commerce Packaging & Inserts",
      category: "Brand Creatives",
      client: "Vertex Engineering",
      impact: "Complete brand unboxing guide",
      description: "Designed cohesive packaging inserts, product manual illustrations, and social media advertising flyers to convert one-off marketplace buyers into repeat brand evangelists.",
      highlights: [
        "Die-cut packaging box layouts with QR codes",
        "Promotional insert cards driving review velocity",
        "Vector logo and typography branding system",
      ],
      visualType: "brand",
    },
  ];

  const filteredDesigns = activeGalleryFilter === "all"
    ? designItems
    : designItems.filter((d) => {
        if (activeGalleryFilter === "aplus") return d.category === "A+ Content";
        if (activeGalleryFilter === "listing") return d.category === "Listing Images";
        if (activeGalleryFilter === "storefront") return d.category === "Storefronts";
        if (activeGalleryFilter === "brand") return d.category === "Brand Creatives";
        return true;
      });

  const tabs = [
    { id: "noon", label: "01. Noon Scale (136% ROI)" },
    { id: "fonethics", label: "02. Fonethics (+30% CTR)" },
    { id: "design", label: "03. Design Portfolio (A+)" },
    { id: "churnsense", label: "04. ChurnSense AI (Live ML)" },
  ];

  return (
    <section id="work" className="py-20 relative bg-[#0a0a0a]">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#e63946] font-mono font-semibold">
            Featured Case Studies
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
            Proven Commercial &amp; Technical Results
          </h2>
          <p className="text-xs sm:text-sm text-[#b0b0b0] mt-2">
            Select a case study to inspect real marketplace numbers, before/after designs, or the live ML model.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`shrink-0 px-4 py-2.5 rounded-full text-xs font-medium font-mono transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#e63946] text-white shadow-[0_0_15px_rgba(230,57,70,0.4)]"
                  : "bg-[#0f0f1a] text-[#b0b0b0] hover:text-white border border-white/5 hover:border-white/15"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ============================================================== */}
        {/* TAB 1: NOON CASE STUDY */}
        {/* ============================================================== */}
        {activeTab === "noon" && (
          <div className="card-hover-glow p-6 sm:p-10 rounded-3xl bg-[#0f0f1a] border border-white/10 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#e63946]">
                  <span className="w-2 h-2 rounded-full bg-[#e63946]" />
                  <span>Marketplace Scale • Noon KSA &amp; UAE</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                  136% ROI: Scaling Noon Marketplace from 11K to 130,000+ SAR
                </h3>

                <p className="text-xs sm:text-sm text-[#b0b0b0] leading-relaxed">
                  Engineered catalog growth on Noon by marrying bilingual keyword indexing with automated PPC bid scheduling. By identifying high-intent Arabic and English queries, ad spend was laser-targeted to win the buy box while preserving net margin.
                </p>

                {/* 4 Steps */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-[10px] font-mono text-[#e63946] block">01. Sourcing</span>
                    <strong className="text-xs text-white">Velocity SKUs</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-[10px] font-mono text-[#e63946] block">02. Listing</span>
                    <strong className="text-xs text-white">A+ Bilingual</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-[10px] font-mono text-[#e63946] block">03. PPC</span>
                    <strong className="text-xs text-white">Bid Sculpting</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-[10px] font-mono text-[#e63946] block">04. Yield</span>
                    <strong className="text-xs text-white">136% ROI</strong>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border-l-2 border-[#e63946] text-xs text-[#b0b0b0]">
                  <strong className="text-white block">Key Takeaway:</strong>
                  High-converting A+ imagery drastically lowered cost-per-acquisition (CPA). Because listing conversion doubled, each ad dollar generated twice the organic ranking impact.
                </div>
              </div>

              {/* Metrics visual */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-white/10 text-xs font-mono">
                    <span className="text-[#b0b0b0]">Audited Financials</span>
                    <span className="text-emerald-400">Verified</span>
                  </div>
                  <div>
                    <span className="text-xs text-[#b0b0b0]">Gross Marketplace Revenue</span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="font-serif text-4xl font-bold text-white">130,000+</span>
                      <span className="text-sm font-semibold text-[#e63946]">SAR</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/5">
                    <div>
                      <span className="text-xs text-[#b0b0b0]">Ad Spend</span>
                      <p className="text-lg font-bold text-white mt-0.5">11,000 SAR</p>
                    </div>
                    <div>
                      <span className="text-xs text-[#b0b0b0]">Return on Spend</span>
                      <p className="text-lg font-bold text-[#e63946] mt-0.5">136% ROI</p>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-white/5 text-xs text-[#b0b0b0] flex justify-between">
                    <span>Fulfillment Mode:</span>
                    <span className="text-white font-mono">Noon Express (FBN)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 2: FONETHICS CASE STUDY */}
        {/* ============================================================== */}
        {activeTab === "fonethics" && (
          <div className="card-hover-glow p-6 sm:p-10 rounded-3xl bg-[#0f0f1a] border border-white/10 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#e63946]">
                  <span className="w-2 h-2 rounded-full bg-[#e63946]" />
                  <span>Conversion Architecture • FONETHICS</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                  30%+ Conversion &amp; CTR Lift: Amazon Catalog Relaunch
                </h3>

                <p className="text-xs sm:text-sm text-[#b0b0b0] leading-relaxed">
                  Faced with fierce competitor price wars, Abdullah engineered an objection-crushing visual overhaul. Instead of cutting margins, high-contrast 3D hero renders and benefit-driven comparison modules lifted organic clicks by over 30%.
                </p>

                <div className="space-y-2.5 text-xs text-[#b0b0b0]">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#e63946] shrink-0 mt-0.5" />
                    <span>Eliminated return rate by answering sizing &amp; spec questions in infographics</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#e63946] shrink-0 mt-0.5" />
                    <span>Propelled ASIN into category Best Seller badge territory for 6+ months</span>
                  </div>
                </div>
              </div>

              {/* Before/After Card */}
              <div className="lg:col-span-6">
                <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-3">
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex justify-between items-center text-xs">
                    <div>
                      <span className="text-[#b0b0b0] block font-mono">Baseline Listing</span>
                      <strong className="text-white">Generic Factory Images</strong>
                    </div>
                    <div className="text-right">
                      <span className="text-[#b0b0b0] block font-mono">CTR: 1.8%</span>
                      <span className="text-white font-mono">Conv: 8.4%</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#e63946]/10 border border-[#e63946]/30 flex justify-between items-center text-xs">
                    <div>
                      <span className="text-[#e63946] block font-mono font-bold">Abdullah Redesign</span>
                      <strong className="text-white">Custom 3D + A+ Storytelling</strong>
                    </div>
                    <div className="text-right">
                      <span className="text-emerald-400 block font-mono font-bold">CTR: 2.4% (+33%)</span>
                      <span className="text-emerald-400 font-mono font-bold">Conv: 12.1% (+44%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 3: DESIGN PORTFOLIO */}
        {/* ============================================================== */}
        {activeTab === "design" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-mono text-[#b0b0b0]">
                Click any asset to inspect high-resolution modules &amp; strategy:
              </span>
              <div className="flex gap-1.5">
                {[
                  { id: "all", label: "All" },
                  { id: "aplus", label: "A+ Content" },
                  { id: "listing", label: "Listings" },
                  { id: "storefront", label: "Storefronts" },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setActiveGalleryFilter(f.id)}
                    className={`px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                      activeGalleryFilter === f.id
                        ? "bg-[#e63946] text-white"
                        : "bg-[#0f0f1a] text-[#b0b0b0] hover:text-white"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {filteredDesigns.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedDesign(item)}
                  className="card-hover-glow p-5 rounded-2xl bg-[#0f0f1a] border border-white/10 flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono text-[#e63946] px-2 py-0.5 rounded bg-white/[0.04]">
                        {item.category}
                      </span>
                      <Eye className="w-3.5 h-3.5 text-[#b0b0b0] group-hover:text-[#e63946] transition-colors" />
                    </div>
                    <h4 className="font-serif text-lg font-bold text-white group-hover:text-[#e63946] transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#b0b0b0] mt-1 line-clamp-2">
                      {item.client}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-emerald-400 font-mono">
                    {item.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 4: CHURNSENSE ML */}
        {/* ============================================================== */}
        {activeTab === "churnsense" && (
          <div className="card-hover-glow p-6 sm:p-10 rounded-3xl bg-[#0f0f1a] border border-white/10 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#e63946]">
                  <span className="w-2 h-2 rounded-full bg-[#e63946]" />
                  <span>Machine Learning &amp; Web App • Final Year Project (FYP)</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                  ChurnSense: Real-Time Customer Churn Prediction
                </h3>

                <p className="text-xs sm:text-sm text-[#b0b0b0] leading-relaxed">
                  Full-stack predictive ML system combining a LightGBM gradient-boosted engine with a Flask REST microservice and React UI to flag at-risk subscribers in sub-50ms.
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["LightGBM", "React", "Flask", "Tailwind CSS", "Scikit-Learn", "Pandas"].map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-white border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive Simulator */}
              <div className="lg:col-span-6">
                <div className="p-5 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-4">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-white font-bold">Interactive Model Simulator</span>
                    <span className="text-emerald-400">Live Inference</span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-[#b0b0b0]">Tenure:</span>
                        <span className="text-white font-mono">{tenure} months</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="72"
                        value={tenure}
                        onChange={(e) => setTenure(Number(e.target.value))}
                        className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#e63946]"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-[#b0b0b0]">Monthly Billing:</span>
                        <span className="text-white font-mono">${monthlyCharges}/mo</span>
                      </div>
                      <input
                        type="range"
                        min="20"
                        max="120"
                        value={monthlyCharges}
                        onChange={(e) => setMonthlyCharges(Number(e.target.value))}
                        className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#e63946]"
                      />
                    </div>
                  </div>

                  <div className={`p-3 rounded-xl border ${riskStatus.border} ${riskStatus.bg} flex items-center justify-between`}>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#b0b0b0] block">Churn Probability</span>
                      <span className={`font-serif text-2xl font-bold ${riskStatus.color}`}>
                        {churnRisk}%
                      </span>
                    </div>
                    <span className={`text-xs font-mono font-bold ${riskStatus.color}`}>
                      {riskStatus.text}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <DesignModal
        item={selectedDesign}
        onClose={() => setSelectedDesign(null)}
      />
    </section>
  );
}
