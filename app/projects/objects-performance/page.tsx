import Image from "next/image";
import NextProject from "@/app/components/NextProject";
import type { Metadata } from "next";

import es from "@/app/content/es";
import Header from "@/app/components/Header";
import ProjectInfo from "@/app/components/ProjectInfo";
import SharedImage from "@/app/components/animations/SharedImage";
import ProjectReveal from "@/app/components/animations/ProjectReveal";

type ObjectsPerformanceContent = typeof es;

export const metadata: Metadata = {
  title: "Objects & Performance — ONERABBIT",
  description:
    "Objects & Performance explores material, form and performance through product and still life photography by ONERABBIT.",
  alternates: {
    canonical: "https://www.onerabbit.studio/projects/objects-performance",
  },
  openGraph: {
    title: "Objects & Performance — ONERABBIT",
    description:
      "Objects & Performance explores material, form and performance through product and still life photography by ONERABBIT.",
    url: "https://www.onerabbit.studio/projects/objects-performance",
    siteName: "ONERABBIT",
    type: "website",
    images: [
      {
        url: "https://www.onerabbit.studio/images/2_Adizero.jpg",
        width: 1200,
        height: 1200,
        alt: "Objects & Performance photography by ONERABBIT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Objects & Performance — ONERABBIT",
    description:
      "Objects & Performance explores material, form and performance through product and still life photography by ONERABBIT.",
    images: [
      "https://www.onerabbit.studio/images/2_Adizero.jpg",
    ],
  },
};

export default function ObjectsPerformance({
  content = es,
}: {
  content?: ObjectsPerformanceContent;
}) {
  return (
    <main className="projectPage">
      <Header content={content} />

      <ProjectReveal delay={0.35}>
        <section className="projectIntro objectsIntro">
          <span>{content.work.objects.number.split(" / ")[0]}</span>

          <div>
            <p>{content.work.objects.project.introCategory}</p>

            <h1>
              {content.work.objects.title[0]}
              <br />
              {content.work.objects.title[1]}
            </h1>
          </div>

          <span>{content.work.objects.year}</span>
        </section>
      </ProjectReveal>

      <section className="projectHero objectsHero">
        <SharedImage
          layoutId="product-image"
          src="/images/2_Adizero.jpg"
          alt={content.work.objects.project.imageAlt}
        />
      </section>

      <ProjectReveal delay={0.45}>
        <section className="projectStatement objectsStatement">
          <p>
            {content.work.objects.project.statement[0]}
            <br />
            {content.work.objects.project.statement[1]}
          </p>
        </section>
      </ProjectReveal>

      <ProjectInfo
        client={content.work.objects.project.client}
        category={content.work.objects.project.infoCategory}
        year={content.work.objects.year}
        location={content.work.objects.project.location}
      />

      <ProjectReveal delay={0.25}>
        <section className="objectsOpening">
          <div className="objectsOpeningLarge">
            <Image
              src="/images/1000_BIRKENSTOCK.jpg"
              alt="Birkenstock still life"
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 58vw"
            />
          </div>

          <div className="objectsOpeningSmall">
            <Image
              src="/images/frascos_14_01_23-028.jpg"
              alt="Product still life"
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 32vw"
            />
          </div>
        </section>
      </ProjectReveal>

      <ProjectReveal delay={0.25}>
        <section className="objectsTechnical">
          <div className="objectsTechnicalFrame">
            <Image
              src="/images/8_Adizero.jpg"
              alt="Adizero"
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 72vw"
            />
          </div>
        </section>
      </ProjectReveal>

      <ProjectReveal delay={0.25}>
        <section className="objectsContrastPair">
          <div className="objectsContrastTall">
            <Image
              src="/images/DSC_9557.jpg"
              alt="Sneaker product study"
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 48vw"
            />
          </div>

          <div className="objectsContrastSquare">
            <Image
              src="/images/frascos_14_01_23-081.jpg"
              alt="Fragrance still life"
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 36vw"
            />
          </div>
        </section>
      </ProjectReveal>

      <ProjectReveal delay={0.25}>
        <section className="objectsCampaign">
          <div className="objectsCampaignFrame">
            <Image
              src="/images/1_Canadagoose_4_5.jpg"
              alt="Canada Goose campaign"
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 68vw"
            />
          </div>
        </section>
      </ProjectReveal>

      <ProjectReveal delay={0.25}>
        <section className="objectsCampaignPair">
          <div className="objectsCampaignPortrait">
            <Image
              src="/images/5_Canadagoose_4_5.jpg"
              alt="Canada Goose campaign portrait"
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 42vw"
            />
          </div>

          <div className="objectsGraphic">
            <Image
              src="/images/1_197803822516.jpg"
              alt="North Face and Bialetti still life"
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 42vw"
            />
          </div>
        </section>
      </ProjectReveal>

      <NextProject
        number={content.work.objects.project.nextNumber}
        title={content.work.objects.project.nextTitle}
        category={content.work.objects.project.nextCategory}
        href={content.work.objects.project.nextHref}
        image="/images/ENCINA_11_04_2200401_1.jpg"
        layoutId="faces-image"
      />
    </main>
  );
}