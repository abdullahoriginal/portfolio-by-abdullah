"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowDown, Maximize2, X } from "lucide-react";

interface Product {
  slug: string;
  title: string;
  category: string;
  main: string;
  supports: string[];
  accent: string;
  description: string;
}

const products: Product[] = [
  {
    slug: "black-drawer",
    title: "Black Drawer Organizer",
    category: "Home Organization",
    main: "/showcase/listing-images/black-drawer-main.png",
    supports: ["3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"],
    accent: "#7d7d8b",
    description: "A clean, utility-first image system built around clarity, dimensions, and everyday use.",
  },
  {
    slug: "cutting-board",
    title: "Wooden Cutting Board",
    category: "Kitchen Essentials",
    main: "/showcase/listing-images/cutting-board-main.png",
    supports: ["5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"],
    accent: "#4e9a6a",
    description: "Material, scale, and feature details arranged to make quality legible at a glance.",
  },
  {
    slug: "glass-jars",
    title: "Glass Food Storage Jars",
    category: "Kitchen Storage",
    main: "/showcase/listing-images/glass-jars-main.png",
    supports: ["3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"],
    accent: "#3c9bb6",
    description: "A structured visual funnel that turns storage features into easy purchase decisions.",
  },
  {
    slug: "knife-set",
    title: "Premium Knife Set",
    category: "Kitchen Tools",
    main: "/showcase/listing-images/knife-set-main.png",
    supports: ["3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"],
    accent: "#e63946",
    description: "Sharp product hierarchy with detail frames that support confidence and comparison.",
  },
  {
    slug: "laundry",
    title: "Pack of Laundry Baskets",
    category: "Home Organization",
    main: "/showcase/listing-images/laundry-main.png",
    supports: ["2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"],
    accent: "#d8783b",
    description: "Lifestyle-led creative that communicates capacity, flexibility, and multi-room utility.",
  },
  {
    slug: "wardrobe",
    title: "Wardrobe Organizer",
    category: "Home Storage",
    main: "/showcase/listing-images/wardrobe-main.png",
    supports: ["3.png", "4.png", "5.png", "6.png", "7.png", "8.png"],
    accent: "#b66f1e",
    description: "A calm, spacious listing system focused on organization, dimensions, and practical outcomes.",
  },
  {
    slug: "vacuum",
    title: "Vacuum USB Pump Set",
    category: "Vacuum Storage",
    main: "/showcase/listing-images/vacuum-main.png",
    supports: [],
    accent: "#06b6d4",
    description: "A focused product presentation for a compact tool with a clear, benefit-first story.",
  },
  {
    slug: "scrub-top",
    title: "Women’s Scrub Top",
    category: "Apparel",
    main: "/showcase/listing-images/scrub-top-main.png",
    supports: ["2.png", "3.png", "4.png", "5.png", "6.png"],
    accent: "#8b6fc3",
    description: "Fit, fabric, and movement explained through a concise image sequence for mobile shoppers.",
  },
];

function productSupportPath(product: Product, filename: string) {
  return `/showcase/listing-images/${product.slug}/${filename}`;
}

export default function ListingShowcase() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div>
      <section className="showcase-intro mx-auto flex min-h-[62vh] w-full max-w-[1200px] flex-col items-center justify-center px-6 py-20 text-center sm:px-10">
        <span className="showcase-eyebrow">Amazon Listing Images</span>
        <h1 className="mt-3 max-w-4xl font-serif text-4xl font-bold leading-tight sm:text-6xl">Listing Images Showcase</h1>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[#b0b0b0] sm:text-lg">
          Premium product image systems designed around conversion psychology, visual hierarchy, and mobile-first clarity. Every frame has a job: explain, reassure, or move the shopper closer to purchase.
        </p>
        <p className="mt-4 max-w-2xl text-xs leading-relaxed text-[#808080] sm:text-sm">
          Explore eight product systems with hero images, supporting angles, feature callouts, and practical visual storytelling.
        </p>
        <a href="#listing-gallery" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#e63946] px-5 py-3 text-xs font-semibold text-white shadow-[0_0_20px_rgba(230,57,70,0.3)] transition-transform hover:-translate-y-0.5">
          Start exploring <ArrowDown className="h-4 w-4" />
        </a>
      </section>

      <section id="listing-gallery" className="space-y-5 pb-20">
        {products.map((product, index) => (
          <article key={product.slug} className="showcase-product" style={{ "--showcase-accent": product.accent } as React.CSSProperties}>
            <div className="mx-auto grid min-h-[780px] w-full max-w-[1200px] grid-cols-1 items-center gap-8 px-6 py-16 sm:px-10 lg:grid-cols-12 lg:gap-12 lg:py-20">
              <div className="lg:col-span-4">
                <span className="showcase-eyebrow">0{index + 1} / 08 · {product.category}</span>
                <h2 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl">{product.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-[#b0b0b0]">{product.description}</p>
                <div className="mt-6 flex items-center gap-2 text-xs text-[#b0b0b0]"><span className="h-2 w-2 rounded-full bg-[var(--showcase-accent)]" />1 hero image + {product.supports.length} supporting frames</div>
              </div>

              <div className="relative flex min-h-[480px] items-center justify-center lg:col-span-8">
                <button type="button" onClick={() => setSelectedImage(product.main)} className="showcase-main-image group relative z-10 h-[330px] w-[330px] overflow-hidden rounded-2xl border border-white/15 bg-[#0f0f1a] shadow-2xl sm:h-[410px] sm:w-[410px]" aria-label={`Inspect ${product.title} hero image`}>
                  <Image src={product.main} alt={`${product.title} hero listing image`} fill sizes="(max-width: 640px) 330px, 410px" className="object-contain p-3 transition-transform duration-500 group-hover:scale-105" priority={index === 0} />
                  <span className="absolute bottom-3 right-3 rounded-full bg-black/70 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100"><Maximize2 className="h-4 w-4" /></span>
                </button>
                {product.supports.map((support, supportIndex) => (
                  <button key={support} type="button" onClick={() => setSelectedImage(productSupportPath(product, support))} className={`showcase-support showcase-support-${supportIndex} group absolute h-20 w-20 overflow-hidden rounded-xl border border-white/15 bg-[#0f0f1a] shadow-xl sm:h-28 sm:w-28`} aria-label={`Inspect ${product.title} supporting image ${supportIndex + 1}`}>
                    <Image src={productSupportPath(product, support)} alt={`${product.title} supporting image ${supportIndex + 1}`} fill sizes="112px" className="object-cover transition-transform duration-300 group-hover:scale-110" />
                  </button>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-5 backdrop-blur-md" role="dialog" aria-modal="true" aria-label="Listing image viewer" onClick={() => setSelectedImage(null)}>
          <button type="button" onClick={() => setSelectedImage(null)} className="absolute right-5 top-5 rounded-full border border-white/15 bg-[#0f0f1a] p-2 text-white" aria-label="Close image viewer"><X className="h-5 w-5" /></button>
          <div className="relative h-[80vh] w-full max-w-5xl" onClick={(event) => event.stopPropagation()}><Image src={selectedImage} alt="Expanded listing asset" fill sizes="90vw" className="object-contain" /></div>
        </div>
      )}
    </div>
  );
}
