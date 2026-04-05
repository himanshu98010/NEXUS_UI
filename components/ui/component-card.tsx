import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ComponentItem } from "@/lib/components-data";

type ComponentCardProps = {
  item: ComponentItem;
};

type CardTheme = {
  frame: string;
  previewFrame: string;
  shell: string;
  categoryPill: string;
  title: string;
  cta: string;
  previewWrap: string;
  dotA: string;
  dotB: string;
  dotC: string;
};

const slugThemes: Record<string, CardTheme> = {
  buttons: {
    frame: "rounded-2xl",
    previewFrame: "rounded-xl",
    shell:
      "border-sky-200/90 bg-linear-to-br from-white via-sky-50/70 to-cyan-50/80 shadow-sky-500/12 hover:border-sky-300 dark:border-sky-800/80 dark:from-slate-950 dark:via-sky-950/55 dark:to-cyan-950/50",
    categoryPill:
      "border-sky-200 bg-sky-100/80 text-sky-700 dark:border-sky-700/70 dark:bg-sky-900/45 dark:text-sky-200",
    title: "text-sky-950 dark:text-sky-100",
    cta: "text-sky-900 dark:text-sky-200",
    previewWrap:
      "border-sky-200/80 bg-sky-50/85 dark:border-sky-700/80 dark:bg-sky-950/35",
    dotA: "bg-sky-500/85 dark:bg-sky-400/80",
    dotB: "bg-cyan-500/85 dark:bg-cyan-400/80",
    dotC: "bg-indigo-500/80 dark:bg-indigo-400/80",
  },
  cards: {
    frame: "rounded-[1.75rem]",
    previewFrame: "rounded-2xl",
    shell:
      "border-amber-200/85 bg-linear-to-br from-white via-amber-50/65 to-orange-50/75 shadow-amber-500/12 hover:border-amber-300 dark:border-amber-800/80 dark:from-slate-950 dark:via-amber-950/45 dark:to-orange-950/45",
    categoryPill:
      "border-amber-200 bg-amber-100/80 text-amber-700 dark:border-amber-700/70 dark:bg-amber-900/45 dark:text-amber-200",
    title: "text-amber-950 dark:text-amber-100",
    cta: "text-amber-900 dark:text-amber-200",
    previewWrap:
      "border-amber-200/80 bg-amber-50/85 dark:border-amber-700/80 dark:bg-amber-950/30",
    dotA: "bg-amber-500/85 dark:bg-amber-400/80",
    dotB: "bg-orange-500/80 dark:bg-orange-400/80",
    dotC: "bg-yellow-500/80 dark:bg-yellow-400/80",
  },
  inputs: {
    frame: "rounded-3xl",
    previewFrame: "rounded-2xl",
    shell:
      "border-emerald-200/85 bg-linear-to-br from-white via-emerald-50/65 to-teal-50/75 shadow-emerald-500/12 hover:border-emerald-300 dark:border-emerald-800/80 dark:from-slate-950 dark:via-emerald-950/45 dark:to-teal-950/45",
    categoryPill:
      "border-emerald-200 bg-emerald-100/80 text-emerald-700 dark:border-emerald-700/70 dark:bg-emerald-900/45 dark:text-emerald-200",
    title: "text-emerald-950 dark:text-emerald-100",
    cta: "text-emerald-900 dark:text-emerald-200",
    previewWrap:
      "border-emerald-200/80 bg-emerald-50/85 dark:border-emerald-700/80 dark:bg-emerald-950/30",
    dotA: "bg-emerald-500/85 dark:bg-emerald-400/80",
    dotB: "bg-teal-500/85 dark:bg-teal-400/80",
    dotC: "bg-lime-500/80 dark:bg-lime-400/80",
  },
  badges: {
    frame: "rounded-[1.6rem]",
    previewFrame: "rounded-[1rem]",
    shell:
      "border-violet-200/85 bg-linear-to-br from-white via-violet-50/65 to-fuchsia-50/75 shadow-violet-500/12 hover:border-violet-300 dark:border-violet-800/80 dark:from-slate-950 dark:via-violet-950/45 dark:to-fuchsia-950/45",
    categoryPill:
      "border-violet-200 bg-violet-100/80 text-violet-700 dark:border-violet-700/70 dark:bg-violet-900/45 dark:text-violet-200",
    title: "text-violet-950 dark:text-violet-100",
    cta: "text-violet-900 dark:text-violet-200",
    previewWrap:
      "border-violet-200/80 bg-violet-50/85 dark:border-violet-700/80 dark:bg-violet-950/30",
    dotA: "bg-violet-500/85 dark:bg-violet-400/80",
    dotB: "bg-fuchsia-500/85 dark:bg-fuchsia-400/80",
    dotC: "bg-purple-500/80 dark:bg-purple-400/80",
  },
  alerts: {
    frame: "rounded-2xl",
    previewFrame: "rounded-xl",
    shell:
      "border-rose-200/85 bg-linear-to-br from-white via-rose-50/65 to-red-50/75 shadow-rose-500/12 hover:border-rose-300 dark:border-rose-800/80 dark:from-slate-950 dark:via-rose-950/45 dark:to-red-950/45",
    categoryPill:
      "border-rose-200 bg-rose-100/80 text-rose-700 dark:border-rose-700/70 dark:bg-rose-900/45 dark:text-rose-200",
    title: "text-rose-950 dark:text-rose-100",
    cta: "text-rose-900 dark:text-rose-200",
    previewWrap:
      "border-rose-200/80 bg-rose-50/85 dark:border-rose-700/80 dark:bg-rose-950/30",
    dotA: "bg-rose-500/85 dark:bg-rose-400/80",
    dotB: "bg-red-500/85 dark:bg-red-400/80",
    dotC: "bg-orange-500/80 dark:bg-orange-400/80",
  },
  modals: {
    frame: "rounded-[1.7rem]",
    previewFrame: "rounded-2xl",
    shell:
      "border-fuchsia-200/85 bg-linear-to-br from-white via-fuchsia-50/65 to-pink-50/75 shadow-fuchsia-500/12 hover:border-fuchsia-300 dark:border-fuchsia-800/80 dark:from-slate-950 dark:via-fuchsia-950/45 dark:to-pink-950/45",
    categoryPill:
      "border-fuchsia-200 bg-fuchsia-100/80 text-fuchsia-700 dark:border-fuchsia-700/70 dark:bg-fuchsia-900/45 dark:text-fuchsia-200",
    title: "text-fuchsia-950 dark:text-fuchsia-100",
    cta: "text-fuchsia-900 dark:text-fuchsia-200",
    previewWrap:
      "border-fuchsia-200/80 bg-fuchsia-50/85 dark:border-fuchsia-700/80 dark:bg-fuchsia-950/30",
    dotA: "bg-fuchsia-500/85 dark:bg-fuchsia-400/80",
    dotB: "bg-pink-500/85 dark:bg-pink-400/80",
    dotC: "bg-rose-500/80 dark:bg-rose-400/80",
  },
};

