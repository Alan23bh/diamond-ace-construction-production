"use client";

import { useFormContext } from "react-hook-form";
import type { EstimateRequestInput } from "../../lib/validation";

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 border-b border-[var(--color-border)] py-3 last:border-b-0 sm:grid-cols-[12rem_1fr]">
      <dt className="text-sm font-semibold text-[var(--color-warm-white)]">{label}</dt>
      <dd className="text-sm leading-6 text-[var(--color-warm-muted)]">{value || "Not provided"}</dd>
    </div>
  );
}

export function EstimateStepReview() {
  const { watch } = useFormContext<EstimateRequestInput>();
  const values = watch();

  return (
    <section aria-labelledby="estimate-review-title">
      <h2 id="estimate-review-title" className="text-xl font-semibold text-[var(--color-warm-white)]">
        Review your request
      </h2>
      <p className="mt-2 text-sm leading-6 text-[var(--color-warm-muted)]">
        Check the details before sending. You can go back to update anything.
      </p>

      <dl className="mt-6 border-y border-[var(--color-border)]">
        <SummaryRow label="Project type" value={values.projectType} />
        <SummaryRow label="City / service area" value={values.propertyCity} />
        <SummaryRow label="Property type" value={values.propertyType} />
        <SummaryRow label="Services" value={values.services.join(", ")} />
        <SummaryRow label="Size or rooms" value={values.projectSize} />
        <SummaryRow label="Timeline" value={values.timeline} />
        <SummaryRow label="Notes" value={values.notes || ""} />
        <SummaryRow label="Name" value={values.name} />
        <SummaryRow label="Email" value={values.email} />
        <SummaryRow label="Phone" value={values.phone || ""} />
        <SummaryRow label="Preferred contact" value={values.preferredContactMethod} />
      </dl>
    </section>
  );
}
