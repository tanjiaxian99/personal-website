import "./App.css";
import { useEffect, useRef, useState } from "react";
import Header from "./components/Header.js";
import Hi from "./components/Hi.js";
import Intro from "./components/Intro.js";
import WorkExperience from "./components/WorkExperience.js";
import Skill from "./components/Skill.js";

function App() {
  return (
    <>
      <Header />
      <Hi />
      <Intro />
      <WorkExperience />
      <Skill />
    </>
  );
}

export default App;
