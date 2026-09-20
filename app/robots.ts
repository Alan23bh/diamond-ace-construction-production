import type { MetadataRoute } from "next";
import { shouldIndexSite, siteUrl } from "../lib/seo";

export default function robots(): MetadataRoute.Robots {
  if (!shouldIndexSite) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/__forms.html"],
    },
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
  };
}
