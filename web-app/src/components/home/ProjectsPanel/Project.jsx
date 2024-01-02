import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./Project.module.css";
import img from "./connections-2024.jpg";

const Project = ({ className, id, link, title, bgClass, colour }) => {
  return (
    <Link 
      id={id} 
      className={`${styles["project"]} ${className} ${bgClass} ${styles[colour]}`}
      href={link} >
      
      <h2 className={`heading ${styles["heading"]}`}>
        <span>{title}</span>
        <FontAwesomeIcon icon={faArrowRight} className={styles["icon"]}/>
      </h2>
    </Link>
  );
};
export default Project;
