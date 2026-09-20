import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { serviceGroups, serviceOverview } from "../../data/services";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function ServiceDetailList() {
  return (
    <section id="service-details" aria-labelledby="service-details-title" className="bg-[var(--color-page)]">
      <Container className="py-16 sm:py-20 lg:py-28">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent-dark)]">
                {serviceOverview.eyebrow}
              </p>
              <h2
                id="service-details-title"
                className="text-balance mt-4 max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-[var(--color-ink)] sm:text-4xl lg:text-5xl"
              >
                {serviceOverview.title}
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[var(--color-ink-soft)] lg:justify-self-end lg:text-lg lg:leading-8">
              {serviceOverview.intro}
            </p>
          </div>
        </Reveal>
      </Container>

      <div className="divide-y divide-black/10 border-y border-black/10">
        {serviceGroups.map((group, index) => {
          const imageFirst = index % 2 === 0;

          return (
            <article
              key={group.id}
              id={group.id}
              data-testid={`service-section-${group.id}`}
              className={`scroll-mt-24 ${index % 2 === 0 ? "bg-white" : "bg-[var(--color-surface-muted)]"}`}
            >
              <Container className="py-16 sm:py-20 lg:py-24">
                <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
                  <Reveal className={imageFirst ? "lg:order-1" : "lg:order-2"}>
                    <div className="relative min-h-[24rem] overflow-hidden rounded-2xl bg-[#ddd9d0] shadow-card ring-1 ring-black/[0.045] sm:min-h-[34rem] lg:min-h-[38rem]">
                      <Image
                        src={group.image}
                        alt={group.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/28 to-transparent" />
                      <span className="absolute bottom-5 left-5 rounded-full border border-white/25 bg-black/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm sm:bottom-6 sm:left-6">
                        {group.shortTitle}
                      </span>
                    </div>
                  </Reveal>

                  <Reveal delay={0.08} className={imageFirst ? "lg:order-2" : "lg:order-1"}>
                    <div className="max-w-xl">
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-bold text-[var(--color-accent-dark)]">
                          {group.number}
                        </span>
                        <span className="h-px w-12 bg-[var(--color-accent)]" />
                        <span className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-ink-muted)]">
                          Core Service
                        </span>
                      </div>
                      <h2 className="text-balance mt-5 text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-[var(--color-ink)] sm:text-4xl lg:text-5xl">
                        {group.title}
                      </h2>
                      <p className="mt-6 text-base leading-7 text-[var(--color-ink-soft)] sm:text-lg sm:leading-8">
                        {group.description}
                      </p>
                      <p className="mt-4 text-base leading-7 text-[var(--color-ink-soft)]">
                        {group.detail}
                      </p>

                      <div className="mt-8 border-y border-black/10 py-5">
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent-dark)]">
                          Best For
                        </p>
                        <p className="mt-2 text-sm font-semibold leading-6 text-[var(--color-ink)]">
                          {group.bestFor}
                        </p>
                      </div>

                      <div className="mt-7">
                        <p className="text-sm font-bold text-[var(--color-ink)]">Common Work</p>
                        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                          {group.services.map((service) => (
                            <li key={service} className="flex items-start gap-3 text-sm leading-6 text-[var(--color-ink-soft)]">
                              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent-dark)]">
                                <Check aria-hidden="true" size={13} strokeWidth={2.4} />
                              </span>
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button href="/contact" className="mt-8 gap-2">
                        Request This Service
                        <ArrowRight aria-hidden="true" size={17} />
                      </Button>
                    </div>
                  </Reveal>
                </div>
              </Container>
            </article>
          );
        })}
      </div>
    </section>
  );
}
