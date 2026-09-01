import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Body Language",
  description:
    "Movement and portrait photography by ONERABBIT.",
};

export default function BodyLanguage() {
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
        <span>02</span>

        <div>
          <p>MOVEMENT / PORTRAIT</p>

          <h1>
            Body
            <br />
            Language
          </h1>
        </div>

        <span>2026</span>
      </section>

      <section className="projectHero">
        <Image
          src="/images/HECTOR_10_9_2300501.jpg"
          alt="Body Language"
          fill
          priority
          className="projectPhoto"
        />
      </section>

      <section className="projectStatement">
        <p>
          Movement as structure.
          Gesture as a graphic element.
        </p>
      </section>

      <section className="bodySplit">
        <div className="bodyTall">
          <Image
            src="/images/HECTOR_10_9_2300059.jpg"
            alt="Body Language"
            fill
            className="projectPhoto"
          />
        </div>

        <div className="bodySmall">
          <Image
            src="/images/HECTOR_10_9_2300474.jpg"
            alt="Body Language"
            fill
            className="projectPhoto"
          />
        </div>
      </section>

      <section className="projectFull">
        <Image
          src="/images/VICKY_14_05_2302008.jpg"
          alt="Body Language"
          fill
          className="projectPhoto"
        />
      </section>

      <section className="bodyFloating">
        <div className="bodyFloatingImage">
          <Image
            src="/images/SARA_FUTURE_24_11_2102316_1.jpg"
            alt="Body Language"
            fill
            className="projectPhoto"
          />
        </div>
      </section>

      <section className="nextProject">
        <span>NEXT PROJECT</span>

        <Link href="/projects/objects-performance">
          Objects & Performance
          <span>↗</span>
        </Link>
      </section>

    </main>
  );
}
