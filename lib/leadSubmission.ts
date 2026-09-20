import type { EstimateRequestInput } from "./validation";

export const netlifyEstimateFormName = "diamond-ace-estimate-request";
export const netlifyEstimateFormTarget = "/__forms.html";

function toNetlifyFormBody(values: EstimateRequestInput) {
  const formData = new URLSearchParams();

  formData.set("form-name", netlifyEstimateFormName);
  formData.set("subject", "New Diamond Ace Estimate Request (%{submissionId})");
  formData.set("company", values.company || "");
  formData.set("projectType", values.projectType);
  formData.set("propertyCity", values.propertyCity);
  formData.set("propertyType", values.propertyType);
  formData.set("services", values.services.join(", "));
  formData.set("projectSize", values.projectSize);
  formData.set("timeline", values.timeline);
  formData.set("notes", values.notes || "Not provided");
  formData.set("name", values.name);
  formData.set("email", values.email);
  formData.set("phone", values.phone || "Not provided");
  formData.set("preferredContactMethod", values.preferredContactMethod);

  return formData.toString();
}

export type LeadSubmissionResult =
  | { ok: true; simulated: boolean }
  | { ok: false; message: string };

export async function submitEstimateRequest(
  values: EstimateRequestInput,
): Promise<LeadSubmissionResult> {
  // Netlify's form service only exists on a deployed Netlify site. Keeping local
  // development deterministic lets the full multi-step UX and E2E suite run
  // without accidentally creating real leads while someone is testing the app.
  if (process.env.NODE_ENV === "development") {
    console.info("Simulated Netlify estimate request:", {
      ...values,
      company: values.company ? "[honeypot populated]" : "",
    });

    return { ok: true, simulated: true };
  }

  try {
    const response = await fetch(netlifyEstimateFormTarget, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: toNetlifyFormBody(values),
    });

    if (!response.ok) {
      return {
        ok: false,
        message:
          "We could not send the estimate request right now. Please try again or email Diamond Ace directly.",
      };
    }

    return { ok: true, simulated: false };
  } catch {
    return {
      ok: false,
      message:
        "We could not reach the estimate service. Please check your connection and try again.",
    };
  }
}
