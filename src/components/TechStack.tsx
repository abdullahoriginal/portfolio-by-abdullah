"use client";

import {
  Code2,
  ShoppingCart,
  Palette,
  Bot,
} from "lucide-react";

export default function TechStack() {
  const categories = [
    {
      name: "Languages & Frameworks",
      icon: Code2,
      desc: "Full-stack web & API development",
      items: ["Python", "JavaScript (ES6+)", "React", "Next.js", "Flask", "Tailwind CSS"],
    },
    {
      name: "E-Commerce & Marketplaces",
      icon: ShoppingCart,
      desc: "Marketplace intelligence & ad scaling",
      items: ["Amazon Ads Console", "Helium10", "Keepa", "Sellerboard", "Noon Partners Lab", "Seller Central (FBA)"],
    },
    {
      name: "Design & Creative Suites",
      icon: Palette,
      desc: "High-converting brand storytelling",
      items: ["Canva Pro", "Figma", "Adobe Photoshop", "Adobe Illustrator", "3D Product Renders", "Amazon Brand Store"],
    },
    {
      name: "Automation & Data Science",
      icon: Bot,
      desc: "Catalog scrapers & machine learning",
      items: ["Playwright", "Selenium", "LightGBM", "Scikit-Learn", "Pandas & NumPy", "PostgreSQL / Git"],
    },
  ];

  return (
    <section id="tech-stack" className="py-16 relative bg-[#0a0a0a]">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#e63946] font-mono font-semibold">
            Tooling
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
            Technical &amp; Creative Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="card-hover-glow p-5 rounded-2xl bg-[#0f0f1a] border border-white/5 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-2 rounded-lg bg-[#e63946]/10 text-[#e63946] border border-[#e63946]/20 group-hover:bg-[#e63946] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-serif text-base font-bold text-white">
                        {cat.name}
                      </h3>
                      <p className="text-[11px] text-[#b0b0b0]">
                        {cat.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {cat.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.03] text-white/90 border border-white/5 hover:border-[#e63946]/40 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
