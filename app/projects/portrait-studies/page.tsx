import Image from "next/image";
import NextProject from "@/app/components/NextProject";
import type { Metadata } from "next";
import { ProjectStructuredData } from "@/app/components/StructuredData";

import es from "@/app/content/es";
import Header from "@/app/components/Header";
import ProjectInfo from "@/app/components/ProjectInfo";
import SharedImage from "@/app/components/animations/SharedImage";
import ProjectReveal from "@/app/components/animations/ProjectReveal";

type PortraitStudiesContent = typeof es;

export const metadata: Metadata = {
  title: "Portrait Studies",

  description:
    "Portrait Studies explores identity, gesture, light and visual presence through editorial portrait photography by ONERABBIT.",

  alternates: {
    canonical: "/projects/portrait-studies",
    languages: {
      "es-ES": "/projects/portrait-studies",
      "en-US": "/en/projects/portrait-studies",
    },
  },

  openGraph: {
    title: "Portrait Studies — ONERABBIT",
    description:
      "Portrait Studies explores identity, gesture, light and visual presence through editorial portrait photography by ONERABBIT.",
    url: "/projects/portrait-studies",
    siteName: "ONERABBIT",
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/images/ALBA_27_10_2301356.jpg",
        width: 1200,
        height: 1500,
        alt: "Portrait Studies photography by ONERABBIT",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Portrait Studies — ONERABBIT",
    description:
      "Portrait Studies explores identity, gesture, light and visual presence through editorial portrait photography by ONERABBIT.",
    images: ["/images/ALBA_27_10_2301356.jpg"],
  },
};

export default function PortraitStudies({
  content = es,
  isEnglish = false,
}: {
  content?: PortraitStudiesContent;
  isEnglish?: boolean;
}) {
  return (
    <main className="projectPage">
      <ProjectStructuredData
        name="Portrait Studies"
        description="Portrait Studies explores identity, gesture, light and visual presence through editorial portrait photography by ONERABBIT."
        url={
          isEnglish
            ? "https://www.onerabbit.studio/en/projects/portrait-studies"
            : "https://www.onerabbit.studio/projects/portrait-studies"
        }
        image="https://www.onerabbit.studio/images/ALBA_27_10_2301356.jpg"
        inLanguage={isEnglish ? "en" : "es"}
      />

      <Header content={content} />

      <ProjectReveal delay={0.35}>
        <section className="projectIntro portraitIntro">
          <span>{content.work.portrait.number.split(" / ")[0]}</span>

          <div>
            <p>{content.work.portrait.project.introCategory}</p>

            <h1>
              {content.work.portrait.title[0]}
              <br />
              {content.work.portrait.title[1]}
            </h1>
          </div>

          <span>{content.work.portrait.year}</span>
        </section>
      </ProjectReveal>

      <section className="projectHero portraitHero">
        <SharedImage
          layoutId="portrait-image"
          src="/images/ALBA_27_10_2301356.jpg"
          alt={content.work.portrait.project.imageAlt}
          className="projectHeroImage"
        />
      </section>

      <ProjectReveal delay={0.45}>
        <section className="projectStatement portraitStatement">
          <p>
            {content.work.portrait.project.statement[0]}
            <br />
            {content.work.portrait.project.statement[1]}
          </p>
        </section>
      </ProjectReveal>

      <ProjectInfo
        client={content.work.portrait.project.client}
        category={content.work.portrait.project.infoCategory}
        year={content.work.portrait.year}
        location={content.work.portrait.project.location}
      />

      <ProjectReveal delay={0.25}>
        <section className="portraitOpening">
          <div className="portraitOpeningLarge">
            <Image
              src="/images/_MG_5822.jpg"
              alt={content.work.portrait.project.imageAlt}
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 56vw"
            />
          </div>

          <div className="portraitOpeningSmall">
            <Image
              src="/images/ALBA_27_10_2301569.jpg"
              alt={content.work.portrait.project.imageAlt}
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
              alt={content.work.portrait.project.imageAlt}
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
              alt={content.work.portrait.project.imageAlt}
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 44vw"
            />
          </div>

          <div className="portraitShadowRight">
            <Image
              src="/images/_MG_8878.jpg"
              alt={content.work.portrait.project.imageAlt}
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
              alt={content.work.portrait.project.imageAlt}
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
              alt={content.work.portrait.project.imageAlt}
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
              alt={content.work.portrait.project.imageAlt}
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 54vw"
            />
          </div>
        </section>
      </ProjectReveal>

      <NextProject
        number={content.work.portrait.project.nextNumber}
        title={content.work.portrait.project.nextTitle}
        category={content.work.portrait.project.nextCategory}
        href={isEnglish ? "/en/projects/body-language" : "/projects/body-language"}
        image="/images/HECTOR_10_9_2300501.jpg"
        layoutId="body-image"
      />
    </main>
  );
}