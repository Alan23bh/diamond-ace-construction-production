import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { serviceCategories, serviceCategoryOverview } from "../../data/serviceCategories";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function ServiceCategoryOverview() {
  return (
    <section
      aria-labelledby="service-category-overview-title"
      className="bg-[var(--color-surface-muted)] py-16 sm:py-20 lg:py-28"
    >
      <Container>
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-14">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent-dark)]">
                {serviceCategoryOverview.eyebrow}
              </p>
              <h2
                id="service-category-overview-title"
                className="text-balance mt-4 max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-[var(--color-ink)] sm:text-4xl lg:text-5xl"
              >
                {serviceCategoryOverview.title}
              </h2>
            </div>

            <div className="lg:justify-self-end">
              <p className="max-w-2xl text-base leading-7 text-[var(--color-ink-soft)]">
                {serviceCategoryOverview.intro}
              </p>
              <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2" aria-label="Service focus highlights">
                {serviceCategoryOverview.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-center gap-3 text-sm font-semibold text-[var(--color-ink)]"
                  >
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent-dark)]">
                      <Check aria-hidden="true" size={14} strokeWidth={2.4} />
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-14 lg:gap-6">
          {serviceCategories.map((category, index) => (
            <Reveal key={category.id} delay={(index % 2) * 0.08} className="h-full">
              <article
                data-testid={`home-service-${category.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-black/[0.045] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#ddd9d0]">
                  <Image
                    src={category.image}
                    alt={category.imageAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    priority={index < 2}
                  />
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--color-ink)] sm:text-[1.7rem]">
                    {category.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--color-ink-soft)] sm:text-base sm:leading-7">
                    {category.description}
                  </p>
                  <Link
                    href={`/services#${category.id}`}
                    className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-[var(--color-accent-dark)] transition-colors hover:text-[var(--color-ink)] focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                  >
                    Explore Service
                    <ArrowUpRight aria-hidden="true" size={16} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
