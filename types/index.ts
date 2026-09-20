export type AppRoute = "/" | "/services" | "/approach" | "/portfolio" | "/contact" | "/privacy";

export type Route = {
  label: string;
  href: AppRoute;
};

export type ServiceArea = {
  name: string;
  isPrimary?: boolean;
};

export type BusinessContact = {
  emailDisplay: string;
  emailHref: `mailto:${string}`;
  leadDestination: string;
};

export type BusinessHours = {
  label: string;
  value: string;
  days: Array<
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday"
  >;
  opens: string;
  closes: string;
};

export type BusinessInfo = {
  legalName: string;
  name: string;
  shortName: string;
  description: string;
  primaryCta: string;
  contact: BusinessContact;
  hours: BusinessHours[];
  foundedYear: number;
  currentNameSince: number;
};

export type JsonLd = Record<string, unknown>;
