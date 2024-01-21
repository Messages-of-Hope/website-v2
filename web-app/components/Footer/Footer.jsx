import React, { Fragment } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope  } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

import Button from "../Button/Button.jsx";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <Fragment>
      <section className={styles["footer"]}>
        <article className={styles["company-info"]}>
          <picture className={styles["logo"]}>
            <Image
              src="/moh-logo.png"
              alt="Messages of Hope logo"
              width={500}
              height={500}
              quality={100} />
          </picture>
          <p className={`body ${styles["body"]}`}>Messages of Hope (MOH) C.I.C</p>
          <p className={`body ${styles["body"]}`}>Company Number 15299854</p>
          <p className={`body ${styles["body"]}`}>contact@messagesofhope.co.uk</p>
          <a className={`body ${styles.privacy_policy}`} href="https://documents.messagesofhope.co.uk/privacy-policy">privacy policy</a>
        </article>
        <article className={styles["buttons"]}>
          <Button colour="red" className={styles["write-a-message"]} link="/write-a-message" text="Write a Message"/>
          <Button colour="blue" link="/projects/connections-2024" text="Connections 2024"/>
          <Button colour="yellow" link="https://shop.messagesofhope.co.uk/" text="Help Support Us"/>
          <Button colour="green" link="/projects/connections-2024" text="Our Latest Project"/>
        </article>
      </section>

      <section className={styles["socials-list"]}>
        <a className={`body ${styles.privacy_policy}`} href="https://documents.messagesofhope.co.uk/privacy-policy">privacy policy</a>

        <a className={`${styles["social"]}`} href="mailto:contact@messagesofhope.co.uk">
          <FontAwesomeIcon className={`${styles["icon"]}`} icon={faEnvelope} />
        </a>
        <a className={`${styles["social"]}`} href="https://www.instagram.com/messagesof.hope/">
          <FontAwesomeIcon className={`${styles["icon"]}`} icon={faInstagram} />
        </a>
        <a className={`${styles["social"]}`} href="https://www.facebook.com/people/Messages-of-Hope/100087952429971/">
          <FontAwesomeIcon className={`${styles["icon"]}`} icon={faFacebookF} />
        </a>
      </section>
    </Fragment>
  );
};
export default Footer;