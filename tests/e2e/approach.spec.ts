import assert from "node:assert/strict";
import { $, browser, expect } from "@wdio/globals";

describe("Our Approach", () => {
  beforeEach(async () => {
    await browser.setWindowSize(1440, 1000);
    await browser.url("/approach");
  });

  it("shows the main approach heading", async () => {
    const heading = await $("h1, h2");

    await expect(heading).toBeDisplayed();
    assert.match(await heading.getText(), /A dependable process/);
  });

  it("shows the six-step process timeline", async () => {
    const bodyText = await browser.execute(() => document.body.textContent || "");
    const steps = [
      "Initial Walkthrough & Estimate",
      "Clear Scope & Scheduling",
      "Surface Prep & Protection",
      "Painting, Repairs, Turnover, or Improvement Work",
      "Final Walkthrough & Cleanup",
      "Next-Step Recommendations When Needed",
    ];

    for (const step of steps) {
      assert.match(bodyText, new RegExp(step.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    }
  });

  it("routes the final estimate CTA to contact", async () => {
    await $('[data-testid="approach-estimate-cta"]').scrollIntoView();
    await $('[data-testid="approach-estimate-cta"]').click();
    await browser.waitUntil(async () => (await browser.getUrl()).includes("/contact"));

    assert.match(await browser.getUrl(), /\/contact$/);
  });
});
