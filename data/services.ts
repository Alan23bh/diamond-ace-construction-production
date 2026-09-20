export const serviceNames = {
  apartmentTurnovers: "Apartment Turnovers",
  interiorPainting: "Interior Painting",
  drywallTexture: "Drywall Repair & Texture",
  exteriorPainting: "Exterior Painting",
} as const;

export type ServiceId =
  | "apartment-turnovers"
  | "interior-painting"
  | "drywall-texture"
  | "exterior-painting";

export type ServiceDefinition = {
  id: ServiceId;
  number: string;
  title: (typeof serviceNames)[keyof typeof serviceNames];
  shortTitle: string;
  description: string;
  detail: string;
  bestFor: string;
  services: string[];
  image: string;
  imageAlt: string;
  imageCredit: string;
  imageSource: string;
};

export const serviceCatalog: ServiceDefinition[] = [
  {
    id: "apartment-turnovers",
    number: "01",
    title: serviceNames.apartmentTurnovers,
    shortTitle: "Turnovers",
    description:
      "Painting and wall-repair support for move-outs, make-ready schedules, and units that need a clean reset before the next resident.",
    detail:
      "Turnover work is where Diamond Ace has the deepest day-to-day experience. The goal is practical: get walls, repaired areas, and painted surfaces ready for the next resident without turning a straightforward refresh into a larger remodeling project.",
    bestFor: "Apartment communities, property managers, landlords, and rental owners",
    services: [
      "Move-Out & Make-Ready Repainting",
      "Drywall Patching Before Paint",
      "Wall & Ceiling Touch-Ups",
      "Rental-Ready Finish Work",
    ],
    image: "/media/services/apartment-turnover.webp",
    imageAlt: "Apartment interior under renovation with fresh paint and painting supplies",
    imageCredit: "Ksenia Chernaya / Pexels",
    imageSource: "https://www.pexels.com/photo/5768031/",
  },
  {
    id: "interior-painting",
    number: "02",
    title: serviceNames.interiorPainting,
    shortTitle: "Interior Painting",
    description:
      "Interior painting for homes, rentals, apartments, and business spaces with attention to prep, coverage, and clean finished surfaces.",
    detail:
      "Interior painting can be a full-room refresh, a repaint between tenants, or part of a repair-and-paint scope. We keep the work centered on preparation, coverage, clean edges, and a finished space that feels cared for rather than simply coated with paint.",
    bestFor: "Homes, occupied or vacant rentals, apartments, and select business interiors",
    services: [
      "Walls & Ceilings",
      "Occupied & Vacant Interiors",
      "Repaints & Color Changes",
      "Paint Prep & Touch-Ups",
    ],
    image: "/media/services/interior-painting.webp",
    imageAlt: "Painter applying gray paint to an interior wall with a roller",
    imageCredit: "Tima Miroshnichenko / Pexels",
    imageSource: "https://www.pexels.com/photo/6474471/",
  },
  {
    id: "drywall-texture",
    number: "03",
    title: serviceNames.drywallTexture,
    shortTitle: "Drywall & Texture",
    description:
      "Interior wall repair and texture work that prepares damaged surfaces for paint and helps repaired areas blend back into the room.",
    detail:
      "Small wall damage can make a finished paint job look incomplete. Drywall and texture repair can be handled before painting so patched areas are prepared, transitions are cleaner, and the wall is in better shape before the finish coat goes on.",
    bestFor: "Wall damage, turnover repairs, patches, and repair-before-paint projects",
    services: [
      "Drywall Patching",
      "Interior Wall Repair",
      "Surface Preparation",
      "Interior Texture Repair",
    ],
    image: "/media/services/drywall-texture.webp",
    imageAlt: "Gloved hand smoothing a repaired wall surface with a finishing trowel",
    imageCredit: "Ksenia Chernaya / Pexels",
    imageSource: "https://www.pexels.com/photo/5767932/",
  },
  {
    id: "exterior-painting",
    number: "04",
    title: serviceNames.exteriorPainting,
    shortTitle: "Exterior Painting",
    description:
      "Exterior painting for residential and select commercial properties that need refreshed, protected, and consistently finished surfaces.",
    detail:
      "Exterior projects are considered based on property type, scope, access, and location. The same focus still applies outside: understand the surface, prepare the areas being painted, protect surrounding spaces, and deliver a consistent finish.",
    bestFor: "Residential exteriors and select commercial painting projects in Central Florida",
    services: [
      "Exterior Walls",
      "Residential Repainting",
      "Surface Preparation",
      "Exterior Touch-Ups",
    ],
    image: "/media/services/exterior-painting.webp",
    imageAlt: "Painter applying paint to the exterior wall of a house",
    imageCredit: "Craig Adderley / Pexels",
    imageSource: "https://www.pexels.com/photo/1917849/",
  },
];

