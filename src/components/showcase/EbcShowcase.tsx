"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowDown, Check, Maximize2, X } from "lucide-react";

const ebcItems = [
  { title: "Black Drawer Organizer", category: "Home Organization", file: "Black 25 pcs Drawer organizer EBC.jpg", accent: "#7d7d8b" },
  { title: "Wooden Cutting Board", category: "Kitchen Essentials", file: "Cutting Board EBC Content.jpg", accent: "#4e9a6a" },
  { title: "Glass Food Storage Jars", category: "Kitchen Storage", file: "Glass food jars EBC.jpg", accent: "#3c9bb6" },
  { title: "Premium Knife Set", category: "Kitchen Tools", file: "Knives set EBC.jpg", accent: "#e63946" },
  { title: "Pack of Laundry Baskets", category: "Home Organization", file: "Pack of 2 Laundry Baskets EBC Content.jpg", accent: "#d8783b" },
  { title: "Steam Cleaner", category: "Home Care", file: "Steam Cleaner EBC Content.jpg", accent: "#8b6fc3" },
  { title: "Vacuum Storage Bags USB Pump", category: "Vacuum Storage", file: "Vacuum Storage Bags USB pump EBC.jpg", accent: "#06b6d4" },
  { title: "Wardrobe Organizer", category: "Home Storage", file: "Wardrobe Organizer EBC Content.jpg", accent: "#b66f1e" },
];

export default function EbcShowcase() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div>
      <section className="showcase-intro mx-auto flex min-h-[62vh] w-full max-w-[1200px] flex-col items-center justify-center px-6 py-20 text-center sm:px-10">
        <span className="showcase-eyebrow">Amazon A+ / EBC</span>
        <h1 className="mt-3 max-w-4xl font-serif text-4xl font-bold leading-tight sm:text-6xl">EBC Content Showcase</h1>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[#b0b0b0] sm:text-lg">
          Enhanced Brand Content that turns product information into a coherent visual story. Each canvas combines premium composition, persuasive hierarchy, and mobile-first confidence signals.
        </p>
        <p className="mt-4 max-w-2xl text-xs leading-relaxed text-[#808080] sm:text-sm">
          Browse eight complete EBC systems built for different categories, shoppers, and conversion problems.
        </p>
        <a href="#ebc-gallery" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#e63946] px-5 py-3 text-xs font-semibold text-white shadow-[0_0_20px_rgba(230,57,70,0.3)] transition-transform hover:-translate-y-0.5">
          Explore EBC systems <ArrowDown className="h-4 w-4" />
        </a>
      </section>

      <section id="ebc-gallery" className="mx-auto grid w-full max-w-[1320px] grid-cols-1 gap-5 px-6 pb-24 sm:px-10 md:grid-cols-2">
        {ebcItems.map((item, index) => {
          const image = `/showcase/ebc-content/${item.file}`;
          return (
            <article key={item.file} className="showcase-ebc-card group" style={{ "--showcase-accent": item.accent } as React.CSSProperties}>
              <div className="flex items-start justify-between gap-4 p-5 sm:p-6">
                <div><span className="showcase-eyebrow">0{index + 1} / 08 · {item.category}</span><h2 className="mt-2 font-serif text-2xl font-bold">{item.title}</h2></div>
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--showcase-accent)] shadow-[0_0_12px_var(--showcase-accent)]" />
              </div>
              <button type="button" className="relative block aspect-[16/10] w-full overflow-hidden border-y border-white/10 bg-[#0a0a0a]" onClick={() => setSelectedImage(image)} aria-label={`Inspect ${item.title} EBC content`}>
                <Image src={image} alt={`${item.title} EBC content`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]" />
                <span className="absolute bottom-4 right-4 rounded-full bg-black/70 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100"><Maximize2 className="h-4 w-4" /></span>
              </button>
              <div className="flex items-center gap-2 p-5 text-xs text-[#b0b0b0] sm:p-6"><Check className="h-4 w-4 text-[#e63946]" /> Brand story, feature hierarchy, and conversion-focused visual rhythm.</div>
            </article>
          );
        })}
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-5 backdrop-blur-md" role="dialog" aria-modal="true" aria-label="EBC image viewer" onClick={() => setSelectedImage(null)}>
          <button type="button" onClick={() => setSelectedImage(null)} className="absolute right-5 top-5 rounded-full border border-white/15 bg-[#0f0f1a] p-2 text-white" aria-label="Close image viewer"><X className="h-5 w-5" /></button>
          <div className="relative h-[84vh] w-full max-w-6xl" onClick={(event) => event.stopPropagation()}><Image src={selectedImage} alt="Expanded EBC asset" fill sizes="90vw" className="object-contain" /></div>
        </div>
      )}
    </div>
  );
}
