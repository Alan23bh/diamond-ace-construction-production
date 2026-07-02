"use client";

import { motion, useReducedMotion } from "framer-motion";
import { includedWork } from "../../data/services";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function IncludedWorkSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="included-work-title"
      className="border-b border-[var(--color-border)] bg-[rgba(23,21,17,0.52)] py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <SectionHeading
            eyebrow="What's included"
            title="A cleaner process around scope, prep, protection, finish details, and cleanup."
          >
            <p>
              The exact work depends on the project, but the service approach stays focused on
              clarity and orderly execution.
            </p>
          </SectionHeading>

          <div className="hidden h-px bg-[var(--color-border)] lg:block" />
        </div>

        <div className="mt-12 grid border-t border-[var(--color-border)] lg:grid-cols-5">
          {includedWork.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.35,
                delay: shouldReduceMotion ? 0 : index * 0.035,
                ease: "easeOut",
              }}
              className="border-b border-[var(--color-border)] py-6 lg:border-r lg:px-5 lg:last:border-r-0"
            >
              <p className="text-sm font-semibold text-[var(--color-brass)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-4 text-lg font-semibold leading-tight text-[var(--color-warm-white)]">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[var(--color-warm-muted)]">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
