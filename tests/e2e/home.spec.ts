import assert from "node:assert/strict";
import { $, browser, expect } from "@wdio/globals";

describe("Home", () => {
  beforeEach(async () => {
    await browser.setWindowSize(1440, 1000);
    await browser.url("/");
  });

  it("loads the homepage and shows the main heading", async () => {
    const heading = await $("h1");

    await expect(heading).toBeDisplayed();
    assert.match(await heading.getText(), /Painting, apartment turnovers, repairs/);
  });

  it("routes the primary estimate CTA to contact", async () => {
    await $('[data-testid="home-estimate-cta"]').click();
    await browser.waitUntil(async () => (await browser.getUrl()).includes("/contact"));

    assert.match(await browser.getUrl(), /\/contact$/);
  });

  it("routes the services CTA to services", async () => {
    await $('[data-testid="home-services-cta"]').click();
    await browser.waitUntil(async () => (await browser.getUrl()).includes("/services"));

    assert.match(await browser.getUrl(), /\/services$/);
  });
});
