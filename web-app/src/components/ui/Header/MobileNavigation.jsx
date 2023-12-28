import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import styles from './MobileNavigation.module.css';
import topDec from './assets/mobile-nav-top.png';
import bottomDec from './assets/mobile-nav-bottom.png';

const MobileNavigation = ({ toggleModal }) => {
  const [menu, setMenu] = useState("main");

  function toggleMainNav(newMenu) {
    setMenu(newMenu);
  }

  return (
    <div className={`${styles["mobile-nav"]} heading`}>
      <div className={styles["inner-nav"]}>
        <picture className={styles["logo"]}>
          <source
              type="image/webp"
              srcSet="/moh-logo.webp"/>
          <img
            role="presentation"
            src="/moh-logo.png"
            decoding="async"
            fetchPriority="high"
            alt="Messages of Hope logo" />
        </picture>

        <nav className={`${styles["main-nav"]} ${menu == "main" && styles["show"]}`}>
          <Link href="/" onClick={toggleModal}>Home</Link>
          <button onClick={function() {toggleMainNav("about")}}>About</button>
          <button onClick={function() {toggleMainNav("projects")}}>Projects</button>
          <Link href="https://shop.messagesofhope.co.uk">Shop</Link>
          <Link href="/contact-us">Contact Us</Link> 
        </nav>

        <nav className={`${styles["sub-nav"]} ${menu == "about" && styles["show"]}`}>
          <button onClick={function() {toggleMainNav("main")}}><FontAwesomeIcon icon={faArrowLeft} /> About</button>
          <Link href="/about">Who We Are</Link>
          <Link href="/about">What We Do</Link>
          <Link href="/about">About The Creator</Link>
        </nav>

        <nav className={`${styles["sub-nav"]} ${menu == "projects" && styles["show"]}`}>
          <button onClick={function() {toggleMainNav("main")}}><FontAwesomeIcon icon={faArrowLeft} /> Projects</button>
          <Link href="/projects/connections-2024">Connections 2024</Link>
          <Link href="/projects/bags-of-hope">Bags of Hope</Link>
          <Link href="/projects/messages-of-hope-2023">Messages of Hope 2023</Link>
        </nav>
      </div>
    </div>
  );
};
export default MobileNavigation;
