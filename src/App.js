import Header from "./components/Header.js";
import Welcome from "./components/Welcome.js";
import Intro from "./components/Intro.js";
import Skills from "./components/Skills.js";
import Experiences from "./components/Experiences.js";
import Projects from "./components/Projects.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <div className="container">
        <Intro />
        <Skills />
        <Experiences />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
