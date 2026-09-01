import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ONERABBIT — Photography",
    template: "%s — ONERABBIT",
  },

  description:
    "Independent photography practice focused on portrait, fashion, product and visual culture.",

  keywords: [
    "ONERABBIT",
    "photography",
    "photographer",
    "editorial photography",
    "fashion photography",
    "portrait photography",
    "product photography",
    "León",
    "Madrid",
  ],

 openGraph: {
  title: "ONERABBIT — Photography",
  description:
    "Independent photography practice focused on portrait, fashion, product and visual culture.",
  type: "website",
  locale: "en_US",
  images: [
    {
      url: "/opengraph-image.jpg",
      width: 1200,
      height: 630,
      alt: "ONERABBIT Photography",
    },
  ],
},

twitter: {
  card: "summary_large_image",
  title: "ONERABBIT — Photography",
  description:
    "Independent photography practice focused on portrait, fashion, product and visual culture.",
  images: ["/opengraph-image.jpg"],
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}