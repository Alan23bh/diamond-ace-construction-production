import assert from "node:assert/strict";
import { $, browser, expect } from "@wdio/globals";

const approvedServiceIds = [
  "apartment-turnovers",
  "interior-painting",
  "drywall-texture",
  "exterior-painting",
] as const;

describe("Home", () => {
  beforeEach(async () => {
    await browser.setWindowSize(1440, 1000);
    await browser.url("/");
  });

  it("loads the homepage and shows the main heading", async () => {
    const heading = await $("h1");

    await expect(heading).toBeDisplayed();
    assert.match(await heading.getText(), /Apartment Turnovers, Painting & Drywall Work/);
  });

  it("publishes canonical, social, and structured business metadata", async () => {
    const canonical = await $('link[rel="canonical"]');
    await expect(canonical).toExist();
    const canonicalHref = (await canonical.getAttribute("href")) || "";
    const canonicalUrl = new URL(canonicalHref);
    assert.equal(canonicalUrl.pathname, "/");
    assert.match(canonicalUrl.origin, /^https?:\/\//);

    const openGraphTitle = await $('meta[property="og:title"]');
    await expect(openGraphTitle).toExist();
    assert.match((await openGraphTitle.getAttribute("content")) || "", /Diamond Ace Construction/);

    const structuredData = await browser.execute(() =>
      document.querySelector('script[type="application/ld+json"]')?.textContent || "",
    );
    assert.match(structuredData, /HousePainter/);
    assert.match(structuredData, /Apartment Turnovers/);
  });

  it("shows the four approved core services", async () => {
    const serviceSection = await $('[aria-labelledby="service-category-overview-title"]');
    await serviceSection.scrollIntoView({ block: "start", inline: "nearest" });

    for (const serviceId of approvedServiceIds) {
      const card = await $(`[data-testid="home-service-${serviceId}"]`);
      await expect(card).toBeDisplayed();
    }

    const serviceText = await serviceSection.getText();
    assert.doesNotMatch(serviceText, /Light Remodeling/);
  });


  it("renders the complete homepage conversion flow", async () => {
    const sectionIds = [
      "home-turnover-feature",
      "home-who-we-serve",
      "home-preparation-feature",
      "home-process",
    ];

    for (const sectionId of sectionIds) {
      await expect($(`[data-testid="${sectionId}"]`)).toExist();
    }

    const finalCta = await $('[data-testid="home-final-estimate-cta"]');
    await finalCta.scrollIntoView({ block: "center", inline: "nearest" });
    await expect(finalCta).toBeDisplayed();
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
