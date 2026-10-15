import type { Metadata } from "next";
import SelectedFaces from "@/app/projects/selected-faces/page";
import en from "@/app/content/en";

export const metadata: Metadata = {
  title: "Selected Faces",

  description:
    "Selected Faces explores identity, gesture and presence through fashion and portrait photography by ONERABBIT.",

  alternates: {
    canonical: "/en/projects/selected-faces",
    languages: {
      "es-ES": "/projects/selected-faces",
      "en-US": "/en/projects/selected-faces",
    },
  },

  openGraph: {
    title: "Selected Faces — ONERABBIT",
    description:
      "Selected Faces explores identity, gesture and presence through fashion and portrait photography by ONERABBIT.",
    url: "/en/projects/selected-faces",
    siteName: "ONERABBIT",
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_ES"],
    images: [
      {
        url: "/images/ENCINA_11_04_2200401_1.jpg",
        width: 1200,
        height: 1500,
        alt: "Selected Faces fashion portrait photography by ONERABBIT",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Selected Faces — ONERABBIT",
    description:
      "Selected Faces explores identity, gesture and presence through fashion and portrait photography by ONERABBIT.",
    images: ["/images/ENCINA_11_04_2200401_1.jpg"],
  },
};

export default function EnglishSelectedFaces() {
  return <SelectedFaces content={en} isEnglish />;
}