export const servicesHero = {
  eyebrow: "Services • Central Florida",
  title: "Painting, Turnovers, Drywall & Exterior Work for Real Property Needs.",
  intro:
    "Diamond Ace Construction focuses on four practical service areas: apartment turnovers, interior painting, drywall and texture repair, and exterior painting.",
  primaryCta: "Request an Estimate",
  secondaryCta: "Explore Services",
  image: "/media/services/interior-painting.webp",
  imageAlt: "Painter applying paint to an interior wall",
} as const;

export const serviceOverview = {
  eyebrow: "Focused Services",
  title: "Four Core Services Without the Extra Remodeling Noise.",
  intro:
    "Our scope stays centered on the work we actually perform. Each service can stand alone or combine with related prep and repair work when the property needs it.",
} as const;

export const serviceGroups = serviceCatalog;

export type IncludedWorkItem = {
  title: string;
  description: string;
};

export const includedWork: IncludedWorkItem[] = [
  {
    title: "Clear Scope",
    description:
      "We start by understanding the property, service, timing, and areas that need attention.",
  },
  {
    title: "Surface Prep",
    description:
      "Wall condition and preparation are considered before paint goes on the surface.",
  },
  {
    title: "Property-Aware Work",
    description:
      "Occupied homes, vacant units, and turnover schedules each need a different working approach.",
  },
  {
    title: "Finish-Focused Details",
    description:
      "Repairs, edges, touch-ups, and coverage matter because they determine how complete the space feels.",
  },
  {
    title: "Clean Handoff",
    description:
      "The goal is a space that is ready for the owner, resident, manager, or next stage of the project.",
  },
];

export const serviceScenarios = {
  eyebrow: "Common Project Scenarios",
  title: "The Same Core Services Can Solve Very Different Property Needs.",
  intro:
    "A turnover unit, a lived-in home, and a wall-repair project may need different timing and preparation, but the work still comes back to clear scope, practical repairs, and clean finishes.",
  items: [
    {
      title: "Between Residents",
      description:
        "Repainting, wall repair, touch-ups, and make-ready work for apartments and rental units between occupants.",
    },
    {
      title: "Lived-In Home Refresh",
      description:
        "Interior or exterior painting for homeowners who want rooms and surfaces refreshed without unnecessary remodeling work.",
    },
    {
      title: "Repair Before Paint",
      description:
        "Drywall and texture repair when damaged areas need attention before a room or wall is repainted.",
    },
  ],
} as const;

export const servicesFaq = {
  eyebrow: "Service Questions",
  title: "Questions Before You Request an Estimate.",
  intro:
    "These answers cover the basics. Project-specific timing, access, repair needs, and scope are reviewed after an estimate request is submitted.",
  items: [
    {
      question: "Do You Handle Full Apartment Turnovers?",
      answer:
        "We focus on the painting and wall-related portion of turnover work, including repainting, drywall repair, texture repair, prep, and touch-ups. We do not advertise plumbing, flooring, cabinet installation, roofing, or full remodeling services.",
    },
    {
      question: "Can Drywall Repair Be Included With Painting?",
      answer:
        "Yes. When wall damage needs to be repaired before paint, drywall and texture work can be included as part of the same practical scope when appropriate for the project.",
    },
    {
      question: "Do You Work in Occupied Homes?",
      answer:
        "Yes. Interior painting and repair requests can be reviewed for occupied homes as well as vacant properties. Access, furniture, timing, and protection needs are discussed as part of the project scope.",
    },
    {
      question: "Do You Take Exterior Painting Projects?",
      answer:
        "Yes. Residential and select commercial exterior painting projects are considered based on location, property type, access, and scope.",
    },
    {
      question: "What Areas Do You Serve?",
      answer:
        "Diamond Ace is focused on Central Florida, including Poinciana, Kissimmee, Orlando, Davenport, Haines City, Lake Nona, Winter Park, and nearby communities. Select projects elsewhere in Florida may be considered based on scope.",
    },
    {
      question: "How Do I Get an Estimate?",
      answer:
        "Use the estimate request form to send the property location, services needed, timing, and project details. We review the request and follow up by email with the next step.",
    },
  ],
} as const;

export const servicesCta = {
  eyebrow: "Start a Project",
  title: "Tell Us What Needs Painting, Repair, or Turnover Work.",
  description:
    "Share the property type, location, timing, and scope. We will review the request and follow up by email with the next step toward an estimate.",
  ctaLabel: "Request an Estimate",
  href: "/contact",
} as const;
