"use client";

import { LoaderCircle, Plus } from "lucide-react";
import { useState } from "react";

type ComponentVariantPreviewProps = {
  slug: string;
  variantId: string;
};

export function ComponentVariantPreview({
  slug,
  variantId,
}: ComponentVariantPreviewProps) {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const key = `${slug}:${variantId}`;

  if (key === "buttons:primary-outline") {
    return (
      <div className="flex flex-wrap gap-3">
        <button className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white">
          Primary
        </button>
        <button className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 dark:border-zinc-700 dark:text-zinc-200">
          Outline
        </button>
      </div>
    );
  }

  if (key === "buttons:gradient-icon") {
    return (
      <div className="flex items-center gap-3">
        <button className="rounded-lg bg-linear-to-r from-sky-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white">
          Gradient
        </button>
        <button className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 text-white">
          <Plus className="h-4 w-4" />
        </button>
      </div>
    );
  }

  if (key === "buttons:ghost-loading") {
    return (
      <div className="flex flex-wrap gap-3">
        <button className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800">
          Ghost
        </button>
        <button className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white">
          <LoaderCircle className="h-4 w-4 animate-spin" />
          Loading
        </button>
      </div>
    );
  }

  if (key === "cards:glass") {
    return (
      <article className="rounded-2xl border border-white/40 bg-white/70 p-5 shadow-xl backdrop-blur dark:border-white/15 dark:bg-zinc-900/60">
        <h4 className="font-semibold">Glass Card</h4>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          Premium floating surface.
        </p>
      </article>
    );
  }

  if (key === "cards:elevated") {
    return (
      <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
        <p className="text-xs uppercase tracking-wide text-zinc-500">
          Elevated
        </p>
        <h4 className="mt-2 font-semibold">Revenue Summary</h4>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
          $42,890 this month
        </p>
      </article>
    );
  }

  if (key === "cards:minimal") {
    return (
      <article className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
        <h4 className="font-semibold">Minimal Card</h4>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          Low-noise container.
        </p>
      </article>
    );
  }

  if (key === "inputs:default") {
    return (
      <input
        className="w-full max-w-sm rounded-lg border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
        placeholder="you@example.com"
      />
    );
  }

  if (key === "inputs:with-icon") {
    return (
      <label className="relative block w-full max-w-sm">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
          ⌕
        </span>
        <input
          className="w-full rounded-lg border border-zinc-300 py-2 pl-9 pr-3 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          placeholder="Search components"
        />
      </label>
    );
  }

  if (key === "inputs:inline-form") {
    return (
      <form className="flex w-full max-w-md gap-2">
        <input
          className="flex-1 rounded-lg border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          placeholder="Enter email"
        />
        <button className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white">
          Join
        </button>
      </form>
    );
  }

  if (key === "badges:solid") {
    return (
      <div className="flex gap-2">
        <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white">
          Default
        </span>
        <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-medium text-white">
          Success
        </span>
      </div>
    );
  }

  if (key === "badges:subtle") {
    return (
      <div className="flex gap-2">
        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
          New
        </span>
        <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700">
          Beta
        </span>
      </div>
    );
  }

  if (key === "badges:outline") {
    return (
      <div className="flex gap-2">
        <span className="rounded-full border border-zinc-300 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:text-zinc-200">
          Outline
        </span>
        <span className="rounded-full border border-amber-300 px-3 py-1 text-xs font-medium text-amber-700">
          Warning
        </span>
      </div>
    );
  }

  if (key === "alerts:info") {
    return (
      <div className="rounded-xl border border-sky-200 bg-sky-50 p-4 text-sm text-sky-800">
        Heads up: New component release is available.
      </div>
    );
  }

  if (key === "alerts:success") {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
        Great! Your project has been published.
      </div>
    );
  }

  if (key === "alerts:destructive") {
    return (
      <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800">
        Action required: Please verify billing details.
      </div>
    );
  }

  if (key === "modals:confirm") {
    return (
      <>
        <button
          type="button"
          onClick={() => setActiveModal(variantId)}
          className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white dark:bg-zinc-100 dark:text-zinc-900"
        >
          Open {variantId.replace("-", " ")}
        </button>
        {activeModal === variantId ? (
          <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-lg font-semibold">Delete project?</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                This action cannot be undone.
              </p>
              <div className="mt-6 flex justify-end gap-2">
                <button
                  onClick={() => setActiveModal(null)}
                  className="rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                >
                  Cancel
                </button>
                <button className="rounded-lg bg-rose-600 px-3 py-2 text-sm text-white">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }

  if (key === "modals:centered") {
    return (
      <>
        <button
          type="button"
          onClick={() => setActiveModal(variantId)}
          className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 dark:border-zinc-700 dark:text-zinc-200"
        >
          Open centered
        </button>
        {activeModal === variantId ? (
          <div className="fixed inset-0 z-50 grid place-items-center bg-black/35 p-4">
            <div className="w-full max-w-sm rounded-2xl border border-zinc-200 bg-white p-5 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-base font-semibold">Invite team</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                Add members to this workspace.
              </p>
              <div className="mt-5 flex justify-end">
                <button
                  onClick={() => setActiveModal(null)}
                  className="rounded-lg bg-zinc-900 px-3 py-2 text-sm text-white dark:bg-zinc-100 dark:text-zinc-900"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }

  if (key === "modals:feature") {
    return (
      <>
        <button
          type="button"
          onClick={() => setActiveModal(variantId)}
          className="rounded-lg bg-linear-to-r from-sky-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white"
        >
          Open feature modal
        </button>
        {activeModal === variantId ? (
          <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4">
            <div className="w-full max-w-lg rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-xs uppercase tracking-wide text-zinc-500">
                Pro feature
              </p>
              <h3 className="mt-2 text-xl font-semibold">
                Unlock advanced analytics
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                Upgrade to access cohort trends, funnel maps and retention
                diagnostics.
              </p>
              <div className="mt-5 flex justify-end gap-2">
                <button
                  onClick={() => setActiveModal(null)}
                  className="rounded-lg border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-700"
                >
                  Maybe later
                </button>
                <button className="rounded-lg bg-zinc-900 px-3 py-2 text-sm text-white dark:bg-zinc-100 dark:text-zinc-900">
                  Upgrade
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }

  if (key === "navbar:glass") {
    return (
      <nav className="flex items-center justify-between rounded-xl border border-white/40 bg-white/70 px-4 py-3 backdrop-blur dark:border-white/15 dark:bg-zinc-900/60">
        <span className="font-semibold">Nexus UI</span>
        <button className="rounded-lg bg-zinc-900 px-3 py-2 text-xs text-white dark:bg-zinc-100 dark:text-zinc-900">
          Browse
        </button>
      </nav>
    );
  }

  if (key === "navbar:split") {
    return (
      <nav className="flex items-center justify-between rounded-xl border border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900">
        <span className="font-semibold">Nexus UI</span>
        <div className="hidden gap-6 text-sm md:flex">
          <span>Components</span>
          <span>Pricing</span>
        </div>
        <button className="rounded-lg border border-zinc-300 px-3 py-2 text-xs dark:border-zinc-700">
          Sign in
        </button>
      </nav>
    );
  }

  if (key === "navbar:compact") {
    return (
      <nav className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white px-3 py-2 dark:border-zinc-800 dark:bg-zinc-900">
        <span className="text-sm font-semibold">Nexus UI</span>
        <button className="rounded-md bg-zinc-900 px-2.5 py-1.5 text-xs text-white dark:bg-zinc-100 dark:text-zinc-900">
          Menu
        </button>
      </nav>
    );
  }

  if (key === "grid-layouts:dashboard") {
    return (
      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-zinc-200 bg-white p-3 shadow-sm lg:col-span-2 dark:border-zinc-800 dark:bg-zinc-900">
          Main analytics
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          Stats
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          Revenue
        </div>
      </section>
    );
  }

  if (key === "grid-layouts:bento") {
    return (
      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
        <div className="rounded-xl border border-zinc-200 bg-white p-3 shadow-sm lg:col-span-4 dark:border-zinc-800 dark:bg-zinc-900">
          Feature spotlight
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-3 shadow-sm lg:col-span-2 dark:border-zinc-800 dark:bg-zinc-900">
          Quick links
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-3 shadow-sm lg:col-span-2 dark:border-zinc-800 dark:bg-zinc-900">
          Team
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-3 shadow-sm lg:col-span-4 dark:border-zinc-800 dark:bg-zinc-900">
          Usage
        </div>
      </section>
    );
  }

  if (key === "grid-layouts:stats") {
    return (
      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          MRR
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          Churn
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          Conversion
        </div>
      </section>
    );
  }

  if (key === "hero-sections:split") {
    return (
      <section className="grid gap-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:grid-cols-2 dark:border-zinc-800 dark:bg-zinc-900">
        <div>
          <p className="inline-flex rounded-full bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
            New launch
          </p>
          <h3 className="mt-3 text-2xl font-semibold">
            Build polished UIs faster.
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
            Ready-to-copy Tailwind blocks for modern teams.
          </p>
          <button className="mt-4 rounded-lg bg-zinc-900 px-4 py-2 text-sm text-white dark:bg-zinc-100 dark:text-zinc-900">
            Browse
          </button>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-800/80">
          <div className="h-full rounded-lg bg-linear-to-r from-cyan-500/25 to-indigo-500/25" />
        </div>
      </section>
    );
  }

  if (key === "hero-sections:centered") {
    return (
      <section className="rounded-2xl border border-zinc-200 bg-white p-8 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <p className="inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
          Centered hero
        </p>
        <h3 className="mt-4 text-3xl font-semibold leading-tight">
          Copy-ready UI for faster product shipping.
        </h3>
        <p className="mx-auto mt-3 max-w-lg text-sm text-zinc-600 dark:text-zinc-300">
          Build with high quality defaults and customize every block in minutes.
        </p>
        <div className="mt-5 flex justify-center gap-2">
          <button className="rounded-lg bg-zinc-900 px-4 py-2 text-sm text-white dark:bg-zinc-100 dark:text-zinc-900">
            Browse Components
          </button>
          <button className="rounded-lg border border-zinc-300 px-4 py-2 text-sm dark:border-zinc-700">
            View Docs
          </button>
        </div>
      </section>
    );
  }

  if (key === "hero-sections:gradient") {
    return (
      <section className="relative overflow-hidden rounded-2xl bg-zinc-900 p-8 text-white shadow-sm">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,.45),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,.40),transparent_40%)]" />
        <div className="relative">
          <h3 className="text-3xl font-semibold">Scale your UI system</h3>
          <p className="mt-2 max-w-lg text-sm text-zinc-200">
            Use vibrant gradients for premium first impressions.
          </p>
        </div>
      </section>
    );
  }

  if (key === "pricing-sections:startup") {
    return (
      <section className="grid gap-3 px-1 md:grid-cols-3">
        <article className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-xs uppercase tracking-wide text-zinc-500">Indie</p>
          <h4 className="mt-1 font-semibold">Launch</h4>
          <p className="mt-1 text-sm text-zinc-500">$12/mo</p>
          <p className="mt-2 text-xs text-zinc-500">3 projects · 5k events</p>
        </article>
        <article className="rounded-xl border border-sky-300 bg-white p-4 ring-2 ring-sky-100 dark:bg-zinc-900">
          <p className="text-xs uppercase tracking-wide text-zinc-500">Team</p>
          <h4 className="mt-1 font-semibold">Build</h4>
          <p className="mt-1 text-sm text-zinc-500">$29/mo</p>
          <p className="mt-2 text-xs text-zinc-500">15 projects · 50k events</p>
        </article>
        <article className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-xs uppercase tracking-wide text-zinc-500">
            Studio
          </p>
          <h4 className="mt-1 font-semibold">Scale</h4>
          <p className="mt-1 text-sm text-zinc-500">$59/mo</p>
          <p className="mt-2 text-xs text-zinc-500">
            Unlimited projects · 250k events
          </p>
        </article>
      </section>
    );
  }

  if (key === "pricing-sections:growth") {
    return (
      <section className="grid gap-3 px-1 md:grid-cols-3">
        <article className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-xs uppercase tracking-wide text-zinc-500">
            Starter
          </p>
          <h4 className="mt-1 font-semibold">Core</h4>
          <p className="mt-1 text-sm text-zinc-500">$19/mo</p>
          <p className="mt-2 text-xs text-zinc-500">
            10k API calls · Email support
          </p>
        </article>
        <article className="relative rounded-xl border border-cyan-300 bg-white p-4 shadow-lg ring-2 ring-cyan-100 dark:bg-zinc-900">
          <span className="absolute right-3 top-3 rounded-full bg-cyan-100 px-2 py-0.5 text-[10px] font-semibold text-cyan-700">
            Popular
          </span>
          <p className="text-xs uppercase tracking-wide text-zinc-500">
            Growth
          </p>
          <h4 className="mt-1 font-semibold">Scale</h4>
          <p className="mt-1 text-sm text-zinc-500">$39/mo</p>
          <p className="mt-2 text-xs text-zinc-500">
            100k API calls · Priority support
          </p>
        </article>
        <article className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-xs uppercase tracking-wide text-zinc-500">
            Business
          </p>
          <h4 className="mt-1 font-semibold">Expand</h4>
          <p className="mt-1 text-sm text-zinc-500">$89/mo</p>
          <p className="mt-2 text-xs text-zinc-500">1M API calls · SLA</p>
        </article>
      </section>
    );
  }

  if (key === "pricing-sections:enterprise") {
    return (
      <section className="grid gap-3 px-1 md:grid-cols-3">
        <article className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-xs uppercase tracking-wide text-zinc-500">Team</p>
          <h4 className="mt-1 font-semibold">Pro Team</h4>
          <p className="mt-1 text-sm text-zinc-500">$49/user/mo</p>
          <p className="mt-2 text-xs text-zinc-500">RBAC · Audit logs</p>
        </article>
        <article className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-xs uppercase tracking-wide text-zinc-500">
            Business
          </p>
          <h4 className="mt-1 font-semibold">Business Plus</h4>
          <p className="mt-1 text-sm text-zinc-500">$99/user/mo</p>
          <p className="mt-2 text-xs text-zinc-500">SSO · SOC2 exports</p>
        </article>
        <article className="rounded-xl border border-zinc-900 bg-zinc-900 p-4 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900">
          <p className="text-xs uppercase tracking-wide text-zinc-300 dark:text-zinc-600">
            Enterprise
          </p>
          <h4 className="mt-1 font-semibold">Custom Contract</h4>
          <p className="mt-1 text-sm text-zinc-300 dark:text-zinc-600">
            Custom pricing
          </p>
          <p className="mt-2 text-xs text-zinc-300 dark:text-zinc-600">
            Dedicated infra · 24/7 support
          </p>
        </article>
      </section>
    );
  }

  if (key === "gradients:radial") {
    return (
      <div className="relative h-52 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(56,189,248,.55),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,.45),transparent_35%)]" />
      </div>
    );
  }

  if (key === "gradients:mesh") {
    return (
      <div className="relative h-52 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950">
        <div className="absolute -left-12 top-7 h-40 w-40 rounded-full bg-emerald-500/40 blur-3xl" />
        <div className="absolute right-0 top-8 h-44 w-44 rounded-full bg-cyan-500/35 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] bg-size-[28px_28px]" />
      </div>
    );
  }

  if (key === "gradients:aurora") {
    return (
      <div className="relative h-52 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-900">
        <div className="absolute inset-0 bg-[conic-gradient(from_110deg_at_50%_50%,rgba(244,114,182,.35),rgba(56,189,248,.28),rgba(16,185,129,.25),rgba(99,102,241,.35),rgba(244,114,182,.35))] blur-2xl" />
      </div>
    );
  }

  if (key === "mesh-backgrounds:soft-grid") {
    return (
      <div className="relative h-52 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] bg-size-[28px_28px]" />
      </div>
    );
  }

  if (key === "mesh-backgrounds:neon-grid") {
    return (
      <div className="relative h-52 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950">
        <div className="absolute -left-10 top-8 h-36 w-36 rounded-full bg-cyan-500/45 blur-3xl" />
        <div className="absolute right-0 top-8 h-36 w-36 rounded-full bg-fuchsia-500/45 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.04)_1px,transparent_1px)] bg-size-[24px_24px]" />
      </div>
    );
  }

  if (key === "mesh-backgrounds:sunset-mesh") {
    return (
      <div className="relative h-52 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-900">
        <div className="absolute left-4 top-8 h-44 w-44 rounded-full bg-orange-400/45 blur-3xl" />
        <div className="absolute right-4 top-8 h-44 w-44 rounded-full bg-rose-400/35 blur-3xl" />
      </div>
    );
  }

  if (key === "animated-gradients:pulse") {
    return (
      <div className="relative h-52 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-900">
        <div className="animate-pulse-slow absolute -left-10 top-8 h-36 w-36 rounded-full bg-fuchsia-500/35 blur-3xl" />
        <div className="animate-pulse-slower absolute right-4 top-8 h-36 w-36 rounded-full bg-sky-500/35 blur-3xl" />
      </div>
    );
  }

  if (key === "animated-gradients:flow") {
    return (
      <div className="relative h-52 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-900">
        <div className="animate-pulse-slow absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(56,189,248,.35),rgba(16,185,129,.26),rgba(99,102,241,.34),rgba(56,189,248,.35))] blur-2xl" />
      </div>
    );
  }

  if (key === "animated-gradients:spotlight") {
    return (
      <div className="relative h-52 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950">
        <div className="animate-pulse-slower absolute left-1/4 top-1/4 h-48 w-48 rounded-full bg-cyan-400/30 blur-3xl" />
        <div className="animate-pulse-slow absolute right-1/4 top-1/3 h-40 w-40 rounded-full bg-emerald-400/20 blur-3xl" />
      </div>
    );
  }

  if (slug === "loaders") {
    if (variantId === "spinner") {
      return (
        <span className="inline-flex items-center justify-center">
          <span className="inline-block h-8 w-8 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-900 dark:border-zinc-700 dark:border-t-zinc-100" />
        </span>
      );
    }

    if (variantId === "dots") {
      return (
        <span className="inline-flex gap-1">
          <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-500 [animation-delay:-0.2s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-500 [animation-delay:-0.1s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-500" />
        </span>
      );
    }

    return (
      <span className="inline-flex items-end gap-1">
        <span className="h-3 w-1 animate-pulse rounded bg-zinc-500" />
        <span className="h-5 w-1 animate-pulse rounded bg-zinc-500 [animation-delay:.1s]" />
        <span className="h-4 w-1 animate-pulse rounded bg-zinc-500 [animation-delay:.2s]" />
      </span>
    );
  }

  if (slug === "avatars") {
    if (variantId === "status") {
      return (
        <div className="relative h-12 w-12">
          <div className="h-12 w-12 rounded-full bg-linear-to-r from-cyan-500 to-indigo-500" />
          <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500" />
        </div>
      );
    }

    if (variantId === "group") {
      return (
        <div className="flex -space-x-3">
          <div className="h-10 w-10 rounded-full border-2 border-white bg-zinc-200" />
          <div className="h-10 w-10 rounded-full border-2 border-white bg-zinc-300" />
          <div className="h-10 w-10 rounded-full border-2 border-white bg-zinc-400" />
        </div>
      );
    }

    return (
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-linear-to-r from-cyan-500 to-indigo-500" />
        <div>
          <p className="text-sm font-semibold">Olivia Chen</p>
          <p className="text-xs text-zinc-500">Design Engineer</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-dashed border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
      Preview unavailable for {key}
    </div>
  );
}
