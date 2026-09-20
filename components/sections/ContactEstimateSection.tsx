import { CheckCircle2, Mail } from "lucide-react";
import { EstimateForm } from "../forms/EstimateForm";
import { business, contactContent } from "../../data/business";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function ContactEstimateSection() {
  return (
    <section
      id="estimate-request"
      data-testid="contact-estimate-section"
      className="scroll-mt-24 bg-[var(--color-surface-muted)] py-16 sm:py-20 lg:py-28"
      aria-labelledby="contact-estimate-title"
    >
      <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 xl:gap-20">
        <Reveal>
          <aside className="lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent-dark)]">
              What Happens Next
            </p>
            <h2
              id="contact-estimate-title"
              className="text-balance mt-4 max-w-xl text-3xl font-semibold leading-[1.04] tracking-[-0.035em] text-[var(--color-ink)] sm:text-4xl lg:text-5xl"
            >
              A Short Request, Then a Clear Follow-Up.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-ink-soft)] lg:text-lg lg:leading-8">
              You do not need every detail figured out before reaching out. Give us enough context to
              understand the property and the work you are considering.
            </p>

            <ol className="mt-8 border-t border-black/10">
              {contactContent.nextSteps.map((step) => (
                <li key={step.title} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-black/10 py-5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent-dark)]">
                    <CheckCircle2 aria-hidden="true" size={16} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-ink)]">{step.title}</p>
                    <p className="mt-1 text-sm leading-6 text-[var(--color-ink-soft)]">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 rounded-xl border border-black/10 bg-white p-5">
              <div className="flex items-center gap-3 text-[var(--color-accent-dark)]">
                <Mail aria-hidden="true" size={18} />
                <p className="text-xs font-bold uppercase tracking-[0.12em]">Prefer Email?</p>
              </div>
              <p className="mt-3 text-sm leading-6 text-[var(--color-ink-soft)]">
                You can also start with a direct email and include the property city, service needed,
                and a short description of the work.
              </p>
              <a
                href={business.contact.emailHref}
                className="mt-4 inline-flex text-sm font-semibold text-[var(--color-ink)] underline decoration-[var(--color-accent)] decoration-2 underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                {business.contact.emailDisplay}
              </a>
            </div>
          </aside>
        </Reveal>

        <Reveal delay={0.08}>
          <EstimateForm />
        </Reveal>
      </Container>
    </section>
  );
}
