import React from "react";

import Banner from "@/components/Banner/Banner.jsx";

import styles from "./style.module.css";

const ContactUs = () => {
  return (
    <main>
      <Banner short image="/contact-us/banner.jpg" title="Get In Touch" />
    
      <section className={styles.panel}>
        <p className={`body ${styles.body}`}>Messages of Hope welcomes collaborations with other businesses, organisations, charities, projects, schools and communities. If you're interested in hosting a Messages of Hope project or would like to collaborate with us in any capacity we would love to hear from you.</p>
        <p className={`body ${styles.body}`}>Please fill out the form below and we will get back to you as soon as possible.</p>

        <form className={styles.form}>
          <input className={`body ${styles.input}`} placeholder="Name*" required type="text" id="name" name="name" />
          <input className={`body ${styles.input}`} placeholder="Email*" required type="email" id="email" name="email" />
          <input className={`body ${styles.input}`} placeholder="Business/Organisation" type="text" id="company" name="company" />
          <input className={`body ${styles.input}`} placeholder="Subject*" required type="text" id="subject" name="subject" />
          <textarea className={`body ${styles.input}`} placeholder="Message*" required id="message" name="message" rows="7"/>
          <button type="submit" className={`body ${styles.button}`}>Send</button>
        </form>
      </section>
    </main>
  );
};
export default ContactUs;