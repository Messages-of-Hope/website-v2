import React from "react";

import styles from "./Panel.module.css";

const Panel = ({ children, className, id }) => {
  return (
    <section id={id} className={`${styles["panel"]} ${className}`}>
      {children}
    </section>
  );
};
export default Panel;