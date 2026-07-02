"use client";

import { motion, useReducedMotion } from "framer-motion";
import { serviceGroups } from "../../data/services";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function ServiceDetailList() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="service-details-title"
      className="border-b border-[var(--color-border)] py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeading
            eyebrow="Service details"
            title="Four practical service groups, organized around the work clients actually need."
          >
            <p>
              Each group can stand on its own or combine with related repair, prep, and refresh
              work depending on the property.
            </p>
          </SectionHeading>

          <div className="border-y border-[var(--color-border)]">
            {serviceGroups.map((group, index) => (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.4,
                  delay: shouldReduceMotion ? 0 : index * 0.04,
                  ease: "easeOut",
                }}
                className="grid gap-5 border-b border-[var(--color-border)] py-8 last:border-b-0 md:grid-cols-[5rem_1fr]"
              >
                <div>
                  <p className="text-sm font-semibold text-[var(--color-brass)]">
                    {group.number}
                  </p>
                  <span
                    aria-hidden="true"
                    className="mt-4 hidden h-16 w-px bg-[var(--color-border)] md:block"
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-semibold leading-tight text-[var(--color-warm-white)] sm:text-3xl">
                    {group.title}
                  </h2>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-warm-muted)]">
                    {group.description}
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {group.services.map((service) => (
                      <li
                        key={service}
                        className="border-l border-[var(--color-border)] pl-3 text-sm leading-6 text-[var(--color-soft-beige)]"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
