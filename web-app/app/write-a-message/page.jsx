import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Banner from "@/components/Banner/Banner.jsx";
import MessageSlideShow from "@/components/MessageSlideShow/MessageSlideShow.jsx";
import MessageSubmission from "@/components/MessageSubmission/MessageSubmission";

import styles from "./style.module.css";

export const metadata = {
  title: "Write A Message",
  description: "Write a message of hope for someone struggling with their mental health.",
};

const WriteAMessage = () => {
  return (
    <main>
      <Banner short image="/write-a-message/banner.jpg" title="Write Your Message of Hope"/>

      <MessageSubmission/>

      <MessageSlideShow/>
    </main>
  );
};
export default WriteAMessage;