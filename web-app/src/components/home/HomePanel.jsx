import React from "react";

import Panel from "../ui/Panel";

import styles from "./HomePanel.module.css";

const HomePanel = () => {
  return (
    <Panel id="home-panel" className={styles["panel"]}>
      <div className={styles["card"]}>
        <h1 className={`title ${styles["title"]}`}>Messages of Hope</h1>
        <h2 className={`subheading ${styles["subheading"]}`}>Collecting your messages of hope and spreading them far and wide.</h2>
      </div>
    </Panel>
  );
};
export default HomePanel;