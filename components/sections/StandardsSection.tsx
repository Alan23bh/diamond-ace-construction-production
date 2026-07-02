"use client";

import { motion, useReducedMotion } from "framer-motion";
import { qualityStandards } from "../../data/approach";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function StandardsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="quality-standards-title"
      className="border-b border-[var(--color-border)] bg-[rgba(23,21,17,0.52)] py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <SectionHeading
            eyebrow="Quality standards"
            title="The details that make the work feel organized, careful, and complete."
          >
            <p>
              A premium local-service experience is built through preparation, communication,
              orderly work, and careful finish details.
            </p>
          </SectionHeading>

          <div className="hidden h-px bg-[var(--color-border)] lg:block" />
        </div>

        <div className="mt-12 grid border-t border-[var(--color-border)] lg:grid-cols-2">
          {qualityStandards.map((standard, index) => (
            <motion.article
              key={standard.title}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.38,
                delay: shouldReduceMotion ? 0 : index * 0.035,
                ease: "easeOut",
              }}
              className="border-b border-[var(--color-border)] py-6 lg:px-7 lg:odd:border-r lg:odd:pl-0 lg:even:pr-0"
            >
              <p className="text-sm font-semibold text-[var(--color-brass)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-4 text-xl font-semibold leading-tight text-[var(--color-warm-white)]">
                {standard.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[var(--color-warm-muted)]">
                {standard.description}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
