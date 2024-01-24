import React from "react";

import Banner from "@/components/Banner/Banner.jsx";
import Button from "@/components/Button/Button.jsx";
import TextImagePanel from "@/components/TextImagePanel/TextImagePanel.jsx";
import ProjectCard from "@/components/ProjectCard/ProjectCard.jsx";
import MessageSlideShow from "@/components/MessageSlideShow/MessageSlideShow.jsx";

import styles from "./style.module.css";

const Home = () => {
  return (
    <main>
      <Banner image="/banner.jpg">
        <article className={styles.bannerContent}>
          <h2 className={`subheading ${styles.heading}`}>Collecting your messages of hope and spreading them far and wide.</h2>

          <div className={styles.actions}>
            <Button colour="red" link="/write-a-message" text="Write a Message"/>
            <Button colour="blue" link="/projects/connections-2024" text="Connections 2024"/>
            <Button colour="yellow" link="https://shop.messagesofhope.co.uk/" text="Help Support Us"/>
            <Button colour="green" link="/projects/connections-2024" text="Our Latest Project"/>
          </div>        
        </article>
      </Banner>

      <TextImagePanel title="About Messages of Hope" image="/about__hero.jpg" alt="Two young adults holding a whiteboard saying 'Keep going, keep loving'.">
        <p className={`body ${styles.aboutBody}`}>Have you seen our stickers whilst on a walk? Or maybe you&apos;ve come across us and written a message of hope whilst you&apos;ve been out and about?</p>
        <p className={`body ${styles.aboutBody}`}>Messages of Hope is a Community Interest Company that encourages people to write messages of hope for people struggling with their mental health. We turn your messages into stickers and Instagram posts and spread them across the UK.</p>
        <p className={`body ${styles.aboutBody}`}>We also try to spread hope and make connections by going out into public spaces and asking strangers to write messages of hope and creating short films of these experiences.</p>
        <p className={`body ${styles.aboutBody}`}>Check out more of the work we do below!</p>
      </TextImagePanel>

      <section className={styles.projectsPanel}>
        <h1 className={`title ${styles.title}`}>Projects</h1>

        <div className={styles.content}>
          <ProjectCard 
            link="/projects/connections-2024" 
            title="Connections 2024" 
            image="/projects/connections-2024.jpg"
            colour="blue"/>

          <ProjectCard 
            link="/projects/messages-of-hope-2023" 
            title="Messages of Hope 2023"
            image="/projects/moh-2023.jpg" 
            colour="green"/>

          <ProjectCard 
            link="/projects/bags-of-hope" 
            title="Bags of Hope" 
            image="/projects/bags-of-hope.jpg"
            colour="yellow"/>
          
          <picture className={styles.image}></picture>
          
          <ProjectCard 
            link="/projects" 
            title="All Projects" 
            image="/all-projects.jpg"
            colour="red"/>
        </div>
      </section>

      <MessageSlideShow/>
    </main>
  );
};
export default Home;