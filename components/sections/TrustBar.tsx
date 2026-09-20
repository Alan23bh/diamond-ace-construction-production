import { homeContent } from "../../data/business";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function TrustBar() {
  return (
    <section aria-label="Diamond Ace service highlights" className="border-b border-black/10 bg-white">
      <Container>
        <div className="grid gap-x-8 md:grid-cols-2 lg:gap-x-12 xl:grid-cols-4">
          {homeContent.trustPoints.map((point, index) => (
            <Reveal key={point.label} delay={index * 0.06} className="h-full">
              <div className="h-full border-b border-black/10 py-6 xl:border-b-0">
                <p className="text-sm font-bold text-[var(--color-ink)]">{point.label}</p>
                <p className="mt-2 max-w-[17rem] text-sm leading-6 text-[var(--color-ink-soft)]">
                  {point.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
