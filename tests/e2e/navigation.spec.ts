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
    const footerPrivacy = await $('[data-testid="footer-link-privacy"]');

    await expect(footerServices).toHaveAttribute("href", "/services");
    await expect(footerApproach).toHaveAttribute("href", "/approach");
    await expect(footerContact).toHaveAttribute("href", "/contact");
    await expect(footerPrivacy).toHaveAttribute("href", "/privacy");
  });

  it("serves the Privacy page from the footer", async () => {
    await browser.url("/privacy");

    const heading = await $("h1");
    await expect(heading).toBeDisplayed();
    assert.match(await heading.getText(), /How We Handle Website and Estimate Request Information/);
  });

  it("redirects portfolio to services", async () => {
    await browser.url("/portfolio");
    await browser.waitUntil(async () => (await browser.getUrl()).includes("/services"));

    assert.match(await browser.getUrl(), /\/services$/);
  });
  it("opens and closes the mobile navigation with the keyboard", async () => {
    await browser.setWindowSize(390, 844);
    await browser.url("/");

    const toggle = await $('[data-testid="mobile-nav-toggle"]');
    await toggle.click();
    await expect($('[data-testid="mobile-navigation"]')).toBeDisplayed();

    await browser.keys(["Escape"]);
    await expect($('[data-testid="mobile-navigation"]')).not.toExist();
    await expect(toggle).toBeFocused();
  });

});
