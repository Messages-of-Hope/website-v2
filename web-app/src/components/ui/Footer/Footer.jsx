import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope  } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles["main-footer"]}>
      <div className={styles["content"]}>
        <article className={styles["company-info"]}>
          <picture className={styles["logo"]}>
            <img
              role="presentation"
              src="/moh-logo.svg"
              decoding="async"
              fetchPriority="high"
              alt="Messages of Hope logo" />
          </picture>
          <p className={`body ${styles["body"]}`}>Messages of Hope (MOH) C.I.C</p>
          <p className={`body ${styles["body"]}`}>Company Number 15299854</p>
          <p className={`body ${styles["body"]}`}>contact@messagesofhope.co.uk</p>
        </article>
        <article className={styles["message-counter"]}>
          <h2 className={`title ${styles["heading"]}`}>Messages sent:</h2>
          <p className={`title ${styles["number"]}`}>1057</p>
        </article>
      </div>
      <div className={styles["socials-list"]}>
        <a className={`${styles["social"]}`} href="mailto:contact@messagesofhope.co.uk">
          <FontAwesomeIcon className={`${styles["icon"]}`} icon={faEnvelope} />
        </a>
        <a className={`${styles["social"]}`} href="https://www.instagram.com/messagesof.hope/">
          <FontAwesomeIcon className={`${styles["icon"]}`} icon={faInstagram} />
        </a>
        <a className={`${styles["social"]}`} href="https://www.facebook.com/people/Messages-of-Hope/100087952429971/">
          <FontAwesomeIcon className={`${styles["icon"]}`} icon={faFacebookF} />
        </a>
      </div>
    </footer>
  );
};
export default Footer;