import Image from "next/image";
import { Check } from "lucide-react";
import { approachPropertyContext } from "../../data/approach";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function WhoWeServeSection() {
  return (
    <section className="bg-[var(--color-page)] py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
          <Reveal>
            <div className="relative min-h-[28rem] overflow-hidden rounded-xl bg-white shadow-card lg:min-h-[38rem]">
              <Image
                src={approachPropertyContext.image}
                alt={approachPropertyContext.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent-dark)]">
                {approachPropertyContext.eyebrow}
              </p>
              <h2 className="text-balance mt-4 max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-[var(--color-ink)] sm:text-4xl lg:text-5xl">
                {approachPropertyContext.title}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--color-ink-soft)] sm:text-lg sm:leading-8">
                {approachPropertyContext.description}
              </p>

              <div className="mt-8 border-t border-black/10">
                {approachPropertyContext.points.map((point) => (
                  <article key={point.title} className="grid gap-3 border-b border-black/10 py-5 sm:grid-cols-[2rem_1fr]">
                    <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent-dark)]">
                      <Check aria-hidden="true" size={14} />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-[var(--color-ink)]">{point.title}</h3>
                      <p className="mt-1.5 text-sm leading-7 text-[var(--color-ink-soft)]">
                        {point.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
