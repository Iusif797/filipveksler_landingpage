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
      if (menuOpen) {
        setMenuOpen(false);
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.width = "";
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (menuOpen && !target.closest('.navbar') && !target.closest('.hamburger')) {
        setMenuOpen(false);
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.width = "";
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.width = "";
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
