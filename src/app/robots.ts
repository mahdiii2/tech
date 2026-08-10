import type { MetadataRoute } from "next";
import { isSearchIndexable, siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(isSearchIndexable ? { allow: "/" } : { disallow: "/" }),
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
