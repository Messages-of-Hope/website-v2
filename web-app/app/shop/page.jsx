import React from 'react';
import Image from "next/image";
import Banner from "@/components/Banner/Banner.jsx";

import styles from "./style.module.css";

export const metadata = {
  title: "Shop",
  description: "Messages of Hope's shop.",
};

const Shop = () => {
  return (
    <main>
      <Banner short image="/shop/banner.jpg" title="Messages of Hope Shop"/>

      <section className={styles.panel}>
        <p className={`subheading ${styles.body}`}>The Messages of Hope team is currently setting up a shop in which you can buy some of our fun merch and help to support us.</p> 

        <div className={styles.container}>
          <Image src="/shop/static.jpg" width={1000} height={1000} layout="responsive" className={styles.image} />
        </div>

        <p className={`subheading ${styles.body}`}>Check back soon to see what we've got, but in the mean time have a look on our Instagram as we do sell merch through our Instagram account.</p>
      </section>
    </main>
  );
};
export default Shop;