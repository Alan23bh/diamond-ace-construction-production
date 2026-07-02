import { whoWeServe } from "../../data/approach";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function WhoWeServeSection() {
  return (
    <section
      aria-labelledby="who-we-serve-title"
      className="border-b border-[var(--color-border)] py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <SectionHeading
            eyebrow="Who we serve"
            title="Practical interior and property refresh support for Central Florida spaces."
          >
            <p>
              The work is shaped for homeowners, rental properties, and occupied spaces where clear
              expectations and respectful execution matter.
            </p>
          </SectionHeading>

          <div className="border-y border-[var(--color-border)]">
            {whoWeServe.map((audience) => (
              <article
                key={audience.label}
                className="grid gap-2 border-b border-[var(--color-border)] py-5 last:border-b-0 sm:grid-cols-[14rem_1fr] sm:gap-6"
              >
                <h2 className="text-base font-semibold text-[var(--color-warm-white)]">
                  {audience.label}
                </h2>
                <p className="text-sm leading-7 text-[var(--color-warm-muted)]">
                  {audience.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
