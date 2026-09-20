import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { servicesHero } from "../../data/services";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function ServicesHero() {
  return (
    <section className="relative isolate min-h-[34rem] overflow-hidden bg-[var(--color-dark)] sm:min-h-[38rem] lg:min-h-[44rem]">
      <Image
        src={servicesHero.image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,7,0.84)_0%,rgba(8,8,7,0.68)_42%,rgba(8,8,7,0.28)_72%,rgba(8,8,7,0.18)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5" />

      <Container className="relative z-10 flex min-h-[34rem] items-center py-16 sm:min-h-[38rem] sm:py-20 lg:min-h-[44rem]">
        <div className="max-w-4xl">
          <Badge>{servicesHero.eyebrow}</Badge>
          <h1 className="text-balance mt-6 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            {servicesHero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
            {servicesHero.intro}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" data-testid="services-estimate-cta" className="gap-2">
              {servicesHero.primaryCta}
              <ArrowRight aria-hidden="true" size={17} />
            </Button>
            <Button href="#service-details" variant="secondary" className="gap-2">
              {servicesHero.secondaryCta}
              <ArrowDown aria-hidden="true" size={16} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
