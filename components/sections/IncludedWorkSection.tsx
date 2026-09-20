import Image from "next/image";
import { Check } from "lucide-react";
import { includedWork } from "../../data/services";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function IncludedWorkSection() {
  return (
    <section
      aria-labelledby="included-work-title"
      className="overflow-hidden bg-[var(--color-dark)] py-16 text-white sm:py-20 lg:py-28"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent)]">
                What We Focus On
              </p>
              <h2
                id="included-work-title"
                className="text-balance mt-4 text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl"
              >
                Good Paint Work Starts Before the Finish Coat.
              </h2>
              <p className="mt-6 text-base leading-7 text-[var(--color-on-dark-muted)] sm:text-lg sm:leading-8">
                The exact scope changes from project to project, but preparation, repair details, protection, and a clean handoff are what keep the work feeling organized and complete.
              </p>

              <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
                {includedWork.map((item) => (
                  <li key={item.title} className="grid gap-2 py-4 sm:grid-cols-[1fr_1.5fr] sm:gap-8">
                    <p className="flex items-center gap-3 text-sm font-semibold text-white">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/10 text-[var(--color-accent)] ring-1 ring-white/10">
                        <Check aria-hidden="true" size={14} strokeWidth={2.4} />
                      </span>
                      {item.title}
                    </p>
                    <p className="text-sm leading-6 text-[var(--color-on-dark-muted)]">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative min-h-[30rem] overflow-hidden rounded-2xl bg-[var(--color-dark-soft)] ring-1 ring-white/10 sm:min-h-[38rem] lg:min-h-[44rem]">
              <Image
                src="/media/home/prep-feature.webp"
                alt="Painter applying masking tape along an interior wall before painting"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/5" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
