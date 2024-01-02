import React from "react";
import Image from "next/image";

import Project from "./Project.jsx";

import styles from "./ProjectsPanel.module.css";
import staticImg from "./static.jpg";

const ProjectsPanel = () => {
  return (
    <section className={styles["panel"]}>
      <h1 className={`title ${styles["title"]}`}>Projects</h1>
      
      <div className={styles["content"]}>
        <Project 
          link="/projects/connections-2024" 
          title="Connections 2024" 
          bgClass={styles["connections-2024"]}
          colour="blue"/>

        <Project 
          link="/projects/messages-of-hope-2023" 
          title="Messages of Hope 2023" 
          bgClass={styles["moh-2023"]}
          colour="green"/>

        <Project 
          link="/bags-of-hope" 
          title="Bags of Hope" 
          bgClass={styles["bags-of-hope"]}
          colour="yellow"/>
        
        <picture className={styles["img"]}>
        </picture>
        
        <Project 
          link="/projects" 
          title="All Projects" 
          bgClass={styles["all-projects"]}
          colour="red"/>
      </div>
    </section>
  );
};
export default ProjectsPanel;