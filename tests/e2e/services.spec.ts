import assert from "node:assert/strict";
import { $, browser, expect } from "@wdio/globals";

describe("Services", () => {
  beforeEach(async () => {
    await browser.setWindowSize(1440, 1000);
    await browser.url("/services");
  });

  it("shows the services heading as the page h1", async () => {
    const heading = await $("h1");

    await expect(heading).toBeDisplayed();
    assert.match(await heading.getText(), /Painting, Turnovers, Drywall & Exterior Work/);
  });

  it("shows all four approved service sections", async () => {
    const serviceIds = [
      "apartment-turnovers",
      "interior-painting",
      "drywall-texture",
      "exterior-painting",
    ];

    for (const id of serviceIds) {
      const section = await $(`[data-testid="service-section-${id}"]`);
      await section.scrollIntoView({ block: "center" });
      await expect(section).toExist();
    }

    const bodyText = await browser.execute(() => document.body.textContent || "");
    assert.match(bodyText, /Apartment Turnovers/);
    assert.match(bodyText, /Interior Painting/);
    assert.match(bodyText, /Drywall Repair & Texture/);
    assert.match(bodyText, /Exterior Painting/);
    assert.doesNotMatch(bodyText, /Light Remodeling/);
    assert.doesNotMatch(bodyText, /Roofing/);
  });

  it("includes service questions and estimate conversion paths", async () => {
    const faq = await $('[data-testid="services-faq"]');
    await faq.scrollIntoView({ block: "center" });
    await expect(faq).toBeDisplayed();

    const estimateLinkCount = await browser.execute(
      () => document.querySelectorAll('a[href="/contact"]').length,
    );
    assert.ok(estimateLinkCount >= 5);
  });
});
