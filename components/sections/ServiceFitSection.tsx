import { serviceFit } from "../../data/services";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function ServiceFitSection() {
  return (
    <section
      aria-labelledby="service-fit-title"
      className="border-b border-[var(--color-border)] py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <SectionHeading
            eyebrow="Service fit"
            title="Built for residential spaces, rental timelines, and practical property needs."
          >
            <p>
              Diamond Ace Construction LLC is a fit when the project needs clear communication,
              useful repair support, and dependable improvement work without unnecessary complexity.
            </p>
          </SectionHeading>

          <div className="border-y border-[var(--color-border)]">
            {serviceFit.map((item) => (
              <article
                key={item.label}
                className="grid gap-2 border-b border-[var(--color-border)] py-5 last:border-b-0 sm:grid-cols-[14rem_1fr] sm:gap-6"
              >
                <h2 className="text-base font-semibold text-[var(--color-warm-white)]">
                  {item.label}
                </h2>
                <p className="text-sm leading-7 text-[var(--color-warm-muted)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
