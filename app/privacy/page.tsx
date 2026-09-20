import type { Metadata } from "next";
import { Mail, ShieldCheck } from "lucide-react";
import { business } from "../../data/business";
import { createMetadata } from "../../lib/seo";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";

export const metadata: Metadata = createMetadata({
  title: `Privacy | ${business.name}`,
  description:
    "Learn how Diamond Ace Construction handles information submitted through its website and estimate request form.",
  path: "/privacy",
  index: false,
});

const privacySections = [
  {
    id: "information-we-collect",
    title: "Information You Choose to Share",
    paragraphs: [
      "When you submit an estimate request, we may receive your name, email address, phone number if you provide one, property city or service area, property type, requested services, project timing, and the project details you enter in the form.",
      "Please do not submit payment-card information, Social Security numbers, account passwords, or other highly sensitive information through the estimate form.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "How We Use the Information",
    paragraphs: [
      "We use estimate-request information to review the work you are asking about, determine whether the project fits our service area and scope, contact you about the request, prepare next steps, and operate the business relationship that may follow.",
      "If you provide a phone number, we use it for project follow-up only when appropriate to the request or your stated contact preference.",
    ],
  },
  {
    id: "service-providers",
    title: "Website and Form Service Providers",
    paragraphs: [
      "This website relies on third-party hosting and form-processing services to operate. Those providers may process form submissions and technical request data as needed to host the site, detect spam, deliver form notifications, and keep the service available.",
      "Estimate requests are intended to be delivered to Diamond Ace Construction for business follow-up. We do not publish the information you submit through the form.",
    ],
  },
  {
    id: "analytics-cookies",
    title: "Analytics and Cookies",
    paragraphs: [
      "At the time of this notice, the site is not configured with advertising trackers or a marketing analytics platform. The hosting platform may still use essential technical data, logs, or cookies needed to provide and secure the website.",
      "If we add analytics or other tracking tools later, this notice should be updated to describe that change before relying on the new tooling for production use.",
    ],
  },
  {
    id: "retention",
    title: "How Long We Keep Information",
    paragraphs: [
      "We may keep estimate requests and related communications for as long as reasonably needed to respond to the request, manage project records, operate the business, and meet applicable recordkeeping needs.",
      "Retention may vary depending on whether a request becomes an active estimate or project and on the systems used to store business communications.",
    ],
  },
  {
    id: "your-choices",
    title: "Your Choices",
    paragraphs: [
      "You can contact Diamond Ace Construction if you want to ask about information you previously submitted through the website or request a reasonable correction or deletion of information that is still under our control.",
      "You can also choose to contact us directly by email instead of using the website form.",
    ],
  },
] as const;

export default function PrivacyPage() {
  return (
    <>
      <section className="border-b border-black/10 bg-white">
        <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-20 lg:py-24">
          <div>
            <Badge tone="light" className="bg-[var(--color-page)]">
              Privacy
            </Badge>
            <h1 className="text-balance mt-6 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-[var(--color-ink)] sm:text-5xl lg:text-[4.2rem]">
              How We Handle Website and Estimate Request Information.
            </h1>
          </div>

          <div className="max-w-2xl lg:pb-2">
            <p className="text-lg leading-8 text-[var(--color-ink-soft)]">
              Diamond Ace Construction collects only the information needed to review project
              requests, communicate with potential customers, and operate this website.
            </p>
            <p className="mt-5 text-sm leading-6 text-[var(--color-ink-muted)]">
              Last Updated: September 19, 2026
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-page)] py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-6 border-y border-black/10 py-8 md:grid-cols-3 md:gap-0 md:py-0">
            {[
              ["Estimate Information", "Project and contact details you intentionally submit."],
              ["Business Follow-Up", "Information used to review and respond to your request."],
              ["Service Providers", "Hosting and form tools that help operate the website."],
            ].map(([title, body]) => (
              <div key={title} className="md:border-r md:border-black/10 md:px-8 md:py-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-[var(--color-accent-dark)]">
                  <ShieldCheck aria-hidden="true" size={18} />
                </div>
                <h2 className="mt-5 text-lg font-semibold text-[var(--color-ink)]">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-[var(--color-ink-soft)]">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent-dark)]">
                Privacy Notice
              </p>
              <h2 className="text-balance mt-4 text-3xl font-semibold leading-[1.08] text-[var(--color-ink)] sm:text-4xl">
                A Clear Explanation of What the Website Collects and Why.
              </h2>
              <p className="mt-5 text-base leading-7 text-[var(--color-ink-soft)]">
                This notice is written for the way the site currently operates. If the production
                data workflow changes, the privacy notice should change with it.
              </p>

              <nav aria-label="Privacy notice sections" className="mt-8 hidden border-t border-black/10 pt-5 lg:grid lg:gap-3">
                {privacySections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-sm font-medium text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-accent-dark)]"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_22px_70px_rgba(23,23,21,0.06)]">
              {privacySections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 border-b border-black/10 px-6 py-8 last:border-b-0 sm:px-8 sm:py-10"
                >
                  <h2 className="text-2xl font-semibold leading-tight text-[var(--color-ink)] sm:text-3xl">
                    {section.title}
                  </h2>
                  <div className="mt-5 grid gap-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-7 text-[var(--color-ink-soft)]">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-8 rounded-2xl bg-[var(--color-accent)] px-6 py-8 shadow-[0_22px_70px_rgba(23,23,21,0.1)] sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10 lg:py-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#493719]">
                Privacy Questions
              </p>
              <h2 className="text-balance mt-3 text-3xl font-semibold leading-[1.06] text-[var(--color-ink)] sm:text-4xl">
                Contact Diamond Ace About Information You Submitted.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-[#3f321f] sm:text-base sm:leading-7">
                Email us if you have a question about this notice or information you previously
                submitted through the website.
              </p>
            </div>

            <Button href={business.contact.emailHref} variant="inverse" className="gap-2 lg:min-w-48">
              <Mail aria-hidden="true" size={16} />
              Email Diamond Ace
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
