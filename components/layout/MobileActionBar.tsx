import { business } from "../../data/business";
import { Button } from "../ui/Button";

export function MobileActionBar() {
  return (
    <div
      data-testid="mobile-action-bar"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white/95 p-3 shadow-[0_-10px_30px_rgba(23,23,21,0.08)] backdrop-blur md:hidden"
    >
      <div className="mx-auto max-w-md">
        <Button href="/contact" data-testid="mobile-estimate-link" className="min-h-12 w-full">
          {business.primaryCta}
        </Button>
      </div>
    </div>
  );
}
