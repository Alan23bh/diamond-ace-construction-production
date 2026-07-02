import { business } from "../../data/business";
import { Button } from "../ui/Button";

export function MobileActionBar() {
  return (
    <div
      data-testid="mobile-action-bar"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--color-border)] bg-[rgba(17,16,14,0.96)] p-3 backdrop-blur md:hidden"
    >
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <Button
          href={business.contact.emailHref}
          data-testid="mobile-email-link"
          variant="secondary"
          className="min-h-12 px-3"
        >
          Email Us
        </Button>
        <Button href="/contact" data-testid="mobile-estimate-link" className="min-h-12 px-3">
          Get Estimate
        </Button>
      </div>
    </div>
  );
}
