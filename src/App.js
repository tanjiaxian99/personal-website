import { useState } from "react";
import Header from "./components/Header.js";
import Navbar from "./components/Navbar.js";
import AboutSkills from "./components/AboutSkills.js";
import Experiences from "./components/Experiences.js";
import Projects from "./components/Projects.js";
import Footer from "./components/Footer.js";

function App() {
  const [headerInView, setHeaderInView] = useState(true);

  return (
    <>
      <Header setHeaderInView={setHeaderInView} />
      <Navbar headerInView={headerInView} />
      <AboutSkills />
      <Experiences />
      <Projects />
    </>
  );
}

export default App;
