"use client";

import React, { useEffect, useState, Fragment, useRef } from "react";

import styles from "./MessageSlideShow.module.css";

const MessageSlideShow = () => {
  const [displayMessage, setDisplayMessage] = useState();

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_ADDR}/message/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });
        if (!response.ok) {
          throw new Error("Failed to fetch messages");
        }

        const data = await response.json();
        setDisplayMessage(data.message);
      } catch (err) {
        setDisplayMessage("You deserve to heal. You're so worth it. I hope you give yourself compassion and kindness on your hard days. You matter, your feelings matter.");
      }
    };
    fetchMessage();
  }, []);

  return (
    <section className={styles.panel}>
      <p className={`body ${styles.body}`}>{displayMessage}</p>
      <p className={`body ${styles.body}`}>- Anonymous -</p>
    </section>
  );
};
export default MessageSlideShow;