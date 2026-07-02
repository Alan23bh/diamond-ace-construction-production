"use client";

import { motion, useReducedMotion } from "framer-motion";
import { approachSteps } from "../../data/approach";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function ApproachTimeline() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="approach-timeline-title"
      className="border-b border-[var(--color-border)] py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionHeading
            eyebrow="How we work"
            title="A clear sequence from first walkthrough to final cleanup."
          >
            <p>
              The process is designed to keep scope, timing, prep, and finish work clear from the
              beginning.
            </p>
          </SectionHeading>

          <ol className="relative border-l border-[var(--color-border)]">
            {approachSteps.map((step, index) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.42,
                  delay: shouldReduceMotion ? 0 : index * 0.04,
                  ease: "easeOut",
                }}
                className="relative border-t border-[var(--color-border)] py-6 pl-7 first:border-t-0 first:pt-0 last:pb-0"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-px top-7 h-10 w-px bg-[var(--color-brass)]"
                />
                <div className="grid gap-3 sm:grid-cols-[5rem_1fr]">
                  <p className="text-sm font-semibold text-[var(--color-brass)]">
                    {step.number}
                  </p>
                  <div>
                    <h2 className="text-xl font-semibold leading-tight text-[var(--color-warm-white)]">
                      {step.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-warm-muted)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
