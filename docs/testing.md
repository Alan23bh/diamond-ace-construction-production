# Testing

This project uses WebdriverIO with TypeScript, Mocha, and headless Chrome for end-to-end coverage.

## Local quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

`npm run typecheck` is intentionally separate so test files are checked as part of the repository instead of relying only on the Next.js build pipeline.

## Local E2E setup

Install dependencies and start the Next.js dev server in one terminal:

```bash
npm install
npm run dev
```

Run the suite in another terminal:

```bash
npm run test:e2e
```

The headless alias uses the same WebdriverIO configuration:

```bash
npm run test:e2e:headless
```

By default, tests use `http://127.0.0.1:3000`. Override it with `WDIO_BASE_URL` when needed.

## Lead-submission safety

Production estimate requests are submitted to Netlify Forms. Netlify's form service is not available on localhost, so development builds intentionally simulate the final lead submission after the real React Hook Form/Zod validation succeeds.

This means local WebdriverIO tests exercise the complete multi-step form UX, validation, review state, and success state without creating real Netlify form submissions or emailing Diamond Ace.

The real Netlify form endpoint is verified after deployment during Phase 6E with a controlled live smoke test.

## GitHub Actions CI

The CI workflow in `.github/workflows/ci.yml` runs on pushes and pull requests targeting `main`.

It installs dependencies with `npm ci`, runs lint, runs the explicit TypeScript check, builds the application, starts the Next.js dev server, and then executes the headless WebdriverIO suite.

If an E2E test fails, WebdriverIO saves screenshots to `tests/e2e/screenshots/` and GitHub Actions uploads that directory as a failure artifact when files exist.

## Covered flows

- Homepage headline and approved service content
- Homepage estimate and services CTAs
- Header and footer navigation
- `/portfolio` redirect to `/services`
- Services page content and absence of removed remodeling claims
- Our Approach process and CTA
- Multi-step estimate form validation, custom selects, review, and simulated local submission
- Mobile estimate action and bottom-spacing protection

## Headless Chrome interaction note

Long-page form controls are activated in E2E with a browser DOM click after an explicit `scrollIntoView`. Chrome 153 can intermittently report coordinate-based WebDriver clicks as intercepted on controls near the bottom of a long document even when the element is visible. The DOM click still exercises the real React event handler and keeps the test deterministic; the suite still requires the expected next step to render and fails on real validation or state-transition regressions.

Canonical URL assertions normalize the URL before comparison so `http://localhost:3000` and `http://localhost:3000/` are treated as the same homepage during local testing.
