import React from "react";

import HomePanel from "@/src/components/home/HomePanel/HomePanel.jsx";
import AboutPanel from "@/src/components/home/AboutPanel/AboutPanel.jsx";
import ProjectsPanel from "@/src/components/home/ProjectsPanel/ProjectsPanel.jsx";
import MessagesPanel from "@/src/components/home/MessagesPanel/MessagesPanel.jsx";

const Home = () => {
  return (
    <main>
      <HomePanel/>
      <AboutPanel/>
      <ProjectsPanel/>
      <MessagesPanel/>
    </main>
  );
};
export default Home;
