import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import SmoothScroll from "./components/animations/SmoothScroll";
import Loader from "./components/animations/Loader";
import RouteTransition from "./components/animations/RouteTransition";
import Footer from "./components/Footer";
import { Instrument_Serif, Inter } from "next/font/google";

const instrument = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.onerabbit.studio"),

  title: {
    default: "ONERABBIT — Fotografía",
    template: "%s — ONERABBIT",
  },

  description:
    "Práctica independiente de fotografía centrada en retrato, moda, producto y cultura visual.",

  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/",
      "en-US": "/en",
    },
  },

  openGraph: {
    title: "ONERABBIT — Fotografía",
    description:
      "Práctica independiente de fotografía centrada en retrato, moda, producto y cultura visual.",
    url: "/",
    siteName: "ONERABBIT",
    locale: "es_ES",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/opengraph-image.jpg",
        alt: "ONERABBIT — Fotografía",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ONERABBIT — Fotografía",
    description:
      "Práctica independiente de fotografía centrada en retrato, moda, producto y cultura visual.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body className={`${instrument.variable} ${inter.variable}`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PGHHQ0WE6N"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-PGHHQ0WE6N');
          `}
        </Script>

        <Loader />

        <SmoothScroll>
          <RouteTransition>
            {children}
          </RouteTransition>

          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}