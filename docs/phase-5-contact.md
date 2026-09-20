# Phase 5 — Contact & Estimate Experience

Phase 5 rebuilds the Contact route around the production estimate workflow instead of treating the form as a leftover dark-page component.

## Visual Direction

The page now uses the approved Diamond Ace V2 system:

- Light split hero with large service-context photography
- Warm page and surface contrast
- Brass accents
- Large Title Case display headings
- A four-point estimate-request information strip
- A two-column estimate section with sticky desktop guidance
- A white multi-step form card with a clear progress indicator
- A dark Helpful Details section before the footer
- Existing responsive mobile action bar retained

The Contact page intentionally keeps the estimate form close to the top of the page. It has enough visual rhythm to feel like the rest of the site without forcing a customer through a long marketing page before reaching the conversion flow.

## Form UX

The existing React Hook Form + Zod workflow was preserved and redesigned rather than replaced.

The four form stages are:

1. Project
2. Scope
3. Contact
4. Review

Improvements include:

- Light-theme form controls with visible focus states
- Service options presented as selectable cards
- Clear step progress and completed-step indicators
- Title Case legends and labels
- `aria-invalid`, `aria-describedby`, and alert semantics for validation errors
- Polished review and success states
- Network-failure handling around the estimate API request
- Existing WebdriverIO test IDs retained

## Email Reliability

Lead delivery is now treated as the critical email action.

If the Diamond Ace lead email succeeds but the visitor confirmation email fails, the submission remains successful. This avoids showing a false failure to the customer after the business has already received the lead, which could otherwise encourage duplicate submissions.

## Privacy / Phone Handling

Diamond Ace's phone number is not displayed publicly. Customers can optionally provide their own number in the estimate form. If they choose Phone as the preferred follow-up method, the Zod schema requires a phone number.

## Media

Phase 5 reuses the previously documented service-context image from the homepage turnover feature. It is not represented as Diamond Ace project photography.
