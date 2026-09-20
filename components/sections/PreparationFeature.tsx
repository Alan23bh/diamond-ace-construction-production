import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { preparationFeature } from "../../data/homepage";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function PreparationFeature() {
  return (
    <section
      data-testid="home-preparation-feature"
      className="overflow-hidden bg-[var(--color-dark)] py-16 text-[var(--color-on-dark)] sm:py-20 lg:py-28"
      aria-labelledby="preparation-feature-title"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
          <Reveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent)]">
                {preparationFeature.eyebrow}
              </p>
              <h2
                id="preparation-feature-title"
                className="text-balance mt-4 max-w-2xl text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl"
              >
                {preparationFeature.title}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--color-on-dark-muted)] sm:text-lg sm:leading-8">
                {preparationFeature.description}
              </p>

              <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {preparationFeature.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-3 text-sm font-semibold text-white">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/10 text-[var(--color-accent)] ring-1 ring-white/10">
                      <Check aria-hidden="true" size={15} strokeWidth={2.4} />
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <Button href={preparationFeature.href} variant="inverse" className="mt-9 gap-2">
                {preparationFeature.ctaLabel}
                <ArrowRight aria-hidden="true" size={17} />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative min-h-[28rem] overflow-hidden rounded-2xl bg-[var(--color-dark-soft)] ring-1 ring-white/10 sm:min-h-[36rem] lg:min-h-[42rem]">
              <Image
                src={preparationFeature.image}
                alt={preparationFeature.imageAlt}
                fill
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/5" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
