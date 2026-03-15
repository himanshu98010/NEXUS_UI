"use client";

import { useRef } from "react";

type CursorGlowProps = {
  children: React.ReactNode;
  className?: string;
  glowClassName?: string;
  glowBackground?: string;
};

export function CursorGlow({
  children,
  className = "",
  glowClassName = "",
  glowBackground = "radial-gradient(220px circle at var(--mx) var(--my), rgba(56, 189, 248, 0.12), transparent 58%)",
}: CursorGlowProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const rect = element.getBoundingClientRect();
    element.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    element.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      style={{ ["--mx" as string]: "50%", ["--my" as string]: "50%" }}
      className={`group relative overflow-hidden ${className}`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${glowClassName}`}
        style={{
          background: glowBackground,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
