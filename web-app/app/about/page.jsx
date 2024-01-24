import React from "react";

import TextImagePanel from "@/components/TextImagePanel/TextImagePanel.jsx";
import Button from "@/components/Button/Button.jsx";
import Banner from "@/components/Banner/Banner.jsx";
import FloatingPanel from "@/components/FloatingPanel/FloatingPanel.jsx";

import styles from "./style.module.css";

export const metadata = {
  title: "About",
  description: "Learn more about Messages of Hope and the work we do.",
};

const About = () => {
  return (
    <main>
      <Banner short image="/about/banner.jpg" title="About Messages of Hope"/>

      <TextImagePanel className={styles.aboutPanel} title="What is Messages of Hope" image="/about/about__hero.jpg" alt="A child writing a message of hope at the Messages of Hope 2023 event in Barry.">
        <div className={styles.content}>
          <p className={`body ${styles.aboutBody}`}>Messages of Hope is a Community Interest Company that encourages people to write messages of hope to individuals struggling with their mental health. We turn your messages into stickers and Instagram posts and spread them across the UK.</p>
          <p className={`body ${styles.aboutBody}`}>You will often find us out, working in the community, asking strangers to write messages of hope. Whether we are creating a collaborative art piece or a short film, our purpose remains the same; to spread hope and collect your messages of hope to inspire those struggling with their mental health.</p>
          <Button colour="red" link="/write-a-message" text="Write a Message"/>
        </div>
      </TextImagePanel>

      <TextImagePanel left className={styles.aboutPanel} title="What We Do" image="/about/what-we-do__hero.jpg" alt="Two young people holding a sign saying 'You're loved'." colour="blue">
        <div className={styles.content}>
          <p className={`body ${styles.aboutBody}`}>As a community organisation, Messages of Hope plays an active role in trying to improve the mental health and well-being of individuals throughout England and Wales, as well as working to support patients as they arrive in hospital for a psychiatric related admission.</p>
          <p className={`body ${styles.aboutBody}`}>We organise and run a variety of projects throughout the year and we always aim to connect communities through creativity.</p>
          <p className={`body ${styles.aboutBody}`}>Check out our projects page to learn more about the work Messages of Hope does.</p>
          <Button colour="yellow" link="/projects" text="Our Projects"/>
        </div>
      </TextImagePanel>

      <FloatingPanel className={styles.floating} image="/about/the-creator__hero.jpg" title="About The Creator">
        <div className={styles.content}>
          <p className={`body ${styles.aboutBody}`}>Bethan Evans is the Creator and Director of Messages of Hope.</p>
          <p className={`body ${styles.aboutBody}`}>Messages of Hope was first created in 2020. However between the years of 2019 and 2022 Bethan was at war with her mental health, more specifically Borderline Personality Disorder, therefore the growth and development of Messages of Hope slipped far down on her list of priorities.</p>
          <p className={`body ${styles.aboutBody}`}>In November 2022 Bethan made an extremely serious attempt to end her life which resulted in her hospitalisation. Following this suicide attempt Bethan made a conscious effort to turn her life around and to this day, she remains in recovery and out of hospital for over a year.</p>
          <p className={`body ${styles.aboutBody}`}>Bethan wants to use her story to inspire others to keep fighting. She wants everyone to know that they have a purpose in this world and usually we feel most lost right before we are found. Suicide is not the answer and it never will be.</p>
          <p className={`body ${styles.aboutBody}`}>Bethan is also passionate about supporting patients that arrive in hospitals for psychiatric admissions. After spending four years of her life in and out of hospitals and psychiatric facilities, Bethan knows just how traumatic and life altering every admission can be.</p>
          <p className={`body ${styles.aboutBody}`}>On several occasions Bethan would be admitted to hospital without any of her belongings, and recalls several times when she would have to sit for days in clothes soaked with vomit and her hair matted. The lack of dignity and respect Bethan and so many other patients are shown during psychiatric admissions is something she only began to reflect on once she had entered recovery. Once she began to reflect she knew she had to do what she could to help those in a similar position.</p>
          <p className={`body ${styles.aboutBody}`}>Bethan created Bags of Hope in 2023 in order to provide patients arriving in hospital for psychiatric admission with the essentials, such as, body wash, wipes, socks and pants.</p>
          <Button className={styles.button} colour="blue" link="/projects/bags-of-hope" text="Bags of Hope"/>
          <p className={`body ${styles.aboutBody}`}>Bethan promises to do what she can to support and advocate for the mentally ill and she hopes that she can be a voice for those with Borderline Personality Disorder.</p>
        </div>
      </FloatingPanel>
    </main>
  );
};
export default About;