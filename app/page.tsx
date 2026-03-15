import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteNavbar } from "@/components/layout/site-navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { MeshBackground } from "@/components/backgrounds/mesh-background";
import { componentsData } from "@/lib/components-data";
import { ComponentCard } from "@/components/ui/component-card";
import { CursorGlow } from "@/components/ui/cursor-glow";

export default function Home() {
  const spotlight = componentsData.slice(0, 6);

  return (
    <div className="relative min-h-screen overflow-x-clip pb-12">
      <MeshBackground />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,.20),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,.18),transparent_42%),radial-gradient(circle_at_50%_75%,rgba(16,185,129,.14),transparent_45%)]" />
        <div className="noise-overlay absolute inset-0 opacity-[0.07]" />
      </div>

      <div className="pt-4">
        <SiteNavbar />
      </div>

      <main className="mx-auto mt-8 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-3xl border border-zinc-200/70 bg-gradient-to-b from-white/85 to-zinc-50/85 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-zinc-800/80 dark:bg-gradient-to-b dark:from-zinc-900/85 dark:to-zinc-950/85 md:p-8 lg:p-9">
          <div className="pointer-events-none absolute inset-0">
            <div className="animate-pulse-slow absolute -left-20 top-12 h-52 w-52 rounded-full bg-cyan-400/25 blur-3xl dark:bg-cyan-500/22" />
            <div className="animate-pulse-slower absolute right-6 top-10 h-48 w-48 rounded-full bg-indigo-400/18 blur-3xl dark:bg-indigo-500/20" />
          </div>

          <div className="relative grid items-center gap-7 lg:grid-cols-[1.05fr_1fr]">
            <div className="space-y-5">
              <p className="inline-flex rounded-full border border-zinc-300 bg-white/80 px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm backdrop-blur dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-300">
                Developer-first Tailwind blocks
              </p>
              <h1 className="font-display text-4xl font-semibold leading-[1.02] tracking-tight text-zinc-950 dark:text-zinc-100 md:text-5xl lg:text-6xl">
                Build premium
                <span className="ml-2 bg-linear-to-r from-sky-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                  UI components
                </span>
                <br />
                faster.
              </h1>
              <p className="max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-300 md:text-base">
                Browse modern components, inspect live previews, and copy
                production-grade Tailwind code with one click. Move from idea to
                polished interface in minutes.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/components"
                  className="interactive-lift ripple group inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-zinc-900/25 transition-all duration-250 hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
                >
                  Browse Components
                  <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/components?category=sections"
                  className="interactive-lift inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white/80 px-5 py-3 text-sm font-semibold text-zinc-800 shadow-sm transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200 dark:hover:bg-zinc-800"
                >
                  View Blocks
                </Link>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Includes buttons, cards, modals, layouts, backgrounds and more.
              </p>
            </div>

            <CursorGlow
              className="interactive-lift rounded-3xl border border-zinc-200/70 bg-white/90 p-4 shadow-2xl backdrop-blur-xl dark:border-zinc-700/70 dark:bg-zinc-900/75"
              glowBackground="radial-gradient(260px circle at var(--mx) var(--my), rgba(56, 189, 248, 0.20), transparent 58%)"
            >
              <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-[0_18px_42px_rgba(15,23,42,0.12)] dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    Example UI preview
                  </p>
                  <span className="rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                    Live
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-700 dark:bg-zinc-800/80">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-xs font-medium text-zinc-500">
                        Command Palette
                      </p>
                      <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                    </div>
                    <div className="h-8 rounded-lg bg-linear-to-r from-sky-500 to-cyan-500" />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      href="/components/buttons"
                      className="animate-[float-slow_1.6s_ease-in-out_infinite] interactive-lift rounded-xl border border-zinc-200 bg-zinc-50 p-3 no-underline dark:border-zinc-700 dark:bg-zinc-800/80"
                    >
                      <p className="text-xs text-zinc-500">Buttons</p>
                      <p className="mt-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                        12 variants
                      </p>
                    </Link>
                    <Link
                      href="/components/hero-sections"
                      className="animate-[float-slow_1.6s_ease-in-out_infinite] interactive-lift rounded-xl border border-zinc-200 bg-zinc-50 p-3 no-underline dark:border-zinc-700 dark:bg-zinc-800/80"
                    >
                      <p className="text-xs text-zinc-500">Blocks</p>
                      <p className="mt-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                        40+ sections
                      </p>
                    </Link>
                  </div>

                  <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-700 dark:bg-zinc-800/80">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-xs text-zinc-500">Copy-ready code</p>
                      <p className="text-xs text-zinc-500">tsx</p>
                    </div>
                    <div className="h-12 rounded-lg bg-zinc-900/95 dark:bg-zinc-950" />
                  </div>
                </div>
              </div>
            </CursorGlow>
          </div>
        </section>

        <section className="mt-20">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                Component Grid
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-300">
                Curated categories with responsive variants and polished states.
              </p>
            </div>
            <Link
              href="/components"
              className="interactive-lift rounded-lg px-3 py-1 text-sm font-medium text-zinc-800 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              View all
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {spotlight.map((item) => (
              <ComponentCard key={item.slug} item={item} />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
