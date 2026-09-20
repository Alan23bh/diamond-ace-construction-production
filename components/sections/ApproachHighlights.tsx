import { approachHighlights } from "../../data/approach";
import { Container } from "../ui/Container";

export function ApproachHighlights() {
  return (
    <section aria-label="Diamond Ace approach highlights" className="border-b border-black/10 bg-white">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {approachHighlights.map((item) => (
            <article
              key={item.label}
              className="border-b border-black/10 py-6 sm:px-5 sm:odd:border-r lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <h2 className="text-sm font-semibold text-[var(--color-ink)]">{item.label}</h2>
              <p className="mt-2 max-w-xs text-sm leading-6 text-[var(--color-ink-soft)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
