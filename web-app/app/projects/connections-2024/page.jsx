import React from "react";

import Banner from "@/components/Banner/Banner";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import ConnectionsVideo from "@/components/ConnectionsVideo/ConnectionsVideo";

import styles from "./style.module.css";

export const metadata = {
  title: "Connections 2024",
  description: "Messages of Hope's Connections 2024 short film project.",
};

const Connections2024 = () => {
  return (
    <main>
      <Banner short image="/projects/connections-2024/banner.jpg" title="Connections 2024"/>

      <ConnectionsVideo />
    </main>
  );
};
export default Connections2024;