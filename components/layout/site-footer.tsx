export function SiteFooter() {
  return (
    <footer className="mx-auto mt-16 w-[min(1100px,92vw)] border-t border-zinc-200/70 py-8 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p>Nexus UI - Tailwind component library.</p>
        <div className="flex items-center gap-4">
          <a
            href="https://nextjs.org"
            className="hover:text-zinc-800 dark:hover:text-zinc-200"
          >
            Next.js
          </a>
          <a
            href="https://tailwindcss.com"
            className="hover:text-zinc-800 dark:hover:text-zinc-200"
          >
            Tailwind CSS
          </a>
        </div>
      </div>
    </footer>
  );
}
