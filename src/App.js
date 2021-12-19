import "./App.css";
import { useEffect, useRef, useState } from "react";
import Header from "./components/Header.js";
import Welcome from "./components/Welcome.js";
import Intro from "./components/Intro.js";
import Experiences from "./components/Experiences.js";
import Skill from "./components/Skill.js";

function App() {
  return (
    <div className="padding">
      <Header />
      <Welcome />
      <Intro />
      <Experiences />
      <Skill />
    </div>
  );
}

export default App;
