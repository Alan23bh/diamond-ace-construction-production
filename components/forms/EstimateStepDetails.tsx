"use client";

import { useFormContext } from "react-hook-form";
import type { EstimateRequestInput } from "../../lib/validation";
import { mainServiceOptions, preferredTimelines } from "../../lib/validation";

export function EstimateStepDetails() {
  const {
    register,
    formState: { errors },
  } = useFormContext<EstimateRequestInput>();

  return (
    <fieldset className="grid gap-5">
      <legend className="text-xl font-semibold text-[var(--color-warm-white)]">
        Project details
      </legend>

      <div>
        <p className="text-sm font-semibold text-[var(--color-warm-white)]">Main services needed</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {mainServiceOptions.map((service) => (
            <label
              key={service}
              className="flex gap-3 border border-[var(--color-border)] bg-[rgba(17,16,14,0.48)] p-3 text-sm text-[var(--color-warm-muted)]"
            >
              <input
                type="checkbox"
                value={service}
                data-testid={`service-option-${service.toLowerCase().replaceAll(" ", "-").replaceAll("/", "").replaceAll(",", "")}`}
                {...register("services")}
                className="mt-1 h-4 w-4 accent-[var(--color-brass)]"
              />
              <span>{service}</span>
            </label>
          ))}
        </div>
        {errors.services ? (
          <p className="mt-2 text-sm text-[var(--color-brass)]">{errors.services.message}</p>
        ) : null}
      </div>

      <div>
        <label className="text-sm font-semibold text-[var(--color-warm-white)]" htmlFor="projectSize">
          Approximate project size or rooms
        </label>
        <input
          id="projectSize"
          type="text"
          data-testid="estimate-size"
          placeholder="Example: 2 bedrooms, full apartment, kitchen cabinets"
          {...register("projectSize")}
          className="mt-2 min-h-12 w-full border border-[var(--color-border)] bg-[var(--color-charcoal-950)] px-3 text-sm text-[var(--color-warm-white)] placeholder:text-[var(--color-stone)]"
        />
        {errors.projectSize ? (
          <p className="mt-2 text-sm text-[var(--color-brass)]">{errors.projectSize.message}</p>
        ) : null}
      </div>

      <div>
        <label className="text-sm font-semibold text-[var(--color-warm-white)]" htmlFor="timeline">
          Preferred timeline
        </label>
        <select
          id="timeline"
          {...register("timeline")}
          className="mt-2 min-h-12 w-full border border-[var(--color-border)] bg-[var(--color-charcoal-950)] px-3 text-sm text-[var(--color-warm-white)]"
        >
          {preferredTimelines.map((timeline) => (
            <option key={timeline} value={timeline}>
              {timeline}
            </option>
          ))}
        </select>
        {errors.timeline ? (
          <p className="mt-2 text-sm text-[var(--color-brass)]">{errors.timeline.message}</p>
        ) : null}
      </div>

      <div>
        <label className="text-sm font-semibold text-[var(--color-warm-white)]" htmlFor="notes">
          Project notes
        </label>
        <textarea
          id="notes"
          rows={5}
          data-testid="estimate-notes"
          placeholder="Share helpful details about repairs, timing, access, or priorities."
          {...register("notes")}
          className="mt-2 w-full border border-[var(--color-border)] bg-[var(--color-charcoal-950)] px-3 py-3 text-sm text-[var(--color-warm-white)] placeholder:text-[var(--color-stone)]"
        />
        {errors.notes ? (
          <p className="mt-2 text-sm text-[var(--color-brass)]">{errors.notes.message}</p>
        ) : null}
      </div>
    </fieldset>
  );
}
