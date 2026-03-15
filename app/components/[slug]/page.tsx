import { notFound } from "next/navigation";
import { ComponentSidebar } from "@/components/layout/component-sidebar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNavbar } from "@/components/layout/site-navbar";
import { MeshBackground } from "@/components/backgrounds/mesh-background";
import { CodeBlock } from "@/components/ui/code-block";
import { GlowPanel } from "@/components/ui/glow-panel";
import { ComponentVariantPreview } from "@/components/ui/component-variant-preview";
import { componentsData, getComponentBySlug } from "@/lib/components-data";

type ComponentDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ComponentDetailPage({
  params,
}: ComponentDetailPageProps) {
  const { slug } = await params;
  const component = getComponentBySlug(slug);

  if (!component) {
    notFound();
  }

  return (
    <div className="relative min-h-screen overflow-x-clip pb-12">
      <MeshBackground />
      <div className="px-4 pt-4 sm:px-6 lg:px-8">
        <SiteNavbar />
      </div>

      <main className="mx-auto mt-10 grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-8">
        <div className="lg:sticky lg:top-24 lg:h-fit">
          <ComponentSidebar
            items={componentsData}
            activeSlug={component.slug}
          />
        </div>

        <section className="min-w-0 space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              {component.category}
            </p>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              {component.title}
            </h1>
            <p className="text-zinc-600 dark:text-zinc-300">
              {component.description}
            </p>
          </div>

          <div className="space-y-5">
            {component.variants.map((variant) => (
              <GlowPanel key={variant.id}>
                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                      {variant.name}
                    </h2>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                      {variant.description}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-zinc-200 bg-white/90 p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/80">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                      Live preview
                    </p>
                    <div className="overflow-x-auto pb-1">
                      <ComponentVariantPreview
                        slug={component.slug}
                        variantId={variant.id}
                      />
                    </div>
                  </div>

                  <CodeBlock code={variant.code} />
                </div>
              </GlowPanel>
            ))}
          </div>

          <div className="rounded-xl border border-dashed border-zinc-300 bg-white/90 p-4 text-sm text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-300">
            Variants are rendered from structured data using a reusable map
            loop. Each variant includes its own preview, code block, and copy
            button.
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
