import React, { Fragment } from "react";

import Banner from "@/components/Banner/Banner.jsx";

import styles from "./FloatingPanel.module.css";

const FloatingPanel = ({ id, className, children, title, image  }) => {
  return (
    <section id={id} className={`${styles.panel} ${className}`}>
      <Banner plain short image={image}/>
      <article>
        {title && <h1 className={`title ${styles.title}`}>{title}</h1>}
        {children}
      </article>
    </section>
  );
};
export default FloatingPanel;