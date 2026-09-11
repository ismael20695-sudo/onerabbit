import Image from "next/image";
import type { Metadata } from "next";

import Header from "@/app/components/Header";
import ProjectInfo from "@/app/components/ProjectInfo";
import SharedImage from "@/app/components/animations/SharedImage";
import ProjectReveal from "@/app/components/animations/ProjectReveal";
import NextProject from "@/app/components/NextProject";

export const metadata: Metadata = {
  title: "Selected Faces",
  description:
    "Fashion portrait photography exploring identity and character by ONERABBIT.",

  openGraph: {
    title: "Selected Faces — ONERABBIT",
    description:
      "Fashion portrait photography exploring identity and character.",

    images: [
      {
        url: "/images/ENCINA_11_04_2200401_1.jpg",
        width: 1200,
        height: 1500,
        alt: "Selected Faces — ONERABBIT",
      },
    ],

    type: "website",
  },
};

export default function SelectedFaces() {
  return (
    <main className="projectPage">
      <Header />

      <ProjectReveal delay={0.35}>
        <section className="projectIntro facesIntro">
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
      </ProjectReveal>

      <section className="projectHero facesHero">
        <SharedImage
          layoutId="faces-image"
          src="/images/ENCINA_11_04_2200401_1.jpg"
          alt="Selected Faces"
        />
      </section>

      <ProjectReveal delay={0.45}>
        <section className="projectStatement facesStatement">
          <p>
            Faces as identity,
            <br />
            gesture and presence.
          </p>
        </section>
      </ProjectReveal>

      <ProjectInfo
        client="Independent"
        category="Fashion / Portrait"
        year="2026"
        location="Madrid / León"
      />

      <ProjectReveal delay={0.25}>
        <section className="facesOpening">
          <div className="facesOpeningLarge">
            <Image
              src="/images/_MG_9154_1.jpg"
              alt="Selected Faces"
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 58vw"
            />
          </div>

          <div className="facesOpeningSmall">
            <Image
              src="/images/564_1000000078695_564.jpg"
              alt="Selected Faces"
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 32vw"
            />
          </div>
        </section>
      </ProjectReveal>

      <ProjectReveal delay={0.25}>
        <section className="facesFeature">
          <div className="facesFeatureFrame">
            <Image
              src="/images/ANGIE_7_07_2201133_1.jpg"
              alt="Selected Faces"
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 72vw"
            />
          </div>
        </section>
      </ProjectReveal>

      <ProjectReveal delay={0.25}>
        <section className="facesEditorialPair">
          <div className="facesEditorialLeft">
            <Image
              src="/images/672_8719797188465_672.jpg"
              alt="Selected Faces"
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 44vw"
            />
          </div>

          <div className="facesEditorialRight">
            <Image
              src="/images/BEA_14_10_2102050_1.jpg"
              alt="Selected Faces"
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 44vw"
            />
          </div>
        </section>
      </ProjectReveal>

      <ProjectReveal delay={0.25}>
        <section className="facesWideMoment">
          <div className="facesWideMomentFrame">
            <Image
              src="/images/_MG_1147.jpg"
              alt="Selected Faces"
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 78vw"
            />
          </div>
        </section>
      </ProjectReveal>

      <ProjectReveal delay={0.25}>
        <section className="facesOffsetPair">
          <div className="facesOffsetLarge">
            <Image
              src="/images/CLARA_2_07_2200964_1.jpg"
              alt="Selected Faces"
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 56vw"
            />
          </div>

          <div className="facesOffsetSmall">
            <Image
              src="/images/_MG_8878.jpg"
              alt="Selected Faces"
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 30vw"
            />
          </div>
        </section>
      </ProjectReveal>

      <ProjectReveal delay={0.25}>
        <section className="facesFull">
          <Image
            src="/images/ENCINA_11_04_2200542_1.jpg"
            alt="Selected Faces"
            fill
            className="projectPhoto"
            sizes="100vw"
          />
        </section>
      </ProjectReveal>

      <ProjectReveal delay={0.25}>
        <section className="facesClosingPair">
          <div className="facesClosingLeft">
            <Image
              src="/images/SARA_FUTURE_24_11_2102316_1.jpg"
              alt="Selected Faces"
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 43vw"
            />
          </div>

          <div className="facesClosingRight">
            <Image
              src="/images/ANGIE_7_07_2201201.jpg"
              alt="Selected Faces"
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 43vw"
            />
          </div>
        </section>
      </ProjectReveal>

<NextProject
  number="05"
  title="Motorsport"
  category="MOTORSPORT / RACING"
  href="/projects/motorsport"
  image="/images/MOTORSPORT-HERO.jpg"
  layoutId="motorsport-image"
/>
    </main>
  );
}