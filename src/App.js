import "./App.css";
import { useEffect, useRef, useState } from "react";
import Header from "./components/Header.js";
import Hi from "./components/Hi.js";
import Intro from "./components/Intro.js";
import Portfolio from "./components/Portfolio.js";

function App() {
  // State to track whether a page should show
  const [show, setShow] = useState({
    hiPage: false,
    introPageProfilePic: false,
    introPageP1: false,
    introPageP2: false,
    e1: false,
  });

  // References to pages
  const hiPageRef = useRef(null),
    introPageRef = useRef(null),
    portfolioPageRef = useRef(null);

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        if (entry.target === hiPageRef.current) {
          setShow((state) => ({ ...state, hiPage: false }));
        } else if (entry.target === introPageRef.current.profilePic) {
          setShow((state) => ({ ...state, introPageProfilePic: false }));
        } else if (entry.target === introPageRef.current.p1) {
          setShow((state) => ({ ...state, introPageP1: false }));
        } else if (entry.target === introPageRef.current.p2) {
          setShow((state) => ({ ...state, introPageP2: false }));
        } else if (entry.target === portfolioPageRef.current.e1) {
          setShow((state) => ({ ...state, e1: false }));
        }
      } else {
        if (entry.target === hiPageRef.current) {
          setShow((state) => ({ ...state, hiPage: true }));
        } else if (entry.target === introPageRef.current.profilePic) {
          setShow((state) => ({ ...state, introPageProfilePic: true }));
        } else if (entry.target === introPageRef.current.p1) {
          setShow((state) => ({ ...state, introPageP1: true }));
        } else if (entry.target === introPageRef.current.p2) {
          setShow((state) => ({ ...state, introPageP2: true }));
        } else if (entry.target === portfolioPageRef.current.e1) {
          setShow((state) => ({ ...state, e1: true }));
        }
      }
    });
  };

  const observer = new IntersectionObserver(callback, {
    threshold: 1,
  });

  useEffect(() => {
    observer.observe(hiPageRef.current);
    observer.observe(introPageRef.current.profilePic);
    observer.observe(introPageRef.current.p1);
    observer.observe(introPageRef.current.p2);
    observer.observe(portfolioPageRef.current.e1);
  }, [hiPageRef, introPageRef, portfolioPageRef]);

  return (
    <>
      <Header />
      <Hi animate={show.hiPage} ref={hiPageRef} />
      <Intro
        animateProfilePic={show.introPageProfilePic}
        animateP1={show.introPageP1}
        animateP2={show.introPageP2}
        ref={introPageRef}
      />
      <Portfolio animateE1={show.e1} ref={portfolioPageRef} />
    </>
  );
}

export default App;
