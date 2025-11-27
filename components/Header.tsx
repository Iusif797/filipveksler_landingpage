"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <Link href="/" onClick={closeMenu}>
        <Image
          className="logo"
          src="/assets/img/F37D15 - avatar nBG.png"
          alt="Logo"
          width={50}
          height={50}
          priority
        />
      </Link>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <Link href="/" className="menu-item" onClick={closeMenu}>
          HOME
        </Link>
        <Link href="#about" className="menu-item" onClick={closeMenu}>
          ABOUT
        </Link>
        <Link href="#vitae" className="menu-item" onClick={closeMenu}>
          VITAE
        </Link>
        <Link href="#blog" className="menu-item" onClick={closeMenu}>
          BLOG
        </Link>
        <Link href="#publications" className="menu-item" onClick={closeMenu}>
          PUBLICATIONS
        </Link>
        <Link href="/contact" className="menu-item" onClick={closeMenu}>
          CONTACT
        </Link>
      </nav>
    </header>
  );
}
