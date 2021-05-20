import "./App.css";
import { useEffect, useRef, useState } from "react";
import Header from "./components/Header.js";
import Hi from "./components/Hi.js";
import Intro from "./components/Intro.js";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience.js";

function App() {
  // State to track whether a page should show
  const [show, setShow] = useState({
    p1: false,
  });

  // References to pages
  const p1Ref = useRef(null);

  function callback(entries) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      console.log(entry);
      setShow({ p1: true });
    });
  }

  const observer = new IntersectionObserver(callback, {
    threshold: 1,
  });

  useEffect(() => {
    observer.observe(p1Ref.current);
  }, [p1Ref]);

  return (
    <div className="container">
      <Header />
      <Hi animate={show.p1} ref={p1Ref} />
      <Intro />
      <Portfolio />
    </div>
  );
}

export default App;
