import { ArrowRight, Mail } from "lucide-react";
import { business } from "../../data/business";
import { finalEstimateCta } from "../../data/homepage";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function HomeEstimateCTA() {
  return (
    <section className="bg-[var(--color-page)] py-16 sm:py-20 lg:py-24" aria-labelledby="home-final-cta-title">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-2xl bg-[var(--color-accent)] px-6 py-10 text-[var(--color-ink)] shadow-card sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-black/65">
                  {finalEstimateCta.eyebrow}
                </p>
                <h2
                  id="home-final-cta-title"
                  className="text-balance mt-4 max-w-4xl text-3xl font-semibold leading-[1.04] tracking-[-0.035em] sm:text-4xl lg:text-5xl"
                >
                  {finalEstimateCta.title}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-black/70">
                  {finalEstimateCta.description}
                </p>
              </div>

              <div className="flex flex-col gap-4 lg:items-end">
                <Button
                  href={finalEstimateCta.href}
                  variant="inverse"
                  data-testid="home-final-estimate-cta"
                  className="gap-2 lg:min-w-52"
                >
                  {finalEstimateCta.ctaLabel}
                  <ArrowRight aria-hidden="true" size={17} />
                </Button>
                <a
                  href={business.contact.emailHref}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-black/70 underline decoration-black/30 underline-offset-4 transition-colors hover:text-black focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-black/60"
                >
                  <Mail aria-hidden="true" size={16} />
                  {business.contact.emailDisplay}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
