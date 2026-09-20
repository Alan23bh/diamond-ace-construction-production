import { Clock3, Mail, MapPin, PaintRoller } from "lucide-react";
import { business } from "../../data/business";
import { Container } from "../ui/Container";

const highlights = [
  {
    title: "Estimate Request",
    description: "Share the property, service, scope, and timing in one guided request.",
    icon: PaintRoller,
  },
  {
    title: "Email Follow-Up",
    description: "The request is reviewed and follow-up starts by email unless you prefer phone.",
    icon: Mail,
  },
  {
    title: "Central Florida",
    description: "Focused on Poinciana, Kissimmee, Orlando, and nearby communities.",
    icon: MapPin,
  },
  {
    title: business.hours[0].label,
    description: business.hours[0].value,
    icon: Clock3,
  },
] as const;

export function ContactHighlights() {
  return (
    <section className="border-y border-black/10 bg-[var(--color-page)]" aria-label="Estimate request highlights">
      <Container className="grid sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className={`flex gap-4 py-6 sm:px-6 lg:px-7 ${
                index % 2 === 0 ? "sm:border-r sm:border-black/10" : ""
              } ${index < highlights.length - 1 ? "border-b border-black/10 lg:border-b-0 lg:border-r" : ""}`}
            >
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-[var(--color-accent-dark)]">
                <Icon aria-hidden="true" size={16} />
              </span>
              <div>
                <h2 className="text-sm font-semibold text-[var(--color-ink)]">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-[var(--color-ink-soft)]">{item.description}</p>
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