const fallbackThemeByCategory: Record<ComponentItem["category"], CardTheme> = {
  components: {
    frame: "rounded-2xl",
    previewFrame: "rounded-xl",
    shell:
      "border-zinc-200/90 bg-linear-to-br from-white via-zinc-50/70 to-zinc-100/65 shadow-zinc-900/8 hover:border-zinc-300 dark:border-zinc-800 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-950",
    categoryPill:
      "border-zinc-200 bg-zinc-100/85 text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-200",
    title: "text-zinc-900 dark:text-zinc-100",
    cta: "text-zinc-900 dark:text-zinc-100",
    previewWrap:
      "border-zinc-200/80 bg-zinc-50/70 dark:border-zinc-700/80 dark:bg-zinc-800/40",
    dotA: "bg-zinc-500/85 dark:bg-zinc-400/80",
    dotB: "bg-zinc-400/85 dark:bg-zinc-500/80",
    dotC: "bg-zinc-300/85 dark:bg-zinc-600/80",
  },
  layouts: {
    frame: "rounded-[1.7rem]",
    previewFrame: "rounded-2xl",
    shell:
      "border-cyan-200/85 bg-linear-to-br from-white via-cyan-50/65 to-sky-50/70 shadow-cyan-500/12 hover:border-cyan-300 dark:border-cyan-800/80 dark:from-slate-950 dark:via-cyan-950/45 dark:to-sky-950/45",
    categoryPill:
      "border-cyan-200 bg-cyan-100/80 text-cyan-700 dark:border-cyan-700/70 dark:bg-cyan-900/45 dark:text-cyan-200",
    title: "text-cyan-950 dark:text-cyan-100",
    cta: "text-cyan-900 dark:text-cyan-200",
    previewWrap:
      "border-cyan-200/80 bg-cyan-50/85 dark:border-cyan-700/80 dark:bg-cyan-950/30",
    dotA: "bg-cyan-500/85 dark:bg-cyan-400/80",
    dotB: "bg-sky-500/85 dark:bg-sky-400/80",
    dotC: "bg-blue-500/80 dark:bg-blue-400/80",
  },
  sections: {
    frame: "rounded-3xl",
    previewFrame: "rounded-2xl",
    shell:
      "border-indigo-200/85 bg-linear-to-br from-white via-indigo-50/65 to-blue-50/70 shadow-indigo-500/12 hover:border-indigo-300 dark:border-indigo-800/80 dark:from-slate-950 dark:via-indigo-950/45 dark:to-blue-950/45",
    categoryPill:
      "border-indigo-200 bg-indigo-100/80 text-indigo-700 dark:border-indigo-700/70 dark:bg-indigo-900/45 dark:text-indigo-200",
    title: "text-indigo-950 dark:text-indigo-100",
    cta: "text-indigo-900 dark:text-indigo-200",
    previewWrap:
      "border-indigo-200/80 bg-indigo-50/85 dark:border-indigo-700/80 dark:bg-indigo-950/30",
    dotA: "bg-indigo-500/85 dark:bg-indigo-400/80",
    dotB: "bg-blue-500/85 dark:bg-blue-400/80",
    dotC: "bg-sky-500/80 dark:bg-sky-400/80",
  },
  backgrounds: {
    frame: "rounded-[1.8rem]",
    previewFrame: "rounded-2xl",
    shell:
      "border-teal-200/85 bg-linear-to-br from-white via-teal-50/65 to-emerald-50/70 shadow-teal-500/12 hover:border-teal-300 dark:border-teal-800/80 dark:from-slate-950 dark:via-teal-950/45 dark:to-emerald-950/45",
    categoryPill:
      "border-teal-200 bg-teal-100/80 text-teal-700 dark:border-teal-700/70 dark:bg-teal-900/45 dark:text-teal-200",
    title: "text-teal-950 dark:text-teal-100",
    cta: "text-teal-900 dark:text-teal-200",
    previewWrap:
      "border-teal-200/80 bg-teal-50/85 dark:border-teal-700/80 dark:bg-teal-950/30",
    dotA: "bg-teal-500/85 dark:bg-teal-400/80",
    dotB: "bg-emerald-500/85 dark:bg-emerald-400/80",
    dotC: "bg-cyan-500/80 dark:bg-cyan-400/80",
  },
};

