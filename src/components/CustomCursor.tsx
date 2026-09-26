"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isVisible = false;
    let animationId: number;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }

      // Direct hardware-accelerated transform with zero React re-renders
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target?.closest("button") ||
        target?.closest("a") ||
        target?.closest("input") ||
        target?.closest("textarea") ||
        target?.closest("select") ||
        target?.closest("img") ||
        target?.closest(".card-hover-glow") ||
        target?.closest("[class*='rounded-xl']") ||
        target?.closest("[class*='rounded-2xl']") ||
        target?.closest("[class*='rounded-3xl']") ||
        target?.closest(".interactive-hover") ||
        target?.closest("[data-cursor-hover]") ||
        target?.closest("[role='button']")
      ) {
        ring.classList.add("cursor-hover");
      } else {
        ring.classList.remove("cursor-hover");
      }
    };

    const onMouseLeave = () => {
      isVisible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const render = () => {
      // Smooth linear interpolation for trailing ring (18% follow speed)
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      animationId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* Primary Dot - Instant response, 0 lag */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-50 w-1.5 h-1.5 rounded-full bg-[#e63946] shadow-[0_0_8px_#e63946] opacity-0 transition-opacity duration-150 will-change-transform hidden md:block"
      />
      {/* Trailing Ring - Smooth physics, zero CPU burden */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-40 w-7 h-7 rounded-full border border-[#e63946]/50 bg-[#e63946]/5 opacity-0 transition-[opacity,width,height,background-color] duration-150 ease-out will-change-transform hidden md:block [&.cursor-hover]:w-12 [&.cursor-hover]:h-12 [&.cursor-hover]:bg-[#e63946]/15 [&.cursor-hover]:border-[#e63946]"
      />
    </>
  );
}
