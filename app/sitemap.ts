import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {

  return [
    {
      url: "https://onerabbit.studio",
      lastModified: new Date(),
    },

    {
      url:
        "https://onerabbit.studio/projects/portrait-studies",
      lastModified: new Date(),
    },

    {
      url:
        "https://onerabbit.studio/projects/body-language",
      lastModified: new Date(),
    },

    {
      url:
        "https://onerabbit.studio/projects/objects-performance",
      lastModified: new Date(),
    },

    {
      url:
        "https://onerabbit.studio/projects/selected-faces",
      lastModified: new Date(),
    },

    {
      url:
        "https://onerabbit.studio/projects/motorsport",
      lastModified: new Date(),
    },
  ];
}