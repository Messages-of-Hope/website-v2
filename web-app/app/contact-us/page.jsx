import React from "react";

import Banner from "@/components/Banner/Banner.jsx";
import ContactForm from "@/components/ContactForm/ContactForm";

import styles from "./style.module.css";


export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Messages of Hope.",
};

const ContactUs = () => {

  return (
    <main>
      <Banner short image="/contact-us/banner.jpg" title="Get In Touch" />
    
      <section className={styles.panel}>
        <p className={`body ${styles.body}`}>Messages of Hope welcomes collaborations with other businesses, organisations, charities, projects, schools and communities. If you&apos;re interested in hosting a Messages of Hope project or would like to collaborate with us in any capacity we would love to hear from you.</p>
        <p className={`body ${styles.body}`}>Please fill out the form below and we will get back to you as soon as possible.</p>

        <ContactForm />
      </section>
    </main>
  );
};
export default ContactUs;