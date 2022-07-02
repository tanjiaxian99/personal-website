import { useState } from "react";
import Header from "./components/Header/Header.js";
import Navbar from "./components/Navbar/Navbar.js";
import About from "./components/About/About.js";
import Experiences from "./components/Experiences/Experiences.js";
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
      <Footer />
    </>
  );
}

export default App;
