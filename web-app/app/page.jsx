import React from "react"

import HomePanel from "@/src/components/home/HomePanel.jsx";
import AboutPanel from "@/src/components/home/AboutPanel.jsx";
import ProjectPanel from "@/src/components/home/ProjectPanel.jsx";
import MessagesPanel from "@/src/components/home/MessagesPanel.jsx";

const Home = () => {
  return (
    <main>
      <HomePanel/>
      <AboutPanel/>
      <ProjectPanel/>
      <MessagesPanel/>
    </main>
  );
};
export default Home;
