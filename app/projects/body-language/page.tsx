import Image from "next/image";
import NextProject from "@/app/components/NextProject";
import type { Metadata } from "next";

import Header from "@/app/components/Header";
import ProjectInfo from "@/app/components/ProjectInfo";
import SharedImage from "@/app/components/animations/SharedImage";
import ProjectReveal from "@/app/components/animations/ProjectReveal";

export const metadata: Metadata = {
  title: "Body Language",
  description:
    "Movement, gesture and human expression through photography by ONERABBIT.",

  openGraph: {
    title: "Body Language — ONERABBIT",
    description:
      "Movement, gesture and human expression through photography.",

    images: [
      {
        url: "/images/HECTOR_10_9_2300501.jpg",
        width: 1200,
        height: 1500,
        alt: "Body Language — ONERABBIT",
      },
    ],

    type: "website",
  },
};

export default function BodyLanguage() {
  return (
    <main className="projectPage">
      <Header />

      <ProjectReveal delay={0.35}>
        <section className="projectIntro bodyIntro">
          <span>02</span>

          <div>
            <p>MOVEMENT / PORTRAIT</p>

            <h1>
              Body
              <br />
              Language
            </h1>
          </div>

          <span>2026</span>
        </section>
      </ProjectReveal>

      <section className="projectHero bodyHero">
        <SharedImage
          layoutId="body-image"
          src="/images/HECTOR_10_9_2300501.jpg"
          alt="Body Language"
        />
      </section>

      <ProjectReveal delay={0.45}>
        <section className="projectStatement bodyStatement">
          <p>
            Movement as structure.
            <br />
            Gesture as form.
          </p>
        </section>
      </ProjectReveal>

      <ProjectInfo
        client="Independent"
        category="Movement / Portrait"
        year="2026"
        location="Madrid / León"
      />

      <ProjectReveal delay={0.25}>
        <section className="bodyOpeningPair">
          <div className="bodyOpeningLarge">
            <Image
              src="/images/SOFI_12_09_2300142.jpg"
              alt="Body Language"
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 58vw"
            />
          </div>

          <div className="bodyOpeningSmall">
            <Image
              src="/images/HECTOR_10_9_2300059.jpg"
              alt="Body Language"
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
              alt="Body Language"
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
              alt="Body Language"
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 42vw"
            />
          </div>

          <div className="bodyVerticalFrame bodyVerticalRight">
            <Image
              src="/images/HECTOR_10_9_2300463.jpg"
              alt="Body Language"
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
            alt="Body Language"
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
              alt="Body Language"
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
              alt="Body Language"
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 60vw"
            />
          </div>

          <div className="bodyInverseSmall">
            <Image
              src="/images/HECTOR_10_9_2300474.jpg"
              alt="Body Language"
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
              alt="Body Language"
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 46vw"
            />
          </div>

          <div className="bodyMotionFrame bodyMotionOffset">
            <Image
              src="/images/VICKY_14_05_2302090.jpg"
              alt="Body Language"
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
              alt="Body Language"
              fill
              className="projectPhoto"
              sizes="(max-width: 800px) 100vw, 58vw"
            />
          </div>
        </section>
      </ProjectReveal>

<NextProject
  number="03"
  title={"Objects\n& Performance"}
  category="PRODUCT / STILL LIFE"
  href="/projects/objects-performance"
  image="/images/2_Adizero.jpg"
  layoutId="product-image"
/>
    </main>
  );
}