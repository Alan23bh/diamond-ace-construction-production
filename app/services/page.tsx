import type { Metadata } from "next";
import { IncludedWorkSection } from "../../components/sections/IncludedWorkSection";
import { ServiceDetailList } from "../../components/sections/ServiceDetailList";
import { ServiceFitSection } from "../../components/sections/ServiceFitSection";
import { ServicesCTA } from "../../components/sections/ServicesCTA";
import { ServicesFAQ } from "../../components/sections/ServicesFAQ";
import { ServicesHero } from "../../components/sections/ServicesHero";
import { ServicesQuickNav } from "../../components/sections/ServicesQuickNav";
import { business } from "../../data/business";
import { createMetadata } from "../../lib/seo";

export const metadata: Metadata = createMetadata({
  title: `Painting & Repair Services | ${business.name}`,
  description:
    "Apartment turnover painting, interior painting, drywall and texture repair, and exterior painting for Central Florida properties.",
  path: "/services",
  image: "/media/services/interior-painting.webp",
  imageAlt: "Painter applying paint to an interior wall",
});

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesQuickNav />
      <ServiceDetailList />
      <IncludedWorkSection />
      <ServiceFitSection />
      <ServicesFAQ />
      <ServicesCTA />
    </>
  );
}
