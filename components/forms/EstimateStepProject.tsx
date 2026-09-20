"use client";

import { Controller, useFormContext } from "react-hook-form";
import type { EstimateRequestInput } from "../../lib/validation";
import { projectTypes, propertyTypes } from "../../lib/validation";
import { FormSelect } from "./FormSelect";
import {
  errorClass,
  fieldControlClass,
  fieldHelpClass,
  fieldLabelClass,
  legendClass,
} from "./formStyles";

export function EstimateStepProject() {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<EstimateRequestInput>();

  return (
    <fieldset>
      <legend className={legendClass}>Project Basics</legend>
      <p className={fieldHelpClass}>
        Start with the property and the main type of work you are considering.
      </p>

      <div className="mt-7 grid gap-6">
        <div>
          <label className={fieldLabelClass} htmlFor="projectType">
            Primary Project Type
          </label>
          <Controller
            control={control}
            name="projectType"
            render={({ field }) => (
              <FormSelect
                id="projectType"
                label="Primary Project Type"
                testId="estimate-project-type"
                value={field.value}
                options={projectTypes}
                onChange={field.onChange}
                onBlur={field.onBlur}
                invalid={Boolean(errors.projectType)}
                describedBy={errors.projectType ? "projectType-error" : undefined}
              />
            )}
          />
          {errors.projectType ? (
            <p id="projectType-error" className={errorClass} role="alert">
              {errors.projectType.message}
            </p>
          ) : null}
        </div>

        <div>
          <label className={fieldLabelClass} htmlFor="propertyCity">
            Property City / Service Area
          </label>
          <p className={fieldHelpClass}>Enter the city where the property is located.</p>
          <input
            id="propertyCity"
            type="text"
            data-testid="estimate-city"
            placeholder="Orlando, Kissimmee, Winter Park..."
            aria-invalid={Boolean(errors.propertyCity)}
            aria-describedby={errors.propertyCity ? "propertyCity-error" : undefined}
            {...register("propertyCity")}
            className={fieldControlClass}
          />
          {errors.propertyCity ? (
            <p id="propertyCity-error" className={errorClass} role="alert">
              {errors.propertyCity.message}
            </p>
          ) : null}
        </div>

        <div>
          <label className={fieldLabelClass} htmlFor="propertyType">
            Property Type
          </label>
          <Controller
            control={control}
            name="propertyType"
            render={({ field }) => (
              <FormSelect
                id="propertyType"
                label="Property Type"
                testId="estimate-property-type"
                value={field.value}
                options={propertyTypes}
                onChange={field.onChange}
                onBlur={field.onBlur}
                invalid={Boolean(errors.propertyType)}
                describedBy={errors.propertyType ? "propertyType-error" : undefined}
              />
            )}
          />
          {errors.propertyType ? (
            <p id="propertyType-error" className={errorClass} role="alert">
              {errors.propertyType.message}
            </p>
          ) : null}
        </div>
      </div>
    </fieldset>
  );
}
