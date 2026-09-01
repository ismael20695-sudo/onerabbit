import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>

      <section className="hero">
        <Image
          src="/images/1000_Birkenstock.jpg"
          alt="ONERABBIT photography"
          fill
          priority
          className="heroImage"
        />

        <div className="heroOverlay" />

        <header className="header">
          <div className="logo">ONERABBIT</div>

          <nav>
            <a href="#work">WORK</a>
            <a href="#about">ABOUT</a>
            <a href="#contact">CONTACT</a>
          </nav>
        </header>

        <div className="heroText">
          <p>PHOTOGRAPHY · EDITORIAL · PRODUCT · PORTRAIT</p>

          <h1>ONERABBIT</h1>

          <h2>
            Images with pulse,
            <br />
            texture and intent.
          </h2>
        </div>
      </section>

      <section id="work" className="work">
        <div className="sectionHeader">
          <span>01</span>
          <span>SELECTED WORK</span>
          <span>2026</span>
        </div>

        <div className="projects">

          <article className="project projectWide">
  <Link href="/projects/portrait-studies">

    <div className="imageWrap">
      <Image
        src="/images/ALBA_27_10_2301356.jpg"
        alt="Portrait Studies"
        fill
        className="projectImage"
      />
    </div>

    <div className="meta">
      <span>EDITORIAL</span>
      <h3>Portrait Studies</h3>
      <span>2026</span>
    </div>

  </Link>
</article>

          <section className="manifesto">
            <p>
              Faces, gesture,
              <br />
              light and tension.
            </p>
          </section>

          <article className="project">
  <Link href="/projects/body-language">

    <div className="imageWrap">
      <Image
        src="/images/HECTOR_10_9_2300501.jpg"
        alt="Body Language"
        fill
        className="projectImage"
      />
    </div>

    <div className="meta">
      <span>MOVEMENT</span>
      <h3>Body Language</h3>
      <span>2026</span>
    </div>

  </Link>
</article>

          <article className="project">
  <Link href="/projects/objects-performance">

    <div className="imageWrap">
      <Image
        src="/images/2_Adizero.jpg"
        alt="Objects & Performance"
        fill
        className="projectImage"
      />
    </div>

    <div className="meta">
      <span>PRODUCT</span>
      <h3>Objects & Performance</h3>
      <span>2026</span>
    </div>

  </Link>
</article>

         <article className="project projectWide colorProject">
  <Link href="/projects/selected-faces">

    <div className="imageWrap">
      <Image
        src="/images/ENCINA_11_04_2200401_1.jpg"
        alt="Selected Faces"
        fill
        className="projectImage"
      />
    </div>

    <div className="meta">
      <span>FASHION</span>
      <h3>Selected Faces</h3>
      <span>2026</span>
    </div>

  </Link>
</article>

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
    <a href="mailto:hola@onerabbit.studio">
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