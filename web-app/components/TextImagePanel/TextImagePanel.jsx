import React from "react";
import Image from "next/image";

import styles from "./TextImagePanel.module.css";

const TextImagePanel = ({ id, className, children, title, image, alt, left, colour  }) => {
  return (
    <section id={id} style={left && {flexDirection: "row-reverse"}} className={`${styles["panel"]} ${className} ${colour && styles[colour]} ${left && styles["left"]}`}>
      <picture className={styles["picture"]}>
        <Image 
            role="presentation"
            src={image}
            decoding="async"
            fetchPriority="high"
            width={500}
            height={500}
            quality={100}
            alt={alt} />
      </picture>
      <article>
        {title && <h1 className={`title ${styles["title"]}`}>{title}</h1>}
        {children}
      </article>
    </section>
  );
};
export default TextImagePanel;