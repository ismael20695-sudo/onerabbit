import Image from "next/image";
import NextProject from "@/app/components/NextProject";
import type { Metadata } from "next";

import Header from "@/app/components/Header";
import ProjectInfo from "@/app/components/ProjectInfo";
import SharedImage from "@/app/components/animations/SharedImage";
import ProjectReveal from "@/app/components/animations/ProjectReveal";

export const metadata: Metadata = {
  title: "Portrait Studies",
  description:
    "Portrait photography exploring identity, gesture and visual presence by ONERABBIT.",

  openGraph: {
    title: "Portrait Studies — ONERABBIT",
    description:
      "Portrait photography exploring identity, gesture and visual presence.",

    images: [
      {
        url: "/images/ALBA_27_10_2301356.jpg",
        width: 1200,
        height: 1500,
        alt: "Portrait Studies — ONERABBIT",
      },
    ],

    type: "website",
  },
};

export default function PortraitStudies() {
  return (
    <main className="projectPage">
      <Header />

      <ProjectReveal delay={0.35}>
        <section className="projectIntro portraitIntro">
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
      </ProjectReveal>

      <section className="projectHero portraitHero">
        <SharedImage
          layoutId="portrait-image"
          src="/images/ALBA_27_10_2301356.jpg"
          alt="Portrait Studies"
          className="projectHeroImage"
        />
      </section>

      <ProjectReveal delay={0.45}>
        <section className="projectStatement portraitStatement">
          <p>
            Faces, gesture,
            <br />
            light and tension.
          </p>
        </section>
      </ProjectReveal>

      <ProjectInfo
        client="Independent"
        category="Editorial / Portrait"
        year="2026"
        location="Madrid / León"
      />

      <ProjectReveal delay={0.25}>
        <section className="portraitOpening">
          <div className="portraitOpeningLarge">
            <Image
              src="/images/_MG_5822.jpg"
              alt="Portrait study"
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 56vw"
            />
          </div>

          <div className="portraitOpeningSmall">
            <Image
              src="/images/ALBA_27_10_2301569.jpg"
              alt="Portrait study"
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 32vw"
            />
          </div>
        </section>
      </ProjectReveal>

      <ProjectReveal delay={0.25}>
        <section className="portraitQuiet">
          <div className="portraitQuietFrame">
            <Image
              src="/images/_MG_1053.jpg"
              alt="Portrait study"
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 72vw"
            />
          </div>
        </section>
      </ProjectReveal>

      <ProjectReveal delay={0.25}>
        <section className="portraitShadowPair">
          <div className="portraitShadowLeft">
            <Image
              src="/images/ANGIE_7_07_2201133_1.jpg"
              alt="Portrait study"
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 44vw"
            />
          </div>

          <div className="portraitShadowRight">
            <Image
              src="/images/_MG_8878.jpg"
              alt="Portrait study"
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 38vw"
            />
          </div>
        </section>
      </ProjectReveal>

      <ProjectReveal delay={0.25}>
        <section className="portraitColorMoment">
          <div className="portraitColorFrame">
            <Image
              src="/images/ALBA_27_10_2301742.jpg"
              alt="Portrait study"
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 62vw"
            />
          </div>
        </section>
      </ProjectReveal>

      <ProjectReveal delay={0.25}>
        <section className="portraitExperiment">
          <div className="portraitExperimentFrame">
            <Image
              src="/images/_MG_9023_1.jpg"
              alt="Portrait study"
              fill
              className="projectPhoto"
              sizes="100vw"
            />
          </div>
        </section>
      </ProjectReveal>

      <ProjectReveal delay={0.25}>
        <section className="portraitClosing">
          <div className="portraitClosingFrame">
            <Image
              src="/images/_MG_9086_1.jpg"
              alt="Portrait study"
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 54vw"
            />
          </div>
        </section>
      </ProjectReveal>

<NextProject
  number="02"
  title={"Body\nLanguage"}
  category="PORTRAIT / MOVEMENT"
  href="/projects/body-language"
  image="/images/HECTOR_10_9_2300501.jpg"
   layoutId="body-image"
/>


    </main>
  );
}