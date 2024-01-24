"use client"

import React, { useEffect, useState } from "react";

import styles from "./ColouringPagesDisplay.module.css";

const ColouringPagesDisplay = () => {
  const [imageDetails, setImageDetails] = useState([]);

  useEffect(() => {
    const getImageDetails = async () => {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_COLOURING_ADDR + "/summary");
        const data = await res.json();
        setImageDetails(data.images);
      } catch (err) {}
    };
    getImageDetails();
  }, []);

  return (
    <section className={styles.panel}>
      {imageDetails.map((imageDetail) => (
        <a className={styles.image_panel} key={imageDetail.id} href={process.env.NEXT_PUBLIC_COLOURING_ADDR + imageDetail.url}>
          <img src={process.env.NEXT_PUBLIC_COLOURING_ADDR + imageDetail.url} alt={imageDetail.description} />
        </a>
      ))}
    </section>
  );
};
export default ColouringPagesDisplay;