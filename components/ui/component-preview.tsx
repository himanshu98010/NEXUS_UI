"use client";

import { LoaderCircle, Plus, Sparkles } from "lucide-react";
import { useState } from "react";

type ComponentPreviewProps = {
  slug: string;
};

export function ComponentPreview({ slug }: ComponentPreviewProps) {
  const [openModal, setOpenModal] = useState(false);

  if (slug === "buttons") {
    return (
      <div className="flex flex-wrap gap-3">
        <button className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-zinc-400">
          Primary
        </button>
        <button className="rounded-lg bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100">
          Secondary
        </button>
        <button className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800">
          Ghost
        </button>
        <button className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 transition hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800">
          Outline
        </button>
        <button className="rounded-lg bg-linear-to-r from-sky-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02]">
          Gradient
        </button>
        <button className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 text-white transition hover:bg-zinc-800">
          <Plus className="h-4 w-4" />
        </button>
        <button className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white">
          <LoaderCircle className="h-4 w-4 animate-spin" /> Loading
        </button>
      </div>
    );
  }

  if (slug === "cards") {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-cyan-200/80 bg-white/70 p-5 shadow-[0_18px_38px_rgba(14,165,233,0.16)] backdrop-blur dark:border-cyan-700/70 dark:bg-cyan-950/30">
          <h4 className="font-semibold text-cyan-950 dark:text-cyan-100">
            Glass card
          </h4>
          <p className="mt-2 text-sm text-cyan-800/85 dark:text-cyan-200/85">
            Floating panel with blur and cool tint.
          </p>
        </article>
        <article className="overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-[0_16px_34px_rgba(251,146,60,0.2)] dark:border-amber-700/70 dark:bg-zinc-900">
          <div className="h-28 bg-linear-to-r from-amber-300 via-orange-300 to-rose-300 dark:from-amber-500/60 dark:via-orange-500/60 dark:to-rose-500/60" />
          <div className="p-4">
            <h4 className="font-semibold text-amber-950 dark:text-amber-100">
              Image card
            </h4>
            <p className="mt-2 text-sm text-amber-800/85 dark:text-amber-200/80">
              Warm showcase surface for media-heavy blocks.
            </p>
          </div>
        </article>
        <article className="rounded-2xl border border-violet-200 bg-violet-50/70 p-5 shadow-sm dark:border-violet-700/70 dark:bg-violet-950/25">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-linear-to-r from-cyan-500 to-indigo-500" />
            <div>
              <h4 className="font-semibold text-violet-950 dark:text-violet-100">
                Profile card
              </h4>
              <p className="text-xs text-violet-700/80 dark:text-violet-300/80">
                Design Engineer
              </p>
            </div>
          </div>
        </article>
        <article className="rounded-2xl border border-emerald-200 bg-linear-to-br from-emerald-50/90 to-teal-50/90 p-5 shadow-sm dark:border-emerald-700/70 dark:from-emerald-950/35 dark:to-teal-950/35">
          <p className="text-xs uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
            Pricing card
          </p>
          <p className="mt-2 text-2xl font-semibold text-emerald-950 dark:text-emerald-100">
            $29/mo
          </p>
          <button className="mt-4 w-full rounded-lg bg-emerald-600 py-2 text-sm text-white transition hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400">
            Start
          </button>
        </article>
      </div>
    );
  }

  if (slug === "inputs") {
    return (
      <label className="block max-w-md space-y-2">
        <span className="text-sm font-medium">Email Address</span>
        <input
          className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200 dark:border-zinc-700 dark:bg-zinc-900"
          placeholder="you@example.com"
        />
      </label>
    );
  }

  if (slug === "badges") {
    return (
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white">
          Default
        </span>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
          Success
        </span>
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
          Warning
        </span>
      </div>
    );
  }

  if (slug === "alerts") {
    return (
      <div className="space-y-3">
        <div className="rounded-xl border border-sky-200 bg-sky-50 p-4 text-sm text-sky-800">
          Heads up: New component release is available.
        </div>
        <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">
          Action required: verify billing details.
        </div>
      </div>
    );
  }

  if (slug === "modals") {
    return (
      <>
        <button
          type="button"
          onClick={() => setOpenModal(true)}
          className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white dark:bg-zinc-100 dark:text-zinc-900"
        >
          Open Modal
        </button>
        {openModal ? (
          <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-lg font-semibold">Delete project?</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                This action cannot be undone.
              </p>
              <div className="mt-6 flex justify-end gap-2">
                <button
                  className="rounded-lg border border-zinc-300 px-3 py-2 text-sm"
                  onClick={() => setOpenModal(false)}
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

  if (slug === "navbar") {
    return (
      <nav className="flex items-center justify-between rounded-xl border border-zinc-200 bg-white/70 px-4 py-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70">
        <span className="font-semibold">Nexus UI</span>
        <div className="hidden gap-5 text-sm md:flex">
          <span>Components</span>
          <span>Blocks</span>
          <span>Pricing</span>
        </div>
        <button className="rounded-lg bg-zinc-900 px-3 py-2 text-xs text-white dark:bg-zinc-100 dark:text-zinc-900">
          Browse
        </button>
      </nav>
    );
  }

  if (slug === "grid-layouts") {
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

  if (slug === "hero-sections") {
    return (
      <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium dark:bg-zinc-800">
          New release
        </span>
        <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight">
          Build polished UIs with pure Tailwind CSS.
        </h2>
        <p className="mt-3 max-w-lg text-sm text-zinc-600 dark:text-zinc-300">
          Copy and customize modern blocks in seconds.
        </p>
        <div className="mt-6 flex gap-2">
          <button className="rounded-lg bg-zinc-900 px-4 py-2 text-sm text-white dark:bg-zinc-100 dark:text-zinc-900">
            Browse Components
          </button>
          <button className="rounded-lg border border-zinc-300 px-4 py-2 text-sm">
            View Docs
          </button>
        </div>
      </section>
    );
  }

  if (slug === "pricing-sections") {
    return (
      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Starter
          </p>
          <p className="mt-2 text-3xl font-semibold">
            $12<span className="text-sm text-zinc-500">/mo</span>
          </p>
          <p className="mt-1 text-xs text-zinc-500">For solo builders</p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
            <li>5 projects</li>
            <li>10 GB storage</li>
            <li>Email support</li>
          </ul>
          <button className="mt-5 w-full rounded-lg border border-zinc-300 py-2 text-sm font-medium">
            Start free trial
          </button>
        </article>

        <article className="relative rounded-2xl border border-sky-300 bg-white p-5 shadow-lg ring-2 ring-sky-100 dark:bg-zinc-900">
          <span className="absolute right-4 top-4 rounded-full bg-sky-100 px-2 py-0.5 text-xs font-semibold text-sky-700">
            Popular
          </span>
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Pro
          </p>
          <p className="mt-2 text-3xl font-semibold">
            $29<span className="text-sm text-zinc-500">/mo</span>
          </p>
          <p className="mt-1 text-xs text-zinc-500">For growing teams</p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
            <li>50 projects</li>
            <li>250 GB storage</li>
            <li>Priority chat support</li>
            <li>Advanced analytics</li>
          </ul>
          <button className="mt-5 w-full rounded-lg bg-zinc-900 py-2 text-sm font-medium text-white dark:bg-zinc-100 dark:text-zinc-900">
            Choose Pro
          </button>
        </article>

        <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Enterprise
          </p>
          <p className="mt-2 text-3xl font-semibold">
            $99<span className="text-sm text-zinc-500">/mo</span>
          </p>
          <p className="mt-1 text-xs text-zinc-500">For large organizations</p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
            <li>Unlimited projects</li>
            <li>1 TB storage</li>
            <li>Dedicated success manager</li>
            <li>SLA + SSO</li>
          </ul>
          <button className="mt-5 w-full rounded-lg border border-zinc-300 py-2 text-sm font-medium">
            Contact sales
          </button>
        </article>
      </section>
    );
  }

  if (slug === "gradients") {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-zinc-900 p-8 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,.55),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,.45),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(16,185,129,.35),transparent_40%)]" />
        <div className="relative">
          <h3 className="text-xl font-semibold">Gradient Surface</h3>
          <p className="mt-2 text-sm text-zinc-200">
            Layered glow for premium hero sections.
          </p>
        </div>
      </div>
    );
  }

  if (slug === "mesh-backgrounds") {
    return (
      <div className="relative h-52 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950">
        <div className="absolute -left-12 top-8 h-40 w-40 rounded-full bg-cyan-500/40 blur-3xl" />
        <div className="absolute right-0 top-8 h-44 w-44 rounded-full bg-indigo-500/35 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-emerald-400/30 blur-3xl" />
      </div>
    );
  }

  if (slug === "animated-gradients") {
    return (
      <div className="relative h-52 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-900">
        <div className="animate-pulse-slow absolute -left-12 top-6 h-44 w-44 rounded-full bg-fuchsia-500/35 blur-3xl" />
        <div className="animate-pulse-slower absolute right-3 top-8 h-44 w-44 rounded-full bg-sky-500/35 blur-3xl" />
      </div>
    );
  }

  if (slug === "loaders") {
    return (
      <div className="flex items-center gap-5">
        <span className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-900 dark:border-zinc-700 dark:border-t-zinc-100" />
        <span className="h-2.5 w-2.5 animate-ping rounded-full bg-sky-500" />
        <span className="inline-flex gap-1">
          <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-500 [animation-delay:-0.2s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-500 [animation-delay:-0.1s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-500" />
        </span>
      </div>
    );
  }

  if (slug === "avatars") {
    return (
      <div className="flex items-center gap-6">
        <div className="relative">
          <div className="h-12 w-12 rounded-full bg-linear-to-r from-cyan-500 to-indigo-500" />
          <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500" />
        </div>
        <div className="flex -space-x-3">
          <div className="h-10 w-10 rounded-full border-2 border-white bg-zinc-200" />
          <div className="h-10 w-10 rounded-full border-2 border-white bg-zinc-300" />
          <div className="h-10 w-10 rounded-full border-2 border-white bg-zinc-400" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
      <Sparkles className="h-4 w-4" /> Preview unavailable.
    </div>
  );
}
