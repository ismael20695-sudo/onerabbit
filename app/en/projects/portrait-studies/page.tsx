import type { Metadata } from "next";
import PortraitStudies from "@/app/projects/portrait-studies/page";
import en from "@/app/content/en";

export const metadata: Metadata = {
  title: "Portrait Studies",

  description:
    "Portrait Studies explores identity, gesture, light and visual presence through editorial portrait photography by ONERABBIT.",

  alternates: {
    canonical: "/en/projects/portrait-studies",
    languages: {
      "es-ES": "/projects/portrait-studies",
      "en-US": "/en/projects/portrait-studies",
    },
  },

  openGraph: {
    title: "Portrait Studies — ONERABBIT",
    description:
      "Portrait Studies explores identity, gesture, light and visual presence through editorial portrait photography by ONERABBIT.",
    url: "/en/projects/portrait-studies",
    siteName: "ONERABBIT",
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_ES"],
    images: [
      {
        url: "/images/ALBA_27_10_2301356.jpg",
        width: 1200,
        height: 1500,
        alt: "Portrait Studies photography by ONERABBIT",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Portrait Studies — ONERABBIT",
    description:
      "Portrait Studies explores identity, gesture, light and visual presence through editorial portrait photography by ONERABBIT.",
    images: ["/images/ALBA_27_10_2301356.jpg"],
  },
};

export default function EnglishPortraitStudies() {
  return <PortraitStudies content={en} isEnglish />;
}