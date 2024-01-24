import React from "react";

import TextImagePanel from "@/components/TextImagePanel/TextImagePanel";
import Banner from "@/components/Banner/Banner.jsx";
import Button from "@/components/Button/Button";

import styles from "./style.module.css";

const Projects = () => {
  return (
    <main>
      <Banner short image="/projects/banner.jpg" title="Bags of Hope"/>

      <TextImagePanel left className={styles.aboutPanel} title="What is Bags of Hope" image="/about/what-we-do__hero.jpg" alt="Two young people holding a sign saying 'You're loved'." colour="red">
        <div className={styles.content}>
          <p className={`body ${styles.aboutBody}`}>Bags of Hope is a project to give items to patients arriving on psychiatric wards. Our goal is to ensure that nobody arrives to psychiatric wards with only the clothes on their back. Patients should be there for treatment and help, and hospital admissions shouldn't feel like a prison sentence.</p>
          <p className={`body ${styles.aboutBody}`}>We're not asking for money, instead we've created an amazon wishlist so that items can be donated directly. The items are then sorted into different bags, each providing a range of essentials as well as activites, snacks. The bags are then delivered to local psychiatric wards in the Vale of Glamorgan.</p>
          <p className={`body ${styles.aboutBody}`}>You can help by spending as little as £2.</p>          
          <Button className={styles.button} colour="blue" link="https://www.amazon.co.uk/hz/wishlist/ls/2B8A3SKRC0F49?ref_=wl_share" text="Amazon Wishlist"/>
          <p className={`body ${styles.aboutBody}`}>We are constantly posting updates with this project on our Instagram, as well as the products that we are currently lacking, so be sure to check that out.</p>
        </div>
      </TextImagePanel>

      <section className={styles.panel}>
        
      </section>
    </main>
  );
};
export default Projects;