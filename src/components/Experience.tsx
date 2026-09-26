"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowDown } from "lucide-react";

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const experiences = [
    {
      role: "E-Commerce Specialist",
      company: "Modanoir",
      period: "Nov 2025 – Present",
      tag: "Current Role",
      bullets: [
        "Directing end-to-end marketplace operations across Amazon and Noon GCC channels.",
        "Managing multi-thousand dollar PPC advertising budgets with strict target ACoS controls.",
        "Overseeing complete product design lifecycle: hero photography, lifestyle infographics, A+ storytelling, and inventory restock coordination.",
      ],
      skills: ["Amazon Seller Central", "Noon Partners Lab", "PPC Scaling", "A+ Architecture", "Inventory Planning"],
    },
    {
      role: "Listing Expert & Designer",
      company: "FONETHICS",
      period: "Jan 2024 – Nov 2025",
      tag: "Milestone Role",
      bullets: [
        "Spearheaded complete visual overhaul of Amazon listing catalog leading directly to 30%+ organic CTR uplift.",
        "Conducted competitor reverse-ASIN keyword gap analysis to capture high-converting search volume.",
        "Managed day-to-day Seller Central account health, customer feedback loops, and listing suppressions.",
      ],
      skills: ["Listing Optimization", "CTR Acceleration", "Reverse-ASIN Analysis", "Brand Management"],
    },
    {
      role: "Amazon Graphic Designer",
      company: "Sharda Metals",
      period: "Mar 2025 – Jul 2025",
      tag: "Contract",
      bullets: [
        "Crafted premium A+ Content modules and storefront branding for culinary lines.",
        "Engineered exploded technical spec sheets and objection-handling comparison charts.",
        "Synchronized SEO copywriting with visual elements to maximize keyword density without cluttering graphics.",
      ],
      skills: ["A+ Content", "EBC Design", "Photoshop", "Kitchenware Niche", "SEO Integration"],
    },
    {
      role: "Designer & Web Article Writer",
      company: "TREND OF HEALTH",
      period: "Oct 2023 – Jan 2024",
      tag: "Contract",
      bullets: [
        "Produced search-optimized wellness articles driving targeted organic referral traffic.",
        "Created custom editorial infographics and social media visual assets to boost reader session duration.",
      ],
      skills: ["Content Marketing", "Editorial Graphics", "On-Page SEO", "Audience Engagement"],
    },
    {
      role: "SEO Content Writer",
      company: "Grandtopics (News Blog)",
      period: "Jan 2023 – Sept 2023",
      tag: "Past Role",
      bullets: [
        "Authored breaking technology and global topic articles under strict turnaround deadlines.",
        "Conducted keyword research and structured long-form content to capture Google Discover and Search snippets.",
      ],
      skills: ["Keyword Research", "Fast-Paced Editorial", "Search Intent", "Google Snippets"],
    },
    {
      role: "Freelance Graphic Designer",
      company: "Fiverr",
      period: "Ongoing",
      tag: "Global Clients",
      bullets: [
        "Delivered custom branding materials, commercial flyers, social media ad creative, and packaging designs for international e-commerce sellers.",
        "Maintained top-rated client communication and 100% on-time delivery across diverse creative briefs.",
      ],
      skills: ["Client Consultation", "Brand Identity", "Promotional Design", "Canva / Illustrator"],
    },
  ];

  const totalCards = experiences.length;

  const goToCard = (index: number) => {
    const clamped = Math.max(0, Math.min(index, totalCards - 1));
    const section = sectionRef.current;
    if (!section) return;

    const sectionTop = window.scrollY + section.getBoundingClientRect().top;
    const scrollableDistance = section.offsetHeight - window.innerHeight;
    const progress = clamped / (totalCards - 1);

    window.scrollTo({
      top: sectionTop + scrollableDistance * progress,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let animationFrame = 0;

    const updateProgress = () => {
      animationFrame = 0;
      const sectionTop = window.scrollY + section.getBoundingClientRect().top;
      const scrollableDistance = Math.max(section.offsetHeight - window.innerHeight, 1);
      const nextProgress = Math.min(
        Math.max((window.scrollY - sectionTop) / scrollableDistance, 0),
        1,
      );
      const nextIndex = Math.min(
        Math.round(nextProgress * (totalCards - 1)),
        totalCards - 1,
      );

      setScrollProgress(nextProgress);
      setActiveIndex(nextIndex);
    };

    const handleScroll = () => {
      if (!animationFrame) {
        animationFrame = requestAnimationFrame(updateProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [totalCards]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{ height: `${totalCards * 100}vh` }}
      className="relative bg-[#0a0a0a] border-t border-white/5 w-full"
    >
      <div className="sticky top-0 min-h-screen flex flex-col justify-center py-16 sm:py-20 overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col justify-center">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e63946] animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-[#e63946] font-mono font-semibold">
                Milestone Chronology • Interactive Scroll Sequence
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide">
              Professional Journey
            </h2>
          </div>

          {/* Navigation Controls & Progress */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 font-mono">
              <span className="text-xl font-bold text-[#e63946]">
                0{activeIndex + 1}
              </span>
              <span className="text-xs text-zinc-500">/ 0{totalCards}</span>
            </div>

            {/* Segmented Step Indicator */}
            <div className="flex items-center gap-1.5">
              {experiences.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToCard(i)}
                  aria-label={`Jump to experience ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === i
                      ? "w-8 bg-[#e63946] shadow-[0_0_10px_#e63946]"
                      : "w-2.5 bg-white/15 hover:bg-white/30"
                  }`}
                />
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => goToCard(activeIndex - 1)}
                disabled={activeIndex === 0}
                aria-label="Previous experience"
                className="p-2.5 rounded-xl bg-[#0f0f1a] border border-white/10 text-white disabled:opacity-25 disabled:cursor-not-allowed hover:border-[#e63946] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => goToCard(activeIndex + 1)}
                disabled={activeIndex === totalCards - 1}
                aria-label="Next experience"
                className="p-2.5 rounded-xl bg-[#0f0f1a] border border-white/10 text-white disabled:opacity-25 disabled:cursor-not-allowed hover:border-[#e63946] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Instruction Ribbon */}
        <div className="mb-6 flex items-center justify-between text-xs font-mono text-zinc-400 pb-3 border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="text-[#e63946] font-bold">
              {activeIndex === totalCards - 1 ? "✓ Final Milestone Reached" : `Milestone 0${activeIndex + 1} of 0${totalCards}`}
            </span>
          </div>
          <span className="text-zinc-500 hidden sm:inline">
            Vertical scroll resumes after Milestone 06
          </span>
        </div>

        {/* Horizontal Track Container */}
        <div className="relative w-full overflow-hidden rounded-3xl">
          <div
            className="flex will-change-transform"
            style={{
              transform: `translate3d(-${scrollProgress * (totalCards - 1) * 100}%, 0, 0)`,
            }}
          >
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="w-full shrink-0 px-2"
              >
                <div className="experience-card card-hover-glow h-auto min-h-[300px] md:h-[300px] rounded-3xl bg-[#0f0f1a] border border-white/10 p-5 sm:p-6 md:p-7 shadow-2xl relative overflow-hidden">
                  {/* Subtle red accent glow in corner */}
                  <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 bg-[#e63946]/10 rounded-full blur-3xl" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Meta Column */}
                    <div className="lg:col-span-4 space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#e63946]/15 text-[#e63946] border border-[#e63946]/30">
                          Milestone 0{index + 1}
                        </span>
                        <span className="text-xs font-mono text-zinc-400 px-3 py-1 rounded-full bg-white/[0.03] border border-white/5">
                          {exp.tag}
                        </span>
                      </div>

                      <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-wide leading-tight">
                        {exp.role}
                      </h3>

                      <div className="space-y-1">
                        <p className="text-lg font-semibold text-white/90">
                          {exp.company}
                        </p>
                        <p className="text-xs font-mono text-[#e63946]">
                          {exp.period}
                        </p>
                      </div>

                      {/* Quick jump navigation button */}
                      <div className="pt-4 flex items-center gap-2">
                        {index < totalCards - 1 ? (
                          <button
                            onClick={() => goToCard(index + 1)}
                            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-300 hover:text-[#e63946] transition-colors cursor-pointer"
                          >
                            <span>Next: {experiences[index + 1].company}</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        ) : (
                          <a
                            href="#tech-stack"
                            className="inline-flex items-center gap-2 text-xs font-mono text-[#e63946] hover:text-white transition-colors cursor-pointer"
                          >
                            <span>Continue to Tech Stack</span>
                            <ArrowDown className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right Details Column */}
                    <div className="lg:col-span-8 space-y-6">
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                          Core Responsibilities &amp; Impact:
                        </h4>
                        <ul className="space-y-3">
                          {exp.bullets.map((bullet, bIdx) => (
                            <li
                              key={bIdx}
                              className="flex items-start gap-3 text-sm text-zinc-200 leading-relaxed"
                            >
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#e63946] shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills Badges */}
                      <div className="pt-4 border-t border-white/10">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                          Domain Skills &amp; Software:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-xs font-mono px-3 py-1 rounded-lg bg-white/[0.03] text-zinc-200 border border-white/5 hover:border-[#e63946]/40 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
