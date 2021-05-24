import "./App.css";
import { useEffect, useRef, useState } from "react";
import Header from "./components/Header.js";
import Hi from "./components/Hi.js";
import Intro from "./components/Intro.js";
import Portfolio from "./components/Portfolio.js";

function App() {
  // State to track whether a page should show
  const [show, setShow] = useState({
    p1: false,
    p2: false,
  });

  // References to pages
  const p1Ref = useRef(null),
    p2Ref = useRef(null);

  useEffect(() => {
    function callback(entries) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          if (p1Ref.current == entry.target) {
            setShow((state) => ({ ...state, p1: false }));
          }
        } else {
          if (p1Ref.current == entry.target) {
            setShow((state) => ({ ...state, p1: true }));
          }
        }
      });
    }

    const observer = new IntersectionObserver(callback, {
      threshold: 1,
    });
    observer.observe(p1Ref.current);
    observer.observe(p2Ref.current);
  }, [p1Ref, p2Ref]);

  return (
    <>
      <Header />
      <Hi animate={show.p1} ref={p1Ref} />
      <Intro animate={show.p2} ref={p2Ref} />
      <Portfolio />
    </>
  );
}

export default App;
