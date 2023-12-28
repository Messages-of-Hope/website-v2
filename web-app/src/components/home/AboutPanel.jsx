import React from "react";
import Image from "next/image";

import Panel from "../ui/Panel";

import styles from "./AboutPanel.module.css";
import aboutHero from "./assets/about-hero.jpg";
import aboutHeroWebp from "./assets/about-hero.webp";

const AboutPanel = () => {
  return (
    <Panel className={styles["panel"]}>
      <picture>
        <source srcSet={aboutHeroWebp} type="image/webp" />
        <Image 
          role="presentation"
          src={aboutHero}
          decoding="async"
          fetchPriority="high"
          alt="Two young people holding a sign saying 'Keep going, keep loving'" />
      </picture>

      <article>
        <h1 className={`title ${styles["title"]}`}>About Messages of Hope</h1>
        <p className={`body ${styles["body"]}`}>Have you seen our stickers whilst on a walk? Or maybe you&apos;ve come across us and written a message of hope whilst you&apos;ve been out and about?</p>
        <p className={`body ${styles["body"]}`}>Messages of Hope is a Community Interest Company that encourages people to write messages of hope for people struggling with their mental health. We turn your messages into stickers and Instagram posts and spread them across the UK.</p>
        <p className={`body ${styles["body"]}`}>We also try to spread hope and make connections by going out into public spaces and asking strangers to write messages of hope and creating short films of these experiences.</p>
        <p className={`body ${styles["body"]} ${styles["body-final"]}`}>Check out more of the work we do below!</p>
      </article>
    </Panel>
  );
};
export default AboutPanel;