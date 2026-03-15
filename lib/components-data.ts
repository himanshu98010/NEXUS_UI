export type ComponentVariant = {
  id: string;
  name: string;
  description: string;
  code: string;
};

export type ComponentItem = {
  slug: string;
  title: string;
  category: "components" | "layouts" | "sections" | "backgrounds";
  description: string;
  tags: string[];
  variants: ComponentVariant[];
};

export const categoryLabels: Record<ComponentItem["category"], string> = {
  components: "Components",
  layouts: "Layouts",
  sections: "Sections",
  backgrounds: "Backgrounds",
};

export const componentsData: ComponentItem[] = [
  {
    slug: "buttons",
    title: "Buttons",
    category: "components",
    description:
      "Premium button variants with hover, focus and loading states.",
    tags: ["primary", "outline", "gradient", "ghost", "loading"],
    variants: [
      {
        id: "primary-outline",
        name: "Primary + Outline",
        description: "Balanced default actions with clean contrast.",
        code: `<div class="flex flex-wrap gap-3">
  <button class="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white">Primary</button>
  <button class="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800">Outline</button>
</div>`,
      },
      {
        id: "gradient-icon",
        name: "Gradient + Icon",
        description: "High-attention CTA with compact icon trigger.",
        code: `<div class="flex items-center gap-3">
  <button class="rounded-lg bg-linear-to-r from-sky-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white">Gradient</button>
  <button class="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 text-white">+</button>
</div>`,
      },
      {
        id: "ghost-loading",
        name: "Ghost + Loading",
        description: "Secondary action style with async state.",
        code: `<div class="flex flex-wrap gap-3">
  <button class="rounded-lg px-4 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-100">Ghost</button>
  <button class="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white">
    <span class="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/40 border-t-white"></span>
    Loading
  </button>
</div>`,
      },
    ],
  },
  {
    slug: "cards",
    title: "Cards",
    category: "components",
    description: "Versatile cards for content, profile and pricing UI blocks.",
    tags: ["glass", "elevated", "minimal"],
    variants: [
      {
        id: "glass",
        name: "Glass Card",
        description: "Blurred translucent card with subtle border glow.",
        code: `<article class="rounded-2xl border border-white/40 bg-white/70 p-6 shadow-xl backdrop-blur">
  <h3 class="text-lg font-semibold text-zinc-900">Glass Card</h3>
  <p class="mt-2 text-sm text-zinc-600">Use for premium floating panels.</p>
</article>`,
      },
      {
        id: "elevated",
        name: "Elevated Card",
        description: "Strong depth for important content sections.",
        code: `<article class="rounded-2xl border border-zinc-200 bg-white p-6 shadow-lg">
  <p class="text-xs uppercase tracking-wide text-zinc-500">Elevated</p>
  <h3 class="mt-2 text-lg font-semibold text-zinc-900">Revenue Summary</h3>
  <p class="mt-2 text-sm text-zinc-600">$42,890 this month.</p>
</article>`,
      },
      {
        id: "minimal",
        name: "Minimal Card",
        description: "Quiet style with low visual noise.",
        code: `<article class="rounded-xl border border-zinc-200 bg-white p-5">
  <h3 class="text-base font-semibold text-zinc-900">Minimal Card</h3>
  <p class="mt-2 text-sm text-zinc-600">Simple content container.</p>
</article>`,
      },
    ],
  },
  {
    slug: "inputs",
    title: "Inputs",
    category: "components",
    description: "Clean form controls with focus rings and responsive width.",
    tags: ["default", "icon", "inline"],
    variants: [
      {
        id: "default",
        name: "Default Input",
        description: "Standard field with focus ring.",
        code: `<input type="email" placeholder="you@example.com" class="w-full max-w-sm rounded-lg border border-zinc-300 px-3 py-2 text-sm focus:border-sky-400 focus:ring-2 focus:ring-sky-200" />`,
      },
      {
        id: "with-icon",
        name: "Input with Icon",
        description: "Search field with leading icon slot.",
        code: `<label class="relative block w-full max-w-sm">
  <span class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">⌕</span>
  <input placeholder="Search components" class="w-full rounded-lg border border-zinc-300 py-2 pl-9 pr-3 text-sm" />
</label>`,
      },
      {
        id: "inline-form",
        name: "Inline Form",
        description: "Input + CTA for newsletter or waitlist.",
        code: `<form class="flex w-full max-w-md gap-2">
  <input placeholder="Enter email" class="flex-1 rounded-lg border border-zinc-300 px-3 py-2 text-sm" />
  <button class="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white">Join</button>
</form>`,
      },
    ],
  },
  {
    slug: "badges",
    title: "Badges",
    category: "components",
    description: "Status badges with subtle fills and soft rounded corners.",
    tags: ["solid", "subtle", "outline"],
    variants: [
      {
        id: "solid",
        name: "Solid Badges",
        description: "Strong labels for states and categories.",
        code: `<div class="flex gap-2">
  <span class="rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white">Default</span>
  <span class="rounded-full bg-emerald-600 px-3 py-1 text-xs font-medium text-white">Success</span>
</div>`,
      },
      {
        id: "subtle",
        name: "Subtle Badges",
        description: "Soft backgrounds for low-emphasis indicators.",
        code: `<div class="flex gap-2">
  <span class="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">New</span>
  <span class="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700">Beta</span>
</div>`,
      },
      {
        id: "outline",
        name: "Outline Badges",
        description: "Neutral outlined style for filter chips.",
        code: `<div class="flex gap-2">
  <span class="rounded-full border border-zinc-300 px-3 py-1 text-xs font-medium text-zinc-700">Outline</span>
  <span class="rounded-full border border-amber-300 px-3 py-1 text-xs font-medium text-amber-700">Warning</span>
</div>`,
      },
    ],
  },
  {
    slug: "alerts",
    title: "Alerts",
    category: "components",
    description: "Informational and warning alerts with icon slots.",
    tags: ["info", "success", "destructive"],
    variants: [
      {
        id: "info",
        name: "Info Alert",
        description: "Neutral informational message block.",
        code: `<div class="rounded-xl border border-sky-200 bg-sky-50 p-4 text-sm text-sky-800">
  Heads up: New component release is available.
</div>`,
      },
      {
        id: "success",
        name: "Success Alert",
        description: "Positive confirmation state.",
        code: `<div class="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
  Great! Your project has been published.
</div>`,
      },
      {
        id: "destructive",
        name: "Destructive Alert",
        description: "High-priority warning state.",
        code: `<div class="rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800">
  Action required: Please verify billing details.
</div>`,
      },
    ],
  },
  {
    slug: "modals",
    title: "Modals",
    category: "components",
    description: "Centered modal structure with backdrop blur and actions.",
    tags: ["confirm", "centered", "feature"],
    variants: [
      {
        id: "confirm",
        name: "Confirmation Modal",
        description: "Simple confirm/cancel decision modal.",
        code: `<div class="fixed inset-0 grid place-items-center bg-black/40 p-4 backdrop-blur-sm">
  <div class="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-6">
    <h3 class="text-lg font-semibold">Delete project?</h3>
    <p class="mt-2 text-sm text-zinc-600">This action cannot be undone.</p>
  </div>
</div>`,
      },
      {
        id: "centered",
        name: "Centered Modal",
        description: "Compact centered information modal.",
        code: `<div class="fixed inset-0 grid place-items-center bg-black/35">
  <div class="w-full max-w-sm rounded-2xl border border-zinc-200 bg-white p-5 shadow-2xl">
    <h3 class="text-base font-semibold">Invite team</h3>
    <p class="mt-1 text-sm text-zinc-600">Add members to this workspace.</p>
  </div>
</div>`,
      },
      {
        id: "feature",
        name: "Feature Modal",
        description: "Modal format for upgrade prompts.",
        code: `<div class="fixed inset-0 grid place-items-center bg-black/40 p-4">
  <div class="w-full max-w-lg rounded-2xl border border-zinc-200 bg-white p-6">
    <p class="text-xs uppercase tracking-wide text-zinc-500">Pro feature</p>
    <h3 class="mt-2 text-xl font-semibold">Unlock advanced analytics</h3>
  </div>
</div>`,
      },
    ],
  },
  {
    slug: "navbar",
    title: "Navbar",
    category: "layouts",
    description: "Responsive glassmorphism navbar with action buttons.",
    tags: ["glass", "split", "compact"],
    variants: [
      {
        id: "glass",
        name: "Glass Navbar",
        description: "Translucent top navigation with blur.",
        code: `<nav class="flex items-center justify-between rounded-xl border border-white/40 bg-white/70 px-4 py-3 backdrop-blur">
  <span class="font-semibold">Nexus UI</span>
  <button class="rounded-lg bg-zinc-900 px-3 py-2 text-xs text-white">Browse</button>
</nav>`,
      },
      {
        id: "split",
        name: "Split Navbar",
        description: "Centered links and right-side actions.",
        code: `<nav class="flex items-center justify-between rounded-xl border border-zinc-200 bg-white px-4 py-3">
  <span class="font-semibold">Nexus UI</span>
  <div class="hidden gap-6 text-sm md:flex"><a>Components</a><a>Pricing</a></div>
  <button class="rounded-lg border border-zinc-300 px-3 py-2 text-xs">Sign in</button>
</nav>`,
      },
      {
        id: "compact",
        name: "Compact Navbar",
        description: "Space-efficient header for docs pages.",
        code: `<nav class="flex items-center justify-between rounded-lg border border-zinc-200 bg-white px-3 py-2">
  <span class="text-sm font-semibold">Nexus UI</span>
  <button class="rounded-md bg-zinc-900 px-2.5 py-1.5 text-xs text-white">Menu</button>
</nav>`,
      },
    ],
  },
  {
    slug: "grid-layouts",
    title: "Grid Layouts",
    category: "layouts",
    description: "Adaptive grid templates for dashboards and galleries.",
    tags: ["dashboard", "bento", "stats"],
    variants: [
      {
        id: "dashboard",
        name: "Dashboard Grid",
        description: "Analytics-first 4-column composition.",
        code: `<section class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
  <div class="rounded-xl border border-zinc-200 bg-white p-4 lg:col-span-2">Main analytics</div>
  <div class="rounded-xl border border-zinc-200 bg-white p-4">Stats</div>
  <div class="rounded-xl border border-zinc-200 bg-white p-4">Revenue</div>
</section>`,
      },
      {
        id: "bento",
        name: "Bento Grid",
        description: "Asymmetric card arrangement for landing pages.",
        code: `<section class="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
  <div class="rounded-xl border border-zinc-200 bg-white p-4 lg:col-span-4">Feature spotlight</div>
  <div class="rounded-xl border border-zinc-200 bg-white p-4 lg:col-span-2">Quick links</div>
  <div class="rounded-xl border border-zinc-200 bg-white p-4 lg:col-span-2">Team</div>
  <div class="rounded-xl border border-zinc-200 bg-white p-4 lg:col-span-4">Usage</div>
</section>`,
      },
      {
        id: "stats",
        name: "Stats Grid",
        description: "Compact stats cards layout.",
        code: `<section class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
  <div class="rounded-xl border border-zinc-200 bg-white p-4">MRR</div>
  <div class="rounded-xl border border-zinc-200 bg-white p-4">Churn</div>
  <div class="rounded-xl border border-zinc-200 bg-white p-4">Conversion</div>
</section>`,
      },
    ],
  },
  {
    slug: "hero-sections",
    title: "Hero Sections",
    category: "sections",
    description: "Bold hero layout with call-to-action and product preview.",
    tags: ["split", "centered", "gradient"],
    variants: [
      {
        id: "split",
        name: "Split Hero",
        description: "Left content, right visual preview.",
        code: `<section class="grid gap-8 rounded-3xl border border-zinc-200 bg-white p-8 md:grid-cols-2">
  <div><h1 class="text-4xl font-semibold">Build faster</h1><p class="mt-3 text-zinc-600">Ship polished UI blocks.</p></div>
  <div class="h-52 rounded-2xl bg-zinc-100"></div>
</section>`,
      },
      {
        id: "centered",
        name: "Centered Hero",
        description: "Simple centered headline and CTA.",
        code: `<section class="rounded-3xl border border-zinc-200 bg-white p-10 text-center">
  <h1 class="text-4xl font-semibold">Copy-ready Tailwind components</h1>
  <p class="mt-3 text-zinc-600">Designed for modern product teams.</p>
</section>`,
      },
      {
        id: "gradient",
        name: "Gradient Hero",
        description: "High-contrast hero with gradient surface.",
        code: `<section class="relative overflow-hidden rounded-3xl bg-zinc-900 p-10 text-white">
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,.45),transparent_40%)]"></div>
  <h1 class="relative text-4xl font-semibold">Scale your UI system</h1>
</section>`,
      },
    ],
  },
  {
    slug: "pricing-sections",
    title: "Pricing Sections",
    category: "sections",
    description: "Three-tier pricing layout with highlighted featured plan.",
    tags: ["startup", "growth", "enterprise"],
    variants: [
      {
        id: "startup",
        name: "Startup Pricing",
        description: "Lightweight plans for small teams.",
        code: `<section class="grid gap-4 md:grid-cols-3">
  <article class="rounded-2xl border border-zinc-200 bg-white p-5"><p class="text-xs uppercase text-zinc-500">Indie</p><h3 class="mt-1 font-semibold">Launch</h3><p class="mt-2 text-3xl font-semibold">$12<span class="text-sm text-zinc-500">/mo</span></p><p class="mt-2 text-xs text-zinc-500">3 projects · 5k events</p></article>
  <article class="rounded-2xl border border-sky-300 bg-white p-5 ring-2 ring-sky-100"><p class="text-xs uppercase text-zinc-500">Team</p><h3 class="mt-1 font-semibold">Build</h3><p class="mt-2 text-3xl font-semibold">$29<span class="text-sm text-zinc-500">/mo</span></p><p class="mt-2 text-xs text-zinc-500">15 projects · 50k events</p></article>
  <article class="rounded-2xl border border-zinc-200 bg-white p-5"><p class="text-xs uppercase text-zinc-500">Studio</p><h3 class="mt-1 font-semibold">Scale</h3><p class="mt-2 text-3xl font-semibold">$59<span class="text-sm text-zinc-500">/mo</span></p><p class="mt-2 text-xs text-zinc-500">Unlimited projects · 250k events</p></article>
</section>`,
      },
      {
        id: "growth",
        name: "Growth Pricing",
        description: "Feature-rich plans with clear popular tier.",
        code: `<section class="grid gap-4 md:grid-cols-3">
  <article class="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"><p class="text-xs uppercase text-zinc-500">Starter</p><h3 class="mt-1 font-semibold">Core</h3><p class="mt-2 text-3xl font-semibold">$19/mo</p><p class="mt-2 text-xs text-zinc-500">10k API calls · Email support</p></article>
  <article class="relative rounded-2xl border border-cyan-300 bg-white p-5 shadow-lg ring-2 ring-cyan-100"><span class="absolute right-4 top-4 rounded-full bg-cyan-100 px-2 py-0.5 text-xs text-cyan-700">Popular</span><p class="text-xs uppercase text-zinc-500">Growth</p><h3 class="mt-1 font-semibold">Scale</h3><p class="mt-2 text-3xl font-semibold">$39/mo</p><p class="mt-2 text-xs text-zinc-500">100k API calls · Priority support</p></article>
  <article class="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"><p class="text-xs uppercase text-zinc-500">Business</p><h3 class="mt-1 font-semibold">Expand</h3><p class="mt-2 text-3xl font-semibold">$89/mo</p><p class="mt-2 text-xs text-zinc-500">1M API calls · SLA</p></article>
</section>`,
      },
      {
        id: "enterprise",
        name: "Enterprise Pricing",
        description: "High-touch plans with support differentiation.",
        code: `<section class="grid gap-4 md:grid-cols-3">
  <article class="rounded-2xl border border-zinc-200 bg-white p-5"><p class="text-xs uppercase text-zinc-500">Team</p><h3 class="mt-1 font-semibold">Pro Team</h3><p class="mt-2 text-3xl font-semibold">$49<span class="text-sm text-zinc-500">/user/mo</span></p><p class="mt-2 text-xs text-zinc-500">RBAC · Audit logs</p></article>
  <article class="rounded-2xl border border-zinc-200 bg-white p-5"><p class="text-xs uppercase text-zinc-500">Business</p><h3 class="mt-1 font-semibold">Business Plus</h3><p class="mt-2 text-3xl font-semibold">$99<span class="text-sm text-zinc-500">/user/mo</span></p><p class="mt-2 text-xs text-zinc-500">SSO · SOC2 exports</p></article>
  <article class="rounded-2xl border border-zinc-900 bg-zinc-900 p-5 text-white"><p class="text-xs uppercase text-zinc-300">Enterprise</p><h3 class="mt-1 font-semibold">Custom Contract</h3><p class="mt-2 text-3xl font-semibold">Custom pricing</p><p class="mt-2 text-xs text-zinc-300">Dedicated infra · 24/7 support</p></article>
</section>`,
      },
    ],
  },
  {
    slug: "gradients",
    title: "Gradient Backgrounds",
    category: "backgrounds",
    description: "Layered gradient surfaces for hero and section backgrounds.",
    tags: ["radial", "mesh", "aurora"],
    variants: [
      {
        id: "radial",
        name: "Radial Surface",
        description: "Multi-point radial glow background.",
        code: `<div class="relative h-56 overflow-hidden rounded-2xl bg-zinc-900">
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(56,189,248,.55),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,.45),transparent_35%)]"></div>
</div>`,
      },
      {
        id: "mesh",
        name: "Mesh Blend",
        description: "Soft mesh blend with layered color pools.",
        code: `<div class="relative h-56 overflow-hidden rounded-2xl bg-zinc-950">
  <div class="absolute -left-12 top-8 h-40 w-40 rounded-full bg-emerald-500/40 blur-3xl"></div>
  <div class="absolute right-0 top-8 h-44 w-44 rounded-full bg-cyan-500/35 blur-3xl"></div>
  <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] bg-size-[28px_28px]"></div>
</div>`,
      },
      {
        id: "aurora",
        name: "Aurora Glow",
        description: "Smooth aurora-like gradient ribbons.",
        code: `<div class="relative h-56 overflow-hidden rounded-2xl bg-zinc-900">
  <div class="absolute inset-0 bg-[conic-gradient(from_110deg_at_50%_50%,rgba(244,114,182,.35),rgba(56,189,248,.28),rgba(16,185,129,.25),rgba(99,102,241,.35),rgba(244,114,182,.35))] blur-2xl"></div>
</div>`,
      },
    ],
  },
  {
    slug: "mesh-backgrounds",
    title: "Mesh Backgrounds",
    category: "backgrounds",
    description: "Mesh and blur combination for atmospheric UI backdrops.",
    tags: ["soft", "neon", "sunset"],
    variants: [
      {
        id: "soft-grid",
        name: "Soft Grid Mesh",
        description: "Subtle blurred blobs with grid overlay.",
        code: `<div class="relative h-56 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950">
  <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] bg-size-[28px_28px]"></div>
</div>`,
      },
      {
        id: "neon-grid",
        name: "Neon Grid Mesh",
        description: "Higher contrast cyber-style mesh.",
        code: `<div class="relative h-56 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950">
  <div class="absolute -left-8 top-8 h-40 w-40 rounded-full bg-cyan-500/50 blur-3xl"></div>
  <div class="absolute right-0 top-8 h-40 w-40 rounded-full bg-fuchsia-500/45 blur-3xl"></div>
      <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.04)_1px,transparent_1px)] bg-size-[24px_24px]"></div>
</div>`,
      },
      {
        id: "sunset-mesh",
        name: "Sunset Mesh",
        description: "Warm orange-pink ambient surface.",
        code: `<div class="relative h-56 overflow-hidden rounded-2xl bg-zinc-900">
  <div class="absolute left-4 top-8 h-44 w-44 rounded-full bg-orange-400/45 blur-3xl"></div>
  <div class="absolute right-4 top-8 h-44 w-44 rounded-full bg-rose-400/35 blur-3xl"></div>
</div>`,
      },
    ],
  },
  {
    slug: "animated-gradients",
    title: "Animated Gradients",
    category: "backgrounds",
    description: "Soft animated gradient layers for attention-friendly motion.",
    tags: ["pulse", "flow", "spotlight"],
    variants: [
      {
        id: "pulse",
        name: "Pulse Gradient",
        description: "Breathing pulse blobs for calm motion.",
        code: `<div class="relative h-56 overflow-hidden rounded-2xl bg-zinc-900">
  <div class="animate-pulse-slow absolute -left-12 top-8 h-44 w-44 rounded-full bg-fuchsia-500/35 blur-3xl"></div>
  <div class="animate-pulse-slower absolute right-4 top-8 h-44 w-44 rounded-full bg-sky-500/35 blur-3xl"></div>
</div>`,
      },
      {
        id: "flow",
        name: "Aurora Flow",
        description: "Flowing gradient ribbon animation.",
        code: `<div class="relative h-56 overflow-hidden rounded-2xl bg-zinc-900">
  <div class="animate-pulse-slow absolute inset-0 bg-[conic-gradient(from_180deg,rgba(56,189,248,.3),rgba(16,185,129,.25),rgba(99,102,241,.3),rgba(56,189,248,.3))] blur-2xl"></div>
</div>`,
      },
      {
        id: "spotlight",
        name: "Spotlight Motion",
        description: "Soft moving spotlight style background.",
        code: `<div class="relative h-56 overflow-hidden rounded-2xl bg-zinc-950">
  <div class="animate-pulse-slower absolute left-1/4 top-1/4 h-48 w-48 rounded-full bg-cyan-400/30 blur-3xl"></div>
</div>`,
      },
    ],
  },
  {
    slug: "loaders",
    title: "Loaders",
    category: "components",
    description: "Simple, elegant loading indicators for async UI states.",
    tags: ["spinner", "dots", "bars"],
    variants: [
      {
        id: "spinner",
        name: "Spinner",
        description: "Classic circular loader.",
        code: `<span class="h-8 w-8 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-900"></span>`,
      },
      {
        id: "dots",
        name: "Bouncing Dots",
        description: "Three-dot sequential loading state.",
        code: `<span class="inline-flex gap-1">
  <span class="h-2 w-2 animate-bounce rounded-full bg-zinc-500 [animation-delay:-0.2s]"></span>
  <span class="h-2 w-2 animate-bounce rounded-full bg-zinc-500 [animation-delay:-0.1s]"></span>
  <span class="h-2 w-2 animate-bounce rounded-full bg-zinc-500"></span>
</span>`,
      },
      {
        id: "bars",
        name: "Bars Loader",
        description: "Vertical bars for compact loading areas.",
        code: `<span class="inline-flex items-end gap-1">
  <span class="h-3 w-1 animate-pulse rounded bg-zinc-500"></span>
  <span class="h-5 w-1 animate-pulse rounded bg-zinc-500 [animation-delay:.1s]"></span>
  <span class="h-4 w-1 animate-pulse rounded bg-zinc-500 [animation-delay:.2s]"></span>
</span>`,
      },
    ],
  },
  {
    slug: "avatars",
    title: "Avatars",
    category: "components",
    description: "Avatar groups with status rings and overlap spacing.",
    tags: ["status", "group", "stacked"],
    variants: [
      {
        id: "status",
        name: "Status Avatar",
        description: "Single avatar with online indicator.",
        code: `<div class="relative h-12 w-12">
  <div class="h-12 w-12 rounded-full bg-linear-to-r from-cyan-500 to-indigo-500"></div>
  <span class="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500"></span>
</div>`,
      },
      {
        id: "group",
        name: "Avatar Group",
        description: "Overlapping group for team members.",
        code: `<div class="flex -space-x-3">
  <div class="h-10 w-10 rounded-full border-2 border-white bg-zinc-200"></div>
  <div class="h-10 w-10 rounded-full border-2 border-white bg-zinc-300"></div>
  <div class="h-10 w-10 rounded-full border-2 border-white bg-zinc-400"></div>
</div>`,
      },
      {
        id: "stacked",
        name: "Stacked Profile",
        description: "Avatar plus identity labels.",
        code: `<div class="flex items-center gap-3">
  <div class="h-10 w-10 rounded-full bg-linear-to-r from-cyan-500 to-indigo-500"></div>
  <div><p class="text-sm font-semibold text-zinc-900">Olivia Chen</p><p class="text-xs text-zinc-500">Design Engineer</p></div>
</div>`,
      },
    ],
  },
];

export function getComponentBySlug(slug: string) {
  return componentsData.find((item) => item.slug === slug);
}
