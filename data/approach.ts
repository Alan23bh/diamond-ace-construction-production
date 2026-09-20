export type ApproachStep = {
  number: string;
  title: string;
  description: string;
};

export type ApproachHighlight = {
  label: string;
  description: string;
};

export type ApproachDetail = {
  title: string;
  description: string;
};

export const approachHero = {
  eyebrow: "Our Approach • Central Florida",
  title: "Clear Scope, Careful Prep & Finish-Focused Work.",
  intro:
    "Diamond Ace Construction keeps painting, turnover, and wall-repair work centered on clear expectations, property-aware preparation, and a clean finished result.",
  primaryCta: "Request an Estimate",
  secondaryCta: "See the Process",
  image: "/media/approach/approach-hero.webp",
  imageAlt: "Painter preparing to work inside a bright room with a brush and stepladder",
  imageCredit: "Anete Lusina / Pexels",
  imageSource: "https://www.pexels.com/photo/painter-with-brush-leaning-on-stepladder-4792500/",
} as const;

export const approachHighlights: ApproachHighlight[] = [
  {
    label: "Clear Scope",
    description: "Understand the property, service, timing, and areas that need attention.",
  },
  {
    label: "Scheduling & Access",
    description: "Account for occupied spaces, vacant units, turnover timing, and property access.",
  },
  {
    label: "Prep & Protection",
    description: "Prepare surfaces and protect nearby areas before finish work begins.",
  },
  {
    label: "Clean Handoff",
    description: "Review the finished work and leave the space ready for what comes next.",
  },
];

export const approachOverview = {
  eyebrow: "How We Work",
  title: "A Clear Process From Estimate Request to Finished Work.",
  intro:
    "The exact scope changes from project to project, but the working sequence stays practical so homeowners, landlords, and property managers know what happens next.",
} as const;

export const approachSteps: ApproachStep[] = [
  {
    number: "01",
    title: "Estimate Request",
    description:
      "Share the property location, services needed, timing, and project details through the estimate form.",
  },
  {
    number: "02",
    title: "Scope Review",
    description:
      "We review the request and follow up by email when we need clarification about the space or requested work.",
  },
  {
    number: "03",
    title: "Scheduling & Access",
    description:
      "Once the scope is understood, timing, access, and the next step toward an estimate are discussed.",
  },
  {
    number: "04",
    title: "Prep & Protection",
    description:
      "Surfaces and nearby areas are prepared with the property type and approved scope in mind before finish work begins.",
  },
  {
    number: "05",
    title: "Painting & Repair Work",
    description:
      "The approved painting, drywall, texture, or turnover work is completed with attention to prep, coverage, and repair details.",
  },
  {
    number: "06",
    title: "Final Review & Clean Handoff",
    description:
      "The completed work is reviewed and the space is left orderly and ready for the owner, resident, manager, or next stage of the property.",
  },
];

export const approachPreparation = {
  eyebrow: "Prep & Protection",
  title: "Preparation Is Part of the Finished Result.",
  description:
    "Paint can only look as clean as the surface and working conditions allow. That is why preparation, repair details, and protection are treated as part of the work instead of an afterthought.",
  image: "/media/approach/approach-prep.webp",
  imageAlt: "Painter preparing and protecting a wall before painting",
  imageCredit: "Ksenia Chernaya / Pexels",
  imageSource: "https://www.pexels.com/photo/faceless-house-painter-undercoating-wall-in-bright-room-5691471/",
  points: [
    "Review Wall & Surface Condition",
    "Protect Nearby Areas",
    "Handle Approved Repair Work",
    "Prepare Before Finish Coats",
  ],
} as const;

export const approachClarity = {
  eyebrow: "Before Work Begins",
  title: "The Details We Keep Clear Before the First Coat.",
  intro:
    "Good project communication is mostly about removing avoidable surprises before work starts.",
  items: [
    {
      title: "Property & Service",
      description:
        "What type of property it is, what areas need attention, and which Diamond Ace services fit the request.",
    },
    {
      title: "Scope & Condition",
      description:
        "What is being painted or repaired, what condition the surfaces are in, and what prep may be needed.",
    },
    {
      title: "Timing & Access",
      description:
        "When the work is needed, whether the space is occupied or vacant, and how the work area can be accessed.",
    },
    {
      title: "Next Step",
      description:
        "What information is still needed, how the estimate process moves forward, and what happens before work begins.",
    },
  ] satisfies ApproachDetail[],
} as const;

export const approachPropertyContext = {
  eyebrow: "Working Around the Property",
  title: "Different Properties Need Different Working Conditions.",
  description:
    "A lived-in home, a vacant rental, and an apartment turnover may use the same painting and repair skills, but access, protection, timing, and handoff expectations can be very different.",
  image: "/media/home/turnover-feature.webp",
  imageAlt: "Painter applying paint carefully around the edge of an interior wall",
  points: [
    {
      title: "Occupied Spaces",
      description:
        "Furniture, daily access, protection needs, and communication matter more when people are living or working around the project.",
    },
    {
      title: "Vacant & Turnover Units",
      description:
        "The focus shifts toward practical make-ready timing, wall condition, repainting, and getting the space ready for its next use.",
    },
    {
      title: "Property Management Work",
      description:
        "Clear scope and straightforward follow-up help managers coordinate units without turning a simple paint-and-repair request into unnecessary remodeling work.",
    },
  ] satisfies ApproachDetail[],
} as const;

export const approachCta = {
  eyebrow: "Start With the Details",
  title: "Tell Us What the Property Needs and We’ll Review the Next Step.",
  description:
    "Share the location, service, timing, and project details. We will review the request and follow up by email about the next step toward an estimate.",
  ctaLabel: "Request an Estimate",
  href: "/contact",
} as const;
