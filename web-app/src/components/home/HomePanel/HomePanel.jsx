import React from "react";

import Button from "../../ui/Button";

import styles from "./HomePanel.module.css";

const HomePanel = () => {
  return (
    <section className={styles["panel"]}>
      <div className={styles["content"]}>
        <h2 className={`subheading ${styles["heading"]}`}>Collecting your messages of hope and spreading them far and wide.</h2>

        <div className={styles["actions"]}>
          <Button colour="red" className={styles["write-a-message"]} link="/write-a-message" text="Write a Message"/>
          <Button colour="blue" link="/write-a-message" text="Undecided Button"/>
          <Button colour="yellow" link="/write-a-message" text="Undecided Button"/>
          <Button colour="green" link="/write-a-message" text="Our Latest Project"/>
        </div>        
      </div>
    </section>
  );
};
export default HomePanel;