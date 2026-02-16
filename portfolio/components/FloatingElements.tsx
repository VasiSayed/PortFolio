"use client";

import { useEffect, useRef } from "react";

export default function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(".floating-element");
    
    const handleMouseMove = (e: MouseEvent) => {
      elements.forEach((el, index) => {
        const element = el as HTMLElement;
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        // Parallax effect based on distance from cursor
        const distance = Math.sqrt(x * x + y * y);
        const maxDistance = 200;
        const intensity = Math.max(0, 1 - distance / maxDistance);
        
        element.style.transform = `translate(${x * 0.02 * intensity}px, ${y * 0.02 * intensity}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Floating orbs */}
      <div className="floating-element absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-[var(--primary)]/20 to-transparent blur-2xl animate-float-slow" />
      <div className="floating-element absolute top-1/3 right-20 w-40 h-40 rounded-full bg-gradient-to-br from-[var(--accent)]/20 to-transparent blur-2xl animate-float-medium" />
      <div className="floating-element absolute bottom-32 left-1/4 w-36 h-36 rounded-full bg-gradient-to-br from-purple-500/20 to-transparent blur-2xl animate-float-fast" />
    </div>
  );
}
