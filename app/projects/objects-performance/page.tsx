import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Objects & Performance",
  description:
    "Product and still life photography by ONERABBIT.",
};

export default function ObjectsPerformance() {
  return (
    <main className="projectPage">

      <header className="projectHeader">
        <Link href="/" className="logo">
          ONERABBIT
        </Link>

        <nav>
          <Link href="/#work">WORK</Link>
          <Link href="/#about">ABOUT</Link>
          <Link href="/#contact">CONTACT</Link>
        </nav>
      </header>

      <section className="projectIntro">
        <span>03</span>

        <div>
          <p>PRODUCT / STILL LIFE</p>

          <h1>
            Objects &
            <br />
            Performance
          </h1>
        </div>

        <span>2026</span>
      </section>

      <section className="projectHero productHero">
        <Image
          src="/images/1000_Birkenstock.jpg"
          alt="Objects & Performance"
          fill
          priority
          className="projectPhoto productPhoto"
        />
      </section>

      <section className="projectStatement">
        <p>
          Product photography built around
          material, balance and visual tension.
        </p>
      </section>

      <section className="productPair">
        <div className="productFrame productFrameLarge">
          <Image
            src="/images/2_Adizero.jpg"
            alt="Adizero"
            fill
            className="projectPhoto"
          />
        </div>

        <div className="productFrame productFrameSmall">
          <Image
            src="/images/8_Adizero.jpg"
            alt="Adizero"
            fill
            className="projectPhoto"
          />
        </div>
      </section>

      <section className="productBand">
        <div className="productBandText">
          <span>FORM</span>
          <span>MATERIAL</span>
          <span>MOTION</span>
        </div>

        <div className="productBandImage">
          <Image
            src="/images/1000_Birkenstock.jpg"
            alt="Product detail"
            fill
            className="projectPhoto"
          />
        </div>
      </section>

      <section className="nextProject">
        <span>NEXT PROJECT</span>

        <Link href="/projects/selected-faces">
          Selected Faces
          <span>↗</span>
        </Link>
      </section>

    </main>
  );
}