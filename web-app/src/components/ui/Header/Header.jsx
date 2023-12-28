"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";

import MobileNavigation from "./MobileNavigation.jsx";

import styles from "./Header.module.css";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const headerRef = useRef();

  function toggleMobileNav() {
    setIsMobileNavOpen(!isMobileNavOpen);
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight / 2) {
      headerRef.current.classList.add(styles["scrolled"]);
    } else {
      headerRef.current.classList.remove(styles["scrolled"]);
    }
  });

  return (
    <header ref={headerRef} className={styles["main-header"]}>
      <picture className={styles["logo"]}>
        <img
          role="presentation"
          src="/moh-logo.svg"
          decoding="async"
          fetchPriority="high"
          alt="Messages of Hope logo" />
      </picture>

      {/* Desktop Navigation */}
      <div className={`heading ${styles["main-nav-actions"]}`}>
        <nav className={styles["main-nav"]}>
          <Link href="/">Home</Link>
          <div className={styles["about-nav"]}>
            <Link href="/about">About</Link>
            <ul className={`${styles["sub-nav"]} ${styles["about-sub-nav"]}`}>
              <li><Link href="/about">Who We Are</Link></li>
              <li><Link href="/about">What We Do</Link></li>
              <li><Link className={styles["final-sub-nav-item"]} href="/about">The Creator</Link></li>
            </ul>
          </div>
          <div className={styles["projects-nav"]}>
            <Link href="/#projects">Projects</Link>
            <ul className={`${styles["sub-nav"]} ${styles["projects-sub-nav"]}`}>
              <li><Link href="/projects/connections-2024">Connections 2024</Link></li>
              <li><Link href="/projects/bags-of-hope">Bags of Hope</Link></li>
              <li><Link className={styles["final-sub-nav-item"]} href="/projects/messages-of-hope-2023">Messages of Hope 2023</Link></li>
            </ul>
          </div>
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