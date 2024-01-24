import React from "react";
import Image from "next/image";

import TextImagePanel from "@/components/TextImagePanel/TextImagePanel";
import Banner from "@/components/Banner/Banner.jsx";

import styles from "./style.module.css";

export const metadata = {
  title: "Messages of Hope 2023",
  description: "A collaborative art project at Barry Island, hosted by Messages of Hope."
};

const Projects = () => {
  return (
    <main>
      <Banner short image="/projects/banner.jpg" title="Messages of Hope 2023"/>

      <section className={styles.panel}>
        <article className={styles.image_panel}>
          <Image
            src="/projects/messages-of-hope-2023/hero.jpg"
            alt=""
            width={500}
            height={500}
            quality={100} />
          <Image
            src="/projects/messages-of-hope-2023/hero_2.jpg"
            alt=""
            width={500}
            height={500}
            quality={100} />
        </article>
        
        <div className={styles.content}>
          <p className={`body ${styles.body}`}>On the 29th July 2023 Messages of Hope hosted a collaborative art project at Barry Island. The event was a huge success. We collected over 200 messages and had too many inspiring and empowering conversations to count. Both adults and children left their mark in the form of hopeful messages on our pre-prepared canvases.</p>
          <p className={`body ${styles.body}`}>In addition to writing on canvases, members of the public were able to write messages of hope on pebbles and take a mindful break at our colouring station.</p>
          <p className={`body ${styles.body}`}>We are so grateful for everyone that supported this campaign and we are excited to share all of your messages.</p>
        </div>
      </section>
      <section className={styles.panel_2}>
        <h3 className={`heading ${styles.heading}`}>Spot the finsihed canvases at The Barry YMCA in The Vale of Glamorgan.</h3>
        <Image
          src="/projects/messages-of-hope-2023/completed_canvases.png"
          alt=""
          width={500}
          height={500}
          quality={100} />
      </section>
    </main>
  );
};
export default Projects;