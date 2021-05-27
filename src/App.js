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
    e2: false,
    e3: false,
    e4: false,
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
        } else if (entry.target === portfolioPageRef.current.e2) {
          setShow((state) => ({ ...state, e2: false }));
        } else if (entry.target === portfolioPageRef.current.e3) {
          setShow((state) => ({ ...state, e3: false }));
        } else if (entry.target === portfolioPageRef.current.e4) {
          setShow((state) => ({ ...state, e4: false }));
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
        } else if (entry.target === portfolioPageRef.current.e2) {
          setShow((state) => ({ ...state, e2: true }));
        } else if (entry.target === portfolioPageRef.current.e3) {
          setShow((state) => ({ ...state, e3: true }));
        } else if (entry.target === portfolioPageRef.current.e4) {
          setShow((state) => ({ ...state, e4: true }));
        }
      }
    });
  };

  const observerPartial = new IntersectionObserver(callback, {
    threshold: 0.5,
  });
  const observerFull = new IntersectionObserver(callback, {
    threshold: 1,
  });

  useEffect(() => {
    observerFull.observe(hiPageRef.current);
    observerFull.observe(introPageRef.current.profilePic);
    observerFull.observe(introPageRef.current.p1);
    observerFull.observe(introPageRef.current.p2);
    observerPartial.observe(portfolioPageRef.current.e1);
    observerPartial.observe(portfolioPageRef.current.e2);
    observerPartial.observe(portfolioPageRef.current.e3);
    observerPartial.observe(portfolioPageRef.current.e4);
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
      <Portfolio
        animateArr={[show.e1, show.e2, show.e3, show.e4]}
        ref={portfolioPageRef}
      />
    </>
  );
}

export default App;
