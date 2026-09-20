import type { Metadata } from "next";
import { ApartmentTurnoverFeature } from "../components/sections/ApartmentTurnoverFeature";
import { HomeEstimateCTA } from "../components/sections/HomeEstimateCTA";
import { HomeHero } from "../components/sections/HomeHero";
import { HomeProcess } from "../components/sections/HomeProcess";
import { HomeWhoWeServe } from "../components/sections/HomeWhoWeServe";
import { PreparationFeature } from "../components/sections/PreparationFeature";
import { ServiceCategoryOverview } from "../components/sections/ServiceCategoryOverview";
import { TrustBar } from "../components/sections/TrustBar";
import { business } from "../data/business";
import { createMetadata } from "../lib/seo";

export const metadata: Metadata = createMetadata({
  title: `${business.name} | Central Florida Painting & Apartment Turnovers`,
  description:
    "Apartment turnovers, interior painting, drywall and texture repair, and exterior painting for property managers, landlords, homeowners, and businesses in Central Florida.",
  path: "/",
  image: "/media/home/turnover-feature.webp",
  imageAlt: "Painter completing interior wall work",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustBar />
      <ServiceCategoryOverview />
      <ApartmentTurnoverFeature />
      <HomeWhoWeServe />
      <PreparationFeature />
      <HomeProcess />
      <HomeEstimateCTA />
    </>
  );
}
