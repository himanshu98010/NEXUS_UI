"use client";

import Link from "next/link";
import type { ComponentItem } from "@/lib/components-data";

type ComponentSidebarProps = {
  items: ComponentItem[];
  activeSlug?: string;
};

export function ComponentSidebar({ items, activeSlug }: ComponentSidebarProps) {
  return (
    <aside className="rounded-2xl border border-zinc-200 bg-white/75 p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
      <p className="px-2 pb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
        Component Browser
      </p>
      <div className="max-h-[70vh] overflow-auto pr-1">
        {items.map((item) => {
          const active = item.slug === activeSlug;
          return (
            <Link
              key={item.slug}
              href={`/components/${item.slug}`}
              className={`mb-1 block rounded-lg px-3 py-2 text-sm transition ${
                active
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
