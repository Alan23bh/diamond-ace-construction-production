import type { Metadata } from "next";
import { business } from "../data/business";
import { serviceAreas } from "../data/serviceAreas";
import type { JsonLd } from "../types";

const siteUrl = "https://example.com";

type PageSeo = {
  title: string;
  description: string;
  path?: string;
};

export function createMetadata({ title, description, path = "/" }: PageSeo): Metadata {
  const url = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: business.name,
      type: "website",
      locale: "en_US",
    },
  };
}

export function createLocalBusinessJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    description: business.description,
    email: business.contact.emailDisplay,
    url: siteUrl,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressRegion: "FL",
      addressCountry: "US",
    },
    areaServed: serviceAreas.map((area) => ({
      "@type": "Place",
      name: area.name,
    })),
    openingHoursSpecification: business.hours.map((hour) => ({
      "@type": "OpeningHoursSpecification",
      name: hour.label,
      description: hour.value,
    })),
  };
}
