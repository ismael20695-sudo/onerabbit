import type { Metadata } from "next";
import Home from "../page";
import en from "../content/en";

export const metadata: Metadata = {
  title: "ONERABBIT — Photography Studio",
  description:
    "Independent photography practice focused on portrait, fashion, product and visual culture.",

  alternates: {
    canonical: "/en",
    languages: {
      "es-ES": "/",
      "en-US": "/en",
    },
  },

  openGraph: {
    title: "ONERABBIT — Photography Studio",
    description:
      "Independent photography practice focused on portrait, fashion, product and visual culture.",
    url: "/en",
    siteName: "ONERABBIT",
    locale: "en_US",
    alternateLocale: ["es_ES"],
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpg",
        alt: "ONERABBIT — Photography Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ONERABBIT — Photography Studio",
    description:
      "Independent photography practice focused on portrait, fashion, product and visual culture.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function EnglishHome() {
  return <Home content={en} isEnglish />;
}