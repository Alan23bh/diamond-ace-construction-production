# Phase 2 — Homepage Completion

Phase 2 finishes the Diamond Ace Construction homepage while preserving the approved Phase 1.1 visual system.

## Added Sections

1. **Apartment Turnover Feature**
   - Gives the company's strongest real service area more visual and content weight.
   - Uses large service-context stock photography rather than implying a project portfolio.
   - Connects turnover repainting with drywall and texture repair when the scope needs it.

2. **Who We Serve**
   - Organizes the primary customer groups without adding another heavy card grid.
   - Covers property managers/apartment communities, landlords/investors, homeowners, and select commercial/business properties.

3. **Prep & Finish Feature**
   - Creates the requested dark visual contrast in the middle of the light homepage.
   - Uses a large preparation image and concise, factual quality cues.

4. **How It Works**
   - Introduces a four-step process that is easier to scan than the older six-step concept.
   - Uses subtle numbered structure and divider lines instead of oversized diagram graphics.

5. **Final Estimate CTA**
   - Ends the page with a large brass conversion panel immediately before the footer.
   - Keeps estimate requests as the primary conversion goal while preserving email as a secondary contact path.

## Motion

All new major blocks use the existing `Reveal` primitive so entrance motion stays consistent and respects `prefers-reduced-motion`.

## Media Rules

All Phase 2 photography is service-context stock media. Nothing is labeled or implied to be completed Diamond Ace work.

## Test Updates

- Homepage E2E coverage now verifies the complete homepage section flow.
- The contact-form click helper now uses browser-native scrolling and a native-click fallback to reduce Chrome/WebDriver out-of-bounds flakiness while still exercising the real React handlers and API request.
