"use client";

import { Controller, useFormContext } from "react-hook-form";
import type { EstimateRequestInput } from "../../lib/validation";
import { contactMethods } from "../../lib/validation";
import { FormSelect } from "./FormSelect";
import {
  errorClass,
  fieldControlClass,
  fieldHelpClass,
  fieldLabelClass,
  legendClass,
} from "./formStyles";

export function EstimateStepContact() {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<EstimateRequestInput>();

  return (
    <fieldset>
      <legend className={legendClass}>Contact Information</legend>
      <p className={fieldHelpClass}>
        Email is required for the estimate workflow. A phone number is optional unless you choose
        phone follow-up.
      </p>

      <div className="mt-7 grid gap-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className={fieldLabelClass} htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              data-testid="estimate-name"
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              {...register("name")}
              className={fieldControlClass}
            />
            {errors.name ? (
              <p id="name-error" className={errorClass} role="alert">
                {errors.name.message}
              </p>
            ) : null}
          </div>

          <div>
            <label className={fieldLabelClass} htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              data-testid="estimate-email"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email")}
              className={fieldControlClass}
            />
            {errors.email ? (
              <p id="email-error" className={errorClass} role="alert">
                {errors.email.message}
              </p>
            ) : null}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className={fieldLabelClass} htmlFor="phone">
              Phone <span className="font-normal text-[var(--color-ink-muted)]">(Optional)</span>
            </label>
            <input
              id="phone"
              type="tel"
              data-testid="estimate-phone"
              autoComplete="tel"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-help phone-error" : "phone-help"}
              {...register("phone")}
              className={fieldControlClass}
            />
            <p id="phone-help" className={fieldHelpClass}>
              Your number is used only for project follow-up when provided.
            </p>
            {errors.phone ? (
              <p id="phone-error" className={errorClass} role="alert">
                {errors.phone.message}
              </p>
            ) : null}
          </div>

          <div>
            <label className={fieldLabelClass} htmlFor="preferredContactMethod">
              Preferred Contact Method
            </label>
            <Controller
              control={control}
              name="preferredContactMethod"
              render={({ field }) => (
                <FormSelect
                  id="preferredContactMethod"
                  label="Preferred Contact Method"
                  testId="estimate-contact-method"
                  value={field.value}
                  options={contactMethods}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  invalid={Boolean(errors.preferredContactMethod)}
                  describedBy={
                    errors.preferredContactMethod ? "preferredContactMethod-error" : undefined
                  }
                />
              )}
            />
            {errors.preferredContactMethod ? (
              <p id="preferredContactMethod-error" className={errorClass} role="alert">
                {errors.preferredContactMethod.message}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </fieldset>
  );
}
