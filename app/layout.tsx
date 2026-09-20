import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { MobileActionBar } from "../components/layout/MobileActionBar";
import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";
import { business } from "../data/business";
import { createMetadata, createSiteJsonLd } from "../lib/seo";

export const metadata: Metadata = createMetadata({
  title: `${business.name} | Central Florida Painting & Apartment Turnovers`,
  description:
    "Family-owned Central Florida painting company specializing in apartment turnovers, interior painting, drywall and texture repair, and exterior painting.",
});

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const siteJsonLd = createSiteJsonLd();

  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-[var(--color-ink)] focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
        >
          Skip to Main Content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <SiteHeader />
        <main id="main-content" tabIndex={-1} className="pb-mobile-action min-h-screen">
          {children}
        </main>
        <SiteFooter />
        <MobileActionBar />
      </body>
    </html>
  );
}
