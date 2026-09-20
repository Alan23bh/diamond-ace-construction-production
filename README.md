# Diamond Ace Construction

Production marketing website for Diamond Ace Construction LLC, a family-owned Central Florida painting company focused on apartment turnovers, interior painting, drywall and texture repair, and exterior painting.

## Tech Stack

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form
- Zod
- Netlify Forms lead capture
- WebdriverIO E2E tests
- GitHub Actions CI

## Current Status

Phase 1 of the V2 redesign establishes the new visual and engineering foundation:

- Light/off-white design system with charcoal typography and warm brass accent
- White sticky navigation and simplified Diamond Ace wordmark
- Full-width homepage media hero with video support and a static fallback
- Pexels service-context photography stored locally as optimized WebP files
- Two-column homepage service-card grid
- Centralized four-service catalog used by marketing content and estimate validation
- Accurate Central Florida positioning and Monday-Friday business hours
- `/portfolio` redirected to `/services`
- Canonical URL no longer points at `example.com`
- `sitemap.xml` and `robots.txt` generated through the App Router
- WebdriverIO types included in TypeScript configuration
- Explicit `npm run typecheck` script and CI typecheck step
- Estimate validation requires a phone number when Phone is selected as the preferred contact method

The Services, Our Approach, and Contact pages intentionally retain their V1 dark presentation until their dedicated rebuild phases.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## End-to-End Testing

The WebdriverIO suite currently assumes the local Next.js server is already running.

Terminal 1:

```bash
npm run dev
```

Terminal 2:

```bash
npm run test:e2e
```

The default E2E target is `http://127.0.0.1:3000`. Override it with `WDIO_BASE_URL` when needed.

See [docs/testing.md](docs/testing.md) for form email-safety behavior.

## Media

Diamond Ace does not currently have project photography. V2 uses licensed stock media only as service-context imagery and does not describe those images as Diamond Ace projects.

See [docs/media-sources.md](docs/media-sources.md) for source and attribution records.

The homepage hero currently streams a Pexels video during the design-review phase. Before production launch, the selected clip should be downloaded, compressed, stored locally, and referenced from `components/media/HeroMedia.tsx`.

## Estimate Lead Delivery

Production estimate requests are prepared for Netlify Forms. The multi-step React form is validated with React Hook Form + Zod, then submitted to a statically registered Netlify form with a honeypot field. Verified submissions can be stored in Netlify and forwarded to the Diamond Ace inbox through Netlify form notifications.

Local development simulates the final submission so tests never generate real business leads. See `docs/phase-6b-lead-delivery.md`.

## Production Roadmap

1. Phase 1 — foundation, header, homepage hero, service cards, data cleanup
2. Phase 2 — complete homepage sections and responsive polish
3. Phase 3 — Services page redesign
4. Phase 4 — Our Approach page redesign
5. Phase 5 — Contact form and estimate UX redesign
6. Phase 6A — production hardening: E2E stability, lint cleanup, modern selects, accessibility/UI polish
7. Phase 6B — real $0 lead delivery, email notifications, and spam protection
8. Phase 6C — optional private lead/data workflow and Google Sheet tracking
9. Phase 6D — Privacy page, SEO, metadata, structured data, and search/analytics setup
10. Phase 6E — production deployment and live verification
11. Phase 6F — final dependency/security, video, performance, accessibility, and cross-browser audit
12. Phase 7 — README/case study, resume material, metrics, and interview preparation

## Phase 3

- Redesigned the Services page around the four approved service groups.
- Added static-media hero, service anchors, detailed alternating service sections, preparation standards, project scenarios, FAQ, and a final estimate CTA.
- See `docs/phase-3-services.md`.

## Phase 4

- Rebuilt the Our Approach page in the V2 light/charcoal/brass visual system.
- Added a static-media hero, six-step working process, prep/protection feature, pre-work clarity section, property-context section, and final estimate CTA.
- Carried forward the Services hero contrast fix and corrected the Services E2E TypeScript issue.
- See `docs/phase-4-approach.md`.

## Phase 5 Contact Rebuild

The Contact route now uses the V2 visual system and a redesigned four-step estimate workflow. See `docs/phase-5-contact.md` for the UX, validation, accessibility, and email-delivery decisions made during this phase.

## Phase 6A Production Hardening

Phase 6A stabilizes the redesigned Contact experience before the real production lead workflow is connected. It adds modern accessible select controls, restores Contact E2E visibility assumptions, removes the remaining lint warning, improves mobile step/navigation behavior, adds a skip link, and visually separates Helpful Details from the footer. See `docs/phase-6a-production-hardening.md`.

## Phase 6B $0 Lead Delivery

Phase 6B removes the unconfigured Resend dependency and prepares production estimate requests for Netlify Forms. It adds the static Next.js form definition required by Netlify, URL-encoded production submission, honeypot spam protection, safe local simulation, and deployment instructions for inbox notifications. See `docs/phase-6b-lead-delivery.md`.

## Phase 6D Privacy + SEO Foundation

Phase 6D adds the production Privacy page and completes the pre-deployment SEO foundation: canonical URL resolution for Netlify, page-specific social metadata, a `HousePainter` structured-data graph with the four real services, preview-deploy noindex behavior, production robots rules, favicon metadata, and footer access to Privacy. See `docs/phase-6d-privacy-seo.md`.
