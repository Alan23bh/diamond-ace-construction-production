import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { MobileActionBar } from "../components/layout/MobileActionBar";
import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";
import { business } from "../data/business";
import { createLocalBusinessJsonLd, createMetadata } from "../lib/seo";

export const metadata: Metadata = createMetadata({
  title: `${business.name} | Florida Painting & Interior Improvements`,
  description:
    "Family-owned painting and interior improvement company serving Central Florida and projects throughout Florida.",
});

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const localBusinessJsonLd = createLocalBusinessJsonLd();

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <SiteHeader />
        <main className="pb-mobile-action min-h-screen">{children}</main>
        <SiteFooter />
        <MobileActionBar />
      </body>
    </html>
  );
}
