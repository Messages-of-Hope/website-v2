import React from "react";

import Panel from "../ui/Panel";

import styles from "./MessagesPanel.module.css";

const MessagesPanel = () => {
  return (
    <Panel className={styles["panel"]}>
      <article>
        <p className={`body ${styles["body"]}`}>I have been struggling with mental health for 18 years. Been in and out of therapy so often, nothing seemed to work for my borderline. Until one day it did. I still struggle but I can handle it. I feel stronger and happier. Keep going.</p>
        <p className={`body ${styles["body"]}`}>- Anonymous -</p>
      </article>
    </Panel>
  );
};
export default MessagesPanel;
