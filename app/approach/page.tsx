import type { Metadata } from "next";
import { ApproachCTA } from "../../components/sections/ApproachCTA";
import { ApproachClaritySection } from "../../components/sections/ApproachClaritySection";
import { ApproachHero } from "../../components/sections/ApproachHero";
import { ApproachHighlights } from "../../components/sections/ApproachHighlights";
import { ApproachTimeline } from "../../components/sections/ApproachTimeline";
import { StandardsSection } from "../../components/sections/StandardsSection";
import { WhoWeServeSection } from "../../components/sections/WhoWeServeSection";
import { business } from "../../data/business";
import { createMetadata } from "../../lib/seo";

export const metadata: Metadata = createMetadata({
  title: `Our Approach | ${business.name}`,
  description:
    "A clear process for apartment turnovers, painting, drywall and texture repair, and exterior painting in Central Florida.",
  path: "/approach",
  image: "/media/approach/approach-hero.webp",
  imageAlt: "Painter preparing an interior work area",
});

export default function ApproachPage() {
  return (
    <>
      <ApproachHero />
      <ApproachHighlights />
      <ApproachTimeline />
      <StandardsSection />
      <ApproachClaritySection />
      <WhoWeServeSection />
      <ApproachCTA />
    </>
  );
}
