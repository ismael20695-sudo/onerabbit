import Image from "next/image";
import NextProject from "@/app/components/NextProject";
import type { Metadata } from "next";

import Header from "@/app/components/Header";
import ProjectInfo from "@/app/components/ProjectInfo";
import SharedImage from "@/app/components/animations/SharedImage";
import ProjectReveal from "@/app/components/animations/ProjectReveal";

export const metadata: Metadata = {
  title: "Objects & Performance",
  description:
    "Product photography focused on material, form and performance by ONERABBIT.",

  openGraph: {
    title: "Objects & Performance — ONERABBIT",
    description:
      "Product photography focused on material, form and performance.",

    images: [
      {
        url: "/images/2_Adizero.jpg",
        width: 1200,
        height: 1200,
        alt: "Objects & Performance — ONERABBIT",
      },
    ],

    type: "website",
  },
};

export default function ObjectsPerformance() {
  return (
    <main className="projectPage">
      <Header />

      <ProjectReveal delay={0.35}>
        <section className="projectIntro objectsIntro">
          <span>03</span>

          <div>
            <p>PRODUCT / STILL LIFE</p>

            <h1>
              Objects &
              <br />
              Performance
            </h1>
          </div>

          <span>2026</span>
        </section>
      </ProjectReveal>

      <section className="projectHero objectsHero">
        <SharedImage
          layoutId="product-image"
          src="/images/2_Adizero.jpg"
          alt="Objects & Performance"
        />
      </section>

      <ProjectReveal delay={0.45}>
        <section className="projectStatement objectsStatement">
          <p>
            Objects shaped by material,
            <br />
            balance and visual tension.
          </p>
        </section>
      </ProjectReveal>

      <ProjectInfo
        client="Independent"
        category="Product / Still Life"
        year="2026"
        location="Madrid / León"
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
  number="04"
  title={"Selected\nFaces"}
  category="FASHION / PORTRAIT"
  href="/projects/selected-faces"
  image="/images/ENCINA_11_04_2200401_1.jpg"
  layoutId="faces-image"
/>
    </main>
  );
}