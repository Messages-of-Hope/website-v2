"use client"

import React, { useRef, useState, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Banner from "@/components/Banner/Banner.jsx";
import MessageSlideShow from "@/components/MessageSlideShow/MessageSlideShow.jsx";

import styles from "./style.module.css";

export const metadata = {
  title: "Write A Message",
  description: "Write a message of hope for someone struggling with their mental health.",
};

const WriteAMessage = () => {
  const [sent, setSent] = useState(false);
  const messageRef = useRef();

  const submitMessage = async () => {
    try {
      const message = messageRef.current.value;
      if (!message) return;
      const data = {
        message,
      };
      const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_ADDR + "/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (err) {}
    setSent(true);

    messageRef.current.value = "";
  };

  return (
    <main>
      <Banner short image="/write-a-message/banner.jpg" title="Write Your Message of Hope"/>

      <section className={styles.panel}>
        {sent && <h2 className={`heading ${styles.heading}`}>Thank you for your message!</h2>}

        <h2 className={`heading ${styles.heading}`}>Write a message of hope for someone struggling with their mental health.</h2>
        <textarea ref={messageRef} className={`body ${styles.message}`} cols="30" rows="10" placeholder="My message is..."></textarea>
        <button onClick={submitMessage} className={styles.button}>
          <span className="subheading">Submit My Message</span>
          <FontAwesomeIcon icon={faArrowRight} className={styles["icon"]}/>
        </button>
      </section>

      <MessageSlideShow/>
    </main>
  );
};
export default WriteAMessage;