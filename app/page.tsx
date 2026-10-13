import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import FadeUp from "./components/animations/FadeUp";
import HomeRevealImage from "./components/animations/HomeRevealImage";
import Parallax from "./components/animations/Parallax";
import Header from "./components/Header";
import HomeProjectTitle from "./components/animations/HomeProjectTitle";
import HomeCaseImage from "./components/animations/HomeCaseImage";
import ScrollExpand from "./components/animations/ScrollExpand";
import ScrollDrift from "./components/animations/ScrollDrift";
import HomeHeroMotion from "./components/animations/HomeHeroMotion";
import MaskedTitle from "./components/animations/MaskedTitle";
import TransitionLink from "./components/animations/TransitionLink";
import TrackedEmail from "./components/analytics/TrackedEmail";
import ContactForm from "./components/ContactForm";
import es from "./content/es";




export const metadata: Metadata = {
  title: "ONERABBIT — Photography, Editorial & Visual Direction",
  description:
    "ONERABBIT is an independent photography practice based in Spain, working across portrait, fashion, editorial, product, visual culture and motorsport.",
  alternates: {
    canonical: "https://www.onerabbit.studio/",
  },
  openGraph: {
    title: "ONERABBIT — Photography, Editorial & Visual Direction",
    description:
      "Independent photography practice working across portrait, fashion, editorial, product, visual culture and motorsport.",
    url: "https://www.onerabbit.studio/",
    siteName: "ONERABBIT",
    type: "website",
    images: [
      {
        url: "https://www.onerabbit.studio/images/1000_BIRKENSTOCK.jpg",
        width: 1200,
        height: 800,
        alt: "ONERABBIT photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ONERABBIT — Photography, Editorial & Visual Direction",
    description:
      "Independent photography practice working across portrait, fashion, editorial, product, visual culture and motorsport.",
    images: ["https://www.onerabbit.studio/images/1000_BIRKENSTOCK.jpg"],
  },
};

export default function Home({
  content = es,
  isEnglish = false,
}: {
  content?: typeof es;
  isEnglish?: boolean;
}) { 
  
  return (

    
      

    <main>

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://www.onerabbit.studio/#organization",
"name": "ONERABBIT",
"url": "https://www.onerabbit.studio/",
"logo": "https://www.onerabbit.studio/ISOTIPO-02.svg",
          "description":
            "Independent photography practice focused on portrait, fashion, product and visual culture.",
          "email": "hello@onerabbit.studio",
"sameAs": [
  "https://www.instagram.com/onerabbit.studio/",
  "https://www.instagram.com/onerabbit.motorsport/"
]
        },
        {
          "@type": "WebSite",
          "@id": "https://www.onerabbit.studio/#website",
          "url": "https://www.onerabbit.studio/",
          "name": "ONERABBIT",
          "publisher": {
            "@id": "https://www.onerabbit.studio/#organization"
          }
        }
      ]
    }).replace(/</g, "\\u003c"),
  }}
/>

<Header />

<HomeHeroMotion>
  <section className="hero">

    <div className="heroMedia">
      <Parallax speed={0.08}>
        <Image
          src="/images/1000_BIRKENSTOCK.jpg"
          alt="ONERABBIT photography"
          fill
          priority
          className="heroImage"
        />
      </Parallax>
    </div>

    <div className="heroOverlay" />

<div className="heroText">

  <p>
    {content.hero.categories}
  </p>

  <div className="heroLogoBlock">
    <h2>
      {content.hero.title[0]}
      <br />
      {content.hero.title[1]}
    </h2>
  </div>

  <div className="heroSignature">
    <span>
      {content.hero.signature}
    </span>

    <span>
      {content.hero.location}
    </span>
  </div>

</div>

  </section>
</HomeHeroMotion>

<section id="work" className="work">

<div className="sectionHeader workHeader">
  <span>{content.work.number}</span>
  <span>{content.work.title}</span>
  <span>{content.work.year}</span>
</div>

 <p>
   

   
  </p>

  <div className="projects">


