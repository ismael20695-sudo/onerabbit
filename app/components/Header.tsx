"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    title: "Body Language",
    href: "/projects/body-language",
  },
  {
    number: "02",
    title: "Objects / Performance",
    href: "/projects/objects-performance",
  },
  {
    number: "03",
    title: "Portrait Studies",
    href: "/projects/portrait-studies",
  },
  {
    number: "04",
    title: "Selected Faces",
    href: "/projects/selected-faces",
  },
  {
    number: "05",
    title: "Motorsport",
    href: "/projects/motorsport",
  },
];

export default function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);
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

  return (
    <header className={`header ${open ? "menuOpen" : ""}`}>
      <Link
        href="/"
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
    WORK
  </button>

  <div
    className={`workDropdown ${workOpen ? "isOpen" : ""}`}
    role="menu"
  >

            {projects.map((project) => (
              <Link
                key={project.href}
                href={project.href}
                role="menuitem"
                onClick={closeMenu}
              >
                <span>{project.number}</span>
                <strong>{project.title}</strong>
              </Link>
            ))}
          </div>
        </div>

        <a href="/#about" onClick={closeMenu}>
          ABOUT
        </a>

        <a href="/#contact" onClick={closeMenu}>
          CONTACT
        </a>
      </nav>

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
            <span>WORK</span>
            <span>{workOpen ? "−" : "+"}</span>
          </button>

          <div className="mobileWorkList">
            {projects.map((project) => (
              <Link
                key={project.href}
                href={project.href}
                onClick={closeMenu}
              >
                <span>{project.number}</span>
                <strong>{project.title}</strong>
              </Link>
            ))}
          </div>
        </div>

        <a href="/#about" onClick={closeMenu}>
          ABOUT
        </a>

        <a href="/#contact" onClick={closeMenu}>
          CONTACT
        </a>
      </div>
    </header>
  );
}