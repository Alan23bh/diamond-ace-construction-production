import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { homeProcess } from "../../data/homepage";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function HomeProcess() {
  return (
    <section
      data-testid="home-process"
      className="bg-white py-16 sm:py-20 lg:py-28"
      aria-labelledby="home-process-title"
    >
      <Container>
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent-dark)]">
                {homeProcess.eyebrow}
              </p>
              <h2
                id="home-process-title"
                className="text-balance mt-4 max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-[var(--color-ink)] sm:text-4xl lg:text-5xl"
              >
                {homeProcess.title}
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[var(--color-ink-soft)] lg:justify-self-end lg:text-lg lg:leading-8">
              {homeProcess.intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid border-t border-black/10 md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {homeProcess.steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.06} className="h-full">
              <article className="relative h-full border-b border-black/10 py-7 md:px-6 md:odd:border-r lg:border-b-0 lg:border-r lg:px-8 lg:last:border-r-0 lg:odd:border-r">
                <span className="absolute left-0 top-0 h-[2px] w-12 bg-[var(--color-accent)]" />
                <p className="text-sm font-bold text-[var(--color-accent-dark)]">{step.number}</p>
                <h3 className="mt-5 text-xl font-semibold leading-tight tracking-[-0.025em] text-[var(--color-ink)]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-ink-soft)]">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <Link
            href={homeProcess.href}
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-accent-dark)] transition-colors hover:text-[var(--color-ink)] focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
          >
            {homeProcess.ctaLabel}
            <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
