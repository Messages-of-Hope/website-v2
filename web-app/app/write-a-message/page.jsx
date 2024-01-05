import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Banner from "@/components/Banner/Banner.jsx";
import MessageSlideShow from "@/components/MessageSlideShow/MessageSlideShow.jsx";

import styles from "./style.module.css";

const WriteAMessage = () => {
  return (
    <main>
      <Banner short image="/write-a-message/banner.jpg" title="Write Your Message of Hope"/>

      <section className={styles.panel}>
        <h2 className={`heading ${styles.heading}`}>Write a message of hope for someone struggling with their mental health.</h2>
        <textarea className={`body ${styles.message}`} cols="30" rows="10" placeholder="My message is..."></textarea>
        <button className={styles.button}>
          <span className="subheading">Submit My Message</span>
          <FontAwesomeIcon icon={faArrowRight} className={styles["icon"]}/>
        </button>
      </section>

      <MessageSlideShow/>
    </main>
  );
};
export default WriteAMessage;