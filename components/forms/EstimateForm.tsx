"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { EstimateStepContact } from "./EstimateStepContact";
import { EstimateStepDetails } from "./EstimateStepDetails";
import { EstimateStepProject } from "./EstimateStepProject";
import { EstimateStepReview } from "./EstimateStepReview";
import { EstimateSuccess } from "./EstimateSuccess";
import { submitEstimateRequest } from "../../lib/leadSubmission";
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
    label: "Scope",
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
  const formRef = useRef<HTMLFormElement>(null);

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

  useEffect(() => {
    if (currentStep === 0 || window.matchMedia("(min-width: 768px)").matches) {
      return;
    }

    window.requestAnimationFrame(() => {
      formRef.current?.scrollIntoView({
        behavior: shouldReduceMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  }, [currentStep, shouldReduceMotion]);

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

    const result = await submitEstimateRequest(values);

    if (!result.ok) {
      setSubmitState({ status: "error", message: result.message });
      return;
    }

    setSubmitState({ status: "success", simulated: result.simulated });
  }

  if (submitState.status === "success") {
    return <EstimateSuccess simulated={submitState.simulated} />;
  }

  return (
    <FormProvider {...methods}>
      <form
        ref={formRef}
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        data-testid="estimate-form"
        aria-label="Estimate request form"
        className="scroll-mt-24 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_22px_70px_rgba(23,23,21,0.1)]"
      >
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)] [clip-path:inset(50%)]"
          {...register("company")}
        />

        <div className="border-b border-black/10 px-5 py-5 sm:px-7 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent-dark)]">
                Estimate Request
              </p>
              <p className="mt-1 text-sm text-[var(--color-ink-muted)]" aria-live="polite">
                Step {currentStep + 1} of {steps.length}: {steps[currentStep].label}
              </p>
            </div>
            <p className="hidden text-sm font-medium text-[var(--color-ink-soft)] sm:block">
              {steps[currentStep].label}
            </p>
          </div>

          <ol className="mt-5 grid grid-cols-4 gap-2" aria-label="Estimate request progress">
            {steps.map((step, index) => {
              const isComplete = currentStep > index;
              const isCurrent = currentStep === index;

              return (
                <li key={step.label} aria-current={isCurrent ? "step" : undefined}>
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold transition ${
                        isComplete
                          ? "border-[var(--color-accent-dark)] bg-[var(--color-accent-dark)] text-white"
                          : isCurrent
                            ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-[var(--color-accent-dark)]"
                            : "border-black/10 bg-[var(--color-page)] text-[var(--color-ink-muted)]"
                      }`}
                    >
                      {isComplete ? <Check aria-hidden="true" size={13} strokeWidth={3} /> : index + 1}
                    </span>
                    <span className="hidden text-xs font-semibold text-[var(--color-ink-soft)] md:inline">
                      {step.label}
                    </span>
                  </div>
                  <span
                    aria-hidden="true"
                    className={`mt-3 block h-[2px] rounded-full ${
                      currentStep >= index ? "bg-[var(--color-accent)]" : "bg-black/10"
                    }`}
                  />
                </li>
              );
            })}
          </ol>
        </div>

        <div className="px-5 py-7 sm:px-7 sm:py-8 lg:px-8 lg:py-9">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: "easeOut" }}
          >
            {currentStep === 0 ? <EstimateStepProject /> : null}
            {currentStep === 1 ? <EstimateStepDetails /> : null}
            {currentStep === 2 ? <EstimateStepContact /> : null}
            {currentStep === 3 ? <EstimateStepReview /> : null}
          </motion.div>

          {submitState.status === "error" ? (
            <p
              className="mt-6 rounded-lg border border-[#983f34]/20 bg-[#983f34]/5 px-4 py-3 text-sm leading-6 text-[#84372e]"
              role="alert"
              aria-live="assertive"
            >
              {submitState.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col-reverse gap-3 border-t border-black/10 bg-[var(--color-page)] px-5 py-5 sm:flex-row sm:justify-between sm:px-7 lg:px-8">
          <Button
            type="button"
            data-testid="estimate-back"
            variant="ghost"
            className="border border-black/10 bg-white"
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
