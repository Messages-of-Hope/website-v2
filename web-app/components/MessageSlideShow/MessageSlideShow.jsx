import React from "react";

import styles from "./MessageSlideShow.module.css";

const MessageSlideShow = () => {
  return (
    <section className={styles.panel}>
      <p className={`body ${styles.body}`}>You deserve to heal. You're so worth it. I hope you give yourself compassion and kindness on your hard days. You matter, your feelings matter.</p>
      <p className={`body ${styles.body}`}>- Anonymous -</p>
    </section>
  );
};
export default MessageSlideShow;