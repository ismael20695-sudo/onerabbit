import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portrait Studies",
  description:
    "Editorial portrait photography by ONERABBIT.",
};

export default function PortraitStudies() {
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
        <span>01</span>

        <div>
          <p>EDITORIAL / PORTRAIT</p>

          <h1>
            Portrait
            <br />
            Studies
          </h1>
        </div>

        <span>2026</span>
      </section>

      <section className="projectHero">
        <Image
          src="/images/ALBA_27_10_2301356.jpg"
          alt="Portrait Studies"
          fill
          priority
          className="projectPhoto"
        />
      </section>

      <section className="projectStatement">
        <p>
          Portraiture built around gesture,
          presence and the tension between
          subject and camera.
        </p>
      </section>

      <section className="portraitPair">
        <div className="portraitFrame">
          <Image
            src="/images/ALBA_27_10_2301569.jpg"
            alt="Portrait"
            fill
            className="projectPhoto"
          />
        </div>

        <div className="portraitFrame portraitOffset">
          <Image
            src="/images/CELIA_28_08_2103078_1.jpg"
            alt="Portrait"
            fill
            className="projectPhoto"
          />
        </div>
      </section>

      <section className="projectFull">
        <Image
          src="/images/ANGIE_7_07_2201201.jpg"
          alt="Portrait"
          fill
          className="projectPhoto"
        />
      </section>

      <section className="projectFloating">
        <div className="floatingFrame">
          <Image
            src="/images/_MG_1053.jpg"
            alt="Portrait"
            fill
            className="projectPhoto"
          />
        </div>
      </section>

      <section className="nextProject">
        <span>NEXT PROJECT</span>

        <Link href="/projects/body-language">
          Body Language
          <span>↗</span>
        </Link>
      </section>

    </main>
  );
}