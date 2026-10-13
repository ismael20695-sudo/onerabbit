import Image from "next/image";
import NextProject from "@/app/components/NextProject";
import type { Metadata } from "next";
import es from "@/app/content/es";
import en from "@/app/content/en";

import Header from "@/app/components/Header";
import ProjectInfo from "@/app/components/ProjectInfo";
import SharedImage from "@/app/components/animations/SharedImage";
import ProjectReveal from "@/app/components/animations/ProjectReveal";

export const metadata: Metadata = {
  title: "Body Language — ONERABBIT",
  description:
    "Body Language explores movement, gesture and human expression through independent photography by ONERABBIT.",
  alternates: {
    canonical: "https://www.onerabbit.studio/projects/body-language",
  },
  openGraph: {
    title: "Body Language — ONERABBIT",
    description:
      "Body Language explores movement, gesture and human expression through independent photography by ONERABBIT.",
    url: "https://www.onerabbit.studio/projects/body-language",
    siteName: "ONERABBIT",
    type: "website",
    images: [
      {
        url: "https://www.onerabbit.studio/images/HECTOR_10_9_2300501.jpg",
        width: 1200,
        height: 1500,
        alt: "Body Language photography by ONERABBIT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Body Language — ONERABBIT",
    description:
      "Body Language explores movement, gesture and human expression through independent photography by ONERABBIT.",
    images: [
      "https://www.onerabbit.studio/images/HECTOR_10_9_2300501.jpg",
    ],
  },
};

type BodyLanguageContent = typeof es;

export default function BodyLanguage({
  content = es,
}: {
  content?: BodyLanguageContent;
}) {

  return (
    <main className="projectPage">
      <Header content={content} />

      <ProjectReveal delay={0.35}>
        <section className="projectIntro bodyIntro">
          <span>{content.work.body.number.split(" / ")[0]}</span>

          <div>
            <p>{content.work.body.project.introCategory}</p>

            <h1>
              {content.work.body.title[0]}
              <br />
              {content.work.body.title[1]}
            </h1>
          </div>

          <span>{content.work.body.year}</span>
        </section>
      </ProjectReveal>

      <section className="projectHero bodyHero">
        <SharedImage
          layoutId="body-image"
          src="/images/HECTOR_10_9_2300501.jpg"
          alt={content.work.body.project.imageAlt}
        />
      </section>

      <ProjectReveal delay={0.45}>
        <section className="projectStatement bodyStatement">
          <p>
            {content.work.body.project.statement[0]}
            <br />
            {content.work.body.project.statement[1]}
          </p>
        </section>
      </ProjectReveal>

      <ProjectInfo
        client={content.work.body.project.client}
        category={content.work.body.project.infoCategory}
        year={content.work.body.year}
        location={content.work.body.project.location}
      />

      <ProjectReveal delay={0.25}>
        <section className="bodyOpeningPair">
          <div className="bodyOpeningLarge">
            <Image
              src="/images/SOFI_12_09_2300142.jpg"
              alt={content.work.body.project.imageAlt}
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 58vw"
            />
          </div>

          <div className="bodyOpeningSmall">
            <Image
              src="/images/HECTOR_10_9_2300059.jpg"
              alt={content.work.body.project.imageAlt}
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 34vw"
            />
          </div>
        </section>
      </ProjectReveal>

      <ProjectReveal delay={0.25}>
        <section className="bodySculpture">
          <div className="bodySculptureFrame">
            <Image
              src="/images/SOFI_12_09_2300220.jpg"
              alt={content.work.body.project.imageAlt}
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 72vw"
            />
          </div>
        </section>
      </ProjectReveal>

      <ProjectReveal delay={0.25}>
        <section className="bodyVerticalPair">
          <div className="bodyVerticalFrame bodyVerticalLeft">
            <Image
              src="/images/VICKY_14_05_2301945.jpg"
              alt={content.work.body.project.imageAlt}
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 42vw"
            />
          </div>

          <div className="bodyVerticalFrame bodyVerticalRight">
            <Image
              src="/images/HECTOR_10_9_2300463.jpg"
              alt={content.work.body.project.imageAlt}
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 42vw"
            />
          </div>
        </section>
      </ProjectReveal>

      <ProjectReveal delay={0.25}>
        <section className="bodyFullMoment">
          <Image
            src="/images/VICKY_14_05_2302008.jpg"
            alt={content.work.body.project.imageAlt}
            fill
            className="projectPhoto"
            sizes="100vw"
          />
        </section>
      </ProjectReveal>

      <ProjectReveal delay={0.25}>
        <section className="bodyWideBreath">
          <div className="bodyWideBreathFrame">
            <Image
              src="/images/SOFI_12_09_2300859.jpg"
              alt={content.work.body.project.imageAlt}
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 78vw"
            />
          </div>
        </section>
      </ProjectReveal>

      <ProjectReveal delay={0.25}>
        <section className="bodyInversePair">
          <div className="bodyInverseLarge">
            <Image
              src="/images/VICKY_14_05_2302021.jpg"
              alt={content.work.body.project.imageAlt}
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 60vw"
            />
          </div>

          <div className="bodyInverseSmall">
            <Image
              src="/images/HECTOR_10_9_2300474.jpg"
              alt={content.work.body.project.imageAlt}
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 30vw"
            />
          </div>
        </section>
      </ProjectReveal>

      <ProjectReveal delay={0.25}>
        <section className="bodyMotionPair">
          <div className="bodyMotionFrame">
            <Image
              src="/images/VICKY_14_05_2302055.jpg"
              alt={content.work.body.project.imageAlt}
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 46vw"
            />
          </div>

          <div className="bodyMotionFrame bodyMotionOffset">
            <Image
              src="/images/VICKY_14_05_2302090.jpg"
              alt={content.work.body.project.imageAlt}
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 46vw"
            />
          </div>
        </section>
      </ProjectReveal>

      <ProjectReveal delay={0.3}>
        <section className="bodyClosing">
          <div className="bodyClosingFrame">
            <Image
              src="/images/VICKY_14_05_2302132.jpg"
              alt={content.work.body.project.imageAlt}
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 58vw"
            />
          </div>
        </section>
      </ProjectReveal>

      <NextProject
        number={content.work.body.project.nextNumber}
        title={content.work.body.project.nextTitle}
        category={content.work.body.project.nextCategory}
        href={content.work.body.project.nextHref}
        image="/images/2_Adizero.jpg"
        layoutId="product-image"
      />
    </main>
  );
}