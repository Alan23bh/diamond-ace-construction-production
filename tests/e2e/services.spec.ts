import assert from "node:assert/strict";
import { $, browser, expect } from "@wdio/globals";

describe("Services", () => {
  beforeEach(async () => {
    await browser.setWindowSize(1440, 1000);
    await browser.url("/services");
  });

  it("shows the services heading", async () => {
    const heading = await $("h1, h2");

    await expect(heading).toBeDisplayed();
    assert.match(await heading.getText(), /Painting, turnover, repair/);
  });

  it("shows all four service-group headings", async () => {
    const bodyText = await browser.execute(() => document.body.textContent || "");

    assert.match(bodyText, /Residential Painting/);
    assert.match(bodyText, /Apartment Turnovers/);
    assert.match(bodyText, /Interior Repairs & Trim/);
    assert.match(bodyText, /Light Remodeling & Property Support/);
  });
});
