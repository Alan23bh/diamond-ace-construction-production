import { approachOverview, approachSteps } from "../../data/approach";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function ApproachTimeline() {
  return (
    <section
      id="approach-process"
      data-testid="approach-process"
      aria-labelledby="approach-process-title"
      className="scroll-mt-24 bg-[var(--color-page)] py-16 sm:py-20 lg:py-28"
    >
      <Container>
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent-dark)]">
                {approachOverview.eyebrow}
              </p>
              <h2
                id="approach-process-title"
                className="text-balance mt-4 max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-[var(--color-ink)] sm:text-4xl lg:text-5xl"
              >
                {approachOverview.title}
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[var(--color-ink-soft)] lg:justify-self-end lg:text-lg lg:leading-8">
              {approachOverview.intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid border-t border-black/10 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {approachSteps.map((step, index) => (
            <Reveal key={step.number} delay={(index % 3) * 0.05} className="h-full">
              <article
                data-testid={`approach-step-${step.number}`}
                className={`relative h-full border-b border-black/10 px-0 py-8 md:px-7 lg:px-8 ${
                  index % 2 === 0 ? "md:border-r" : ""
                } ${index % 3 === 2 ? "lg:border-r-0" : "lg:border-r"}`}
              >
                <span className="absolute left-0 top-0 h-[2px] w-12 bg-[var(--color-accent)] md:left-7 lg:left-8" />
                <p className="text-sm font-bold text-[var(--color-accent-dark)]">{step.number}</p>
                <h3 className="mt-5 text-xl font-semibold leading-tight tracking-[-0.025em] text-[var(--color-ink)]">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-[var(--color-ink-soft)]">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
