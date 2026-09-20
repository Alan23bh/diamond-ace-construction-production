import { serviceCatalog } from "./services";

export type ServiceCategory = (typeof serviceCatalog)[number];

export const serviceCategories = serviceCatalog;

export const serviceCategoryOverview = {
  eyebrow: "Core Services",
  title: "Focused Painting and Repair Services for Properties that Need to Be Ready.",
  intro:
    "Our work centers on apartment turnovers and interior painting, with drywall, texture, and exterior painting support when the property needs it.",
  highlights: [
    "Apartment Turnover Focus",
    "Interior Painting First",
    "Drywall & Texture Repair",
    "Central Florida Service",
  ],
} as const;
