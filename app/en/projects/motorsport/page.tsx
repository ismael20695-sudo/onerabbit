import type { Metadata } from "next";
import Motorsport from "@/app/projects/motorsport/page";
import en from "@/app/content/en";

export const metadata: Metadata = {
  title: "Motorsport Photography",

  description:
    "Motorsport photography exploring speed, racing, machinery and human presence through action and documentary imagery by ONERABBIT.",

  alternates: {
    canonical: "/en/projects/motorsport",
    languages: {
      "es-ES": "/projects/motorsport",
      "en-US": "/en/projects/motorsport",
    },
  },

  openGraph: {
    title: "Motorsport Photography — ONERABBIT",
    description:
      "Motorsport photography exploring speed, racing, machinery and human presence through action and documentary imagery by ONERABBIT.",
    url: "/en/projects/motorsport",
    siteName: "ONERABBIT",
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_ES"],
    images: [
      {
        url: "/images/MOTORSPORT-HERO.jpg",
        width: 1600,
        height: 900,
        alt: "Motorsport racing photography by ONERABBIT",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Motorsport Photography — ONERABBIT",
    description:
      "Motorsport photography exploring speed, racing, machinery and human presence through action and documentary imagery by ONERABBIT.",
    images: ["/images/MOTORSPORT-HERO.jpg"],
  },
};

export default function EnglishMotorsport() {
  return <Motorsport content={en} isEnglish />;
}