import type { Metadata } from "next";
import { EstimateForm } from "../../components/forms/EstimateForm";
import { Badge } from "../../components/ui/Badge";
import { Container } from "../../components/ui/Container";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { business, contactContent } from "../../data/business";
import { primaryServiceAreaSummary } from "../../data/serviceAreas";
import { createMetadata } from "../../lib/seo";

export const metadata: Metadata = createMetadata({
  title: `Contact | ${business.name}`,
  description:
    "Request a free estimate from Diamond Ace Construction LLC for painting, repairs, turnovers, and light remodeling in Central Florida.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-[var(--color-border)] py-16 sm:py-20 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <Badge>{contactContent.eyebrow}</Badge>
            <SectionHeading className="mt-6" title={contactContent.headline}>
              <p>{contactContent.intro}</p>
            </SectionHeading>
          </div>

          <div className="border-y border-[var(--color-border)] py-6">
            <p className="text-sm leading-7 text-[var(--color-warm-muted)]">
              {primaryServiceAreaSummary}
            </p>
            <a
              href={business.contact.emailHref}
              className="mt-5 inline-flex text-sm font-semibold text-[var(--color-soft-beige)] hover:text-[var(--color-warm-white)]"
            >
              {business.contact.emailDisplay}
            </a>
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] py-16 sm:py-20 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <aside>
            <p className="text-xs font-semibold uppercase text-[var(--color-brass)]">
              What happens next
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--color-warm-white)]">
              A short request, then a clear follow-up.
            </h2>
            <ol className="mt-8 border-y border-[var(--color-border)]">
              {contactContent.nextSteps.map((step, index) => (
                <li
                  key={step}
                  className="grid grid-cols-[3rem_1fr] gap-4 border-b border-[var(--color-border)] py-4 last:border-b-0"
                >
                  <span className="text-sm font-semibold text-[var(--color-brass)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-6 text-[var(--color-warm-muted)]">{step}</span>
                </li>
              ))}
            </ol>
          </aside>

          <EstimateForm />
        </Container>
      </section>
    </>
  );
}
