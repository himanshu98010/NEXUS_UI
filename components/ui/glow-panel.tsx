"use client";

import { useRef } from "react";

type GlowPanelProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlowPanel({ children, className = "" }: GlowPanelProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    element.style.setProperty("--mx", `${x}px`);
    element.style.setProperty("--my", `${y}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      style={{
        // Default center for keyboard focus and first paint.
        ["--mx" as string]: "50%",
        ["--my" as string]: "50%",
      }}
      className={`group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white/90 p-5 shadow-sm transition-all duration-200 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/70 dark:hover:border-zinc-700 ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(220px circle at var(--mx) var(--my), rgba(56, 189, 248, 0.14), transparent 56%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
