import React from "react";
import Link from "next/link";

import Panel from "../ui/Panel";

import styles from "./ProjectPanel.module.css";

const ProjectPanel = () => {
  return (
    <Panel className={styles["panel"]}>
      <h1 className={`title ${styles["title"]}`}>Projects</h1>

      <Link href="/projects/connections-2024" className={`${styles["a-1"]}`}>
        <h2 className={`title ${styles["heading"]}`}>Connections 2024</h2>
      </Link>
      <Link href="/projects" className={`${styles["a-2"]}`}>
        <h2 className={`title ${styles["heading"]}`}>All Projects</h2>
      </Link>
      <Link href="/projects" className={`${styles["a-3"]}`}>
        <h2 className={`title ${styles["heading"]}`}>Bags of Hope</h2>
      </Link>
      <Link href="/projects" className={`${styles["a-4"]}`}>
        <h2 className={`title ${styles["heading"]}`}>Messages of Hope 2023</h2>
      </Link>
      <Link href="/projects" className={`${styles["a-5"]}`}>
        <h2 className={`title ${styles["heading"]}`}>Shop</h2>
      </Link>
      <Link href="/projects" className={`${styles["a-6"]}`}>
        <h2 className={`title ${styles["heading"]}`}></h2>
      </Link>
    </Panel>
  );
};
export default ProjectPanel;