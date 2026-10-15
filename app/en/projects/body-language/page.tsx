import type { Metadata } from "next";
import BodyLanguage from "@/app/projects/body-language/page";
import en from "@/app/content/en";

export const metadata: Metadata = {
  title: "Body Language",

  description:
    "Body Language explores movement, gesture and human expression through independent photography by ONERABBIT.",

  alternates: {
    canonical: "/en/projects/body-language",
    languages: {
      "es-ES": "/projects/body-language",
      "en-US": "/en/projects/body-language",
    },
  },

  openGraph: {
    title: "Body Language — ONERABBIT",
    description:
      "Body Language explores movement, gesture and human expression through independent photography by ONERABBIT.",
    url: "/en/projects/body-language",
    siteName: "ONERABBIT",
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_ES"],
    images: [
      {
        url: "/images/HECTOR_10_9_2300501.jpg",
        width: 1200,
        height: 1500,
        alt: "Body Language photography by ONERABBIT",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Body Language — ONERABBIT",
    description:
      "Body Language explores movement, gesture and human expression through independent photography by ONERABBIT.",
    images: ["/images/HECTOR_10_9_2300501.jpg"],
  },
};

export default function EnglishBodyLanguage() {
  return <BodyLanguage content={en} isEnglish />;
}