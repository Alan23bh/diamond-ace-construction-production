import { ArrowRight, Mail } from "lucide-react";
import { approachCta } from "../../data/approach";
import { business } from "../../data/business";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function ApproachCTA() {
  return (
    <section className="bg-[var(--color-page)] py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-2xl bg-[var(--color-accent)] px-6 py-10 shadow-card sm:px-8 lg:px-12 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-black/60">
                  {approachCta.eyebrow}
                </p>
                <h2 className="text-balance mt-4 max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-[var(--color-ink)] sm:text-4xl lg:text-5xl">
                  {approachCta.title}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-black/70">
                  {approachCta.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 lg:min-w-56">
                <Button
                  href={approachCta.href}
                  variant="inverse"
                  className="gap-2"
                  data-testid="approach-estimate-cta"
                >
                  {approachCta.ctaLabel}
                  <ArrowRight aria-hidden="true" size={17} />
                </Button>
                <a
                  href={business.contact.emailHref}
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-black/75 underline decoration-black/30 underline-offset-4 hover:text-black focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-black/30"
                >
                  <Mail aria-hidden="true" size={15} />
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
