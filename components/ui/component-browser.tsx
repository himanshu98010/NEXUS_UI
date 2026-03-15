"use client";

import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { ComponentCard } from "@/components/ui/component-card";
import {
  categoryLabels,
  componentsData,
  type ComponentItem,
} from "@/lib/components-data";

type CategoryFilter = "all" | ComponentItem["category"];

export function ComponentBrowser() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [highlightIndex, setHighlightIndex] = useState(0);

  const filtered = useMemo(() => {
    return componentsData.filter((item) => {
      const inCategory = category === "all" ? true : item.category === category;
      const inQuery =
        query.length === 0 ||
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.tags.some((tag) =>
          tag.toLowerCase().includes(query.toLowerCase()),
        );
      return inCategory && inQuery;
    });
  }, [category, query]);
  const safeHighlightIndex = Math.min(
    highlightIndex,
    Math.max(filtered.length - 1, 0),
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === "/" &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey
      ) {
        const element = document.getElementById(
          "component-search",
        ) as HTMLInputElement | null;
        if (element) {
          event.preventDefault();
          element.focus();
        }
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setHighlightIndex((prev) =>
          Math.min(prev + 1, Math.max(filtered.length - 1, 0)),
        );
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setHighlightIndex((prev) => Math.max(prev - 1, 0));
      }

      if (event.key === "Enter" && filtered[safeHighlightIndex]) {
        const active = document.activeElement;
        if (active instanceof HTMLInputElement) {
          return;
        }
        router.push(`/components/${filtered[safeHighlightIndex].slug}`);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [filtered, safeHighlightIndex, router]);

  return (
    <section className="space-y-6">
      <CursorGlow
        className="rounded-2xl"
        glowClassName="bg-[radial-gradient(480px_circle_at_var(--x)_var(--y),rgba(34,211,238,.14),transparent_60%)]"
      >
        <div className="rounded-2xl border border-zinc-200 bg-white/95 p-4 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/90">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <label className="relative block w-full max-w-md">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
              <input
                id="component-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search components or tags..."
                className="w-full rounded-lg border border-zinc-300 bg-white py-2 pl-9 pr-3 text-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200 dark:border-zinc-700 dark:bg-zinc-950"
              />
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setCategory("all")}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                  category === "all"
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200"
                }`}
              >
                All
              </button>
              {Object.entries(categoryLabels).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setCategory(key as CategoryFilter)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                    category === key
                      ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                      : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200"
                  }`}
                >
                  {label || `${key.charAt(0).toUpperCase()}${key.slice(1)}`}
                </button>
              ))}
            </div>
          </div>
          <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
            Keyboard: press / to focus search, arrow keys to select, Enter to
            open.
          </p>
        </div>
      </CursorGlow>

      {filtered.length === 0 ? (
        <CursorGlow className="rounded-2xl">
          <div className="rounded-2xl border border-dashed border-zinc-300 bg-white/95 p-10 text-center shadow-sm dark:border-zinc-700 dark:bg-zinc-900/90">
            <p className="text-base font-medium text-zinc-700 dark:text-zinc-200">
              No components found
            </p>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              Try another keyword or switch category.
            </p>
          </div>
        </CursorGlow>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item, index) => (
            <CursorGlow key={item.slug} className="rounded-2xl">
              <div
                className={
                  index === safeHighlightIndex
                    ? "rounded-2xl ring-2 ring-inset ring-sky-300"
                    : "rounded-2xl"
                }
              >
                <ComponentCard item={item} />
              </div>
            </CursorGlow>
          ))}
        </div>
      )}
    </section>
  );
}
