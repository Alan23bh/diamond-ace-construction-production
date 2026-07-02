import Link from "next/link";
import { business } from "../../data/business";
import { footerLinks } from "../../data/navigation";
import { primaryServiceAreaSummary, serviceAreas } from "../../data/serviceAreas";
import { Container } from "../ui/Container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-charcoal-900)]">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.8fr_0.8fr_1fr]">
          <div>
            <p className="text-lg font-semibold text-[var(--color-warm-white)]">
              {business.name}
            </p>
            <p className="mt-3 max-w-md text-sm leading-6">{business.description}</p>
            <a
              href={business.contact.emailHref}
              className="mt-4 inline-flex text-sm font-semibold text-[var(--color-soft-beige)] hover:text-[var(--color-warm-white)]"
            >
              {business.contact.emailDisplay}
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold text-[var(--color-warm-white)]">Pages</p>
            <nav aria-label="Footer navigation" className="mt-4 grid gap-3">
              {footerLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  data-testid={`footer-link-${item.label.toLowerCase().replaceAll(" ", "-")}`}
                  className="text-sm text-[var(--color-warm-muted)] hover:text-[var(--color-warm-white)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-sm font-semibold text-[var(--color-warm-white)]">Hours</p>
            <dl className="mt-4 grid gap-3">
              {business.hours.map((hour) => (
                <div key={hour.label}>
                  <dt className="text-xs uppercase text-[var(--color-stone)]">
                    {hour.label}
                  </dt>
                  <dd className="mt-1 text-sm text-[var(--color-warm-muted)]">{hour.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <p className="text-sm font-semibold text-[var(--color-warm-white)]">Service Area</p>
            <p className="mt-4 text-sm leading-6">{primaryServiceAreaSummary}</p>
            <p className="mt-4 text-xs leading-6 text-[var(--color-stone)]">
              {serviceAreas
                .filter((area) => area.isPrimary)
                .map((area) => area.name)
                .join(", ")}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[var(--color-border)] pt-6 text-xs text-[var(--color-stone)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span>Privacy Policy</span>
            <span>Terms</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
