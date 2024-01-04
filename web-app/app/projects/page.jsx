import React from "react";

import ProjectCard from "@/components/ProjectCard/ProjectCard.jsx";
import Banner from "@/components/Banner/Banner.jsx";

import styles from "./style.module.css";

const Projects = () => {
  return (
    <main>
      <Banner short image="/projects/banner.jpg" title="Our Projects"/>

      <section className={styles.panel}>
        <div className={styles.grid}>
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

            <ProjectCard 
              link="/projects" 
              title="Colouring Pages" 
              image="/projects/colouring-pages.jpg"
              colour="red"/>
            
            <picture
              style={{ background: `url("/projects/filler-1.jpg") right 50% bottom 50%/cover no-repeat border-box, 
                                    var(--grey-100)` }}
              className={styles.image}></picture>
        </div>
        <div className={styles.grid}>
            <ProjectCard 
              link="/projects" 
              title="Mental Wealth Festival at City Lit" 
              image="/projects/mental-wealth-festival.jpg"
              colour="blue"/>

            <ProjectCard 
              link="/projects" 
              title="World Mental Health Day 2022"
              image="/projects/world-mental-health-day-2022.jpg" 
              colour="green"/>

            <ProjectCard 
              link="/projects" 
              title="Messages of Hope 2020" 
              image="/projects/moh-2020.jpg"
              colour="yellow"/>

            <picture
              style={{ background: `url("/projects/filler-2.jpg") right 50% bottom 50%/cover no-repeat border-box, 
                                    var(--grey-100)` }} 
              className={styles.image}></picture>

            <ProjectCard 
              link="/write-a-message" 
              title="Write a Message" 
              image="/projects/write-a-message.jpg"
              colour="red"/>
        </div>
      </section>
    </main>
  );
};
export default Projects;