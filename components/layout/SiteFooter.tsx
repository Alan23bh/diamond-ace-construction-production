import Link from "next/link";
import { business } from "../../data/business";
import { footerLinks } from "../../data/navigation";
import { primaryServiceAreaSummary, serviceAreas } from "../../data/serviceAreas";
import { Container } from "../ui/Container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-dark)] text-[var(--color-on-dark)]">
      <Container className="footer-mobile-action-clearance py-12 md:py-16">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.35fr_0.7fr_0.75fr_1fr]">
          <div>
            <p className="text-xl font-bold tracking-[-0.03em]">{business.name}</p>
            <p className="mt-3 max-w-md text-sm leading-6 text-[var(--color-on-dark-muted)]">
              Apartment turnovers, painting, drywall and texture repair, and exterior painting for Central Florida properties.
            </p>
            <a
              href={business.contact.emailHref}
              className="mt-5 inline-flex text-sm font-semibold text-white underline decoration-[var(--color-accent)] decoration-2 underline-offset-4 transition-colors hover:text-[var(--color-accent-soft)]"
            >
              {business.contact.emailDisplay}
            </a>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent)]">Pages</p>
            <nav aria-label="Footer navigation" className="mt-4 grid gap-3">
              {footerLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  data-testid={`footer-link-${item.label.toLowerCase().replaceAll(" ", "-")}`}
                  className="text-sm text-[var(--color-on-dark-muted)] transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent)]">Hours</p>
            <dl className="mt-4 grid gap-3">
              {business.hours.map((hour) => (
                <div key={hour.label}>
                  <dt className="text-sm font-semibold text-white">{hour.label}</dt>
                  <dd className="mt-1 text-sm text-[var(--color-on-dark-muted)]">{hour.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent)]">Service Area</p>
            <p className="mt-4 text-sm leading-6 text-[var(--color-on-dark-muted)]">{primaryServiceAreaSummary}</p>
            <p className="mt-4 text-xs leading-6 text-white/55">
              {serviceAreas
                .filter((area) => area.isPrimary && area.name !== "Central Florida")
                .map((area) => area.name)
                .join(" • ")}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {business.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link
              href="/privacy"
              data-testid="footer-link-privacy"
              className="transition-colors hover:text-white"
            >
              Privacy
            </Link>
            <span aria-hidden="true">•</span>
            <p>Family-Owned • Central Florida</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