function getTheme(item: ComponentItem) {
  return slugThemes[item.slug] ?? fallbackThemeByCategory[item.category];
}

function CardMiniPreview({ slug, theme }: { slug: string; theme: CardTheme }) {
  if (slug === "inputs") {
    return (
      <div
        className={`space-y-2 border p-3 ${theme.previewFrame} ${theme.previewWrap}`}
      >
        <div className={`h-2.5 w-20 rounded ${theme.dotA}`} />
        <div className="h-9 rounded-lg border border-emerald-300/90 bg-white dark:border-emerald-700/80 dark:bg-zinc-950" />
        <div className={`h-2 w-28 rounded ${theme.dotB}`} />
      </div>
    );
  }

  if (slug === "cards") {
    return (
      <div
        className={`grid grid-cols-2 gap-2 border p-3 ${theme.previewFrame} ${theme.previewWrap}`}
      >
        <div className={`h-8 rounded-xl ${theme.dotA}`} />
        <div className={`h-8 rounded-md ${theme.dotB}`} />
        <div className="col-span-2 rounded-2xl border border-amber-300/80 bg-white/85 p-2 dark:border-amber-700/70 dark:bg-zinc-900/80">
          <div className="flex items-center justify-between gap-2">
            <div className={`h-2.5 w-16 rounded ${theme.dotA}`} />
            <div className={`h-2.5 w-10 rounded-full ${theme.dotC}`} />
          </div>
          <div className={`mt-2 h-2 w-24 rounded ${theme.dotB}`} />
        </div>
      </div>
    );
  }

  if (slug === "navbar") {
    return (
      <div className={`border p-3 ${theme.previewFrame} ${theme.previewWrap}`}>
        <div className="flex items-center justify-between">
          <div className={`h-2.5 w-14 rounded ${theme.dotA}`} />
          <div className="flex gap-1.5">
            <div className={`h-2 w-8 rounded ${theme.dotB}`} />
            <div className={`h-2 w-8 rounded ${theme.dotB}`} />
            <div className={`h-5 w-10 rounded-md ${theme.dotC}`} />
          </div>
        </div>
      </div>
    );
  }

  if (slug === "modals") {
    return (
      <div
        className={`relative overflow-hidden border p-3 ${theme.previewFrame} ${theme.previewWrap}`}
      >
        <div className="absolute inset-0 bg-black/10 dark:bg-black/25" />
        <div className="relative mx-auto w-4/5 rounded-lg border border-fuchsia-200 bg-white p-2.5 shadow-sm dark:border-fuchsia-700/80 dark:bg-zinc-800">
          <div className={`h-2.5 w-16 rounded ${theme.dotA}`} />
          <div className={`mt-2 h-2 w-24 rounded ${theme.dotB}`} />
          <div className="mt-2 flex justify-end gap-1">
            <div className="h-5 w-10 rounded bg-fuchsia-100 dark:bg-fuchsia-900/50" />
            <div className={`h-5 w-10 rounded ${theme.dotC}`} />
          </div>
        </div>
      </div>
    );
  }

  if (slug === "grid-layouts") {
    return (
      <div
        className={`grid grid-cols-4 gap-1.5 border p-3 ${theme.previewFrame} ${theme.previewWrap}`}
      >
        <div className={`col-span-2 h-8 rounded ${theme.dotA}`} />
        <div className={`h-8 rounded ${theme.dotB}`} />
        <div className={`h-8 rounded ${theme.dotC}`} />
      </div>
    );
  }

  if (slug === "alerts") {
    return (
      <div
        className={`space-y-2 border p-3 ${theme.previewFrame} ${theme.previewWrap}`}
      >
        <div className="rounded-lg border border-rose-300/90 bg-rose-100/75 p-2 dark:border-rose-800/70 dark:bg-rose-900/30">
          <div className={`h-2 w-24 rounded ${theme.dotA}`} />
        </div>
        <div className="rounded-lg border border-amber-300/90 bg-amber-100/75 p-2 dark:border-amber-800/70 dark:bg-amber-900/30">
          <div className={`h-2 w-16 rounded ${theme.dotB}`} />
        </div>
      </div>
    );
  }

  if (slug === "badges") {
    return (
      <div className={`border p-3 ${theme.previewFrame} ${theme.previewWrap}`}>
        <div className="flex flex-wrap gap-1.5">
          <div className={`h-6 w-14 rounded-full ${theme.dotA}`} />
          <div className={`h-6 w-12 rounded-full ${theme.dotB}`} />
          <div className={`h-6 w-16 rounded-full ${theme.dotC}`} />
        </div>
      </div>
    );
  }

  if (slug === "buttons") {
    return (
      <div className={`border p-3 ${theme.previewFrame} ${theme.previewWrap}`}>
        <div className="flex items-center gap-2">
          <div className={`h-8 w-20 rounded-lg ${theme.dotA}`} />
          <div className="h-8 w-20 rounded-lg border border-sky-300 bg-white dark:border-sky-700/80 dark:bg-zinc-900" />
          <div className={`h-8 w-8 rounded-lg ${theme.dotC}`} />
        </div>
      </div>
    );
  }

  return (
    <div className={`border p-3 ${theme.previewFrame} ${theme.previewWrap}`}>
      <div className="grid grid-cols-3 gap-1.5">
        <div className={`h-6 rounded ${theme.dotA}`} />
        <div className={`h-6 rounded ${theme.dotB}`} />
        <div className={`h-6 rounded ${theme.dotC}`} />
      </div>
    </div>
  );
}

export function ComponentCard({ item }: ComponentCardProps) {
  const theme = getTheme(item);

  return (
    <Link
      href={`/components/${item.slug}`}
      className={`group block h-full min-w-0 animate-fade-in-up border p-5 shadow-sm transition-all duration-250 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl ${theme.frame} ${theme.shell}`}
    >
      <p
        className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${theme.categoryPill}`}
      >
        {item.category}
      </p>
      <h3 className={`mt-3 text-lg font-semibold ${theme.title}`}>
        {item.title}
      </h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
        {item.description}
      </p>
      <div className="mt-4">
        <CardMiniPreview slug={item.slug} theme={theme} />
      </div>
      <div
        className={`mt-4 flex items-center gap-1 text-sm font-medium ${theme.cta}`}
      >
        Open component
        <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
