"use client";

import { useFormContext } from "react-hook-form";
import type { EstimateRequestInput } from "../../lib/validation";
import { contactMethods } from "../../lib/validation";

export function EstimateStepContact() {
  const {
    register,
    formState: { errors },
  } = useFormContext<EstimateRequestInput>();

  return (
    <fieldset className="grid gap-5">
      <legend className="text-xl font-semibold text-[var(--color-warm-white)]">
        Contact information
      </legend>

      <div>
        <label className="text-sm font-semibold text-[var(--color-warm-white)]" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          data-testid="estimate-name"
          autoComplete="name"
          {...register("name")}
          className="mt-2 min-h-12 w-full border border-[var(--color-border)] bg-[var(--color-charcoal-950)] px-3 text-sm text-[var(--color-warm-white)]"
        />
        {errors.name ? (
          <p className="mt-2 text-sm text-[var(--color-brass)]">{errors.name.message}</p>
        ) : null}
      </div>

      <div>
        <label className="text-sm font-semibold text-[var(--color-warm-white)]" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          data-testid="estimate-email"
          autoComplete="email"
          {...register("email")}
          className="mt-2 min-h-12 w-full border border-[var(--color-border)] bg-[var(--color-charcoal-950)] px-3 text-sm text-[var(--color-warm-white)]"
        />
        {errors.email ? (
          <p className="mt-2 text-sm text-[var(--color-brass)]">{errors.email.message}</p>
        ) : null}
      </div>

      <div>
        <label className="text-sm font-semibold text-[var(--color-warm-white)]" htmlFor="phone">
          Phone optional
        </label>
        <input
          id="phone"
          type="tel"
          data-testid="estimate-phone"
          autoComplete="tel"
          {...register("phone")}
          className="mt-2 min-h-12 w-full border border-[var(--color-border)] bg-[var(--color-charcoal-950)] px-3 text-sm text-[var(--color-warm-white)]"
        />
        {errors.phone ? (
          <p className="mt-2 text-sm text-[var(--color-brass)]">{errors.phone.message}</p>
        ) : null}
      </div>

      <div>
        <label
          className="text-sm font-semibold text-[var(--color-warm-white)]"
          htmlFor="preferredContactMethod"
        >
          Preferred contact method
        </label>
        <select
          id="preferredContactMethod"
          {...register("preferredContactMethod")}
          className="mt-2 min-h-12 w-full border border-[var(--color-border)] bg-[var(--color-charcoal-950)] px-3 text-sm text-[var(--color-warm-white)]"
        >
          {contactMethods.map((method) => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
        </select>
        {errors.preferredContactMethod ? (
          <p className="mt-2 text-sm text-[var(--color-brass)]">
            {errors.preferredContactMethod.message}
          </p>
        ) : null}
      </div>
    </fieldset>
  );
}
