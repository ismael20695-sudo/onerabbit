import Image from "next/image";
import Link from "next/link";
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




export default function Home() {
  return (

    
      

    <main>

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
    PHOTOGRAPHY · EDITORIAL · PRODUCT · PORTRAIT
  </p>

  <div className="heroLogoBlock">
    <img
      src="/ISOTIPO-02.svg"
      alt="ONERABBIT"
      className="heroTitleLogo"
    />

    <h2>
      Images with pulse,
      <br />
      texture and intent.
    </h2>
  </div>



  <div className="heroSignature">
    <span>
      Independent photography practice
    </span>

    <span>
      Spain · Worldwide
    </span>
  </div>
</div>

  </section>
</HomeHeroMotion>

<section id="work" className="work">

  <div className="sectionHeader workHeader">
    <span>01</span>
    <span>SELECTED WORK</span>
    <span>2026</span>
  </div>

  <p className="workIntro">
    A selection of images exploring
    <br />
    portrait, movement and material.
  </p>

  <div className="projects">


<section className="homeCase homeCasePortrait">
  <div className="homeCaseTop">
    <span>01 / EDITORIAL</span>
    <span>2026</span>
  </div>


<ScrollDrift
  className="homePortraitTitleMotion"
  yFrom={18}
  yTo={-12}
>
  <div className="homeCaseTitle">
<h2>
  <MaskedTitle>
    <span>Portrait</span>
  </MaskedTitle>

  <MaskedTitle delay={0.08}>
    <span>Studies</span>
  </MaskedTitle>
</h2>
  </div>
</ScrollDrift>

<Link
  href="/projects/portrait-studies"
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
    <span>PORTRAIT / EDITORIAL</span>
    <span>VIEW PROJECT ↗</span>
  </div>
</Link>

</section>



          <section className="manifesto">
            <p>
              Faces, gesture,
              <br />
              light and tension.
            </p>
          </section>

<section className="homeBodyCase">

  <div className="homeBodyTop">
    <span>02 / MOVEMENT</span>
    <span>MADRID · LEÓN</span>
    <span>2026</span>
  </div>

<ScrollDrift
  className="homeBodyTitleMotion"
  yFrom={22}
  yTo={-8}
>
  <div className="homeBodyTitle">
<h2>
  <MaskedTitle>
    <span>Body</span>
  </MaskedTitle>

  <MaskedTitle delay={0.08}>
    <span>Language</span>
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
      href="/projects/body-language"
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
        Movement as structure.
        <br />
        Gesture as form.
      </p>
    </div>
  </ScrollDrift>

</div>

  <Link
    href="/projects/body-language"
    className="homeBodyFooter"
  >
    <span>PORTRAIT / MOVEMENT</span>
    <span>VIEW PROJECT ↗</span>
  </Link>

</section>
         
         <section className="homeObjectsCase">

  <div className="homeObjectsTop">
    <span>03 / PRODUCT</span>
    <span>OBJECT STUDY</span>
    <span>2026</span>
  </div>

  <div className="homeObjectsTitle">
<h2>
  <MaskedTitle>
    <span>Objects</span>
  </MaskedTitle>

  <MaskedTitle delay={0.08}>
    <span>& Performance</span>
  </MaskedTitle>
</h2>
  </div>

  <div className="homeObjectsIntro">
    <p>
      Material, balance
      <br />
      and visual tension.
    </p>

    <span>
      PRODUCT / STILL LIFE
    </span>
  </div>

  <div className="homeObjectsStage">

<div className="homeObjectsScrollStage">

  <ScrollExpand>
    <Link
      href="/projects/objects-performance"
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
    href="/projects/objects-performance"
    className="homeObjectsFooter"
  >
    <span>INDEPENDENT STUDY</span>
    <span>VIEW PROJECT ↗</span>
  </Link>

</section>

<section className="homeFacesCase">

  <div className="homeFacesTop">
    <span>04 / FASHION</span>
    <span>PORTRAIT STUDY</span>
    <span>2026</span>
  </div>

<Link
  href="/projects/selected-faces"
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
    <span>Selected</span>
  </MaskedTitle>

  <MaskedTitle delay={0.08}>
    <span>Faces</span>
  </MaskedTitle>
</h2>
    </div>
  </ScrollDrift>
</Link>

  <div className="homeFacesBottom">
    <p>
      Faces as identity,
      <br />
      gesture and presence.
    </p>

    <Link href="/projects/selected-faces">
      VIEW PROJECT ↗
    </Link>
  </div>

</section>

<section className="homeMotorsportCase">

  <div className="homeMotorsportInner">

    <div className="homeMotorsportTop">
      <span>05 / MOTORSPORT</span>
      <span>SPEED · MACHINE · ATMOSPHERE</span>
      <span>2026</span>
    </div>

    <div className="homeMotorsportTitle">
     <h2>
  <MaskedTitle>
    <span>Motorsport</span>
  </MaskedTitle>
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
      href="/projects/motorsport"
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
        <span>RACING / DOCUMENTARY</span>

        <p>
          Speed, pressure
          <br />
          and mechanical rhythm.
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

    <span>BEHIND THE MACHINE</span>
  </div>
</ScrollDrift>

    </div>

    <Link
      href="/projects/motorsport"
      className="homeMotorsportFooter"
    >
      <span>SELECTED MOTORSPORT</span>
      <span>VIEW PROJECT ↗</span>
    </Link>

  </div>

</section>

        </div>
      </section>

      <section id="about" className="about">
        <div className="sectionHeader">
          <span>02</span>
          <span>ABOUT</span>
          <span>ONERABBIT</span>
        </div>

        <div className="aboutGrid">
          <div className="aboutImage">
            <Image
              src="/images/672_8719797188465_672.jpg"
              alt="ONERABBIT"
              fill
              className="aboutPhoto"
            />
          </div>



          <div className="aboutContent">
            <p className="aboutLead">
              Independent photography practice focused on portrait,
              fashion, product and visual culture.
            </p>

            <div className="aboutInfo">
              <p>
                Working between León and Madrid.
                Available for editorial, commercial and independent projects.
              </p>

              <div className="aboutDetails">
                <div>
                  <span>FOCUS</span>
                  <p>
                    Photography · Art Direction · Visual Direction
                  </p>
                </div>

                <div>
                  <span>AVAILABLE FOR</span>
                  <p>
                    Campaigns · Editorial · Portrait · Product · Lookbooks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

<div className="aboutSignature">
  <span>Based in Spain</span>
  <span>Available worldwide</span>
</div>

      </section>
<section id="contact" className="contact">
  <div className="contactTop">
    <span>03</span>
    <span>CONTACT</span>
    <span>AVAILABLE WORLDWIDE</span>
  </div>

  <div className="contactMain">
    <p className="contactSmall">
      Have a project in mind?
    </p>

    <h2>
      Let&apos;s make
      <br />
      something visible.
    </h2>
  </div>

  <div className="contactBottom">
    <a className="contactMail"
    href="mailto:hola@onerabbit.studio">
      hola@onerabbit.studio
    </a>

    <a href="#" target="_blank">
      INSTAGRAM ↗
    </a>
  </div>



</section>
    </main>



  );
}