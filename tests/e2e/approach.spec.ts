import assert from "node:assert/strict";
import { $, browser, expect } from "@wdio/globals";

describe("Our Approach", () => {
  beforeEach(async () => {
    await browser.setWindowSize(1440, 1000);
    await browser.url("/approach");
  });

  it("shows the main approach heading", async () => {
    const heading = await $("h1");

    await expect(heading).toBeDisplayed();
    assert.match(await heading.getText(), /Clear Scope, Careful Prep/);
  });

  it("shows the six-step working process", async () => {
    const process = await $('[data-testid="approach-process"]');
    await process.scrollIntoView({ block: "center" });
    await expect(process).toExist();

    const steps = ["01", "02", "03", "04", "05", "06"];
    for (const step of steps) {
      await expect($(`[data-testid="approach-step-${step}"]`)).toExist();
    }

    const processText = await browser.execute(
      () => document.querySelector('[data-testid="approach-process"]')?.textContent || "",
    );
    assert.match(processText, /Estimate Request/);
    assert.match(processText, /Prep & Protection/);
    assert.match(processText, /Final Review & Clean Handoff/);
  });

  it("routes the final estimate CTA to contact", async () => {
    const cta = await $('[data-testid="approach-estimate-cta"]');
    await browser.execute((element) => {
      element.scrollIntoView({ block: "center", inline: "nearest" });
    }, cta);
    await cta.click();
    await browser.waitUntil(async () => (await browser.getUrl()).includes("/contact"));

    assert.match(await browser.getUrl(), /\/contact$/);
  });
});