<section className="homeCase homeCasePortrait">
  <div className="homeCaseTop">
    <span>{content.work.portrait.number}</span>
<span>{content.work.portrait.year}</span>
  </div>


<ScrollDrift
  className="homePortraitTitleMotion"
  yFrom={18}
  yTo={-12}
>
  <div className="homeCaseTitle">
<h2>
  <MaskedTitle>
  <span>{content.work.portrait.title[0]}</span>
  </MaskedTitle>

  <MaskedTitle delay={0.08}>
    <span>{content.work.portrait.title[0]}</span>
  </MaskedTitle>
</h2>
  </div>
</ScrollDrift>

<Link
  href={
  isEnglish
    ? "/en/projects/portrait-studies"
    : "/projects/portrait-studies"
}
  className="homeCaseLink"
>
  <div className="homePortraitImageMotion">
    <ScrollDrift
  yFrom={22}
  yTo={-12}
  scaleFrom={1.018}
  scaleTo={1}
    >
      <HomeCaseImage layoutId="portrait-image">
        <Image
          src="/images/ALBA_27_10_2301356.jpg"
          alt="Portrait Studies"
          fill
          priority
          className="homeCasePhoto portraitHomeImage"
          sizes="100vw"
        />
      </HomeCaseImage>
    </ScrollDrift>
  </div>

  <div className="homeCaseBottom">
    <span>{content.work.portrait.category}</span>
<span>{content.work.portrait.view}</span>
  </div>
</Link>

</section>



<section className="manifesto">
  <p>
    {content.work.manifesto[0]}
    <br />
    {content.work.manifesto[1]}
  </p>
</section>

<section className="homeBodyCase">

<div className="homeBodyTop">
  <span>{content.work.body.number}</span>
  <span>{content.work.body.location}</span>
  <span>{content.work.body.year}</span>
</div>

<ScrollDrift
  className="homeBodyTitleMotion"
  yFrom={22}
  yTo={-8}
>
  <div className="homeBodyTitle">
<h2>
  <MaskedTitle>
    <span>{content.work.body.title[0]}</span>
  </MaskedTitle>

  <MaskedTitle delay={0.08}>
    <span>{content.work.body.title[1]}</span>
  </MaskedTitle>
</h2>
  </div>
</ScrollDrift>

<div className="homeBodyComposition">

<ScrollDrift
  className="homeBodyMainMotion"
  yFrom={40}
  yTo={-14}
  scaleFrom={1.018}
  scaleTo={1}
  >
    <Link
      href={isEnglish ? "/en/projects/body-language" : "/projects/body-language"}
      className="homeBodyMainLink"
    >
      <HomeCaseImage layoutId="body-image">
        <Image
          src="/images/HECTOR_10_9_2300501.jpg"
          alt="Body Language"
          fill
          className="homeCasePhoto homeBodyMainPhoto"
          sizes="(max-width: 800px) 100vw, 70vw"
        />
      </HomeCaseImage>
    </Link>
  </ScrollDrift>

 <ScrollDrift
  className="homeBodySecondaryMotion"
  yFrom={-10}
  yTo={38}
>
  
    <div className="homeBodySecondary">
      <HomeRevealImage>
        <div className="homeBodySecondaryImage">
          <Image
            src="/images/SOFI_12_09_2300142.jpg"
            alt="Body Language detail"
            fill
            className="homeBodySecondaryPhoto"
            sizes="(max-width: 800px) 55vw, 24vw"
          />
        </div>
      </HomeRevealImage>

      <p>
      {content.work.body.description[0]}
<br />
{content.work.body.description[1]}
      </p>
    </div>
  </ScrollDrift>

</div>

  <Link
    href={isEnglish ? "/en/projects/body-language" : "/projects/body-language"}
    className="homeBodyFooter"
  >
  <span>{content.work.body.category}</span>
<span>{content.work.body.view}</span>
  </Link>

</section>
         
         <section className="homeObjectsCase">

<div className="homeObjectsTop">
  <span>{content.work.objects.number}</span>
  <span>{content.work.objects.subtitle}</span>
  <span>{content.work.objects.year}</span>
