import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.onerabbit.studio";

  const projects = [
    "portrait-studies",
    "body-language",
    "objects-performance",
    "selected-faces",
    "motorsport",
  ];

  return [
    {
      url: baseUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/en`,
      changeFrequency: "monthly",
      priority: 1,
    },

    ...projects.map((project) => ({
      url: `${baseUrl}/projects/${project}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),

    ...projects.map((project) => ({
      url: `${baseUrl}/en/projects/${project}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}