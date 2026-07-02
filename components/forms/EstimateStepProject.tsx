"use client";

import { useFormContext } from "react-hook-form";
import type { EstimateRequestInput } from "../../lib/validation";
import { projectTypes, propertyTypes } from "../../lib/validation";

export function EstimateStepProject() {
  const {
    register,
    formState: { errors },
  } = useFormContext<EstimateRequestInput>();

  return (
    <fieldset className="grid gap-5">
      <legend className="text-xl font-semibold text-[var(--color-warm-white)]">
        Project basics
      </legend>

      <div>
        <label className="text-sm font-semibold text-[var(--color-warm-white)]" htmlFor="projectType">
          Project type
        </label>
        <select
          id="projectType"
          {...register("projectType")}
          className="mt-2 min-h-12 w-full border border-[var(--color-border)] bg-[var(--color-charcoal-950)] px-3 text-sm text-[var(--color-warm-white)]"
        >
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.projectType ? (
          <p className="mt-2 text-sm text-[var(--color-brass)]">{errors.projectType.message}</p>
        ) : null}
      </div>

      <div>
        <label className="text-sm font-semibold text-[var(--color-warm-white)]" htmlFor="propertyCity">
          Property city / service area
        </label>
        <input
          id="propertyCity"
          type="text"
          data-testid="estimate-city"
          placeholder="Orlando, Kissimmee, Winter Park..."
          {...register("propertyCity")}
          className="mt-2 min-h-12 w-full border border-[var(--color-border)] bg-[var(--color-charcoal-950)] px-3 text-sm text-[var(--color-warm-white)] placeholder:text-[var(--color-stone)]"
        />
        {errors.propertyCity ? (
          <p className="mt-2 text-sm text-[var(--color-brass)]">{errors.propertyCity.message}</p>
        ) : null}
      </div>

      <div>
        <label className="text-sm font-semibold text-[var(--color-warm-white)]" htmlFor="propertyType">
          Property type
        </label>
        <select
          id="propertyType"
          {...register("propertyType")}
          className="mt-2 min-h-12 w-full border border-[var(--color-border)] bg-[var(--color-charcoal-950)] px-3 text-sm text-[var(--color-warm-white)]"
        >
          {propertyTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.propertyType ? (
          <p className="mt-2 text-sm text-[var(--color-brass)]">{errors.propertyType.message}</p>
        ) : null}
      </div>
    </fieldset>
  );
}
