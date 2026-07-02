import { NextResponse } from "next/server";
import { createLeadPayload, getEmailConfig, sendEstimateEmails } from "../../../lib/email";
import { estimateRequestSchema } from "../../../lib/validation";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const parsed = estimateRequestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Please review the highlighted fields.", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  const leadPayload = createLeadPayload(parsed.data);
  const emailConfig = getEmailConfig();
  const isE2eTest = request.headers.get("x-dac-e2e-test") === "true";

  if (!emailConfig || (isE2eTest && process.env.NODE_ENV === "development")) {
    if (process.env.NODE_ENV === "development") {
      console.info("Simulated estimate request payload:", JSON.stringify(leadPayload, null, 2));
      return NextResponse.json({ ok: true, simulated: true });
    }

    return NextResponse.json(
      { message: "Estimate delivery is not configured yet." },
      { status: 503 },
    );
  }

  try {
    await sendEstimateEmails(parsed.data);
    return NextResponse.json({ ok: true, simulated: false });
  } catch (error) {
    console.error("Estimate email delivery failed:", error);
    return NextResponse.json(
      { message: "We could not send the estimate request right now." },
      { status: 500 },
    );
  }
}
