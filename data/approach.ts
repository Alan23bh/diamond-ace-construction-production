export type ApproachStep = {
  number: string;
  title: string;
  description: string;
};

export type Standard = {
  title: string;
  description: string;
};

export type Audience = {
  label: string;
  description: string;
};

export const approachHero = {
  eyebrow: "Our Approach",
  title: "A dependable process for painting, repairs, turnovers, and interior improvements.",
  intro:
    "Diamond Ace Construction LLC is built around clear communication, careful preparation, respectful job sites, and finish-focused work for Central Florida homes and rentals.",
  note:
    "Every project starts with understanding the space, the scope, and what needs to happen next.",
};

export const approachSteps: ApproachStep[] = [
  {
    number: "01",
    title: "Initial Walkthrough & Estimate",
    description:
      "We start by learning what needs to be painted, repaired, refreshed, or prepared so the estimate matches the actual work.",
  },
  {
    number: "02",
    title: "Clear Scope & Scheduling",
    description:
      "The project scope, timing, access needs, and expectations are clarified before work begins.",
  },
  {
    number: "03",
    title: "Surface Prep & Protection",
    description:
      "Floors, fixtures, and occupied areas are treated with care while surfaces are prepared for better finish work.",
  },
  {
    number: "04",
    title: "Painting, Repairs, Turnover, or Improvement Work",
    description:
      "The approved work is completed with attention to clean lines, repair details, and practical property needs.",
  },
  {
    number: "05",
    title: "Final Walkthrough & Cleanup",
    description:
      "The work area is reviewed, punch-list details are addressed, and the space is left orderly.",
  },
  {
    number: "06",
    title: "Next-Step Recommendations When Needed",
    description:
      "If additional repair, maintenance, or improvement items come up, we explain them clearly so you can plan ahead.",
  },
];

export const qualityStandards: Standard[] = [
  {
    title: "Protect floors, fixtures, and occupied spaces",
    description:
      "Careful protection helps keep homes and rentals usable, orderly, and respected during the work.",
  },
  {
    title: "Prepare surfaces before finish work",
    description:
      "Prep is treated as part of the finished result, especially for paint, wall repair, trim, and touch-up work.",
  },
  {
    title: "Communicate scope and scheduling clearly",
    description:
      "Clear expectations reduce surprises and help homeowners, landlords, and managers coordinate access.",
  },
  {
    title: "Keep work areas orderly",
    description:
      "A neat work area supports better execution and makes the process easier for occupied or turnover spaces.",
  },
  {
    title: "Complete punch-list details carefully",
    description:
      "Small details matter when a room, rental, or interior repair needs to feel complete.",
  },
  {
    title: "Leave spaces ready for what comes next",
    description:
      "The goal is a cleaner, sharper, more usable space after the work is finished.",
  },
];

export const whoWeServe: Audience[] = [
  {
    label: "Homeowners",
    description: "Interior and exterior painting, repairs, trim, and practical updates.",
  },
  {
    label: "Landlords",
    description: "Reliable refresh work for rental properties between residents or repairs.",
  },
  {
    label: "Property managers",
    description: "Clear scope, scheduling, and punch-list support for managed units.",
  },
  {
    label: "Rental owners",
    description: "Painting, turnover, and light improvement work to keep properties ready.",
  },
  {
    label: "Move-in and move-out refreshes",
    description: "Repainting, minor repairs, and cleanup-minded finish work.",
  },
  {
    label: "Occupied residential interiors",
    description: "Respectful preparation and orderly work for lived-in spaces.",
  },
];

export const approachCta = {
  title: "Start with a clear estimate.",
  description:
    "Tell us what needs to be painted, repaired, refreshed, or prepared, along with your timing and location. We will review the details and help define the next step.",
  ctaLabel: "Get a Free Estimate",
  href: "/contact",
} as const;
