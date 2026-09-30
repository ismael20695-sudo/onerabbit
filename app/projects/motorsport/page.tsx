import Image from "next/image";
import type { Metadata } from "next";
import NextProject from "@/app/components/NextProject";
import Header from "@/app/components/Header";
import ProjectInfo from "@/app/components/ProjectInfo";
import SharedImage from "@/app/components/animations/SharedImage";
import ProjectReveal from "@/app/components/animations/ProjectReveal";

export const metadata: Metadata = {
  title: "Motorsport Photography",
  description:
    "Motorsport and racing photography focused on speed, machinery and human presence by ONERABBIT.",

alternates: {
  canonical: "/projects/motorsport",
},

  openGraph: {
    title: "Motorsport Photography — ONERABBIT",
    description:
      "Motorsport and racing photography focused on speed, machinery and human presence.",

    images: [
      {
        url: "/images/MOTORSPORT-HERO.jpg",
        width: 1600,
        height: 900,
        alt: "Motorsport — ONERABBIT",
      },
    ],

    type: "website",
  },
};

export default function Motorsport() {
  return (
    <main className="projectPage motorsportPage">

      <Header />

      <ProjectReveal delay={0.35}>
        <section className="projectIntro motorsportIntro">
          <span>05</span>

          <div>
            <p>MOTORSPORT / RACING</p>
 <h1>MotorSport</h1>

          </div>

          <span>2026</span>
        </section>
      </ProjectReveal>

      <section className="projectHero motorsportHero">
        <SharedImage
          layoutId="motorsport-image"
          src="/images/MOTORSPORT-HERO.jpg"
          alt="Motorsport racing photography by ONERABBIT"
        />
      </section>

      <ProjectReveal delay={0.45}>
        <section className="projectStatement motorsportStatement">
          <p>
            Speed, machinery and human presence
            shaped by movement and competition.
          </p>
        </section>
      </ProjectReveal>

      <ProjectInfo
        client="Independent"
        category="Motorsport / Racing"
        year="2026"
        location="Spain"
      />

      <ProjectReveal delay={0.25}>
        <section className="motorsportDetails">

          <div className="motorsportDetailFrame motorsportDriver">
            <Image
              src="/images/IMG_7868.jpg"
              alt="Driver inside race car"
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
              className="projectPhoto"
            />
          </div>

          <div className="motorsportDetailFrame motorsportWheel">
            <Image
              src="/images/IMG_7885.jpg"
              alt="Racing tire detail"
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
              className="projectPhoto"
            />
          </div>

        </section>
      </ProjectReveal>

      <ProjectReveal delay={0.25}>
        <section className="motorsportLandscape motorsportLandscapeWide">
          <Image
            src="/images/IMG_7468.jpg"
            alt="Race car climbing through the forest"
            fill
            sizes="100vw"
            className="projectPhoto"
          />
        </section>
      </ProjectReveal>

      <ProjectReveal delay={0.25}>
        <section className="motorsportActionPair">

          <div className="motorsportActionFrame">
            <Image
              src="/images/IMG_6948.jpg"
              alt="Prototype race car in motion"
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
              className="projectPhoto"
            />
          </div>

          <div className="motorsportActionFrame">
            <Image
              src="/images/IMG_7326.jpg"
              alt="Race car in motion"
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
              className="projectPhoto"
            />
          </div>

        </section>
      </ProjectReveal>

      <ProjectReveal delay={0.25}>
        <section className="motorsportLandscape motorsportLandscapeSecond">
          <Image
            src="/images/IMG_7506.jpg"
            alt="Prototype race car"
            fill
            sizes="100vw"
            className="projectPhoto"
          />
        </section>
      </ProjectReveal>

      <ProjectReveal delay={0.3}>
        <section className="motorsportClosing">

          <div className="motorsportClosingFrame">
            <Image
              src="/images/IMG_7889.jpg"
              alt="Mechanic preparing race car"
              fill
              sizes="(max-width: 800px) 100vw, 58vw"
              className="projectPhoto"
            />
          </div>

        </section>
      </ProjectReveal>

      <NextProject
        number="01"
        title={"Portrait\nStudies"}
        category="EDITORIAL / PORTRAIT"
        href="/projects/portrait-studies"
        image="/images/ALBA_27_10_2301356.jpg"
        layoutId="portrait-image"
      />

    </main>
  );
}