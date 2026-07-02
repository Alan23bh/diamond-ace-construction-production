import assert from "node:assert/strict";
import { $, browser, expect } from "@wdio/globals";

describe("Contact form", () => {
  beforeEach(async () => {
    await browser.setWindowSize(1440, 1000);
    await browser.url("/contact?e2e=1");
  });

  it("shows a fresh estimate form, not the success state", async () => {
    await expect($('[data-testid="estimate-form"]')).toBeDisplayed();
    await expect($('[data-testid="estimate-success"]')).not.toExist();
  });

  it("shows accessible validation errors for empty required fields", async () => {
    await $('[data-testid="estimate-continue"]').click();

    const bodyText = await $("body").getText();
    assert.match(bodyText, /Enter the property city or service area/);
  });

  it("progresses through every step and reaches simulated success", async () => {
    await $('[data-testid="estimate-city"]').setValue("Orlando");
    await $('[data-testid="estimate-continue"]').click();

    await $('[data-testid="service-option-painting"]').click();
    await $('[data-testid="service-option-apartment-turnover"]').click();
    await $('[data-testid="estimate-size"]').setValue("Two bedrooms and main living area");
    await $('[data-testid="estimate-notes"]').setValue("Local E2E test submission.");
    await $('[data-testid="estimate-continue"]').click();

    await $('[data-testid="estimate-name"]').setValue("Test Lead");
    await $('[data-testid="estimate-email"]').setValue("test@example.com");
    await $('[data-testid="estimate-phone"]').setValue("4075550100");
    await $('[data-testid="estimate-continue"]').click();

    const reviewText = await $("body").getText();
    assert.match(reviewText, /Review your request/);
    assert.match(reviewText, /Orlando/);
    assert.match(reviewText, /Test Lead/);
    assert.match(reviewText, /test@example.com/);

    await $('[data-testid="estimate-submit"]').click();
    await $('[data-testid="estimate-success"]').waitForDisplayed({ timeout: 15000 });

    const successText = await $('[data-testid="estimate-success"]').getText();
    assert.match(successText, /Thanks\. Your estimate request has been prepared successfully/);
    assert.match(successText, /Local development note/);
  });
});
