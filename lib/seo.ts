import type { Metadata } from "next";
import { business } from "../data/business";
import { serviceAreas } from "../data/serviceAreas";
import { serviceCatalog } from "../data/services";
import type { JsonLd } from "../types";

const localSiteUrl = "http://localhost:3000";

function normalizeSiteUrl(value: string) {
  const trimmed = value.trim().replace(/\/$/, "");
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || process.env.URL?.trim() || localSiteUrl;

export const siteUrl = normalizeSiteUrl(configuredSiteUrl);

// Netlify exposes CONTEXT during builds. Deploy previews and branch deploys should
// not compete with the eventual production URL in search results.
export const shouldIndexSite = process.env.CONTEXT
  ? process.env.CONTEXT === "production"
  : process.env.NODE_ENV === "production";

type PageSeo = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  index?: boolean;
};

export function createMetadata({
  title,
  description,
  path = "/",
  image = "/media/home/turnover-feature.webp",
  imageAlt = "Painter working on an interior wall",
  index = true,
}: PageSeo): Metadata {
  const url = new URL(path, siteUrl).toString();
  const imageUrl = new URL(image, siteUrl).toString();
  const canIndex = index && shouldIndexSite;

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
    },
    robots: {
      index: canIndex,
      follow: true,
      googleBot: {
        index: canIndex,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: business.name,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: imageUrl,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

function createBusinessGraphNode(): JsonLd {
  return {
    "@type": "HousePainter",
    "@id": `${siteUrl}/#business`,
    name: business.name,
    legalName: business.legalName,
    description: business.description,
    email: business.contact.emailDisplay,
    foundingDate: String(business.foundedYear),
    url: siteUrl,
    image: new URL("/media/home/turnover-feature.webp", siteUrl).toString(),
    address: {
      "@type": "PostalAddress",
      addressRegion: "FL",
      addressCountry: "US",
    },
    areaServed: serviceAreas
      .filter((area) => area.isPrimary)
      .map((area) => ({
        "@type": area.name === "Central Florida" ? "AdministrativeArea" : "City",
        name: area.name,
      })),
    openingHoursSpecification: business.hours.flatMap((hour) =>
      hour.days.map((day) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${day}`,
        opens: hour.opens,
        closes: hour.closes,
      })),
    ),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Painting and Property Services",
      itemListElement: serviceCatalog.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          areaServed: "Central Florida",
          provider: {
            "@id": `${siteUrl}/#business`,
          },
        },
      })),
    },
  };
}

export function createLocalBusinessJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    ...createBusinessGraphNode(),
  };
}

export function createSiteJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": [
      createBusinessGraphNode(),
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: business.name,
        inLanguage: "en-US",
        publisher: {
          "@id": `${siteUrl}/#business`,
        },
      },
    ],
  };
}
