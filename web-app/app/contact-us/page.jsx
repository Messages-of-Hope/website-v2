"use client";

import React, { useState, useRef } from "react";

import Banner from "@/components/Banner/Banner.jsx";

import styles from "./style.module.css";

const ContactUs = () => {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const companyRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      organisation: companyRef.current.value,
      subject: subjectRef.current.value,
      body: messageRef.current.value,
    };

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_ADDR + "/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (err) {
      setSent(true);
      setError(true);
      return;
    }

    nameRef.current.value = "";
    emailRef.current.value = "";
    companyRef.current.value = "";
    subjectRef.current.value = "";
    messageRef.current.value = "";

    setSent(true);
  };


  return (
    <main>
      <Banner short image="/contact-us/banner.jpg" title="Get In Touch" />
    
      <section className={styles.panel}>
        <p className={`body ${styles.body}`}>Messages of Hope welcomes collaborations with other businesses, organisations, charities, projects, schools and communities. If you're interested in hosting a Messages of Hope project or would like to collaborate with us in any capacity we would love to hear from you.</p>
        <p className={`body ${styles.body}`}>Please fill out the form below and we will get back to you as soon as possible.</p>

        {!sent ? <form className={styles.form}>
          <input ref={nameRef} className={`body ${styles.input}`} placeholder="Name*" required type="text" id="name" name="name" />
          <input ref={emailRef} className={`body ${styles.input}`} placeholder="Email*" required type="email" id="email" name="email" />
          <input ref={companyRef} className={`body ${styles.input}`} placeholder="Business/Organisation" type="text" id="company" name="company" />
          <input ref={subjectRef} className={`body ${styles.input}`} placeholder="Subject*" required type="text" id="subject" name="subject" />
          <textarea ref={messageRef} className={`body ${styles.input}`} placeholder="Message*" required id="message" name="message" rows="7"/>
          <button onClick={onSubmit} type="submit" className={`body ${styles.button}`}>Send</button>
        </form>: error ? <h2 style={{ textAlign: "center" }} className={`heading ${styles.heading}`}>Something has gone wrong. Please try again later.</h2> :
        <h2 style={{ textAlign: "center" }} className={`heading ${styles.heading}`}>Sent!</h2>
        }
      </section>
    </main>
  );
};
export default ContactUs;