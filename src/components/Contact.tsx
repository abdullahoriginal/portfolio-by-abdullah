"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  CheckCircle,
  ChevronDown,
} from "lucide-react";

function PlatformMark({ platform }: { platform: "whatsapp" | "linkedin" | "github" | "instagram" }) {
  if (platform === "linkedin") {
    return <span aria-hidden="true" className="platform-mark">in</span>;
  }

  if (platform === "github") {
    return <span aria-hidden="true" className="platform-mark platform-mark-github">&lt;/&gt;</span>;
  }

  if (platform === "instagram") {
    return (
      <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
        <circle cx="12" cy="12" r="4.1" />
        <circle cx="17.4" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="platform-mark platform-mark-whatsapp" viewBox="0 0 24 24" fill="none">
      <path d="M12 2.5a9.5 9.5 0 0 0-8.2 14.3L2.5 21.5l4.9-1.3A9.5 9.5 0 1 0 12 2.5Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8.5 8.3c.2-.4.5-.4.8-.4h.6c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.5.6c.5 1 1.3 1.8 2.4 2.3l.6-.5c.2-.2.4-.2.7-.1l1.7.7c.3.1.4.3.4.5v.6c0 .3 0 .6-.4.8-.3.2-.8.3-1.1.3-2.1-.2-5.8-3.7-6.1-5.8-.1-.5.1-1.3.3-1.6Z" fill="currentColor" />
    </svg>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Listing Optimization & A+ Design",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const serviceOptions = [
    { value: "Listing Optimization & A+ Design", label: "Amazon A+ Content & Listing Optimization" },
    { value: "Amazon & Noon PPC Management", label: "Amazon / Noon PPC Management & Scaling" },
    { value: "Storefront & Brand Design", label: "Storefront & Packaging Design" },
    { value: "Product Sourcing & Operations", label: "Product Sourcing & Marketplace Operations" },
    { value: "Custom Scraping & Automation", label: "Custom Scraper & Python Automation" },
    { value: "General Consultation", label: "General Consultation" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <section id="contact" className="py-16 relative bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
      <div aria-hidden="true" className="flow-lines" />
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#e63946] font-mono font-semibold">
            Inquiries
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
            Let&apos;s Build Together
          </h2>
          <p className="text-xs sm:text-sm text-[#b0b0b0] mt-2">
            Looking for listing redesigns, A+ Content architecture, marketplace PPC scaling, or custom scrapers? Drop a note below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 flex">
            <div className="w-full h-full p-6 rounded-2xl bg-[#0f0f1a] border border-white/10 card-hover-glow space-y-4 flex flex-col">
              <h3 className="font-serif text-lg font-bold text-white">
                Direct Contact
              </h3>

              <div className="space-y-2.5">
                <a
                  href="mailto:mirzaabdullahadil666@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#e63946]/40 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-[#e63946]/10 text-[#e63946] group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#b0b0b0] block font-mono">Email</span>
                    <span className="text-xs font-semibold text-white group-hover:text-[#e63946] transition-colors break-all">
                      mirzaabdullahadil666@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="https://wa.me/34600148981"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#e63946]/40 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-[#e63946]/10 text-[#e63946] group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#b0b0b0] block font-mono">WhatsApp</span>
                    <span className="text-xs font-semibold text-white group-hover:text-[#e63946] transition-colors">
                      +34 600 14 89 81
                    </span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/originalabdullah/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#e63946]/40 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-[#e63946]/10 text-[#e63946] group-hover:scale-105 transition-transform">
                    <PlatformMark platform="linkedin" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#b0b0b0] block font-mono">LinkedIn</span>
                    <span className="text-xs font-semibold text-white group-hover:text-[#e63946] transition-colors">
                      linkedin.com/in/originalabdullah
                    </span>
                  </div>
                </a>

              </div>

              {/* Profiles */}
              <div className="pt-3 border-t border-white/10 flex gap-2 mt-auto">
                <a
                  href="https://wa.me/34600148981"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 flex items-center justify-center gap-1.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-[#e63946] hover:text-[#e63946] text-xs font-medium text-white transition-colors"
                >
                  <PlatformMark platform="whatsapp" />
                  WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/abdullahoriginal/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 flex items-center justify-center gap-1.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-[#e63946] hover:text-[#e63946] text-xs font-medium text-white transition-colors"
                >
                  <PlatformMark platform="instagram" />
                  Instagram
                </a>
                <a
                  href="https://github.com/abdullahoriginal"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 flex items-center justify-center gap-1.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-[#e63946] hover:text-[#e63946] text-xs font-medium text-white transition-colors"
                >
                  <PlatformMark platform="github" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 flex">
            <div className="w-full h-full p-6 sm:p-8 rounded-2xl bg-[#0f0f1a] border border-white/10 card-hover-glow">
              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Message Sent
                  </h3>
                  <p className="text-xs text-[#b0b0b0] max-w-sm mx-auto">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Abdullah will reply to <strong className="text-white">{formData.email}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", service: "Listing Optimization & A+ Design", message: "" });
                    }}
                    className="mt-2 px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs font-semibold transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-[#b0b0b0] block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0a0a0a] border border-white/10 text-white text-xs focus:outline-none focus:border-[#e63946] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-[#b0b0b0] block mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@brand.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0a0a0a] border border-white/10 text-white text-xs focus:outline-none focus:border-[#e63946] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-[#b0b0b0] block mb-1.5">
                      Service Needed
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        aria-haspopup="listbox"
                        aria-expanded={serviceOpen}
                        onClick={() => setServiceOpen((open) => !open)}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#0a0a0a] border text-left text-white text-xs flex items-center justify-between gap-3 transition-colors ${serviceOpen ? "border-[#e63946]" : "border-white/10 hover:border-white/20"}`}
                      >
                        <span>{serviceOptions.find((option) => option.value === formData.service)?.label}</span>
                        <ChevronDown className={`w-4 h-4 shrink-0 text-[#e63946] transition-transform duration-300 ${serviceOpen ? "rotate-180" : ""}`} />
                      </button>
                      <div
                        role="listbox"
                        aria-hidden={!serviceOpen}
                        className={`absolute left-0 right-0 top-[calc(100%+0.5rem)] z-20 origin-top rounded-xl border border-white/10 bg-[#11111b] p-1.5 shadow-2xl transition-all duration-200 ${serviceOpen ? "pointer-events-auto translate-y-0 scale-y-100 opacity-100" : "pointer-events-none -translate-y-2 scale-y-95 opacity-0"}`}
                      >
                        {serviceOptions.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            role="option"
                            aria-selected={formData.service === option.value}
                            onClick={() => {
                              setFormData({ ...formData, service: option.value });
                              setServiceOpen(false);
                            }}
                            className={`w-full rounded-lg px-3 py-2 text-left text-xs transition-colors ${formData.service === option.value ? "bg-[#e63946]/15 text-white" : "text-[#b0b0b0] hover:bg-white/5 hover:text-white"}`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-[#b0b0b0] block mb-1.5">
                      Project Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share your ASINs, current challenges, timeline, or objectives..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0a0a0a] border border-white/10 text-white text-xs focus:outline-none focus:border-[#e63946] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 rounded-xl bg-[#e63946] hover:bg-[#d62828] text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all duration-200 shadow-[0_0_15px_rgba(230,57,70,0.3)] hover:shadow-[0_0_25px_rgba(230,57,70,0.5)] cursor-pointer"
                  >
                    {submitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Submit Brief</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
