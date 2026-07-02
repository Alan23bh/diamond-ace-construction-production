# AI Development Workflow

This project is being built as a production-quality marketing website case study for Diamond Ace Construction LLC.

## Current Scope

The first scaffold establishes the foundation only:

- Next.js App Router page files
- Shared header, footer, and mobile action bar
- Centralized business, navigation, and service area data
- Initial SEO helper structure
- LocalBusiness JSON-LD helper structure
- Placeholder pages for Home, Services, Portfolio, and Contact

## Guardrails

- Placeholder visuals are styled panels, not fake project images.
- Placeholder copy must not claim completed jobs or invented reviews.
- Business and page content should stay centralized where possible so a Spanish version can be added later.
- WebDriverIO will be added only after the base layout, homepage, and contact form exist.

## Planned Next Steps

1. Build the homepage sections around the four main service categories.
2. Add the full services data model and services page detail sections.
3. Build the multi-step estimate form with React Hook Form and Zod.
4. Add portfolio example structure with a before/after comparison component.
5. Add WebDriverIO E2E coverage once the primary flows are functional.
