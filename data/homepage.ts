export const turnoverFeature = {
  eyebrow: "Apartment Turnovers",
  title: "Built for Move-Outs, Make-Ready Work, and the Next Resident.",
  description:
    "Apartment turnover painting is one of the areas Diamond Ace has handled most often. We help get walls repainted, repair-ready, and prepared for the next resident without turning a straightforward refresh into unnecessary complexity.",
  supportingCopy:
    "When walls need more than paint, drywall and texture repair can be handled as part of the same practical scope.",
  highlights: ["Move-Out Repainting", "Drywall & Texture Repair", "Make-Ready Refreshes"],
  ctaLabel: "Explore Apartment Turnovers",
  href: "/services#apartment-turnovers",
  image: "/media/home/turnover-feature.webp",
  imageAlt: "Painter applying fresh paint to an interior wall during a renovation",
} as const;

export const homeAudiences = {
  eyebrow: "Who We Serve",
  title: "Painting and Repair Support for the Properties People Live In, Manage, and Maintain.",
  intro:
    "The same core services can support a homeowner refreshing a room or a property manager preparing a unit for its next resident.",
  items: [
    {
      id: "property-managers",
      title: "Property Managers & Apartment Communities",
      description:
        "Turnover repainting, wall repair, and make-ready support for managed units and apartment properties.",
    },
    {
      id: "landlords-investors",
      title: "Landlords & Investors",
      description:
        "Practical painting and repair work for rentals that need to be refreshed, maintained, or prepared for occupancy.",
    },
    {
      id: "homeowners",
      title: "Homeowners",
      description:
        "Interior and exterior painting plus drywall and texture repair for lived-in residential spaces.",
    },
    {
      id: "commercial",
      title: "Commercial & Business Properties",
      description:
        "Select painting and wall-repair projects for business spaces where a clean, professional finish matters.",
    },
  ],
} as const;

export const preparationFeature = {
  eyebrow: "Prep & Finish",
  title: "Better Finishes Start With the Work Before the Paint.",
  description:
    "Interior painting and wall repair look better when surfaces, edges, and surrounding spaces are prepared before finish work begins. The goal is straightforward: cleaner prep, cleaner repair details, and a more complete finished space.",
  highlights: ["Surface Prep", "Wall Repair", "Protection", "Clean Finish Details"],
  ctaLabel: "See Our Approach",
  href: "/approach",
  image: "/media/home/prep-feature.webp",
  imageAlt: "Painter applying masking tape along an interior wall before painting",
} as const;

export const homeProcess = {
  eyebrow: "How It Works",
  title: "A Clear Path From Estimate Request to Finished Work.",
  intro:
    "The process stays simple so homeowners, landlords, and property managers know what happens next.",
  steps: [
    {
      number: "01",
      title: "Request an Estimate",
      description:
        "Share the property location, service, timing, and project details through the estimate form.",
    },
    {
      number: "02",
      title: "We Review the Details",
      description:
        "We review the request and follow up by email when we need clarification about the scope.",
    },
    {
      number: "03",
      title: "Confirm Scope & Scheduling",
      description:
        "Once the project is understood, we confirm the next step toward an estimate and discuss timing.",
    },
    {
      number: "04",
      title: "Prep, Paint & Finish",
      description:
        "Approved work is completed with attention to preparation, repair details, and a clean finished result.",
    },
  ],
  ctaLabel: "View Our Approach",
  href: "/approach",
} as const;

export const finalEstimateCta = {
  eyebrow: "Start a Project",
  title: "Tell Us What Needs to Be Repainted, Repaired, or Turned Over.",
  description:
    "Send the property location and a few project details. We will review the request and follow up by email with the next step.",
  ctaLabel: "Request an Estimate",
  href: "/contact",
} as const;
