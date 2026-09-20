"use client";

import { useFormContext } from "react-hook-form";
import type { EstimateRequestInput } from "../../lib/validation";
import { legendClass } from "./formStyles";

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 border-b border-black/10 py-4 last:border-b-0 sm:grid-cols-[11rem_1fr] sm:gap-6">
      <dt className="text-sm font-semibold text-[var(--color-ink)]">{label}</dt>
      <dd className="text-sm leading-6 text-[var(--color-ink-soft)]">{value || "Not Provided"}</dd>
    </div>
  );
}

export function EstimateStepReview() {
  const { watch } = useFormContext<EstimateRequestInput>();
  const values = watch();

  return (
    <section aria-labelledby="estimate-review-title">
      <h2 id="estimate-review-title" className={legendClass}>
        Review Your Request
      </h2>
      <p className="mt-2 text-sm leading-6 text-[var(--color-ink-muted)]">
        Check the details before sending. Use Back if you want to update anything.
      </p>

      <dl className="mt-7 overflow-hidden rounded-xl border border-black/10 bg-[var(--color-page)] px-5 sm:px-6">
        <SummaryRow label="Project Type" value={values.projectType} />
        <SummaryRow label="City / Service Area" value={values.propertyCity} />
        <SummaryRow label="Property Type" value={values.propertyType} />
        <SummaryRow label="Services" value={values.services.join(", ")} />
        <SummaryRow label="Size or Rooms" value={values.projectSize} />
        <SummaryRow label="Timeline" value={values.timeline} />
        <SummaryRow label="Notes" value={values.notes || ""} />
        <SummaryRow label="Name" value={values.name} />
        <SummaryRow label="Email" value={values.email} />
        <SummaryRow label="Phone" value={values.phone || ""} />
        <SummaryRow label="Preferred Contact" value={values.preferredContactMethod} />
      </dl>
    </section>
  );
}
