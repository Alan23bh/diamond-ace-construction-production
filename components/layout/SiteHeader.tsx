import Link from "next/link";
import { business } from "../../data/business";
import { navigation } from "../../data/navigation";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { MobileNav } from "./MobileNav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[rgba(17,16,14,0.9)] backdrop-blur">
      <Container className="relative flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="group inline-flex flex-col">
          <span className="text-base font-semibold text-[var(--color-warm-white)]">
            {business.name}
          </span>
          <span className="text-xs uppercase text-[var(--color-brass)]">
            Painting & interiors
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {navigation.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-testid={`header-link-${item.label.toLowerCase().replaceAll(" ", "-")}`}
              className="text-sm font-medium text-[var(--color-warm-muted)] transition-colors hover:text-[var(--color-warm-white)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" data-testid="header-estimate-cta" className="min-h-10 px-4 py-2">
            {business.primaryCta}
          </Button>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}
