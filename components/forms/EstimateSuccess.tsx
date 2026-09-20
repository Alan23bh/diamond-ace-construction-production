import { CheckCircle2 } from "lucide-react";
import { business } from "../../data/business";
import { Button } from "../ui/Button";

type EstimateSuccessProps = {
  simulated: boolean;
};

export function EstimateSuccess({ simulated }: EstimateSuccessProps) {
  return (
    <div
      data-testid="estimate-success"
      role="status"
      aria-live="polite"
      className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_18px_50px_rgba(23,23,21,0.08)] sm:p-8 lg:p-10"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent-dark)]">
        <CheckCircle2 aria-hidden="true" size={24} />
      </span>
      <p className="mt-6 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent-dark)]">
        Request Received
      </p>
      <h2 className="text-balance mt-3 max-w-2xl text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-[var(--color-ink)] sm:text-4xl">
        {simulated
          ? "Thanks. Your Estimate Request Has Been Prepared Successfully."
          : "Thanks. Your Estimate Request Has Been Sent."}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-ink-soft)]">
        We received the request and will review the property, service, timing, and contact details you submitted.
      </p>
      <p className="mt-3 text-sm leading-6 text-[var(--color-ink-muted)]">
        Questions can also be sent to {business.contact.emailDisplay}.
      </p>

      {simulated ? (
        <p className="mt-6 rounded-xl border border-[var(--color-accent)]/30 bg-[var(--color-accent-soft)] p-4 text-sm leading-6 text-[var(--color-ink-soft)]">
          Local development note: this request was validated and simulated locally. No live lead was created.
        </p>
      ) : null}

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Button href="/services">Review Services</Button>
        <Button href="/" variant="ghost" className="border border-black/10">
          Return Home
        </Button>
      </div>
    </div>
  );
}
