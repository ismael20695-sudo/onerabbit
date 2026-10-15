import type { Metadata } from "next";
import ObjectsPerformance from "@/app/projects/objects-performance/page";
import en from "@/app/content/en";

export const metadata: Metadata = {
  title: "Objects & Performance",

  description:
    "Objects & Performance explores material, form and performance through product and still life photography by ONERABBIT.",

  alternates: {
    canonical: "/en/projects/objects-performance",
    languages: {
      "es-ES": "/projects/objects-performance",
      "en-US": "/en/projects/objects-performance",
    },
  },

  openGraph: {
    title: "Objects & Performance — ONERABBIT",
    description:
      "Objects & Performance explores material, form and performance through product and still life photography by ONERABBIT.",
    url: "/en/projects/objects-performance",
    siteName: "ONERABBIT",
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_ES"],
    images: [
      {
        url: "/images/2_Adizero.jpg",
        width: 1200,
        height: 1200,
        alt: "Objects & Performance photography by ONERABBIT",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Objects & Performance — ONERABBIT",
    description:
      "Objects & Performance explores material, form and performance through product and still life photography by ONERABBIT.",
    images: ["/images/2_Adizero.jpg"],
  },
};

export default function EnglishObjectsPerformance() {
  return <ObjectsPerformance content={en} isEnglish />;
}