import { HomeHero } from "../components/sections/HomeHero";
import { ServiceCategoryOverview } from "../components/sections/ServiceCategoryOverview";
import { TrustBar } from "../components/sections/TrustBar";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustBar />
      <ServiceCategoryOverview />
    </>
  );
}
