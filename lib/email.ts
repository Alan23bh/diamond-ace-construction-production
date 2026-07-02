import { Resend } from "resend";
import type { EstimateRequestInput } from "./validation";

type EmailConfig = {
  apiKey: string;
  from: string;
  leadRecipient: string;
};

export function getEmailConfig(): EmailConfig | null {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  const leadRecipient = process.env.LEAD_RECIPIENT;

  if (!apiKey || !from || !leadRecipient) {
    return null;
  }

  return { apiKey, from, leadRecipient };
}

export function createLeadPayload(data: EstimateRequestInput) {
  return {
    submittedAt: new Date().toISOString(),
    project: {
      projectType: data.projectType,
      propertyCity: data.propertyCity,
      propertyType: data.propertyType,
    },
    details: {
      services: data.services,
      projectSize: data.projectSize,
      timeline: data.timeline,
      notes: data.notes || "",
    },
    contact: {
      name: data.name,
      email: data.email,
      phone: data.phone || "",
      preferredContactMethod: data.preferredContactMethod,
    },
  };
}

function formatServices(services: string[]) {
  return services.map((service) => `- ${service}`).join("\n");
}

function createLeadEmailText(data: EstimateRequestInput) {
  return `New estimate request

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Preferred contact method: ${data.preferredContactMethod}

Project type: ${data.projectType}
Property city / service area: ${data.propertyCity}
Property type: ${data.propertyType}

Main services needed:
${formatServices(data.services)}

Approximate project size or rooms: ${data.projectSize}
Preferred timeline: ${data.timeline}

Project notes:
${data.notes || "Not provided"}`;
}

function createVisitorConfirmationText(data: EstimateRequestInput) {
  return `Hi ${data.name},

We received your estimate request and will respond soon.

Project type: ${data.projectType}
Property city / service area: ${data.propertyCity}
Preferred timeline: ${data.timeline}

Thank you,
Diamond Ace Construction LLC`;
}

export async function sendEstimateEmails(data: EstimateRequestInput) {
  const config = getEmailConfig();

  if (!config) {
    throw new Error("Email environment variables are not configured.");
  }

  const resend = new Resend(config.apiKey);

  const leadEmail = await resend.emails.send({
    from: config.from,
    to: config.leadRecipient,
    replyTo: data.email,
    subject: `New estimate request: ${data.projectType} in ${data.propertyCity}`,
    text: createLeadEmailText(data),
  });

  if (leadEmail.error) {
    throw new Error(leadEmail.error.message);
  }

  const confirmationEmail = await resend.emails.send({
    from: config.from,
    to: data.email,
    subject: "We received your estimate request",
    text: createVisitorConfirmationText(data),
  });

  if (confirmationEmail.error) {
    throw new Error(confirmationEmail.error.message);
  }

  return {
    leadEmailId: leadEmail.data?.id,
    confirmationEmailId: confirmationEmail.data?.id,
  };
}
