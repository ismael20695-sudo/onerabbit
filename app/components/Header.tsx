"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import es from "../content/es";

type ProjectKey =
  | "body"
  | "objects"
  | "portrait"
  | "faces"
  | "motorsport";

const projects: {
  key: ProjectKey;
  href: string;
}[] = [
  {
    key: "body",
    href: "/projects/body-language",
  },
  {
    key: "objects",
    href: "/projects/objects-performance",
  },
  {
    key: "portrait",
    href: "/projects/portrait-studies",
  },
  {
    key: "faces",
    href: "/projects/selected-faces",
  },
  {
    key: "motorsport",
    href: "/projects/motorsport",
  },
];

type HeaderContent = typeof es;

export default function Header({
  content = es,
}: {
  content?: HeaderContent;
}) {
    const [scrollProgress, setScrollProgress] = useState(0);
    const pathname = usePathname();
const isEnglish = pathname.startsWith("/en");

const projectHref = (href: string) =>
  isEnglish ? `/en${href}` : href;

const languageHref = isEnglish
  ? pathname.replace(/^\/en(?=\/|$)/, "") || "/"
  : pathname === "/"
    ? "/en"
    : `/en${pathname}`;

  const [open, setOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const start = 0;
      const end = 180;

      const rawProgress = (window.scrollY - start) / (end - start);

const clamped = Math.min(1, Math.max(0, rawProgress));

const eased =
  clamped * clamped * (3 - 2 * clamped);

setScrollProgress(eased);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
    setWorkOpen(false);
  };

const projectLabels = {
  body: content.work.body.title.join(" "),
  objects: content.work.objects.title.join(" "),
  portrait: content.work.portrait.title.join(" "),
  faces: content.work.faces.title.join(" "),
  motorsport: content.work.motorsport.title,
};

  return (
    <header className={`header ${open ? "menuOpen" : ""}`}>
      <Link
  href={isEnglish ? "/en" : "/"}
  className="logo"
  onClick={closeMenu}
  aria-label="ONERABBIT"
>
        <div
          className="headerLogoTransition"
          style={
            {
              "--logo-progress": scrollProgress,
            } as React.CSSProperties
          }
        >
          <img
            src="/ISOTIPO-02.svg"
            alt="ONERABBIT"
            className="headerLogoWordmark"
          />

          <img
            src="/ISOTIPO-06.svg"
            alt=""
            aria-hidden="true"
            className="headerLogoIcon"
          />
        </div>
      </Link>

      <nav className="nav" aria-label="Main navigation">
        
<div
  className="workNavItem"
  onMouseEnter={() => setWorkOpen(true)}
  onMouseLeave={() => setWorkOpen(false)}
>
  <button
    type="button"
    className="workToggle"
    aria-expanded={workOpen}
    aria-haspopup="true"
  >
    {content.nav.work}
  </button>

  <div
    className={`workDropdown ${workOpen ? "isOpen" : ""}`}
    role="menu"
  >

{projects.map((project, index) => (
  <Link
    key={project.href}
    href={isEnglish ? `/en${project.href}` : project.href}
    role="menuitem"
    onClick={closeMenu}
  >
    <span>{String(index + 1).padStart(2, "0")}</span>
    <strong>{projectLabels[project.key]}</strong>
  </Link>
))}


          </div>
        </div>

        <a
  href={isEnglish ? "/en#about" : "/#about"}
  onClick={closeMenu}
>
  {content.nav.about}
</a>

        <a
  href={isEnglish ? "/en#contact" : "/#contact"}
  onClick={closeMenu}
>
  {content.nav.contact}
</a>
      </nav>

<div className="languageSwitch">
  <Link
    href="/"
    className={!isEnglish ? "active" : ""}
    onClick={closeMenu}
  >
    ES
  </Link>

  <span>/</span>

<Link
  href={languageHref}
  className={isEnglish ? "active" : ""}
  onClick={closeMenu}
>
  EN
</Link>
</div>

      <button
        className="menuButton"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        <span />
        <span />
      </button>

      <div className="mobileMenu">
        <div className={`mobileWork ${workOpen ? "isOpen" : ""}`}>
          <button
            type="button"
            className="mobileWorkToggle"
            onClick={() => setWorkOpen((value) => !value)}
            aria-expanded={workOpen}
          >
            <span>{content.nav.work}</span>
            <span>{workOpen ? "−" : "+"}</span>
          </button>

          <div className="mobileWorkList">
            {projects.map((project, index) => (
              <Link
                key={project.href}
                href={isEnglish ? `/en${project.href}` : project.href}
                onClick={closeMenu}
              >
                
<span>{String(index + 1).padStart(2, "0")}</span>
<strong>{projectLabels[project.key]}</strong>

              </Link>
            ))}
          </div>
        </div>

        <a
  href={isEnglish ? "/en#about" : "/#about"}
  onClick={closeMenu}
>
  {content.nav.about}
</a>

        <a
  href={isEnglish ? "/en#contact" : "/#contact"}
  onClick={closeMenu}
>
  {content.nav.contact}
</a>
      </div>
    </header>
  );
}