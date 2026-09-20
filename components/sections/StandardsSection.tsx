import Image from "next/image";
import { Check } from "lucide-react";
import { approachPreparation } from "../../data/approach";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function StandardsSection() {
  return (
    <section className="bg-[var(--color-dark)] py-16 text-[var(--color-on-dark)] sm:py-20 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <Reveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent)]">
                {approachPreparation.eyebrow}
              </p>
              <h2 className="text-balance mt-4 max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
                {approachPreparation.title}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                {approachPreparation.description}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {approachPreparation.points.map((point) => (
                  <div key={point} className="flex items-center gap-3 border-t border-white/10 pt-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[rgba(184,145,79,0.14)] text-[var(--color-accent)]">
                      <Check aria-hidden="true" size={15} strokeWidth={2.2} />
                    </span>
                    <span className="text-sm font-semibold text-white/90">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative min-h-[28rem] overflow-hidden rounded-xl lg:min-h-[36rem]">
              <Image
                src={approachPreparation.image}
                alt={approachPreparation.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
