import type { Metadata } from "next";
import { IncludedWorkSection } from "../../components/sections/IncludedWorkSection";
import { ServiceDetailList } from "../../components/sections/ServiceDetailList";
import { ServiceFitSection } from "../../components/sections/ServiceFitSection";
import { ServicesCTA } from "../../components/sections/ServicesCTA";
import { ServicesHero } from "../../components/sections/ServicesHero";
import { business } from "../../data/business";
import { createMetadata } from "../../lib/seo";

export const metadata: Metadata = createMetadata({
  title: `Services | ${business.name}`,
  description:
    "Painting, apartment turnover, drywall repair, trim, cabinet refresh, pressure washing, flooring support, and light remodeling services in Central Florida.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceDetailList />
      <IncludedWorkSection />
      <ServiceFitSection />
      <ServicesCTA />
    </>
  );
}
