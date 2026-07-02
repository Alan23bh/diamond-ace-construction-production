# Diamond Ace Construction LLC

Production-quality marketing website case study for Diamond Ace Construction LLC, a family-owned painting and interior improvement company serving Florida with a strong focus on Central Florida.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form
- Zod
- Resend-ready email route

## Current Status

The project currently contains:

- Shared layout shell
- Sticky desktop header
- Mobile navigation
- Mobile bottom action bar with email and estimate actions
- Footer with service area and business metadata
- Image-light homepage, Services page, Our Approach page, and Contact page
- Multi-step estimate request form
- Server-side `/api/estimate` route
- Centralized business, route, and service area data
- Local SEO metadata helpers and LocalBusiness JSON-LD helper structure
- WebDriverIO E2E coverage for primary navigation, service pages, the estimate form, and mobile action bar
- GitHub Actions CI for lint, build, and E2E checks

No image files have been added.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## End-to-End Testing

The WebDriverIO suite assumes the local Next.js server is already running.

```bash
npm run dev
```

In another terminal:

```bash
npm run test:e2e
```

The default E2E target is `http://127.0.0.1:3000`. Override it with `WDIO_BASE_URL` when needed:

```bash
WDIO_BASE_URL=http://127.0.0.1:3001 npm run test:e2e
```

See [docs/testing.md](docs/testing.md) for coverage details and form email-safety behavior.

## Continuous Integration

GitHub Actions runs on pushes and pull requests targeting `main`.

The CI workflow:

1. Installs dependencies with `npm ci`.
2. Runs `npm run lint`.
3. Runs `npm run build`.
4. Starts the local Next.js dev server on `http://127.0.0.1:3000`.
5. Runs `npm run test:e2e` in headless Chrome.
6. Uploads E2E failure screenshots from `tests/e2e/screenshots/` when available.

The workflow does not configure Resend credentials. Contact form E2E coverage uses the same local simulation path documented in [docs/testing.md](docs/testing.md), so CI should not send real emails.

## Estimate Email Setup

The estimate form works locally without Resend credentials. In development, if email environment variables are missing, `/api/estimate` simulates a successful submission and logs the structured lead payload server-side.

To activate real email delivery later:

1. Create a Resend account and API key.
2. Verify the sending domain or use a verified sender supported by Resend.
3. Copy `.env.example` to `.env.local`.
4. Set:

```bash
RESEND_API_KEY=your_resend_key
EMAIL_FROM="Diamond Ace Construction LLC <estimates@yourdomain.com>"
LEAD_RECIPIENT=dacflorida11@gmail.com
```

When configured, the API route sends a lead notification to `LEAD_RECIPIENT`, sets Reply-To to the visitor's submitted email, and sends the visitor a confirmation email.

## Planned Next Tickets

1. Finish remaining homepage sections.
2. Add responsive and accessibility polish pass.
3. Prepare deployment and real Resend environment setup.
