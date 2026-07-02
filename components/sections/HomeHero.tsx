"use client";

import { motion, useReducedMotion } from "framer-motion";
import { business, homeContent } from "../../data/business";
import { primaryServiceAreaSummary } from "../../data/serviceAreas";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function HomeHero() {
  const shouldReduceMotion = useReducedMotion();
  const serviceLabels = ["Paint", "Repair", "Turnover", "Remodel"];

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 18,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)] py-16 sm:py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: "easeOut" }}
          variants={reveal}
        >
          <Badge>{homeContent.eyebrow}</Badge>
          <h1 className="text-balance mt-6 max-w-4xl text-4xl font-semibold leading-tight text-[var(--color-warm-white)] sm:text-5xl lg:text-6xl">
            {homeContent.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8">{homeContent.intro}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" data-testid="home-estimate-cta">
              {business.primaryCta}
            </Button>
            <Button href="/services" data-testid="home-services-cta" variant="secondary">
              {homeContent.secondaryCta}
            </Button>
          </div>

          <p className="mt-7 max-w-2xl text-sm leading-6 text-[var(--color-stone)]">
            {primaryServiceAreaSummary}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          transition={{
            duration: shouldReduceMotion ? 0 : 0.65,
            delay: shouldReduceMotion ? 0 : 0.12,
            ease: "easeOut",
          }}
          variants={reveal}
          className="border border-[var(--color-border)] bg-[var(--color-charcoal-800)] p-4 sm:p-5"
        >
          <div className="relative min-h-[24rem] overflow-hidden border border-[var(--color-border)] bg-[var(--color-charcoal-900)]">
            <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(246,241,232,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(246,241,232,0.055)_1px,transparent_1px)] [background-size:42px_42px]" />
            <div className="absolute inset-0 [background-image:radial-gradient(circle_at_20%_20%,rgba(184,150,90,0.1),transparent_18rem)]" />

            <div className="absolute left-[10%] top-[12%] h-[50%] w-[58%] border border-[rgba(216,203,184,0.18)]" />
            <div className="absolute bottom-[14%] right-[9%] h-[42%] w-[46%] border border-[rgba(216,203,184,0.14)] bg-[rgba(246,241,232,0.035)]" />
            <div className="absolute left-[22%] top-[29%] h-[34%] w-px bg-[rgba(184,150,90,0.62)]" />
            <div className="absolute left-[22%] top-[29%] h-px w-[48%] bg-[rgba(184,150,90,0.62)]" />
            <div className="absolute bottom-[30%] right-[18%] h-px w-[38%] bg-[rgba(216,203,184,0.2)]" />

            <div className="absolute left-5 top-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--color-brass)]" />
              <p className="text-xs uppercase text-[var(--color-soft-beige)]">
                Service plan
              </p>
            </div>

            <div className="absolute bottom-5 left-5 right-5">
              <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {serviceLabels.map((label) => (
                  <li
                    key={label}
                    className="border border-[rgba(246,241,232,0.12)] bg-[rgba(17,16,14,0.52)] px-3 py-3 text-center text-sm font-semibold text-[var(--color-warm-white)]"
                  >
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
