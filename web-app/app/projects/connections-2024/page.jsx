"use client";

import React, { useEffect, useState } from "react";

import Banner from "@/components/Banner/Banner";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";

import styles from "./style.module.css";

const Connections2024 = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const checkVideo = async () => {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_CONNECTIONS_ADDR + "/available");
        const data = await res.json();
        if (data.available) {
          setShowVideo(true);
        }
      } catch (err) {}
    };
    checkVideo();
  }, []);

  return (
    <main>
      <Banner short image="/projects/connections-2024/banner.jpg" title="Connections 2024"/>

      
      <section className={styles.panel}>
        <article className={styles.text}>
          <h1 className={`heading ${styles.heading}`}>What is Connections 2024?</h1>
          <p className={`body ${styles.body}`}>Connections is a short film created by Messages of Hope that explores how we can find hope through connection.</p>
          <p className={`body ${styles.body}`}>We set out to capture Londoners writing messages of hope for people struggling with their mental health and we discovered just how connected we truly are.</p>
          <p className={`body ${styles.body}`}>Connections is proof that somebody out there really does care about you.</p>
          <p className={`body ${styles.body}`}>We hope that this film will inspire you to reach out to someone you care about and remind them that they are not alone.</p>
        </article>

        {showVideo ? <VideoPlayer 
          title="Connections 2024" 
          url={process.env.NEXT_PUBLIC_CONNECTIONS_ADDR + "/"}
          bslUrl={process.env.NEXT_PUBLIC_CONNECTIONS_ADDR + "/bsl"}
          thumbnail="/projects/connections-2024/connections-thumbnail.png"
          className={styles.video}
          /> :
          <article className={styles.placeholder}>
            <img src="/projects/connections-2024/connections-thumbnail.png" alt="Connections 2024 Coming Soon"/>
          </article>}
      </section>

      <section className={styles.panel}>
        {showVideo ? <VideoPlayer
        title="The Making of Connections 2024"
        url={process.env.NEXT_PUBLIC_CONNECTIONS_ADDR + "/making-of"}
        bslUrl={process.env.NEXT_PUBLIC_CONNECTIONS_ADDR + "/making-of-bsl"}
        thumbnail="/projects/connections-2024/making-connections-thumbnail.png"
        className={styles.video}
        /> :
        <article className={styles.placeholder}>
          <img src="/projects/connections-2024/making-connections-thumbnail.png" alt="Connections 2024 Coming Soon"/>
        </article>}

        <article className={styles.text}>
          <h1 className={`heading ${styles.heading}`}>Who was involved?</h1>
          <p className={`body ${styles.body}`}>Connections is funded by The Mayor of London and we worked with Thrive LDN and Speakers Collective to make it happen.</p>
          <p className={`body ${styles.body}`}>People from all over London were involved in writing messages of hope for Connections and we also worked with several dancers, including the incredible Speaker Box Street Party.</p>
        </article>
      </section>
    </main>
  );
};
export default Connections2024;