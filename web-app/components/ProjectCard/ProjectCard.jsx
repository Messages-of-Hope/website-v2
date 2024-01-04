import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./ProjectCard.module.css";

const ProjectCard = ({ id, className, link, title, image, colour }) => {
  return (
    <Link 
      id={id} 
      className={`${styles.projectCard} ${className} ${styles[colour]}`}
      style={{ background: `url(${image}) right 50% bottom 50%/cover no-repeat border-box, 
                             var(--grey-100)`}}
      href={link} >
      <h2 className={`heading ${styles["heading"]}`}>
        <span>{title}</span>
        <FontAwesomeIcon icon={faArrowRight} className={styles["icon"]}/>
      </h2>
    </Link>
  );
};
export default ProjectCard;
