import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { approachHero } from "../../data/approach";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function ApproachHero() {
  return (
    <section className="relative isolate min-h-[34rem] overflow-hidden bg-[var(--color-dark)] sm:min-h-[38rem] lg:min-h-[44rem]">
      <Image
        src={approachHero.image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,7,0.86)_0%,rgba(8,8,7,0.72)_43%,rgba(8,8,7,0.3)_74%,rgba(8,8,7,0.2)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5" />

      <Container className="relative z-10 flex min-h-[34rem] items-center py-16 sm:min-h-[38rem] sm:py-20 lg:min-h-[44rem]">
        <div className="max-w-4xl">
          <Badge>{approachHero.eyebrow}</Badge>
          <h1 className="text-balance mt-6 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            {approachHero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
            {approachHero.intro}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" data-testid="approach-hero-estimate-cta" className="gap-2">
              {approachHero.primaryCta}
              <ArrowRight aria-hidden="true" size={17} />
            </Button>
            <Button href="#approach-process" variant="secondary" className="gap-2">
              {approachHero.secondaryCta}
              <ArrowDown aria-hidden="true" size={16} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
