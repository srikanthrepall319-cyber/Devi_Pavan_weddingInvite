import type { MetadataRoute } from "next";
import { siteData } from "@/lib/site-data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteData.seoTitle,
    short_name: siteData.coupleShort,
    description: siteData.seoDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#fff9ef",
    theme_color: "#6e1f2d",
    icons: []
  };
}
