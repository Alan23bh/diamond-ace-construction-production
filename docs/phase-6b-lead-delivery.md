# Phase 6B — $0 Lead Delivery

Phase 6B replaces the unfinished Resend-based lead route with Netlify Forms so Diamond Ace can receive real website estimate requests without buying a sending domain or paying for a separate email service.

## Production Lead Flow

```text
EstimateForm
  -> React Hook Form + Zod validation
  -> URL-encoded Netlify Forms submission
  -> Netlify spam filtering + honeypot
  -> verified submission stored in Netlify Forms
  -> Netlify email notification to Diamond Ace
```

The browser still owns the polished multi-step UI. React Hook Form manages field state and Zod validates the request before anything is submitted.

## Why `public/__forms.html` Exists

Modern Next.js pages are not emitted as ordinary static HTML files for Netlify to scan. Netlify Forms therefore needs a dedicated static form definition in `public/__forms.html`. The file lists the exact field names used by the React form and is only there for deploy-time form detection.

The visible React form posts URL-encoded data to `/__forms.html` after validation succeeds.

## Spam Protection

The static Netlify form declares `company` as a honeypot field. Netlify also applies its built-in spam filtering to form submissions. The visible React form contains the same `company` field, visually hidden from people but available to automated form scanners.

A filled honeypot is treated as bot activity by Netlify.

## Local Development Safety

Netlify Forms only exists on a deployed Netlify site. Local development therefore simulates a successful lead after the same React Hook Form/Zod validation has completed. This keeps E2E tests deterministic and prevents test data from reaching the real business inbox.

The production Netlify deployment will perform the real POST.

## Email Notifications After Deployment

Once the site is deployed on Netlify and the form appears under **Forms**, configure a form-submission email notification for:

- `dacflorida11@gmail.com`
- optionally `alan23bh@gmail.com`

The form includes an input named `email`, so Netlify can use the customer's email address as the notification Reply-To address. The static form also version-controls the notification subject as:

`New Diamond Ace Estimate Request (%{submissionId})`

The browser success screen thanks the customer and says Diamond Ace will review the request. We intentionally do not promise a response timeframe.

## What Phase 6B Does Not Do

Netlify Forms does not automatically send a custom confirmation email to the customer. The customer receives the polished on-site confirmation immediately. If Diamond Ace later wants an automated customer email, that can be added through a separate workflow without blocking launch.

Phase 6C (Google Sheet lead tracking) remains optional and can be completed after deployment.
