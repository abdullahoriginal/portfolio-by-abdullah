import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function ShowcaseNav() {
  return (
    <header className="showcase-nav sticky top-0 z-40 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="group inline-flex items-center gap-2 text-white">
          <ArrowLeft className="h-4 w-4 text-[#e63946] transition-transform group-hover:-translate-x-1" />
          <span className="font-serif text-xl font-bold">Abdullah</span>
        </Link>
        <nav className="hidden items-center gap-6 text-xs text-[#b0b0b0] sm:flex">
          <Link href="/showcase/listing-images" className="transition-colors hover:text-white">Listing Images</Link>
          <Link href="/showcase/ebc-content" className="transition-colors hover:text-white">EBC Content</Link>
          <Link href="/#contact" className="inline-flex items-center gap-1.5 text-white transition-colors hover:text-[#e63946]">
            Commission a project <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </nav>
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#e63946]">Showcase</span>
      </div>
    </header>
  );
}
