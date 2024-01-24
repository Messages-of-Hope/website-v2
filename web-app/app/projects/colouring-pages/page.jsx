"use client";

import React, { useEffect, useState } from "react";

import TextImagePanel from "@/components/TextImagePanel/TextImagePanel";
import Banner from "@/components/Banner/Banner.jsx";

import styles from "./style.module.css";

const ColouringPages = () => {
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
    <main>
      <Banner short image="/projects/banner.jpg" title="Colouring Pages"/>

      <section className={styles.panel}>
        {imageDetails.map((imageDetail) => (
          <a className={styles.image_panel} key={imageDetail.id} href={process.env.NEXT_PUBLIC_COLOURING_ADDR + imageDetail.url}>
            <img src={process.env.NEXT_PUBLIC_COLOURING_ADDR + imageDetail.url} alt={imageDetail.description} />
          </a>
        ))}
      </section>
    </main>
  );
};
export default ColouringPages;