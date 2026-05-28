import type { MetadataRoute } from "next";
import { siteData } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/events", "/traditions", "/contact"];
  return routes.map((route) => ({
    url: `${siteData.siteUrl}${route}`,
    lastModified: new Date()
  }));
}
