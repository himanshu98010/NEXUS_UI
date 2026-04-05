import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ComponentItem } from "@/lib/components-data";

type ComponentCardProps = {
  item: ComponentItem;
};

function CardMiniPreview({ slug }: { slug: string }) {
  if (slug === "inputs") {
    return (
      <div className="space-y-2 rounded-xl border border-zinc-200/80 bg-zinc-50/70 p-3 dark:border-zinc-700/80 dark:bg-zinc-800/40">
        <div className="h-2.5 w-20 rounded bg-zinc-300 dark:bg-zinc-600" />
        <div className="h-9 rounded-lg border border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-900" />
      </div>
    );
  }

  if (slug === "navbar") {
    return (
      <div className="rounded-xl border border-zinc-200/80 bg-white/90 p-3 dark:border-zinc-700/80 dark:bg-zinc-900/70">
        <div className="flex items-center justify-between">
          <div className="h-2.5 w-14 rounded bg-zinc-800 dark:bg-zinc-200" />
          <div className="flex gap-1.5">
            <div className="h-2 w-8 rounded bg-zinc-300 dark:bg-zinc-600" />
            <div className="h-2 w-8 rounded bg-zinc-300 dark:bg-zinc-600" />
            <div className="h-5 w-10 rounded-md bg-zinc-900 dark:bg-zinc-100" />
          </div>
        </div>
      </div>
    );
  }

  if (slug === "modals") {
    return (
      <div className="relative overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-100 p-3 dark:border-zinc-700/80 dark:bg-zinc-900">
        <div className="absolute inset-0 bg-black/10 dark:bg-black/25" />
        <div className="relative mx-auto w-4/5 rounded-lg border border-zinc-200 bg-white p-2.5 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
          <div className="h-2.5 w-16 rounded bg-zinc-800 dark:bg-zinc-200" />
          <div className="mt-2 h-2 w-24 rounded bg-zinc-300 dark:bg-zinc-600" />
          <div className="mt-2 flex justify-end gap-1">
            <div className="h-5 w-10 rounded bg-zinc-200 dark:bg-zinc-700" />
            <div className="h-5 w-10 rounded bg-rose-500/80" />
          </div>
        </div>
      </div>
    );
  }

  if (slug === "grid-layouts") {
    return (
      <div className="grid grid-cols-4 gap-1.5 rounded-xl border border-zinc-200/80 bg-zinc-50/70 p-3 dark:border-zinc-700/80 dark:bg-zinc-800/40">
        <div className="col-span-2 h-8 rounded bg-zinc-300 dark:bg-zinc-600" />
        <div className="h-8 rounded bg-zinc-300 dark:bg-zinc-600" />
        <div className="h-8 rounded bg-zinc-300 dark:bg-zinc-600" />
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-zinc-200/80 bg-zinc-50/70 p-3 dark:border-zinc-700/80 dark:bg-zinc-800/40">
      <div className="grid grid-cols-3 gap-1.5">
        <div className="h-6 rounded bg-zinc-300 dark:bg-zinc-600" />
        <div className="h-6 rounded bg-zinc-300 dark:bg-zinc-600" />
        <div className="h-6 rounded bg-zinc-300 dark:bg-zinc-600" />
      </div>
    </div>
  );
}

export function ComponentCard({ item }: ComponentCardProps) {
  return (
    <Link
      href={`/components/${item.slug}`}
      className="group block h-full min-w-0 animate-fade-in-up rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-250 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
    >
      <p className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
        {item.category}
      </p>
      <h3 className="mt-3 text-lg font-semibold text-zinc-900 dark:text-white">
        {item.title}
      </h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
        {item.description}
      </p>
      <div className="mt-4">
        <CardMiniPreview slug={item.slug} />
      </div>
      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-zinc-900 dark:text-zinc-100">
        Open component
        <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
