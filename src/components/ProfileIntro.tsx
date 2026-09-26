import Image from "next/image";
import { ArrowUpRight, Check, Clock3, Layers3, ShoppingBag } from "lucide-react";

const profileStats = [
  { value: "50+", label: "Products managed", icon: Layers3 },
  { value: "4+", label: "Years in e-commerce", icon: Clock3 },
  { value: "130K+", label: "SAR marketplace GMV", icon: ShoppingBag },
];

export default function ProfileIntro() {
  return (
    <section id="profile" className="relative overflow-hidden border-y border-white/5 bg-[#0a0a0a] py-10 sm:py-12">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[#e63946]/10 blur-3xl" />
      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-6 sm:px-10 lg:grid-cols-12 lg:gap-14 lg:px-0">
        <div className="lg:col-span-7">
          <div className="mb-5 flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#e63946]">
            <span className="h-2 w-2 rounded-full bg-[#e63946] shadow-[0_0_10px_#e63946]" />
            <span>About Abdullah</span>
          </div>

          <h2 className="max-w-3xl font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            The operator behind the storefront.
          </h2>
          <p
            className="mt-4 max-w-2xl text-sm leading-relaxed !text-white sm:text-base"
            style={{ color: "#ffffff" }}
          >
            Abdullah A. connects procurement, marketplace advertising, and creative production into one practical growth system for Amazon and Noon brands.
          </p>

          <div className="mt-7 grid max-w-2xl grid-cols-1 gap-2.5 sm:grid-cols-3">
            {profileStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="rounded-xl border border-white/10 bg-[#0f0f1a]/80 p-3.5">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-2xl font-bold text-white">{stat.value}</span>
                    <Icon className="h-4 w-4 text-[#e63946]" />
                  </div>
                  <span className="mt-1 block text-[10px] font-mono uppercase tracking-wide text-[#b0b0b0]">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>

          <a
            href="#about"
            className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-white transition-colors hover:text-[#e63946]"
          >
            <Check className="h-4 w-4 text-[#e63946]" />
            <span>Explore the full profile</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="flex justify-center lg:col-span-5 lg:justify-end">
          <div className="group relative h-72 w-72 sm:h-80 sm:w-80">
            <div className="absolute inset-0 rounded-full border border-[#e63946]/60 shadow-[0_0_36px_rgba(230,57,70,0.24)]" />
            <div className="absolute inset-3 overflow-hidden rounded-full border border-white/10 bg-[#0f0f1a] transition-transform duration-500 ease-out group-hover:scale-105">
              <Image
                src="/PFP.jpg"
                alt="Abdullah A."
                fill
                sizes="(max-width: 640px) 288px, 320px"
                className="object-cover object-center grayscale-[15%]"
                priority
              />
            </div>
            <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-[#0f0f1a] px-3 py-1.5 text-[10px] font-semibold text-white shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              </span>
              Available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
