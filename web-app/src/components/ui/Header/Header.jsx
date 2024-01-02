"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import MobileNavigation from "./MobileNavigation.jsx";

import styles from "./Header.module.css";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const headerRef = useRef();

  function toggleMobileNav() {
    setIsMobileNavOpen(!isMobileNavOpen);
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight / 3) {
      headerRef.current.classList.add(styles["scrolled"]);
    } else {
      headerRef.current.classList.remove(styles["scrolled"]);
    }
  });

  return (
    <header ref={headerRef} className={styles["main-header"]}>
      <picture className={styles["logo"]}>
        <Image
          src="/moh-logo.png"
          alt="Messages of Hope logo"
          width={500}
          height={500}
          quality={100} />
      </picture>

      {/* Desktop Navigation */}
      <div className={`heading ${styles["main-nav-actions"]}`}>
        <nav className={styles["main-nav"]}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="https://shop.messagesofhope.co.uk">Shop</Link>
        </nav>
        <Link className={styles["cta"]} href="/contact-us">Contact Us</Link>
      </div>
      
      {/* Mobile Hamburger */}
      <button className={`${styles["hamburger"]} ${isMobileNavOpen && styles["open"]}`} onClick={toggleMobileNav}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Navigation */}
      {isMobileNavOpen && <MobileNavigation toggleModal={toggleMobileNav}/>}
    </header>
  );
};
export default Header;
