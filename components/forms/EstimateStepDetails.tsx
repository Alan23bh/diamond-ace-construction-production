"use client";

import { Controller, useFormContext } from "react-hook-form";
import { serviceCatalog } from "../../data/services";
import type { EstimateRequestInput } from "../../lib/validation";
import { preferredTimelines } from "../../lib/validation";
import { FormSelect } from "./FormSelect";
import {
  errorClass,
  fieldControlClass,
  fieldHelpClass,
  fieldLabelClass,
  legendClass,
  textareaClass,
} from "./formStyles";

export function EstimateStepDetails() {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<EstimateRequestInput>();

  return (
    <fieldset>
      <legend className={legendClass}>Project Scope</legend>
      <p className={fieldHelpClass}>
        Choose every service that applies and share enough context for an initial review.
      </p>

      <div className="mt-7 grid gap-6">
        <div>
          <p className={fieldLabelClass}>Services Needed</p>
          <p className={fieldHelpClass}>Select one or more services.</p>
          <div
            className="mt-3 grid gap-3 sm:grid-cols-2"
            aria-describedby={errors.services ? "services-error" : undefined}
          >
            {serviceCatalog.map((service) => (
              <label
                key={service.id}
                className="flex cursor-pointer items-start gap-3 rounded-xl border border-black/10 bg-[var(--color-page)] p-4 text-sm text-[var(--color-ink-soft)] transition hover:border-[var(--color-accent)] hover:bg-white has-[:checked]:border-[var(--color-accent)] has-[:checked]:bg-[var(--color-accent-soft)]"
              >
                <input
                  type="checkbox"
                  value={service.title}
                  data-testid={`service-option-${service.id}`}
                  aria-invalid={Boolean(errors.services)}
                  {...register("services")}
                  className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-[var(--color-accent-dark)]"
                />
                <span>
                  <span className="block font-semibold text-[var(--color-ink)]">
                    {service.title}
                  </span>
                  <span className="mt-1 block leading-6">{service.description}</span>
                </span>
              </label>
            ))}
          </div>
          {errors.services ? (
            <p id="services-error" className={errorClass} role="alert">
              {errors.services.message}
            </p>
          ) : null}
        </div>

        <div>
          <label className={fieldLabelClass} htmlFor="projectSize">
            Approximate Project Size or Rooms
          </label>
          <input
            id="projectSize"
            type="text"
            data-testid="estimate-size"
            placeholder="Example: full apartment, 2 bedrooms, living room and hallway"
            aria-invalid={Boolean(errors.projectSize)}
            aria-describedby={errors.projectSize ? "projectSize-error" : undefined}
            {...register("projectSize")}
            className={fieldControlClass}
          />
          {errors.projectSize ? (
            <p id="projectSize-error" className={errorClass} role="alert">
              {errors.projectSize.message}
            </p>
          ) : null}
        </div>

        <div>
          <label className={fieldLabelClass} htmlFor="timeline">
            Preferred Timeline
          </label>
          <Controller
            control={control}
            name="timeline"
            render={({ field }) => (
              <FormSelect
                id="timeline"
                label="Preferred Timeline"
                testId="estimate-timeline"
                value={field.value}
                options={preferredTimelines}
                onChange={field.onChange}
                onBlur={field.onBlur}
                invalid={Boolean(errors.timeline)}
                describedBy={errors.timeline ? "timeline-error" : undefined}
              />
            )}
          />
          {errors.timeline ? (
            <p id="timeline-error" className={errorClass} role="alert">
              {errors.timeline.message}
            </p>
          ) : null}
        </div>

        <div>
          <label className={fieldLabelClass} htmlFor="notes">
            Project Notes
          </label>
          <p className={fieldHelpClass}>
            Optional, but useful for repairs, access, wall condition, or scheduling details.
          </p>
          <textarea
            id="notes"
            rows={5}
            data-testid="estimate-notes"
            placeholder="Share helpful details about repairs, timing, access, wall condition, or priorities."
            aria-invalid={Boolean(errors.notes)}
            aria-describedby={errors.notes ? "notes-error" : undefined}
            {...register("notes")}
            className={textareaClass}
          />
          {errors.notes ? (
            <p id="notes-error" className={errorClass} role="alert">
              {errors.notes.message}
            </p>
          ) : null}
        </div>
      </div>
    </fieldset>
  );
}
