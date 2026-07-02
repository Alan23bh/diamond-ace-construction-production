# Testing

This project uses WebDriverIO with TypeScript, Mocha, and headless Chrome for end-to-end coverage.

## Local Setup

Install dependencies:

```bash
npm install
```

Start the Next.js dev server in one terminal:

```bash
npm run dev
```

The E2E suite assumes the app is already running. It does not start or stop the dev server.
On the first run, WebDriverIO may download or resolve a compatible stable Chrome/driver pair for local execution.

Run the suite in another terminal:

```bash
npm run test:e2e
```

The headless alias runs the same configuration:

```bash
npm run test:e2e:headless
```

By default, tests use:

```txt
http://127.0.0.1:3000
```

Override the target with:

```bash
WDIO_BASE_URL=http://127.0.0.1:3001 npm run test:e2e
```

## Email Safety

Contact form tests visit `/contact?e2e=1`. In local development, that sends a test-only header to `/api/estimate` so the route simulates success and logs the structured lead payload instead of sending email. Tests do not require Resend credentials and should not send real email.

## GitHub Actions CI

The CI workflow in `.github/workflows/ci.yml` runs on pushes and pull requests targeting `main`.

It installs with `npm ci`, runs lint and build, starts the Next.js dev server on `http://127.0.0.1:3000`, then runs the same headless WebDriverIO suite with `WDIO_BASE_URL` set to that local URL.

Resend environment variables are intentionally not configured in CI. The contact form test uses `/contact?e2e=1`, so the estimate route follows the local simulated success path instead of sending email.

If an E2E test fails, WebDriverIO saves screenshots to `tests/e2e/screenshots/` and the workflow uploads that directory as a failure artifact when files exist.

## Screenshots

Screenshots are saved only on failures under:

```txt
tests/e2e/screenshots/
```

That directory is ignored by Git.

## Covered Flows

- Homepage CTAs
- Header and footer navigation
- `/portfolio` redirect to `/approach`
- Services page content
- Our Approach process and CTA
- Multi-step contact form validation, review, and simulated submission
- Mobile action bar email behavior and spacing
