import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNavbar } from "@/components/layout/site-navbar";
import { ComponentSidebar } from "@/components/layout/component-sidebar";
import { MeshBackground } from "@/components/backgrounds/mesh-background";
import { ComponentBrowser } from "@/components/ui/component-browser";
import { componentsData } from "@/lib/components-data";

export default function ComponentsPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip pb-12">
      <MeshBackground />
      <div className="px-4 pt-4 sm:px-6 lg:px-8">
        <SiteNavbar />
      </div>
      <main className="mx-auto mt-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="mb-8 max-w-3xl space-y-3">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Component Browser
          </h1>
          <p className="text-zinc-600 dark:text-zinc-300">
            Search, filter and open Tailwind components. Every block includes
            live preview and one-click copy.
          </p>
        </section>
        <section className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] xl:gap-8">
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <ComponentSidebar items={componentsData} />
          </div>
          <div className="min-w-0">
            <ComponentBrowser />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
