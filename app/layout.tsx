import type { Metadata } from "next";
import "./globals.css";
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
  metadataBase: new URL("https://onerabbit.studio"),

  title: {
    default: "ONERABBIT — Photography Studio",
    template: "%s — ONERABBIT",
  },

  description:
    "Independent photography practice focused on portrait, fashion, product and visual culture.",

  openGraph: {
    title: "ONERABBIT — Photography Studio",
    description:
      "Independent photography practice focused on portrait, fashion, product and visual culture.",

    images: [
      "/opengraph-image.jpg",
    ],

    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ONERABBIT — Photography Studio",
    description:
      "Independent photography practice focused on portrait, fashion, product and visual culture.",

    images: [
      "/opengraph-image.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrument.variable} ${inter.variable}`}>

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