</div>

  <div className="homeObjectsTitle">
<h2>
  <MaskedTitle>
    <span>{content.work.objects.title[0]}</span>
  </MaskedTitle>

  <MaskedTitle delay={0.08}>
    <span>& {content.work.objects.title[1]}</span>
  </MaskedTitle>
</h2>
  </div>

  <div className="homeObjectsIntro">
    <p>
      {content.work.objects.description[0]}
<br />
{content.work.objects.description[1]}
    </p>

    <span>
      {content.work.objects.category}
    </span>
  </div>

  <div className="homeObjectsStage">

<div className="homeObjectsScrollStage">

  <ScrollExpand>
    <Link
      href={
  isEnglish
    ? "/en/projects/objects-performance"
    : "/projects/objects-performance"
}
      className="homeObjectsMain"
    >
      <HomeCaseImage layoutId="product-image">
        <Image
          src="/images/2_Adizero.jpg"
          alt="Objects & Performance"
          fill
          className="homeCasePhoto homeObjectsMainPhoto"
          sizes="(max-width: 800px) 100vw, 82vw"
        />
      </HomeCaseImage>
    </Link>
  </ScrollExpand>

</div>

    <div className="homeObjectsDetail">
      <HomeRevealImage>
        <div className="homeObjectsDetailFrame">
          <Image
            src="/images/1000_BIRKENSTOCK.jpg"
            alt="Product detail"
            fill
            className="homeObjectsDetailPhoto"
            sizes="(max-width: 800px) 52vw, 22vw"
          />
        </div>
      </HomeRevealImage>
    </div>

  </div>

  <Link
    href={isEnglish ? "/en/projects/objects-performance" : "/projects/objects-performance"}
    className="homeObjectsFooter"
  >
    <span>{content.work.objects.footer}</span>
<span>{content.work.objects.view}</span>
  </Link>

</section>

<section className="homeFacesCase">

<div className="homeFacesTop">
  <span>{content.work.faces.number}</span>
  <span>{content.work.faces.subtitle}</span>
  <span>{content.work.faces.year}</span>
</div>

<Link
  href={
  isEnglish
    ? "/en/projects/selected-faces"
    : "/projects/selected-faces"
}
  className="homeFacesMain"
>
  <div className="homeFacesImageMotion">
<ScrollDrift
  yFrom={16}
  yTo={-14}
  scaleFrom={1}
  scaleTo={1.045}
>
    
      <HomeCaseImage layoutId="faces-image">
        <Image
          src="/images/ENCINA_11_04_2200401_1.jpg"
          alt="Selected Faces"
          fill
          className="homeCasePhoto homeFacesPhoto"
          sizes="100vw"
        />
      </HomeCaseImage>
    </ScrollDrift>
  </div>

<ScrollDrift
  className="homeFacesTitleMotion"
  yFrom={20}
  yTo={-12}

  >
    <div className="homeFacesTitle">
<h2>
  <MaskedTitle>
    <span>{content.work.faces.title[0]}</span>
  </MaskedTitle>

  <MaskedTitle delay={0.08}>
    <span>{content.work.faces.title[1]}</span>
  </MaskedTitle>
</h2>
    </div>
  </ScrollDrift>
</Link>

  <div className="homeFacesBottom">
    <p>
      {content.work.faces.description[0]}
<br />
{content.work.faces.description[1]}
    </p>

    <Link href={isEnglish ? "/en/projects/selected-faces" : "/projects/selected-faces"}>
     {content.work.faces.view}
    </Link>
  </div>

</section>

<section className="homeMotorsportCase">

  <div className="homeMotorsportInner">

   <div className="homeMotorsportTop">
  <span>{content.work.motorsport.number}</span>
  <span>{content.work.motorsport.subtitle}</span>
  <span>{content.work.motorsport.year}</span>
</div>

<div className="homeMotorsportTitle">
  <h2>
    {content.work.motorsport.title}
  </h2>
</div>

<div className="homeMotorsportMainMotion">
<ScrollDrift
  yFrom={14}
  yTo={-8}
  scaleFrom={1.018}
  scaleTo={1}
