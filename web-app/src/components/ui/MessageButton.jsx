import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import styles from "./MessageButton.module.css";

const MessageButton = () => {
  return (
    <Link href="/write-a-message" className={styles["button"]}>
      <FontAwesomeIcon icon={faPenToSquare} className={styles["icon"]}/>
      <span className="heading">Write a Message</span>
    </Link>
  );
};
export default MessageButton;