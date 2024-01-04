import React from "react";

import styles from "./Banner.module.css";

const Banner = ({ id, className, image, title, children, short, plain }) => {
  return (
    <section 
      id={id}
      className={`${styles.imagePanel} ${className} ${short && styles.short} ${plain && styles.plain}`} 
      style={{ background: `linear-gradient(90deg, rgba(12,21,37,0.65) 0%, rgba(12,21,37,0.75) 100%),
                            linear-gradient(180deg, rgba(0,0,0,0.7511379551820728) 3%, rgba(212,212,212,0) 24%, rgba(255,255,255,0) 100%),  
                            url(${image}) right 50% bottom 50%/cover no-repeat border-box, 
                            var(--grey-900)` }}
    >
      {title && <h1 className={`title ${styles.title}`}>{title}</h1>}
      {children}
    </section>
  );
};
export default Banner;