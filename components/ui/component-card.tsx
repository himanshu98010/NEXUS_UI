import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ComponentItem } from "@/lib/components-data";

type ComponentCardProps = {
  item: ComponentItem;
};

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
      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-zinc-900 dark:text-zinc-100">
        Open component
        <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
