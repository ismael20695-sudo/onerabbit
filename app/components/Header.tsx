"use client";

import Link from "next/link";
import { useEffect, useState } from "react";


export default function Header() {

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);


  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 80);

    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, []);



  const closeMenu = () => {
    setOpen(false);
  };



  return (

    <header
      className={`header 
      ${scrolled ? "headerScrolled" : ""} 
      ${open ? "menuOpen" : ""}
      `}
    >


      <Link
        href="/"
        className="logo"
        onClick={closeMenu}
      >

        <img
          src="/ISOTIPO-02.svg"
          alt="ONERABBIT"
          className="logoMark"
        />

      </Link>



      <button
        className="menuButton"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >

        <span></span>
        <span></span>

      </button>


<nav className="nav">

  <a href="/#work">
    WORK
  </a>

  <a href="/#about">
    ABOUT
  </a>

  <a href="/#contact">
    CONTACT
  </a>

</nav>



<div className="mobileMenu">


  <a
    href="/#work"
    onClick={closeMenu}
  >
    WORK
  </a>


  <a
    href="/#about"
    onClick={closeMenu}
  >
    ABOUT
  </a>


  <a
    href="/#contact"
    onClick={closeMenu}
  >
    CONTACT
  </a>


</div>




    </header>

  );

}