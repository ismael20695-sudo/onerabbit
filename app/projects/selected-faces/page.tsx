import Image from "next/image";
import type { Metadata } from "next";

import es from "@/app/content/es";
import Header from "@/app/components/Header";
import ProjectInfo from "@/app/components/ProjectInfo";
import SharedImage from "@/app/components/animations/SharedImage";
import ProjectReveal from "@/app/components/animations/ProjectReveal";
import NextProject from "@/app/components/NextProject";

type SelectedFacesContent = typeof es;

export const metadata: Metadata = {
  title: "Selected Faces — ONERABBIT",
  description:
    "Selected Faces explores identity, gesture and presence through fashion and portrait photography by ONERABBIT.",
  alternates: {
    canonical: "https://www.onerabbit.studio/projects/selected-faces",
  },
  openGraph: {
    title: "Selected Faces — ONERABBIT",
    description:
      "Selected Faces explores identity, gesture and presence through fashion and portrait photography by ONERABBIT.",
    url: "https://www.onerabbit.studio/projects/selected-faces",
    siteName: "ONERABBIT",
    type: "website",
    images: [
      {
        url: "https://www.onerabbit.studio/images/ENCINA_11_04_2200401_1.jpg",
        width: 1200,
        height: 1500,
        alt: "Selected Faces fashion portrait photography by ONERABBIT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Selected Faces — ONERABBIT",
    description:
      "Selected Faces explores identity, gesture and presence through fashion and portrait photography by ONERABBIT.",
    images: [
      "https://www.onerabbit.studio/images/ENCINA_11_04_2200401_1.jpg",
    ],
  },
};

export default function SelectedFaces({
  content = es,
}: {
  content?: SelectedFacesContent;
}) {
  return (
    <main className="projectPage">
      <Header content={content} />

      <ProjectReveal delay={0.35}>
        <section className="projectIntro facesIntro">
          <span>{content.work.faces.number.split(" / ")[0]}</span>

          <div>
            <p>{content.work.faces.project.introCategory}</p>

            <h1>
              {content.work.faces.title[0]}
              <br />
              {content.work.faces.title[1]}
            </h1>
          </div>

          <span>{content.work.faces.year}</span>
        </section>
      </ProjectReveal>

      <section className="projectHero facesHero">
        <SharedImage
          layoutId="faces-image"
          src="/images/ENCINA_11_04_2200401_1.jpg"
          alt={content.work.faces.project.imageAlt}
        />
      </section>

      <ProjectReveal delay={0.45}>
        <section className="projectStatement facesStatement">
          <p>
            {content.work.faces.project.statement[0]}
            <br />
            {content.work.faces.project.statement[1]}
          </p>
        </section>
      </ProjectReveal>

      <ProjectInfo
        client={content.work.faces.project.client}
        category={content.work.faces.project.infoCategory}
        year={content.work.faces.year}
        location={content.work.faces.project.location}
      />

      <ProjectReveal delay={0.25}>
        <section className="facesOpening">
          <div className="facesOpeningLarge">
            <Image
              src="/images/_MG_9154_1.jpg"
              alt={content.work.faces.project.imageAlt}
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 58vw"
            />
          </div>

          <div className="facesOpeningSmall">
            <Image
              src="/images/564_1000000078695_564.jpg"
              alt={content.work.faces.project.imageAlt}
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
              alt={content.work.faces.project.imageAlt}
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
              alt={content.work.faces.project.imageAlt}
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 44vw"
            />
          </div>

          <div className="facesEditorialRight">
            <Image
              src="/images/BEA_14_10_2102050_1.jpg"
              alt={content.work.faces.project.imageAlt}
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
              alt={content.work.faces.project.imageAlt}
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
              alt={content.work.faces.project.imageAlt}
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 56vw"
            />
          </div>

          <div className="facesOffsetSmall">
            <Image
              src="/images/_MG_8878.jpg"
              alt={content.work.faces.project.imageAlt}
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
            alt={content.work.faces.project.imageAlt}
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
              alt={content.work.faces.project.imageAlt}
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 43vw"
            />
          </div>

          <div className="facesClosingRight">
            <Image
              src="/images/ANGIE_7_07_2201201.jpg"
              alt={content.work.faces.project.imageAlt}
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 43vw"
            />
          </div>
        </section>
      </ProjectReveal>

      <NextProject
        number={content.work.faces.project.nextNumber}
        title={content.work.faces.project.nextTitle}
        category={content.work.faces.project.nextCategory}
        href={content.work.faces.project.nextHref}
        image="/images/MOTORSPORT-HERO.jpg"
        layoutId="motorsport-image"
      />
    </main>
  );
}