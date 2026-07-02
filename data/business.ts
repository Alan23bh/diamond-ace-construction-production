import type { BusinessInfo } from "../types";

export const business: BusinessInfo = {
  name: "Diamond Ace Construction LLC",
  shortName: "Diamond Ace",
  description:
    "Family-owned painting and interior improvement company serving all of Florida, with a strong focus on Central Florida.",
  familyOwnedLine:
    "Family-owned, detail-focused, and built around clear communication.",
  primaryCta: "Get a Free Estimate",
  secondaryCta: "View Work Examples",
  contact: {
    emailDisplay: "dacflorida11@gmail.com",
    emailHref: "mailto:dacflorida11@gmail.com",
    leadDestination: "dacflorida11@gmail.com",
  },
  hours: [
    { label: "Monday - Friday", value: "8:00 AM - 6:00 PM" },
    { label: "Saturday", value: "By appointment" },
    { label: "Sunday", value: "Closed" },
  ],
};

export const homeContent = {
  eyebrow: "Family-owned in Florida",
  headline:
    "Painting, apartment turnovers, repairs, and reliable interior improvement work.",
  intro:
    "Diamond Ace Construction LLC helps Central Florida homeowners, landlords, and property managers keep spaces clean, finished, and ready for everyday use.",
  secondaryCta: "Explore Services",
  visualTitle: "Interior refresh placeholder",
  visualDescription:
    "A reserved visual area for future project photography, before-and-after details, or finish-focused work examples.",
  trustPoints: [
    {
      label: "Family-Owned",
      description: "Direct communication and careful workmanship from a local team.",
    },
    {
      label: "Central Florida Focus",
      description: "Serving Florida with a strong focus on the Orlando area.",
    },
    {
      label: "Homes, Rentals & Apartment Turnovers",
      description: "Built for residential refreshes, repairs, and make-ready work.",
    },
    {
      label: "Free Estimates",
      description: "Clear next steps before painting, repairs, or improvement work begins.",
    },
  ],
  serviceIntroTitle: "A focused foundation for the full marketing site.",
  serviceIntro:
    "The homepage will group services into four clear categories, while the full services page can expand into the complete service list.",
  serviceCategories: [
    "Residential Painting",
    "Apartment Turnovers",
    "Interior Repairs & Trim",
    "Light Remodeling",
  ],
};

export const servicesContent = {
  eyebrow: "Services",
  headline: "Painting, repair, turnover, and light remodeling services.",
  intro:
    "This page is scaffolded for the full service content pass. The complete service list is centralized here now so the next build ticket can expand it cleanly.",
  services: [
    "Interior painting",
    "Exterior painting",
    "Apartment turnovers",
    "Drywall patching and wall repair",
    "Baseboards",
    "Trim work",
    "Door repairs and installation support",
    "Cabinet painting / cabinet refresh",
    "Pressure washing",
    "Flooring support / light flooring work",
    "Bathroom and kitchen light remodels",
  ],
};

export const portfolioContent = {
  eyebrow: "Portfolio",
  headline:
    "Work examples for painting, repairs, turnovers, and interior improvements.",
  intro:
    "During development, these are styled placeholders only. They show the intended portfolio structure without claiming completed project photography.",
  placeholderLabel: "Placeholder image panel",
  examples: [
    "Interior repaint example",
    "Apartment turnover example",
    "Trim repair example",
    "Cabinet refresh example",
  ],
};

export const contactContent = {
  eyebrow: "Estimate request",
  headline: "Request a free estimate.",
  intro:
    "Tell us about the project, timing, and location. Diamond Ace Construction LLC will review the details and follow up with the next step toward an estimate.",
  nextSteps: [
    "We review the project details.",
    "We follow up with any needed questions.",
    "We confirm a path toward an estimate.",
  ],
};
