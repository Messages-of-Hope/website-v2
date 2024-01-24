import React from "react";

import TextImagePanel from "@/components/TextImagePanel/TextImagePanel";
import Banner from "@/components/Banner/Banner.jsx";
import ColouringPagesDisplay from "@/components/ColouringPages/ColouringPagesDisplay";

import styles from "./style.module.css";

export const metadata = {
  title: "Free Colouring Pages",
  description: "Free colouring pages for you to download and print.",
};

const ColouringPages = () => {
  return (
    <main>
      <Banner short image="/projects/banner.jpg" title="Colouring Pages"/>

      <ColouringPagesDisplay />
    </main>
  );
};
export default ColouringPages;