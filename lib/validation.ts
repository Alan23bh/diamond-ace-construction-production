import { z } from "zod";

export const projectTypes = [
  "Interior painting",
  "Exterior painting",
  "Apartment turnover",
  "Drywall or wall repair",
  "Trim, baseboards, or doors",
  "Cabinet refresh",
  "Light remodeling",
  "Pressure washing",
  "Other",
] as const;

export const propertyTypes = ["Home", "Rental", "Apartment unit", "Other"] as const;

export const preferredTimelines = [
  "As soon as possible",
  "Within 1-2 weeks",
  "Within 30 days",
  "Flexible / planning ahead",
] as const;

export const contactMethods = ["Email", "Phone"] as const;

export const mainServiceOptions = [
  "Painting",
  "Apartment turnover",
  "Drywall or wall repair",
  "Baseboards or trim",
  "Door repair support",
  "Cabinet refresh",
  "Pressure washing",
  "Light flooring support",
  "Kitchen or bathroom light update",
] as const;

export const estimateRequestSchema = z.object({
  projectType: z.enum(projectTypes, {
    required_error: "Choose a project type.",
  }),
  propertyCity: z
    .string()
    .trim()
    .min(2, "Enter the property city or service area.")
    .max(80, "Keep the city or service area under 80 characters."),
  propertyType: z.enum(propertyTypes, {
    required_error: "Choose a property type.",
  }),
  services: z.array(z.string()).min(1, "Choose at least one service."),
  projectSize: z
    .string()
    .trim()
    .min(2, "Enter the approximate size or room count.")
    .max(120, "Keep the size description under 120 characters."),
  timeline: z.enum(preferredTimelines, {
    required_error: "Choose a preferred timeline.",
  }),
  notes: z.string().trim().max(800, "Keep notes under 800 characters.").optional(),
  name: z
    .string()
    .trim()
    .min(2, "Enter your name.")
    .max(100, "Keep your name under 100 characters."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().trim().max(40, "Keep the phone number under 40 characters.").optional(),
  preferredContactMethod: z.enum(contactMethods, {
    required_error: "Choose a preferred contact method.",
  }),
  company: z.string().optional(),
});

export type EstimateRequestInput = z.infer<typeof estimateRequestSchema>;

export const estimateDefaultValues: EstimateRequestInput = {
  projectType: "Interior painting",
  propertyCity: "",
  propertyType: "Home",
  services: [],
  projectSize: "",
  timeline: "Flexible / planning ahead",
  notes: "",
  name: "",
  email: "",
  phone: "",
  preferredContactMethod: "Email",
  company: "",
};
