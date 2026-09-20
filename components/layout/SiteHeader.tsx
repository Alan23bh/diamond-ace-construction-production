import Link from "next/link";
import { business } from "../../data/business";
import { navigation } from "../../data/navigation";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { MobileNav } from "./MobileNav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 shadow-[0_8px_30px_rgba(23,23,21,0.05)] backdrop-blur-md">
      <Container className="relative flex min-h-[4.75rem] items-center justify-between gap-5">
        <Link href="/" className="group inline-flex items-baseline gap-2" aria-label="Diamond Ace Construction home">
          <span className="text-lg font-extrabold tracking-[-0.04em] text-[var(--color-ink)] sm:text-xl">
            Diamond Ace
          </span>
          <span className="hidden text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[var(--color-accent-dark)] min-[420px]:inline">
            Construction
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex lg:gap-9">
          {navigation.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-testid={`header-link-${item.label.toLowerCase().replaceAll(" ", "-")}`}
              className="text-sm font-semibold text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-ink)] focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
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
