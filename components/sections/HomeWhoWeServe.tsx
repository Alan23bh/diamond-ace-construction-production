import { BriefcaseBusiness, Building2, House, KeyRound } from "lucide-react";
import { homeAudiences } from "../../data/homepage";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

const audienceIcons = [Building2, KeyRound, House, BriefcaseBusiness] as const;

export function HomeWhoWeServe() {
  return (
    <section
      data-testid="home-who-we-serve"
      className="bg-[var(--color-surface-muted)] py-16 sm:py-20 lg:py-28"
      aria-labelledby="home-who-we-serve-title"
    >
      <Container>
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent-dark)]">
                {homeAudiences.eyebrow}
              </p>
              <h2
                id="home-who-we-serve-title"
                className="text-balance mt-4 max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-[var(--color-ink)] sm:text-4xl lg:text-5xl"
              >
                {homeAudiences.title}
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[var(--color-ink-soft)] lg:justify-self-end lg:text-lg lg:leading-8">
              {homeAudiences.intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid border-t border-black/10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {homeAudiences.items.map((audience, index) => {
            const Icon = audienceIcons[index];
            return (
              <Reveal key={audience.id} delay={index * 0.06} className="h-full">
                <article className="h-full border-b border-black/10 py-7 sm:px-6 sm:odd:border-r lg:border-b-0 lg:border-r lg:px-8 lg:last:border-r-0 lg:odd:border-r">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-[var(--color-accent-dark)] shadow-sm ring-1 ring-black/[0.045]">
                    <Icon aria-hidden="true" size={20} strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold leading-tight tracking-[-0.025em] text-[var(--color-ink)]">
                    {audience.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-ink-soft)]">
                    {audience.description}
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
