# Phase 6A — Production Hardening

Phase 6A freezes the major visual direction and focuses on the remaining UI/test/accessibility issues before real lead delivery and deployment work begins.

## Changes

### Contact Form Reliability

- Updated Contact E2E setup so tests scroll the redesigned estimate section into view before asserting form state.
- Preserved the full simulated submission test and added a focused test for the custom Project Type selector.
- Validation testing now also verifies `aria-invalid="true"` on the required city field.
- The multi-step form now scrolls back to the form card on mobile when the step changes so users do not land midway through the next step.
- Added `noValidate` so React Hook Form + Zod own the validation experience consistently instead of mixing browser-native messages with application messages.
- Step changes are announced through a polite live region.

### Modern Select Controls

The browser-native dropdowns were replaced with the reusable `FormSelect` component for:

- Primary Project Type
- Property Type
- Preferred Timeline
- Preferred Contact Method

The custom control keeps the existing React Hook Form values while providing the Diamond Ace visual system for both the closed control and expanded option list. It supports mouse/touch interaction plus Arrow keys, Home, End, Enter, Space, Escape, Tab, `aria-expanded`, `aria-controls`, `aria-activedescendant`, listbox/option semantics, and selected-state feedback.

### Accessibility Polish

- Added a keyboard-visible **Skip to Main Content** link.
- Added `id="main-content"` and a programmatically focusable main landmark.
- Mobile navigation now moves focus into the opened navigation panel and closes with Escape while returning focus to the menu toggle.
- Added visible focus treatment to mobile navigation links.

### Contact / Footer Separation

The Helpful Details section now uses the softer charcoal surface with top/bottom separation while the footer remains the deeper charcoal. This preserves the approved dark contrast section without making it visually merge into one oversized footer.

### Cleanup

- Removed the unused `index` variable that produced the Phase 5 ESLint warning.
- No new runtime packages were added in this phase.
- Real email delivery, spam protection, lead tracking, privacy/SEO, deployment, dependency cleanup, and production media optimization remain intentionally separated into later Phase 6 checkpoints.

## Validation

The build environment used to prepare this archive could not complete the full npm dependency installation, so the authoritative checks remain the local project machine:

```bash
npm run typecheck
npm run lint
npm run build
npm run dev
```

Then, in a second terminal:

```bash
npm run test:e2e
```

Target before Phase 6B: zero lint warnings and all six WebdriverIO spec files passing.
