export type ServiceGroup = {
  number: string;
  title: string;
  description: string;
  services: string[];
};

export type IncludedWorkItem = {
  title: string;
  description: string;
};

export type ServiceFitItem = {
  label: string;
  description: string;
};

export const servicesHero = {
  eyebrow: "Services",
  title: "Painting, turnover, repair, and light improvement services for Florida properties.",
  intro:
    "Diamond Ace Construction LLC helps homeowners, landlords, property managers, and rental owners handle practical improvements with clear scope, careful preparation, and finish-focused work.",
  note:
    "Service details are organized by the type of outcome most clients need: a better finish, a faster turnover, a cleaner repair, or a practical property update.",
};

export const serviceGroups: ServiceGroup[] = [
  {
    number: "01",
    title: "Residential Painting",
    description:
      "Interior and exterior painting support for homes and residential spaces that need careful prep, clean lines, and finishes suited for everyday use.",
    services: [
      "Interior painting",
      "Exterior painting",
      "Paint prep and touch-ups",
      "Cabinet painting / cabinet refresh",
    ],
  },
  {
    number: "02",
    title: "Apartment Turnovers",
    description:
      "Move-out and move-in refresh work for rental units that need repainting, minor repairs, and a clear punch-list path before the next resident.",
    services: [
      "Move-out repainting",
      "Minor repair support",
      "Rental-ready punch-list work",
      "Move-in / move-out refreshes",
    ],
  },
  {
    number: "03",
    title: "Interior Repairs & Trim",
    description:
      "Finish-focused repair support for walls, trim, baseboards, and doors so interior spaces feel cleaner, sharper, and more complete.",
    services: [
      "Drywall patching and wall repair",
      "Baseboards",
      "Trim work",
      "Door repairs and installation support",
    ],
  },
  {
    number: "04",
    title: "Light Remodeling & Property Support",
    description:
      "Practical property updates and support work for areas that need a refresh, better function, or preparation before painting and finish work.",
    services: [
      "Pressure washing",
      "Flooring support / light flooring work",
      "Bathroom light updates",
      "Kitchen light updates",
    ],
  },
];

export const includedWork: IncludedWorkItem[] = [
  {
    title: "Clear scope",
    description:
      "The work is defined up front so project needs, access, timing, and expectations are easier to coordinate.",
  },
  {
    title: "Surface prep",
    description:
      "Prep is treated as part of the finished result, especially for painting, wall repair, trim, and touch-up work.",
  },
  {
    title: "Protection for occupied spaces",
    description:
      "Floors, fixtures, and active living or rental areas are treated with care during the work.",
  },
  {
    title: "Finish details",
    description:
      "Attention goes to edges, repairs, trim, and punch-list items that affect how complete the space feels.",
  },
  {
    title: "Cleanup and final walkthrough",
    description:
      "The work area is reviewed and left orderly so the space is ready for what comes next.",
  },
];

export const serviceFit: ServiceFitItem[] = [
  {
    label: "Homeowners",
    description: "Painting, repairs, trim, cabinet refreshes, and practical interior updates.",
  },
  {
    label: "Landlords",
    description: "Turnover-ready repainting, repair support, and rental refresh work.",
  },
  {
    label: "Property managers",
    description: "Scope-driven punch-list support for managed homes and apartment units.",
  },
  {
    label: "Rental owners",
    description: "Move-in, move-out, and maintenance-minded improvements for rental properties.",
  },
  {
    label: "Move-in and move-out projects",
    description: "Focused updates that help spaces feel cleaner, finished, and ready to use.",
  },
];

export const servicesCta = {
  title: "Tell us what needs attention.",
  description:
    "Share the project type, location, timing, and any repair or turnover details. Diamond Ace Construction LLC will review the scope and help define the next step.",
  ctaLabel: "Get a Free Estimate",
  href: "/contact",
} as const;
