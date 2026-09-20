import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { turnoverFeature } from "../../data/homepage";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function ApartmentTurnoverFeature() {
  return (
    <section
      data-testid="home-turnover-feature"
      className="bg-white py-16 sm:py-20 lg:py-28"
      aria-labelledby="turnover-feature-title"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:gap-16">
          <Reveal>
            <div className="relative min-h-[30rem] overflow-hidden rounded-2xl bg-[#ddd9d0] shadow-card ring-1 ring-black/[0.045] sm:min-h-[38rem] lg:min-h-[44rem]">
              <Image
                src={turnoverFeature.image}
                alt={turnoverFeature.imageAlt}
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-full border border-white/25 bg-black/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm sm:bottom-6 sm:left-6">
                Painting • Repair • Turnovers
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="lg:pl-2">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent-dark)]">
                {turnoverFeature.eyebrow}
              </p>
              <h2
                id="turnover-feature-title"
                className="text-balance mt-4 text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-[var(--color-ink)] sm:text-4xl lg:text-5xl"
              >
                {turnoverFeature.title}
              </h2>
              <p className="mt-6 text-base leading-7 text-[var(--color-ink-soft)] sm:text-lg sm:leading-8">
                {turnoverFeature.description}
              </p>
              <p className="mt-4 text-base leading-7 text-[var(--color-ink-soft)]">
                {turnoverFeature.supportingCopy}
              </p>

              <ul className="mt-8 divide-y divide-black/10 border-y border-black/10">
                {turnoverFeature.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-center gap-3 py-4 text-sm font-semibold text-[var(--color-ink)]"
                  >
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent-dark)]">
                      <Check aria-hidden="true" size={15} strokeWidth={2.4} />
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <Button href={turnoverFeature.href} className="mt-8 gap-2">
                {turnoverFeature.ctaLabel}
                <ArrowUpRight aria-hidden="true" size={17} />
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
