"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  CheckCircle,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Listing Optimization & A+ Design",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#0f0f1a] border border-white/10 card-hover-glow space-y-4">
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
                  href="tel:+923059813102"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#e63946]/40 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-[#e63946]/10 text-[#e63946] group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#b0b0b0] block font-mono">Phone / WhatsApp</span>
                    <span className="text-xs font-semibold text-white group-hover:text-[#e63946] transition-colors">
                      +92 305 9813102
                    </span>
                  </div>
                </a>

              </div>

              {/* Profiles */}
              <div className="pt-3 border-t border-white/10 flex gap-2">
                <a
                  href="https://www.fiverr.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 text-center rounded-lg bg-white/[0.02] border border-white/5 hover:border-[#e63946] hover:text-[#e63946] text-xs font-medium text-white transition-colors"
                >
                  Fiverr
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 text-center rounded-lg bg-white/[0.02] border border-white/5 hover:border-[#e63946] hover:text-[#e63946] text-xs font-medium text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 text-center rounded-lg bg-white/[0.02] border border-white/5 hover:border-[#e63946] hover:text-[#e63946] text-xs font-medium text-white transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0f0f1a] border border-white/10 card-hover-glow">
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
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0a0a0a] border border-white/10 text-white text-xs focus:outline-none focus:border-[#e63946] transition-colors"
                    >
                      <option value="Listing Optimization & A+ Design">Amazon A+ Content &amp; Listing Optimization</option>
                      <option value="Amazon & Noon PPC Management">Amazon / Noon PPC Management &amp; Scaling</option>
                      <option value="Storefront & Brand Design">Storefront &amp; Packaging Design</option>
                      <option value="Product Sourcing & Operations">Product Sourcing &amp; Marketplace Operations</option>
                      <option value="Custom Scraping & Automation">Custom Scraper &amp; Python Automation</option>
                      <option value="General Consultation">General Consultation</option>
                    </select>
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
