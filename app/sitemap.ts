import { MetadataRoute } from "next";
import { siteMetadata } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteMetadata.siteUrl;

  return [
    {
      url: `${base}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${base}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
