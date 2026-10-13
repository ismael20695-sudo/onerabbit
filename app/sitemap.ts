import type { MetadataRoute } from "next";

const baseUrl = "https://www.onerabbit.studio";

const projects = [
  {
    slug: "portrait-studies",
    priority: 0.9,
  },
  {
    slug: "body-language",
    priority: 0.9,
  },
  {
    slug: "objects-performance",
    priority: 0.9,
  },
  {
    slug: "selected-faces",
    priority: 0.9,
  },
  {
    slug: "motorsport",
    priority: 0.9,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          "es-ES": `${baseUrl}/`,
          "en-US": `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/en`,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          "es-ES": `${baseUrl}/`,
          "en-US": `${baseUrl}/en`,
        },
      },
    },
  ];

  for (const project of projects) {
    const esUrl = `${baseUrl}/projects/${project.slug}`;
    const enUrl = `${baseUrl}/en/projects/${project.slug}`;

    entries.push(
      {
        url: esUrl,
        changeFrequency: "monthly",
        priority: project.priority,
        alternates: {
          languages: {
            "es-ES": esUrl,
            "en-US": enUrl,
          },
        },
      },
      {
        url: enUrl,
        changeFrequency: "monthly",
        priority: project.priority,
        alternates: {
          languages: {
            "es-ES": esUrl,
            "en-US": enUrl,
          },
        },
      },
    );
  }

  return entries;
}