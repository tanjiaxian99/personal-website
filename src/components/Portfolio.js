import React, {
  useState,
  useRef,
  useImperativeHandle,
  useEffect,
  createRef,
} from "react";
import Experience from "./Experience";
import python from "../logos/python.svg";
import numpy from "../logos/numpy.svg";
import pandas from "../logos/pandas.svg";
import scikit from "../logos/scikit-learn.svg";
import cSharp from "../logos/c-sharp.svg";
import unity from "../logos/unity.svg";
import photon from "../logos/photon.png";
import html from "../logos/html-5.svg";
import css from "../logos/css-3.svg";
import javascript from "../logos/javascript.svg";
import reactLogo from "../logos/react.svg";
import mongoDB from "../logos/mongodb.svg";
import express from "../logos/express.svg";
import node from "../logos/nodejs.svg";

const Portfolio = React.forwardRef(({ animateArr }, ref) => {
  const refArr = [useRef(), useRef(), useRef(), useRef()];

  useImperativeHandle(ref, () => ({
    get e1() {
      return refArr[0].current;
    },

    get e2() {
      return refArr[1].current;
    },

    get e3() {
      return refArr[2].current;
    },

    get e4() {
      return refArr[3].current;
    },
  }));

  const [exps, setExp] = useState([
    {
      title: "Data Analyst",
      company: "Defence Science and Technology Agency (DSTA)",
      date: "Jan 2020 to Mar 2020",
      pointers: [
        "Performed data analysis on Navy ship engine data to create a predictive maintenance model",
        "Written in Python using Numpy, pandas and scikit-learn",
        "Made use of different modelling techniques, such as Principal Component Analysis, Isolation Forest, Change Point Algorithms",
      ],
      logos: [python, numpy, pandas, scikit],
    },
    {
      title: "Singapore Mahjong Game",
      company: "",
      date: "April 2020 to Jul 2020",
      pointers: [
        "Supports real-time multiplayer gameplay",
        "Features include winning hand detection, combos identification, points calculation",
        "Performed extensive unit testing using Unity Test Runner, a testing suite based on Java NUnit library",
      ],
      logos: [cSharp, unity, photon],
    },
    {
      title: "Personal Website",
      company: "",
      date: "May 2021 to July 2021",
      pointers: ["Supports real-time multiplayer gameplay"],
      logos: [html, css, javascript, reactLogo],
    },
    {
      title: "NUSFitness",
      company: "",
      date: "May 2021 to July 2021",
      pointers: ["Supports real-time multiplayer gameplay"],
      logos: [html, css, javascript, mongoDB, express, reactLogo, node],
    },
  ]);

  return (
    <div className="container">
      <h2>Portfolio</h2>
      {exps.map((exp, index) => (
        <Experience
          key={exp.title.slice(0, 3)}
          exp={exp}
          animate={animateArr[index]}
          ref={refArr[index]}
        />
      ))}
    </div>
  );
});

export default Portfolio;
