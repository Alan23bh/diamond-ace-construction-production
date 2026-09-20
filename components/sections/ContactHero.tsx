import Image from "next/image";
import { ArrowDown, Mail } from "lucide-react";
import { business, contactContent } from "../../data/business";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function ContactHero() {
  return (
    <section className="overflow-hidden bg-white">
      <Container className="grid min-h-[34rem] gap-10 py-12 sm:py-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 lg:py-20">
        <div className="max-w-3xl">
          <Badge tone="light" className="bg-[var(--color-page)]">
            {contactContent.eyebrow}
          </Badge>
          <h1 className="text-balance mt-6 text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-[var(--color-ink)] sm:text-5xl md:text-6xl lg:text-[4.1rem]">
            {contactContent.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--color-ink-soft)] sm:text-lg sm:leading-8">
            {contactContent.intro}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#estimate-request" data-testid="contact-hero-estimate-cta" className="gap-2">
              Start Estimate Request
              <ArrowDown aria-hidden="true" size={16} />
            </Button>
            <Button
              href={business.contact.emailHref}
              variant="ghost"
              className="gap-2 border border-black/10 bg-white"
            >
              <Mail aria-hidden="true" size={16} />
              Email Us
            </Button>
          </div>

          <p className="mt-7 max-w-xl text-sm leading-6 text-[var(--color-ink-muted)]">
            No public phone number is listed on the site. If you prefer a phone follow-up, you can
            include your number in the estimate request.
          </p>
        </div>

        <div className="relative min-h-[24rem] overflow-hidden rounded-2xl bg-[var(--color-surface-muted)] shadow-[0_24px_70px_rgba(23,23,21,0.12)] sm:min-h-[30rem] lg:min-h-[36rem]">
          <Image
            src="/media/home/turnover-feature.webp"
            alt="Painter working on an interior wall"
            fill
            priority
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/45 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
            Painting • Repair • Turnover
          </div>
        </div>
      </Container>
    </section>
  );
}
