type EstimateSuccessProps = {
  simulated: boolean;
};

export function EstimateSuccess({ simulated }: EstimateSuccessProps) {
  return (
    <div
      data-testid="estimate-success"
      className="border border-[var(--color-border)] bg-[rgba(23,21,17,0.72)] p-6"
    >
      <p className="text-xs font-semibold uppercase text-[var(--color-brass)]">Request received</p>
      <h2 className="mt-4 text-2xl font-semibold text-[var(--color-warm-white)]">
        Thanks. Your estimate request has been prepared successfully.
      </h2>
      <p className="mt-4 text-sm leading-7 text-[var(--color-warm-muted)]">
        We received your estimate request and will respond soon.
      </p>
      {simulated ? (
        <p className="mt-4 border-l border-[var(--color-brass)] pl-4 text-sm leading-7 text-[var(--color-soft-beige)]">
          Local development note: email delivery is not configured, so this submission was
          simulated and logged on the server.
        </p>
      ) : null}
    </div>
  );
}
