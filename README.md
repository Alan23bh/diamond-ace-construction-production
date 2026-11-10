# Diamond Ace Construction

**A responsive business website built for Diamond Ace Construction LLC, a Family-Owned painting company serving Central Florida.**

[View Source Code](https://github.com/Alan23bh/diamond-ace-construction-production)

## Overview

Diamond Ace Construction is a client-focused marketing website designed to help property managers, landlords, homeowners, and businesses explore painting and repair services and request project estimates.

The site combines clear service information, a consistent visual identity, mobile-friendly navigation, and a guided estimate-request experience. The project emphasizes maintainable React components, typed business data, accessible interactions, search-engine fundamentals, and automated testing.

## Key Features

- **Responsive Interface:** Mobile-first layouts, sticky navigation, and a mobile estimate action make the site usable across screen sizes.
- **Service-Focused Content:** Dedicated information for apartment turnovers, interior painting, drywall and texture repair, and exterior painting.
- **Multi-Step Estimate Form:** Four steps—Project, Scope, Contact, and Review—guide visitors through providing useful request details.
- **Form Validation:** React Hook Form and Zod validate inputs, including conditional contact requirements and step-by-step progression.
- **Lead Capture:** Netlify Forms integration supports production submissions, with a honeypot field for spam mitigation. Local development simulates submissions to avoid sending test leads.
- **SEO Foundation:** Page-specific metadata, Open Graph information, canonical URLs, XML sitemap, robots directives, and structured data for the business and its services.
- **Accessibility Considerations:** Semantic structure, skip navigation, labeled controls, keyboard-friendly interactions, and reduced-motion support.
- **Automated Quality Checks:** Linting, TypeScript checks, production builds, and WebdriverIO end-to-end tests run through GitHub Actions.

## Tech Stack

| Area               | Technologies                      |
| ------------------ | --------------------------------- |
| Framework          | Next.js 15 (App Router), React 19 |
| Language           | TypeScript                        |
| Styling            | Tailwind CSS                      |
| Animation & Icons  | Framer Motion, Lucide React       |
| Forms & Validation | React Hook Form, Zod              |
| Lead Submission    | Netlify Forms                     |
| Testing            | WebdriverIO, Mocha                |
| CI                 | GitHub Actions                    |

## Pages

| Page                       | Purpose                                                                                       |
| -------------------------- | --------------------------------------------------------------------------------------------- |
| Home (`/`)                 | Introduces the company, highlights its services, and directs visitors to request an estimate. |
| Services (`/services`)     | Explains the core service categories, preparation practices, and common project scenarios.    |
| Our Approach (`/approach`) | Presents the company's working process and expectations.                                      |
| Contact (`/contact`)       | Hosts the guided, multi-step estimate-request form.                                           |
| Privacy (`/privacy`)       | Explains how information submitted through the website is handled.                            |

## Getting Started

**Requirements:** Node.js and npm. The CI workflow uses Node.js 24.

1. Clone the repository:

   ```bash
   git clone https://github.com/Alan23bh/diamond-ace-construction-production.git
   cd diamond-ace-construction-production
   ```

2. Install dependencies:

   ```bash
   npm ci
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000).

If you need to explicitly configure the canonical site URL, use `.env.example` as a reference for `NEXT_PUBLIC_SITE_URL`.

## Testing & Quality Checks

Run the standard checks:

```bash
npm run lint
npm run typecheck
npm run build
```

For end-to-end tests, keep the development server running in one terminal, then run:

```bash
npm run test:e2e
```

WebdriverIO targets `http://127.0.0.1:3000` by default. You can override this with `WDIO_BASE_URL`. See [Testing Documentation](docs/testing.md) for details.

The GitHub Actions workflow runs linting, type checking, a production build, and browser-based end-to-end tests on pushes and pull requests to `main`.

## Project Structure

```text
app/          # App Router pages, layouts, and metadata routes
components/   # Reusable UI, page sections, layouts, and forms
data/         # Centralized business and service content
lib/          # Validation, lead submission, and SEO utilities
public/       # Static assets and Netlify form registration
tests/        # End-to-end browser tests
docs/         # Implementation notes and technical decisions
types/        # Shared TypeScript types
.github/      # Continuous integration workflow
```

## Implementation Notes

**Estimate submissions:** The form validates input in the browser and submits URL-encoded data through Netlify Forms in production. During local development, a successful submission is intentionally simulated after validation; it does not send a real lead. Netlify form detection and email notifications must be configured and verified in the deployed environment. See [Lead Delivery Documentation](docs/phase-6b-lead-delivery.md).

**Business information:** Services and business details are stored centrally and reused across content, form validation, and SEO data to reduce inconsistencies.

**Media:** Licensed stock media is used to illustrate service categories and is not presented as photography of completed Diamond Ace Construction projects. See [Media Sources](docs/media-sources.md).

**Development approach:** This project used an AI-assisted development workflow with iterative review, refinement, and testing. See [Development Workflow](docs/ai-development-workflow.md).

## Author

**Alan Hernandez** — Frontend Developer

[GitHub Profile](https://github.com/Alan23bh)

## Project Context

Built for Diamond Ace Construction LLC as a real-business web development project. This repository documents the website's implementation and technical approach.
