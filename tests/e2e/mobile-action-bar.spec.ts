import assert from "node:assert/strict";
import { $, browser, expect } from "@wdio/globals";

describe("Mobile action bar", () => {
  beforeEach(async () => {
    await browser.setWindowSize(390, 844);
    await browser.url("/");
  });

  it("appears at mobile size with the primary estimate action", async () => {
    const actionBar = await $('[data-testid="mobile-action-bar"]');
    const estimateLink = await $('[data-testid="mobile-estimate-link"]');

    await expect(actionBar).toBeDisplayed();
    await expect(estimateLink).toHaveText("Request an Estimate");
    await expect(estimateLink).toHaveAttribute("href", "/contact");
  });

  it("does not cover the primary page content", async () => {
    const layout = await browser.execute(() => {
      const main = document.querySelector("main");
      const bar = document.querySelector('[data-testid="mobile-action-bar"]');

      if (!main || !bar) {
        return { hasElements: false, paddingBottom: 0, barHeight: 0 };
      }

      return {
        hasElements: true,
        paddingBottom: Number.parseFloat(getComputedStyle(main).paddingBottom),
        barHeight: bar.getBoundingClientRect().height,
      };
    });

    assert.equal(layout.hasElements, true);
    assert.ok(
      layout.paddingBottom >= layout.barHeight,
      `Expected main bottom padding (${layout.paddingBottom}) to be at least action-bar height (${layout.barHeight})`,
    );
  });
});
