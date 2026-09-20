import Link from "next/link";
import { serviceCatalog } from "../../data/services";
import { Container } from "../ui/Container";

export function ServicesQuickNav() {
  return (
    <nav aria-label="Services on this page" className="border-b border-black/10 bg-white">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {serviceCatalog.map((service) => (
            <Link
              key={service.id}
              href={`#${service.id}`}
              className="group flex min-h-20 items-center justify-between gap-4 border-b border-black/10 py-5 transition-colors hover:bg-black/[0.025] sm:px-5 sm:odd:border-r lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <span>
                <span className="block text-xs font-bold text-[var(--color-accent-dark)]">
                  {service.number}
                </span>
                <span className="mt-1 block text-sm font-semibold text-[var(--color-ink)]">
                  {service.title}
                </span>
              </span>
              <span aria-hidden="true" className="text-[var(--color-accent-dark)] transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </nav>
  );
}
