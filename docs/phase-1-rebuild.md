# V2 Phase 1 Rebuild Notes

## Goal

Turn the AI-generated V1 into a credible visual and engineering foundation without throwing away useful application architecture.

## Changed in Phase 1

### Business and service data

- Corrected public business name and hours.
- Repositioned the service area around Central Florida instead of advertising all of Florida.
- Established a single four-service catalog in priority order:
  1. Apartment Turnovers
  2. Interior Painting
  3. Drywall Repair & Texture
  4. Exterior Painting
- Removed remodeling, flooring, cabinet, pressure-washing, trim, door, kitchen, and bathroom service claims.
- Estimate form validation now uses the approved service catalog.

### Homepage visual foundation

- Replaced the dark blueprint-style hero with a full-width media hero.
- Added a real painting video source for design review and a static image fallback.
- Rebuilt the trust strip on a white surface.
- Replaced abstract service diagrams with a responsive two-column photo-card grid.
- Added reusable `Reveal` motion for subtle fade-up entrances.
- Added local optimized stock images with provenance documentation.

### Navigation and layout

- Rebuilt the header as a white, high-trust navigation bar.
- Simplified the mobile menu and primary mobile action.
- Rebuilt the footer around accurate contact, hours, service-area, and navigation content.
- Removed fake Privacy/Terms labels until real legal pages exist.

### SEO and semantics

- Replaced `https://example.com` with `NEXT_PUBLIC_SITE_URL` plus a Vercel fallback.
- Improved LocalBusiness structured data.
- Added sitemap and robots metadata routes.
- Main Services, Approach, and Contact headings are now actual `h1` elements.
- `/portfolio` now redirects to `/services`.

### TypeScript and CI

- Added WebdriverIO global/mocha types to `tsconfig.json`.
- Added `npm run typecheck`.
- Added typecheck to GitHub Actions before build.
- Updated E2E assertions for the new service catalog and portfolio redirect.

## What intentionally did not change yet

The Services, Our Approach, and Contact pages still use the V1 dark layouts. Their data is more accurate, but their visual redesign belongs to later phases so the project can be reviewed in controlled slices.

## Manual verification after applying this phase

Run:

```bash
npm install
npm run lint
npm run typecheck
npm run build
```

Then run the app:

```bash
npm run dev
```

Review at minimum:

- `/` at desktop width around 1440px
- `/` at mobile width around 390px
- `/services`
- `/approach`
- `/contact?e2e=1`
- `/portfolio` redirects to `/services`

For E2E tests, leave the dev server running and use a second terminal:

```bash
npm run test:e2e
```
