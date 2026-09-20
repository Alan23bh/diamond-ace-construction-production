import { Building2, House, Paintbrush } from "lucide-react";
import { serviceScenarios } from "../../data/services";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

const icons = [Building2, House, Paintbrush] as const;

export function ServiceFitSection() {
  return (
    <section
      aria-labelledby="service-fit-title"
      className="bg-[var(--color-surface-muted)] py-16 sm:py-20 lg:py-28"
    >
      <Container>
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent-dark)]">
                {serviceScenarios.eyebrow}
              </p>
              <h2
                id="service-fit-title"
                className="text-balance mt-4 max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-[var(--color-ink)] sm:text-4xl lg:text-5xl"
              >
                {serviceScenarios.title}
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[var(--color-ink-soft)] lg:justify-self-end lg:text-lg lg:leading-8">
              {serviceScenarios.intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid border-t border-black/10 lg:mt-16 lg:grid-cols-3">
          {serviceScenarios.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={item.title} delay={index * 0.06} className="h-full">
                <article className="h-full border-b border-black/10 py-7 sm:px-6 lg:border-b-0 lg:border-r lg:px-8 lg:last:border-r-0">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-[var(--color-accent-dark)] shadow-sm ring-1 ring-black/[0.06]">
                    <Icon aria-hidden="true" size={19} strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold leading-tight tracking-[-0.025em] text-[var(--color-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-ink-soft)]">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
