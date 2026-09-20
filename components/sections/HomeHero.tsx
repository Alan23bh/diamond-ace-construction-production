"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { business, homeContent } from "../../data/business";
import { HeroMedia } from "../media/HeroMedia";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function HomeHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate min-h-[42rem] overflow-hidden bg-[var(--color-dark)] sm:min-h-[46rem] lg:min-h-[calc(100svh-4.75rem)] lg:max-h-[58rem]">
      <HeroMedia />

      <Container className="relative z-10 flex min-h-[42rem] items-center py-20 sm:min-h-[46rem] lg:min-h-[calc(100svh-4.75rem)] lg:max-h-[58rem]">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.68, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <Badge>{homeContent.eyebrow}</Badge>
          <h1 className="text-balance mt-6 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[4.5rem]">
            {homeContent.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            {homeContent.intro}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" data-testid="home-estimate-cta" className="gap-2">
              {business.primaryCta}
              <ArrowRight aria-hidden="true" size={17} />
            </Button>
            <Button href="/services" data-testid="home-services-cta" variant="secondary">
              {homeContent.secondaryCta}
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold uppercase tracking-[0.12em] text-white/65">
            <span>Apartment Turnovers</span>
            <span aria-hidden="true" className="hidden text-[var(--color-accent)] sm:inline">•</span>
            <span>Interior Painting</span>
            <span aria-hidden="true" className="hidden text-[var(--color-accent)] sm:inline">•</span>
            <span>Drywall & Texture</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
