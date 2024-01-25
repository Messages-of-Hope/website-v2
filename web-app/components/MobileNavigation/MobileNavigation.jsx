import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./MobileNavigation.module.css";

const MobileNavigation = ({ toggleModal }) => {
  return (
    <div className={`${styles["mobile-nav"]} heading`}>
      <div className={styles["inner-nav"]}>
        <picture className={styles["logo"]}>
          <Image
            src="/moh-logo.png"
            alt="Messages of Hope logo"
            width={500}
            height={500}
            quality={100} />
        </picture>

        <nav className={`${styles["main-nav"]} ${styles["show"]}`}>
          <Link href="/" onClick={toggleModal}>Home</Link>
          <Link href="/about" onClick={toggleModal}>About</Link>
          <Link href="/projects" onClick={toggleModal}>Projects</Link>
          <Link href="https://shop.messagesofhope.co.uk" onClick={toggleModal}>Shop</Link>
          <Link href="/contact-us" onClick={toggleModal}>Contact Us</Link> 
        </nav>
      </div>
    </div>
  );
};
export default MobileNavigation;
