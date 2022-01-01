import { useState } from "react";
import Header from "./components/Header.js";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Experiences from "./components/Experiences.js";
import Projects from "./components/Projects.js";
import Footer from "./components/Footer.js";

function App() {
  const [headerInView, setHeaderInView] = useState(true);

  return (
    <>
      <Header setHeaderInView={setHeaderInView} />
      <Navbar headerInView={headerInView} />
      <About />
      <Experiences />
      <Projects />
    </>
  );
}

export default App;
