export type ServiceCategory = {
  number: string;
  title: string;
  description: string;
  examples: string[];
  href: "/services";
  visualLabel: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    number: "01",
    title: "Residential Painting",
    description:
      "Interior and exterior painting with careful prep, clean lines, and durable finishes that make homes feel cared for and complete.",
    examples: ["Interior painting", "Exterior painting", "Paint prep and touch-ups"],
    href: "/services",
    visualLabel: "Prep and finish",
  },
  {
    number: "02",
    title: "Apartment Turnovers",
    description:
      "Efficient move-out refreshes, repainting, minor repairs, and rental-ready punch-list work for owners and property managers.",
    examples: ["Move-out repainting", "Minor repair support", "Rental-ready punch lists"],
    href: "/services",
    visualLabel: "Ready for move-in",
  },
  {
    number: "03",
    title: "Interior Repairs & Trim",
    description:
      "Drywall patches, wall repair, baseboards, casing, trim, and door repair support handled with a finish-focused eye.",
    examples: ["Drywall patching", "Baseboards and casing", "Door repair support"],
    href: "/services",
    visualLabel: "Finish details",
  },
  {
    number: "04",
    title: "Light Remodeling",
    description:
      "Cabinet refreshes, pressure washing, flooring support, and practical kitchen or bathroom updates for better everyday spaces.",
    examples: ["Cabinet refreshes", "Light flooring support", "Kitchen and bathroom updates"],
    href: "/services",
    visualLabel: "Practical upgrades",
  },
];

export const serviceCategoryOverview = {
  eyebrow: "Services overview",
  title: "Focused improvements for homes, rentals, and turnover-ready interiors.",
  intro:
    "Diamond Ace Construction LLC brings painting, repair, and light improvement work together under one dependable Central Florida team.",
};
