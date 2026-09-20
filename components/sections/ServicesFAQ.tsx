import { ChevronDown } from "lucide-react";
import { servicesFaq } from "../../data/services";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function ServicesFAQ() {
  return (
    <section
      data-testid="services-faq"
      aria-labelledby="services-faq-title"
      className="bg-white py-16 sm:py-20 lg:py-28"
    >
      <Container>
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent-dark)]">
                {servicesFaq.eyebrow}
              </p>
              <h2
                id="services-faq-title"
                className="text-balance mt-4 max-w-2xl text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-[var(--color-ink)] sm:text-4xl lg:text-5xl"
              >
                {servicesFaq.title}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-[var(--color-ink-soft)] sm:text-lg sm:leading-8">
                {servicesFaq.intro}
              </p>
            </div>

            <div className="border-t border-black/10">
              {servicesFaq.items.map((item) => (
                <details key={item.question} className="group border-b border-black/10 py-1">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-base font-semibold text-[var(--color-ink)] marker:content-none sm:text-lg">
                    <span>{item.question}</span>
                    <ChevronDown
                      aria-hidden="true"
                      size={19}
                      className="shrink-0 text-[var(--color-accent-dark)] transition-transform duration-200 group-open:rotate-180"
                    />
                  </summary>
                  <p className="max-w-3xl pb-6 pr-10 text-sm leading-7 text-[var(--color-ink-soft)] sm:text-base">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
