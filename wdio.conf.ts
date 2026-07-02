import { mkdirSync } from "node:fs";
import path from "node:path";
import type { Capabilities, Options } from "@wdio/types";

const screenshotDir = path.join(process.cwd(), "tests/e2e/screenshots");

type ScreenshotBrowser = {
  saveScreenshot: (filePath: string) => Promise<void>;
};

export const config: Options.Testrunner & Capabilities.WithRequestedTestrunnerCapabilities = {
  runner: "local",
  specs: ["./tests/e2e/**/*.spec.ts"],
  maxInstances: 1,
  capabilities: [
    {
      browserName: "chrome",
      browserVersion: "stable",
      "goog:chromeOptions": {
        args: [
          "--headless=new",
          "--disable-gpu",
          "--no-sandbox",
          "--window-size=1440,1000",
        ],
      },
    },
  ],
  logLevel: "warn",
  bail: 0,
  baseUrl: process.env.WDIO_BASE_URL ?? "http://127.0.0.1:3000",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
  afterTest: async function (_test, _context, result) {
    if (result.error) {
      mkdirSync(screenshotDir, { recursive: true });
      const safeName = _test.title.replace(/[^a-z0-9]+/gi, "-").toLowerCase();
      const screenshotBrowser = (globalThis as typeof globalThis & {
        browser?: ScreenshotBrowser;
      }).browser;

      await screenshotBrowser?.saveScreenshot(
        path.join(screenshotDir, `${Date.now()}-${safeName}.png`),
      );
    }
  },
};
