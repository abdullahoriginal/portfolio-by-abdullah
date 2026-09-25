"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Experience", href: "#experience" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
          ? "bg-[#0a0a0a]/70 backdrop-blur-xl border-b border-white/10 py-4 shadow-xl"
          : "bg-[#0a0a0a]/45 backdrop-blur-xl border-b border-white/5 py-6"
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-2 text-xl font-bold tracking-tight text-white"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#e63946] group-hover:scale-125 transition-transform" />
          <span className="font-serif text-2xl tracking-normal">Abdullah</span>
          <span className="text-xs uppercase tracking-widest text-[#e63946] font-mono px-2 py-0.5 rounded-full bg-[#e63946]/10 border border-[#e63946]/20 hidden sm:inline-block">
            E-commerce Specialist
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#b0b0b0] hover:text-white transition-colors red-link-hover py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA & Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="flex items-center gap-2 text-sm font-semibold bg-[#e63946] hover:bg-[#d62828] text-white px-5 py-2.5 rounded-full transition-all duration-200 shadow-[0_0_15px_rgba(230,57,70,0.35)] hover:shadow-[0_0_25px_rgba(230,57,70,0.6)]"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded-lg text-[#b0b0b0] hover:text-white hover:bg-white/5 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0f0f1a] border-b border-white/10 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#b0b0b0] hover:text-white hover:text-[#e63946] transition-colors py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 text-sm font-semibold bg-[#e63946] text-white py-3 rounded-xl"
              >
                <span>Hire Abdullah</span>
                <Sparkles className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
