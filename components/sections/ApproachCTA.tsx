import { approachCta } from "../../data/approach";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function ApproachCTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="relative overflow-hidden border border-[var(--color-border)] bg-[var(--color-charcoal-900)] px-5 py-10 sm:px-8 lg:px-10">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(246,241,232,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(246,241,232,0.045)_1px,transparent_1px)] [background-size:40px_40px]"
          />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase text-[var(--color-brass)]">
                Estimate request
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-[var(--color-warm-white)] sm:text-4xl">
                {approachCta.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-warm-muted)]">
                {approachCta.description}
              </p>
            </div>
            <Button href={approachCta.href} data-testid="approach-estimate-cta">
              {approachCta.ctaLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
