import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { SiteProviders } from "@/components/providers/site-providers";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexus UI - Tailwind Component Library",
  description:
    "Modern Tailwind CSS component library with one-click copy and live previews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var key='nexus-ui-theme';var root=document.documentElement;var stored=localStorage.getItem(key);var system=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';var theme=(stored==='light'||stored==='dark')?stored:system;root.classList.remove('light','dark');root.classList.add(theme);}catch(e){}})();`,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${bricolage.variable} ${inter.variable} antialiased`}
      >
        <SiteProviders>{children}</SiteProviders>
      </body>
    </html>
  );
}
