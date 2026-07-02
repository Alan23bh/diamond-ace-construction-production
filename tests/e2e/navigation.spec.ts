import assert from "node:assert/strict";
import { $, browser, expect } from "@wdio/globals";

describe("Navigation", () => {
  beforeEach(async () => {
    await browser.setWindowSize(1440, 1000);
    await browser.url("/");
  });

  it("header links route to Services, Our Approach, and Contact", async () => {
    await $('[data-testid="header-link-services"]').click();
    await browser.waitUntil(async () => (await browser.getUrl()).includes("/services"));
    assert.match(await browser.getUrl(), /\/services$/);

    await browser.url("/");
    await $('[data-testid="header-link-our-approach"]').click();
    await browser.waitUntil(async () => (await browser.getUrl()).includes("/approach"));
    assert.match(await browser.getUrl(), /\/approach$/);

    await browser.url("/");
    await $('[data-testid="header-link-contact"]').click();
    await browser.waitUntil(async () => (await browser.getUrl()).includes("/contact"));
    assert.match(await browser.getUrl(), /\/contact$/);
  });

  it("footer includes the correct routes", async () => {
    const footerServices = await $('[data-testid="footer-link-services"]');
    const footerApproach = await $('[data-testid="footer-link-our-approach"]');
    const footerContact = await $('[data-testid="footer-link-contact"]');

    await expect(footerServices).toHaveAttribute("href", "/services");
    await expect(footerApproach).toHaveAttribute("href", "/approach");
    await expect(footerContact).toHaveAttribute("href", "/contact");
  });

  it("redirects portfolio to approach", async () => {
    await browser.url("/portfolio");
    await browser.waitUntil(async () => (await browser.getUrl()).includes("/approach"));

    assert.match(await browser.getUrl(), /\/approach$/);
  });
});
