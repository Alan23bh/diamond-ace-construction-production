import type { BusinessInfo } from "../types";

export const business: BusinessInfo = {
  legalName: "Diamond Ace Construction LLC",
  name: "Diamond Ace Construction",
  shortName: "Diamond Ace",
  description:
    "Family-owned painting company specializing in apartment turnovers, interior painting, drywall and texture repair, and exterior painting across Central Florida.",
  primaryCta: "Request an Estimate",
  contact: {
    emailDisplay: "dacflorida11@gmail.com",
    emailHref: "mailto:dacflorida11@gmail.com",
    leadDestination: "dacflorida11@gmail.com",
  },
  hours: [
    {
      label: "Monday–Friday",
      value: "9:00 AM–5:00 PM",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  foundedYear: 2008,
  currentNameSince: 2014,
};

export const homeContent = {
  eyebrow: "Family-Owned • Central Florida",
  headline: "Apartment Turnovers, Painting & Drywall Work for Central Florida.",
  intro:
    "Diamond Ace Construction helps property managers, landlords, homeowners, and businesses get spaces repainted, repaired, and ready for what comes next.",
  secondaryCta: "Explore Services",
  trustPoints: [
    {
      label: "Apartment Turnovers",
      description: "Repainting and wall-repair support for move-out and make-ready work.",
    },
    {
      label: "Painting First",
      description: "Interior painting is at the center of the work we take on.",
    },
    {
      label: "Central Florida",
      description: "Focused on Poinciana, Kissimmee, Orlando, and nearby communities.",
    },
    {
      label: "Operating Since 2008",
      description: "Years of hands-on experience across apartments and residential properties.",
    },
  ],
} as const;

export const contactContent = {
  eyebrow: "Estimate Request",
  headline: "Tell Us About the Property. We’ll Review the Next Step.",
  intro:
    "Share the service, property location, timing, and best way to reach you. We’ll review the details and follow up with the next step.",
  nextSteps: [
    {
      title: "We Review the Request",
      description: "We look over the property, service, scope, timing, and contact details you submit.",
    },
    {
      title: "We Follow Up",
      description: "If anything needs clarification, we follow up with the questions needed to understand the work.",
    },
    {
      title: "We Confirm the Next Step",
      description: "Once the scope is understood, we confirm the next step toward an estimate and scheduling conversation.",
    },
  ],
} as const;
