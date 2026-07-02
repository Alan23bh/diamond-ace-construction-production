import type { Metadata } from "next";
import { ApproachCTA } from "../../components/sections/ApproachCTA";
import { ApproachTimeline } from "../../components/sections/ApproachTimeline";
import { StandardsSection } from "../../components/sections/StandardsSection";
import { WhoWeServeSection } from "../../components/sections/WhoWeServeSection";
import { Badge } from "../../components/ui/Badge";
import { Container } from "../../components/ui/Container";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { approachHero } from "../../data/approach";
import { business } from "../../data/business";
import { createMetadata } from "../../lib/seo";

export const metadata: Metadata = createMetadata({
  title: `Our Approach | ${business.name}`,
  description:
    "A clear process for painting, repairs, apartment turnovers, and light interior improvements in Central Florida.",
  path: "/approach",
});

export default function ApproachPage() {
  return (
    <>
      <section className="border-b border-[var(--color-border)] py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <Badge>{approachHero.eyebrow}</Badge>
              <SectionHeading className="mt-6" title={approachHero.title}>
                <p>{approachHero.intro}</p>
              </SectionHeading>
            </div>

            <div className="relative min-h-[16rem] overflow-hidden border border-[var(--color-border)] bg-[var(--color-charcoal-900)] p-6">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(246,241,232,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(246,241,232,0.05)_1px,transparent_1px)] [background-size:44px_44px]"
              />
              <div className="relative flex h-full min-h-[13rem] flex-col justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-px w-12 bg-[var(--color-brass)]" />
                  <p className="text-xs font-semibold uppercase text-[var(--color-soft-beige)]">
                    Process-led work
                  </p>
                </div>
                <p className="max-w-md text-sm leading-7 text-[var(--color-warm-muted)]">
                  {approachHero.note}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <ApproachTimeline />
      <StandardsSection />
      <WhoWeServeSection />
      <ApproachCTA />
    </>
  );
}
