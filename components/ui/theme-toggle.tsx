"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
import { useTheme } from "@/components/providers/theme-provider";

function useIsHydrated() {
  return useSyncExternalStore(
    () => () => {
      return;
    },
    () => true,
    () => false,
  );
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isHydrated = useIsHydrated();

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="group relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-zinc-200 bg-white/70 text-zinc-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-200"
    >
      <span className="absolute inset-0 rounded-full bg-linear-to-r from-orange-400/15 to-rose-400/15 opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:from-sky-500/20 dark:to-cyan-400/20" />
      {!isHydrated ? (
        <span className="h-4 w-4" aria-hidden="true" />
      ) : theme === "light" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </button>
  );
}
