import type { MetadataRoute } from "next";
import { siteUrl } from "../lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/services", "/approach", "/contact"].map((path) => ({
    url: new URL(path, siteUrl).toString(),
    changeFrequency: path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : path === "/contact" ? 0.9 : 0.8,
  }));
}
