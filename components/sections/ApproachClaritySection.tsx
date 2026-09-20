import { CalendarDays, ClipboardCheck, MapPin, MessageSquareText } from "lucide-react";
import { approachClarity } from "../../data/approach";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

const icons = [ClipboardCheck, MapPin, CalendarDays, MessageSquareText];

export function ApproachClaritySection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28" aria-labelledby="approach-clarity-title">
      <Container>
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent-dark)]">
                {approachClarity.eyebrow}
              </p>
              <h2
                id="approach-clarity-title"
                className="text-balance mt-4 max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-[var(--color-ink)] sm:text-4xl lg:text-5xl"
              >
                {approachClarity.title}
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[var(--color-ink-soft)] lg:justify-self-end lg:text-lg lg:leading-8">
              {approachClarity.intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid border-t border-black/10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {approachClarity.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={item.title} delay={index * 0.05} className="h-full">
                <article className="h-full border-b border-black/10 py-7 sm:px-6 sm:odd:border-r lg:border-b-0 lg:border-r lg:px-7 lg:last:border-r-0">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-[var(--color-page)] text-[var(--color-accent-dark)]">
                    <Icon aria-hidden="true" size={18} />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold leading-tight text-[var(--color-ink)]">
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
