import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Faces",
  description:
    "Fashion and portrait photography by ONERABBIT.",
};

export default function SelectedFaces() {
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
        <span>04</span>

        <div>
          <p>FASHION / PORTRAIT</p>

          <h1>
            Selected
            <br />
            Faces
          </h1>
        </div>

        <span>2026</span>
      </section>

      <section className="projectHero">
        <Image
          src="/images/ENCINA_11_04_2200401_1.jpg"
          alt="Selected Faces"
          fill
          priority
          className="projectPhoto"
        />
      </section>

      <section className="projectStatement">
        <p>
          Portraits driven by character,
          attitude and visual presence.
        </p>
      </section>

      <section className="facesPair">
        <div className="facesFrame">
          <Image
            src="/images/672_8719797188465_672.jpg"
            alt="Selected Faces"
            fill
            className="projectPhoto"
          />
        </div>

        <div className="facesFrame facesOffset">
          <Image
            src="/images/913_8719797188885_913.jpg"
            alt="Selected Faces"
            fill
            className="projectPhoto"
          />
        </div>
      </section>

      <section className="facesWide">
        <Image
          src="/images/_MG_1147.jpg"
          alt="Selected Faces"
          fill
          className="projectPhoto"
        />
      </section>

      <section className="facesFloating">
        <div className="facesFloatingFrame">
          <Image
            src="/images/_MG_9086_1.jpg"
            alt="Selected Faces"
            fill
            className="projectPhoto"
          />
        </div>
      </section>

      <section className="nextProject">
        <span>BACK TO</span>

        <Link href="/#work">
          Selected Work
          <span>↗</span>
        </Link>
      </section>

    </main>
  );
}