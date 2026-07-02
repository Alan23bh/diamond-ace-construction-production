"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { EstimateStepContact } from "./EstimateStepContact";
import { EstimateStepDetails } from "./EstimateStepDetails";
import { EstimateStepProject } from "./EstimateStepProject";
import { EstimateStepReview } from "./EstimateStepReview";
import { EstimateSuccess } from "./EstimateSuccess";
import {
  estimateDefaultValues,
  estimateRequestSchema,
  type EstimateRequestInput,
} from "../../lib/validation";
import { Button } from "../ui/Button";

const steps = [
  {
    label: "Project",
    fields: ["projectType", "propertyCity", "propertyType"] satisfies Array<
      keyof EstimateRequestInput
    >,
  },
  {
    label: "Details",
    fields: ["services", "projectSize", "timeline", "notes"] satisfies Array<
      keyof EstimateRequestInput
    >,
  },
  {
    label: "Contact",
    fields: ["name", "email", "phone", "preferredContactMethod"] satisfies Array<
      keyof EstimateRequestInput
    >,
  },
  {
    label: "Review",
    fields: [] satisfies Array<keyof EstimateRequestInput>,
  },
];

type SubmitState =
  | { status: "idle"; simulated?: never; message?: never }
  | { status: "success"; simulated: boolean; message?: never }
  | { status: "error"; message: string; simulated?: never };

export function EstimateForm() {
  const shouldReduceMotion = useReducedMotion();
  const [currentStep, setCurrentStep] = useState(0);
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle" });

  const methods = useForm<EstimateRequestInput>({
    resolver: zodResolver(estimateRequestSchema),
    defaultValues: estimateDefaultValues,
    mode: "onBlur",
  });

  const {
    handleSubmit,
    register,
    trigger,
    formState: { isSubmitting },
  } = methods;

  async function goNext() {
    const fields = steps[currentStep].fields;
    const isValid = await trigger(fields, { shouldFocus: true });

    if (!isValid) {
      return;
    }

    setCurrentStep((step) => Math.min(step + 1, steps.length - 1));
  }

  function goBack() {
    setCurrentStep((step) => Math.max(step - 1, 0));
  }

  async function onSubmit(values: EstimateRequestInput) {
    setSubmitState({ status: "idle" });

    const response = await fetch("/api/estimate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(window.location.search.includes("e2e=1") ? { "x-dac-e2e-test": "true" } : {}),
      },
      body: JSON.stringify(values),
    });

    const result = (await response.json().catch(() => ({}))) as {
      ok?: boolean;
      simulated?: boolean;
      message?: string;
    };

    if (!response.ok || !result.ok) {
      setSubmitState({
        status: "error",
        message: result.message || "We could not send the estimate request right now.",
      });
      return;
    }

    setSubmitState({ status: "success", simulated: Boolean(result.simulated) });
  }

  if (submitState.status === "success") {
    return <EstimateSuccess simulated={submitState.simulated} />;
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        data-testid="estimate-form"
        className="border border-[var(--color-border)] bg-[rgba(23,21,17,0.72)] p-5 sm:p-6"
      >
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
          {...register("company")}
        />

        <ol className="grid grid-cols-4 border-b border-[var(--color-border)] pb-5">
          {steps.map((step, index) => (
            <li key={step.label}>
              <div
                className="flex flex-col gap-2"
                aria-current={currentStep === index ? "step" : undefined}
              >
                <span className="text-xs font-semibold text-[var(--color-brass)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-xs font-semibold text-[var(--color-warm-muted)] sm:text-sm">
                  {step.label}
                </span>
                <span
                  aria-hidden="true"
                  className={
                    currentStep >= index
                      ? "h-px bg-[var(--color-brass)]"
                      : "h-px bg-[var(--color-border)]"
                  }
                />
              </div>
            </li>
          ))}
        </ol>

        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: "easeOut" }}
          className="mt-6"
        >
          {currentStep === 0 ? <EstimateStepProject /> : null}
          {currentStep === 1 ? <EstimateStepDetails /> : null}
          {currentStep === 2 ? <EstimateStepContact /> : null}
          {currentStep === 3 ? <EstimateStepReview /> : null}
        </motion.div>

        {submitState.status === "error" ? (
          <p className="mt-5 border-l border-[var(--color-brass)] pl-4 text-sm leading-6 text-[var(--color-soft-beige)]">
            {submitState.message}
          </p>
        ) : null}

        <div className="mt-7 flex flex-col-reverse gap-3 border-t border-[var(--color-border)] pt-5 sm:flex-row sm:justify-between">
          <Button
            type="button"
            data-testid="estimate-back"
            variant="secondary"
            onClick={goBack}
            disabled={currentStep === 0}
          >
            Back
          </Button>

          {currentStep < steps.length - 1 ? (
            <Button type="button" data-testid="estimate-continue" onClick={goNext}>
              Continue
            </Button>
          ) : (
            <Button type="submit" data-testid="estimate-submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Submit Estimate Request"}
            </Button>
          )}
        </div>
      </form>
    </FormProvider>
  );
}
