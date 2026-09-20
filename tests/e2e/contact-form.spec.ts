import assert from "node:assert/strict";
import { $, browser, expect } from "@wdio/globals";

async function scrollToEstimateForm() {
  const section = await $('[data-testid="contact-estimate-section"]');
  await section.waitForExist({ timeout: 5000 });

  await browser.execute((node) => {
    node.scrollIntoView({ block: "start", inline: "nearest" });
  }, section);

  const form = await $('[data-testid="estimate-form"]');
  await form.waitForDisplayed({ timeout: 10000 });
  return form;
}

async function clickControl(testId: string) {
  const element = await $(`[data-testid="${testId}"]`);
  await element.waitForDisplayed({ timeout: 5000 });

  // Chrome 153 can report a WebDriver click as intercepted on this long page even
  // after scrolling the control into view. A DOM click still dispatches the real
  // React handler, but avoids WebDriver's flaky pointer-coordinate calculation.
  await browser.execute((node) => {
    node.scrollIntoView({ block: "center", inline: "nearest" });
    node.click();
  }, element);
}

async function continueTo(nextTestId: string) {
  await clickControl("estimate-continue");

  const nextSelector = `[data-testid="${nextTestId}"]`;
  await browser.waitUntil(
    async () => browser.execute((selector) => Boolean(document.querySelector(selector)), nextSelector),
    {
      timeout: 10000,
      interval: 100,
      timeoutMsg: `Estimate form did not advance to ${nextTestId}.`,
    },
  );

  const nextElement = await $(nextSelector);
  await browser.execute((node) => {
    node.scrollIntoView({ block: "center", inline: "nearest" });
  }, nextElement);
  await nextElement.waitForDisplayed({ timeout: 5000 });
}

describe("Contact form", () => {
  beforeEach(async () => {
    await browser.setWindowSize(1440, 1000);
    await browser.url("/contact?e2e=1");
  });

  it("shows a fresh estimate form, not the success state", async () => {
    await scrollToEstimateForm();
    await expect($('[data-testid="estimate-form"]')).toBeDisplayed();
    await expect($('[data-testid="estimate-success"]')).not.toExist();
  });

  it("shows accessible validation errors for empty required fields", async () => {
    await scrollToEstimateForm();
    await clickControl("estimate-continue");

    const city = await $('[data-testid="estimate-city"]');
    await expect(city).toHaveAttribute("aria-invalid", "true");

    const bodyText = await $("body").getText();
    assert.match(bodyText, /Enter the property city or service area/);
  });

  it("uses the custom project selector and updates the selected value", async () => {
    await scrollToEstimateForm();
    await clickControl("estimate-project-type");
    await clickControl("estimate-project-type-option-3");

    const selectorText = await $('[data-testid="estimate-project-type"]').getText();
    assert.match(selectorText, /Exterior Painting/);
  });


  it("ships the static Netlify form definition needed for production lead capture", async () => {
    await browser.url("/__forms.html");

    const form = await $('form[name="diamond-ace-estimate-request"]');
    await expect(form).toExist();
    await expect(form).toHaveAttribute("data-netlify", "true");
    await expect(form).toHaveAttribute("data-netlify-honeypot", "company");
    await expect($('input[name="email"]')).toExist();
    await expect($('input[name="services"]')).toExist();
  });

  it("progresses through every step and reaches simulated success", async () => {
    await scrollToEstimateForm();
    await $('[data-testid="estimate-city"]').setValue("Orlando");
    await continueTo("service-option-interior-painting");

    await clickControl("service-option-interior-painting");
    await clickControl("service-option-apartment-turnovers");
    await $('[data-testid="estimate-size"]').setValue("Two bedrooms and main living area");
    await $('[data-testid="estimate-notes"]').setValue("Local E2E test submission.");
    await continueTo("estimate-name");

    await $('[data-testid="estimate-name"]').setValue("Test Lead");
    await $('[data-testid="estimate-email"]').setValue("test@example.com");
    await $('[data-testid="estimate-phone"]').setValue("4075550100");
    await continueTo("estimate-submit");

    const reviewText = await $("body").getText();
    assert.match(reviewText, /Review Your Request/);
    assert.match(reviewText, /Orlando/);
    assert.match(reviewText, /Test Lead/);
    assert.match(reviewText, /test@example.com/);

    await clickControl("estimate-submit");
    await $('[data-testid="estimate-success"]').waitForDisplayed({ timeout: 15000 });

    const successText = await $('[data-testid="estimate-success"]').getText();
    assert.match(successText, /Thanks\. Your Estimate Request Has Been Prepared Successfully/);
    assert.match(successText, /Local development note/);
  });
});
