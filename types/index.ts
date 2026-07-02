export type Route = {
  label: string;
  href: "/" | "/services" | "/approach" | "/portfolio" | "/contact";
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
};

export type BusinessInfo = {
  name: string;
  shortName: string;
  description: string;
  familyOwnedLine: string;
  primaryCta: string;
  secondaryCta: string;
  contact: BusinessContact;
  hours: BusinessHours[];
};

export type JsonLd = Record<string, unknown>;