>
    <Link
      href={
  isEnglish
    ? "/en/projects/motorsport"
    : "/projects/motorsport"
}
      className="homeMotorsportMain"
    >
      <HomeCaseImage layoutId="motorsport-image">
        <Image
          src="/images/MOTORSPORT-HERO.jpg"
          alt="Motorsport"
          fill
          className="homeCasePhoto homeMotorsportPhoto"
          sizes="100vw"
        />
      </HomeCaseImage>
    </Link>
  </ScrollDrift>
</div>

    <div className="homeMotorsportLower">

      <div className="homeMotorsportCopy">
        <span>{content.work.motorsport.category}</span>

        <p>
          {content.work.motorsport.description[0]}
<br />
{content.work.motorsport.description[1]}
        </p>
      </div>

<ScrollDrift
  className="homeMotorsportDetailMotion"
  yFrom={38}
  yTo={-22}
>
  <div className="homeMotorsportDetail">
    <HomeRevealImage>
      <div className="homeMotorsportDetailFrame">
        <Image
          src="/images/IMG_7868.jpg"
          alt="Driver inside race car"
          fill
          className="homeMotorsportDetailPhoto"
          sizes="(max-width: 800px) 52vw, 24vw"
        />
      </div>
    </HomeRevealImage>

    <span>{content.work.motorsport.detail}</span>
  </div>
</ScrollDrift>

    </div>

    <TransitionLink
      href={isEnglish ? "/en/projects/motorsport" : "/projects/motorsport"}
      className="homeMotorsportFooter"
    >
      <span>{content.work.motorsport.footer}</span>
<span>{content.work.motorsport.view}</span>
    </TransitionLink>

  </div>

</section>

        </div>
      </section>

      <section id="about" className="about">
       <div className="sectionHeader">
  <span>{content.about.number}</span>
  <span>{content.about.title}</span>
  <span>{content.about.studio}</span>
</div>

        <div className="aboutGrid">
          <div className="aboutImage">
  <Image
    src="/images/672_8719797188465_672.jpg"
    alt="ONERABBIT"
    fill
    sizes="(max-width: 800px) 100vw, 45vw"
    loading="eager"
    className="aboutPhoto"
  />
</div>



          <div className="aboutContent">
            <p className="aboutLead">
  {content.about.lead}
</p>

            <div className="aboutInfo">
              <p>
  {content.about.description}
</p>

              <div className="aboutDetails">
                <div>
                  <span>{content.about.focus}</span>
<p>
  {content.about.focusValue}
</p>
                </div>

                <div>
                  <span>{content.about.availableFor}</span>
<p>
  {content.about.availableForValue}
</p>
                </div>
              </div>
            </div>
          </div>
        </div>

<div className="aboutSignature">
  <span>{content.about.signature.location}</span>
  <span>{content.about.signature.availability}</span>
</div>

      </section>

<section id="contact" className="contact">
  <div className="contactTop">
  <span>{content.contact.number}</span>
  <span>{content.contact.title}</span>
  <span>{content.contact.availability}</span>
</div>

  <div className="contactGrid">

    <div className="contactIntro">
      <p className="contactSmall">
  {content.contact.intro}
</p>

     <h2>
  {content.contact.heading[0]}
  <br />
  {content.contact.heading[1]}
</h2>

     <p className="contactDescription">
  {content.contact.description[0]}
  <br />
  {content.contact.description[1]}
  <br />
  {content.contact.description[2]}
</p>
    </div>

<ContactForm content={content} />


  </div>

  <div className="contactBottom">

    <TrackedEmail />

    <a
      href="https://www.instagram.com/onerabbit.studio/"
      target="_blank"
      rel="noopener noreferrer"
    >
      INSTAGRAM / STUDIO ↗
    </a>

    <a
      href="https://www.instagram.com/onerabbit.motorsport/"
      target="_blank"
      rel="noopener noreferrer"
    >
      INSTAGRAM / MOTORSPORT ↗
    </a>

  </div>
</section>


    </main>



  );
}

