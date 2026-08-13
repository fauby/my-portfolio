import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";

export const dynamic = "force-static";

const siteUrl = "https://fauzanabyandani.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudies = projects
    .filter((p) => p.caseStudy)
    .map((p) => ({
      url: `${siteUrl}/work/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...caseStudies,
  ];
}
