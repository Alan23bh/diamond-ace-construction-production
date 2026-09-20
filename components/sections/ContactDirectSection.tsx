import { ArrowRight, Mail } from "lucide-react";
import { business } from "../../data/business";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

const details = [
  {
    title: "Property Location",
    description: "The city or service area helps us understand travel and project fit.",
  },
  {
    title: "Service & Scope",
    description: "Tell us whether the project involves turnover work, painting, drywall, texture, or exterior work.",
  },
  {
    title: "Timing & Access",
    description: "Share your preferred timing and anything useful about occupancy, access, or scheduling.",
  },
] as const;

export function ContactDirectSection() {
  return (
    <section className="border-y border-white/10 bg-[var(--color-dark-soft)] py-16 text-[var(--color-on-dark)] sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent)]">
                Helpful Details
              </p>
              <h2 className="text-balance mt-4 max-w-2xl text-3xl font-semibold leading-[1.04] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
                A Little Context Helps Us Review the Request Faster.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-on-dark-muted)] lg:text-lg lg:leading-8">
                The form is designed to collect the basics without asking you to write a full project specification.
              </p>
            </div>

            <div className="grid gap-0 border-t border-white/15 sm:grid-cols-3 sm:border-l">
              {details.map((item) => (
                <article
                  key={item.title}
                  className="border-b border-white/15 py-6 sm:border-r sm:px-6"
                >
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-on-dark-muted)]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#estimate-request" className="gap-2">
              Start Estimate Request
              <ArrowRight aria-hidden="true" size={16} />
            </Button>
            <Button href={business.contact.emailHref} variant="secondary" className="gap-2">
              <Mail aria-hidden="true" size={16} />
              Email Diamond Ace
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
