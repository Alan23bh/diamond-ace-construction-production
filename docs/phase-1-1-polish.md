# Phase 1.1 Visual Polish and Test Stabilization

This pass responds to the first real-device review of the rebuilt homepage.

## Visual refinements

- Converted prominent homepage display copy to Title Case while leaving paragraph copy in normal sentence case.
- Standardized the display label `Family-Owned`.
- Removed the numeric badges from the service-card images.
- Added an honest service-focus checklist beside the Core Services introduction to improve visual balance on wide screens.
- Increased breathing room in the trust/highlights strip so neighboring columns do not feel crowded.
- Preserved the approved hero video, card photography, light surfaces, brass accent, and responsive layout.

## E2E stabilization

The first local run passed typecheck, lint, and production build, while four of six WebdriverIO spec files passed. Two failures were test-visibility/clickability issues rather than build failures.

This pass:

- Tests service cards by stable `data-testid` selectors after bringing the services section into view instead of relying on `body.getText()` for content below the fold.
- Adds a reusable click helper to the contact-form spec that waits for existence/clickability and centers controls in the viewport before clicking.
- Waits for each next-step control to render before continuing through the form.

The next local validation should run:

```bash
npm run typecheck
npm run lint
npm run build
npm run test:e2e
```
