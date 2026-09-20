# Phase 6D — Privacy + SEO Foundation

Phase 6D prepares Diamond Ace Construction for a public production URL without changing the approved visual direction.

## Privacy

- Added `/privacy` with the same light/off-white, charcoal, white-card, and brass design language used across the rest of the site.
- The notice documents the current estimate-request workflow, business follow-up use, hosting/form providers, current analytics state, retention expectations, and contact options.
- Privacy is linked from the footer rather than the primary navigation so it is easy to find without adding clutter to the main conversion path.
- The Privacy page is intentionally marked `noindex, follow`; it is a user-facing policy page, not a search landing page.

The notice reflects the current production architecture. If analytics, ad tracking, payment collection, a CRM, or a materially different lead workflow is added later, the notice should be reviewed and updated.

## SEO

- Canonical URLs now resolve from `NEXT_PUBLIC_SITE_URL`, Netlify's production `URL`, or localhost during local development.
- Netlify Deploy Previews and branch deploys are prevented from being indexed through generated robots metadata.
- Added page-specific Open Graph/Twitter metadata and representative images for Home, Services, Our Approach, and Contact.
- Upgraded JSON-LD from a generic home-and-construction type to the more specific Schema.org `HousePainter` subtype.
- The business graph now includes the four actual service offerings, Central Florida service areas, business hours, legal name, public email, founding year, and website entity.
- Production `robots.txt` allows the public site but blocks the hidden Netlify form-registration page.
- `sitemap.xml` remains focused on the four public search landing pages: Home, Services, Our Approach, and Contact.
- Added a small file-based favicon through the Next.js App Router metadata convention.

## Deployment Note

On Netlify, the build environment provides `URL`, which represents the site's main production address. `NEXT_PUBLIC_SITE_URL` remains available as an explicit override if a custom domain is added later.

Search Console verification happens after Phase 6E, because Google needs the real public production URL before the property and sitemap can be verified meaningfully.

## Testing

The existing six-spec WebdriverIO suite remains the quality gate. Phase 6D also checks the Privacy route and SEO metadata through the existing Home/Navigation specs instead of adding another worker.
