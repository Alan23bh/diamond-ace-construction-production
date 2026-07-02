import { servicesHero } from "../../data/services";
import { Badge } from "../ui/Badge";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function ServicesHero() {
  return (
    <section className="border-b border-[var(--color-border)] py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <Badge>{servicesHero.eyebrow}</Badge>
            <SectionHeading className="mt-6" title={servicesHero.title}>
              <p>{servicesHero.intro}</p>
            </SectionHeading>
          </div>

          <div className="relative min-h-[15rem] overflow-hidden border border-[var(--color-border)] bg-[var(--color-charcoal-900)] p-6">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(246,241,232,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(246,241,232,0.05)_1px,transparent_1px)] [background-size:42px_42px]"
            />
            <div className="relative flex min-h-[12rem] flex-col justify-between">
              <div className="flex items-center gap-3">
                <span className="h-px w-12 bg-[var(--color-brass)]" />
                <p className="text-xs font-semibold uppercase text-[var(--color-soft-beige)]">
                  Service scope
                </p>
              </div>
              <p className="max-w-md text-sm leading-7 text-[var(--color-warm-muted)]">
                {servicesHero.note}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
