import type { Metadata } from "next";
import { ContactDirectSection } from "../../components/sections/ContactDirectSection";
import { ContactEstimateSection } from "../../components/sections/ContactEstimateSection";
import { ContactHero } from "../../components/sections/ContactHero";
import { ContactHighlights } from "../../components/sections/ContactHighlights";
import { business } from "../../data/business";
import { createMetadata } from "../../lib/seo";

export const metadata: Metadata = createMetadata({
  title: `Contact | ${business.name}`,
  description:
    "Request an estimate from Diamond Ace Construction for apartment turnovers, painting, drywall and texture repair, and exterior painting in Central Florida.",
  path: "/contact",
  image: "/media/home/turnover-feature.webp",
  imageAlt: "Painter working on an interior wall",
});

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactHighlights />
      <ContactEstimateSection />
      <ContactDirectSection />
    </>
  );
}
