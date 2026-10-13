import Image from "next/image";
import type { Metadata } from "next";
import NextProject from "@/app/components/NextProject";

import es from "@/app/content/es";
import Header from "@/app/components/Header";
import ProjectInfo from "@/app/components/ProjectInfo";
import SharedImage from "@/app/components/animations/SharedImage";
import ProjectReveal from "@/app/components/animations/ProjectReveal";

type MotorsportContent = typeof es;

export const metadata: Metadata = {
  title: "Motorsport Photography — ONERABBIT",
  description:
    "Motorsport photography exploring speed, racing, machinery and human presence through action and documentary imagery by ONERABBIT.",
  alternates: {
    canonical: "https://www.onerabbit.studio/projects/motorsport",
  },
  openGraph: {
    title: "Motorsport Photography — ONERABBIT",
    description:
      "Motorsport photography exploring speed, racing, machinery and human presence through action and documentary imagery by ONERABBIT.",
    url: "https://www.onerabbit.studio/projects/motorsport",
    siteName: "ONERABBIT",
    type: "website",
    images: [
      {
        url: "https://www.onerabbit.studio/images/MOTORSPORT-HERO.jpg",
        width: 1600,
        height: 900,
        alt: "Motorsport racing photography by ONERABBIT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Motorsport Photography — ONERABBIT",
    description:
      "Motorsport photography exploring speed, racing, machinery and human presence through action and documentary imagery by ONERABBIT.",
    images: [
      "https://www.onerabbit.studio/images/MOTORSPORT-HERO.jpg",
    ],
  },
};

export default function Motorsport({
  content = es,
}: {
  content?: MotorsportContent;
}) {
  return (
    <main className="projectPage motorsportPage">
      <Header content={content} />

      <ProjectReveal delay={0.35}>
        <section className="projectIntro motorsportIntro">
          <span>{content.work.motorsport.number.split(" / ")[0]}</span>

          <div>
            <p>{content.work.motorsport.project.introCategory}</p>

            <h1>{content.work.motorsport.title}</h1>
          </div>

          <span>{content.work.motorsport.year}</span>
        </section>
      </ProjectReveal>

      <section className="projectHero motorsportHero">
        <SharedImage
          layoutId="motorsport-image"
          src="/images/MOTORSPORT-HERO.jpg"
          alt={content.work.motorsport.project.imageAlt}
        />
      </section>

      <ProjectReveal delay={0.45}>
        <section className="projectStatement motorsportStatement">
          <p>
            {content.work.motorsport.project.statement[0]}
            <br />
            {content.work.motorsport.project.statement[1]}
          </p>
        </section>
      </ProjectReveal>

      <ProjectInfo
        client={content.work.motorsport.project.client}
        category={content.work.motorsport.project.infoCategory}
        year={content.work.motorsport.year}
        location={content.work.motorsport.project.location}
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
        number={content.work.motorsport.project.nextNumber}
        title={content.work.motorsport.project.nextTitle}
        category={content.work.motorsport.project.nextCategory}
        href={content.work.motorsport.project.nextHref}
        image="/images/ALBA_27_10_2301356.jpg"
        layoutId="portrait-image"
      />
    </main>
  );
}