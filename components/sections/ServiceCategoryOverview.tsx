"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  serviceCategories,
  serviceCategoryOverview,
  type ServiceCategory,
} from "../../data/serviceCategories";
import { Container } from "../ui/Container";

function CategoryFeature({ category }: { category: ServiceCategory }) {
  const visualSteps = ["Prep", "Paint", "Repair", "Turnover", "Finish"];

  return (
    <article className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
      <div className="relative min-h-[19rem] overflow-hidden border border-[var(--color-border)] bg-[var(--color-charcoal-800)] p-5">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-65 [background-image:linear-gradient(rgba(246,241,232,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(246,241,232,0.045)_1px,transparent_1px)] [background-size:38px_38px]"
        />
        <div aria-hidden="true" className="absolute left-8 top-8 h-[48%] w-[62%] border border-[rgba(216,203,184,0.16)]" />
        <div aria-hidden="true" className="absolute bottom-9 right-8 h-[44%] w-[48%] border border-[rgba(216,203,184,0.12)] bg-[rgba(246,241,232,0.03)]" />
        <div aria-hidden="true" className="absolute left-[30%] top-[30%] h-px w-[42%] bg-[var(--color-brass)]" />
        <div aria-hidden="true" className="absolute left-[30%] top-[30%] h-[38%] w-px bg-[var(--color-brass)]" />

        <div className="relative flex items-center justify-between gap-4">
          <p className="text-sm font-semibold text-[var(--color-brass)]">{category.number}</p>
          <p className="text-xs uppercase text-[var(--color-soft-beige)]">{category.visualLabel}</p>
        </div>

        <div className="absolute bottom-5 left-5 right-5">
          <ol className="grid grid-cols-2 gap-2 sm:grid-cols-5">
            {visualSteps.map((step, index) => (
              <li
                key={step}
                className="border border-[rgba(246,241,232,0.12)] bg-[rgba(17,16,14,0.55)] px-3 py-3"
              >
                <span className="block text-xs font-semibold text-[var(--color-brass)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-2 block text-sm font-semibold text-[var(--color-warm-white)]">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="border-y border-[var(--color-border)] py-6 lg:flex lg:flex-col lg:justify-center lg:py-8">
        <p className="text-sm font-semibold text-[var(--color-brass)]">{category.number}</p>
        <h3 className="mt-4 text-3xl font-semibold leading-tight text-[var(--color-warm-white)] sm:text-4xl">
          {category.title}
        </h3>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-warm-muted)]">
          {category.description}
        </p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-3">
          {category.examples.map((example) => (
            <li
              key={example}
              className="border-l border-[var(--color-border)] pl-3 text-sm text-[var(--color-soft-beige)]"
            >
              {example}
            </li>
          ))}
        </ul>
        <Link
          href={category.href}
          className="mt-7 inline-flex w-fit items-center text-sm font-semibold text-[var(--color-warm-white)] transition-colors hover:text-[var(--color-brass)]"
        >
          Explore services
          <span aria-hidden="true" className="ml-2 text-[var(--color-brass)]">
            /
          </span>
        </Link>
      </div>
    </article>
  );
}

function CategoryRow({ category }: { category: ServiceCategory }) {
  return (
    <article className="grid gap-5 border-t border-[var(--color-border)] py-7 md:grid-cols-[5rem_1fr_12rem] md:items-start">
      <div className="flex items-center gap-3 md:block">
        <p className="text-sm font-semibold text-[var(--color-brass)]">{category.number}</p>
        <p className="text-xs uppercase text-[var(--color-stone)] md:mt-4">
          {category.visualLabel}
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold leading-tight text-[var(--color-warm-white)]">
          {category.title}
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-warm-muted)]">
          {category.description}
        </p>
        <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
          {category.examples.map((example) => (
            <li key={example} className="text-sm text-[var(--color-soft-beige)]">
              {example}
            </li>
          ))}
        </ul>
      </div>

      <Link
        href={category.href}
        className="text-sm font-semibold text-[var(--color-warm-white)] transition-colors hover:text-[var(--color-brass)] md:justify-self-end"
      >
        View details
      </Link>
    </article>
  );
}

export function ServiceCategoryOverview() {
  const shouldReduceMotion = useReducedMotion();
  const [featuredCategory, ...supportingCategories] = serviceCategories;

  return (
    <section
      aria-labelledby="service-category-overview-title"
      className="border-b border-[var(--color-border)] py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" }}
          className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase text-[var(--color-brass)]">
              {serviceCategoryOverview.eyebrow}
            </p>
            <h2
              id="service-category-overview-title"
              className="text-balance mt-4 text-3xl font-semibold leading-tight text-[var(--color-warm-white)] sm:text-4xl lg:text-5xl"
            >
              {serviceCategoryOverview.title}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[var(--color-warm-muted)] lg:justify-self-end">
            {serviceCategoryOverview.intro}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: "easeOut" }}
          className="mt-12"
        >
          <CategoryFeature category={featuredCategory} />
        </motion.div>

        <div className="mt-8">
          {supportingCategories.map((category) => (
            <CategoryRow key={category.title} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
