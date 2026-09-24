"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [open, setOpen] = useState(false);


  
  useEffect(() => {
    const handleScroll = () => {
      const start = 0;
      const end = 180;

      const progress = (window.scrollY - start) / (end - start);

      setScrollProgress(Math.min(1, Math.max(0, progress)));
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
  };

  return (
    <header
      className={`header ${open ? "menuOpen" : ""}`}
    >
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
          {/* WORDMARK */}
          <img
            src="/ISOTIPO-02.svg"
            alt="ONERABBIT"
            className="headerLogoWordmark"
          />

          {/* ISOTIPO */}
          <img
            src="/ISOTIPO-06.svg"
            alt=""
            aria-hidden="true"
            className="headerLogoIcon"
          />
        </div>
      </Link>

      <nav className="nav">
        <a href="/#work">WORK</a>
        <a href="/#about">ABOUT</a>
        <a href="/#contact">CONTACT</a>
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
        <a href="/#work" onClick={closeMenu}>
          WORK
        </a>

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