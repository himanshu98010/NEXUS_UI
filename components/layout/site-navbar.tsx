import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { CursorGlow } from "@/components/ui/cursor-glow";

export function SiteNavbar() {
  return (
    <CursorGlow
      className="sticky top-4 z-40 mx-auto w-[min(1200px,94vw)] rounded-2xl"
      glowBackground="radial-gradient(260px circle at var(--mx) var(--my), rgba(56, 189, 248, 0.22), transparent 58%)"
    >
      <header className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/70 px-4 py-3 shadow-[0_12px_40px_rgba(2,6,23,0.10)] backdrop-blur-2xl dark:border-white/10 dark:bg-zinc-900/65">
        <Link
          href="/"
          className="interactive-lift rounded-md px-2 py-1 text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
        >
          Nexus UI
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-zinc-600 dark:text-zinc-300 md:flex">
          <Link
            href="/components"
            className="py-1 no-underline decoration-1 underline-offset-4 transition-colors duration-200 hover:underline hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
          >
            Components
          </Link>
          <Link
            href="/components?category=sections"
            className="py-1 no-underline decoration-1 underline-offset-4 transition-colors duration-200 hover:underline hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
          >
            Blocks
          </Link>
          <Link
            href="/components?category=backgrounds"
            className="py-1 no-underline decoration-1 underline-offset-4 transition-colors duration-200 hover:underline hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
          >
            Backgrounds
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/components"
            className="interactive-lift ripple rounded-lg bg-zinc-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Browse Components
          </Link>
          <ThemeToggle />
        </div>
      </header>
    </CursorGlow>
  );
}
