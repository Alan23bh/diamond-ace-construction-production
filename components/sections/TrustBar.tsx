import { homeContent } from "../../data/business";
import { Container } from "../ui/Container";

export function TrustBar() {
  return (
    <section className="border-b border-[var(--color-border)] bg-[rgba(23,21,17,0.68)]">
      <Container>
        <dl className="grid divide-y divide-[var(--color-border)] md:grid-cols-4 md:divide-x md:divide-y-0">
          {homeContent.trustPoints.map((point) => (
            <div key={point.label} className="py-5 md:px-6 md:first:pl-0 md:last:pr-0">
              <dt className="text-sm font-semibold text-[var(--color-warm-white)]">
                {point.label}
              </dt>
              <dd className="mt-1 text-sm leading-6 text-[var(--color-warm-muted)]">
                {point.description}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
