import React, { useRef, useImperativeHandle } from "react";
import Experience from "./Experience";
import python from "../logos/python.svg";
import numpy from "../logos/numpy.svg";
import pandas from "../logos/pandas.svg";
import scikit from "../logos/scikit-learn.svg";
import matplotlib from "../logos/matplotlib.svg";
import seaborn from "../logos/seaborn.svg";
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

  const exps = [
    {
      title: "Data Analyst",
      company: "Defence Science and Technology Agency (DSTA)",
      date: "Jan 2020 to Mar 2020",
      pointers: [
        "Used statistical tools to plot and analyse useful trends and patterns.",
        "Sieved out and cleaned relevant engine data collected from hundreds of Navy ship engine sensors.",
        "Implemented different statistical models to predict the start of the next engine fault.",
      ],
      logos: [
        { name: "Python", logo: python },
        { name: "NumPy", logo: numpy },
        { name: "pandas", logo: pandas },
        { name: "scikit-learn", logo: scikit },
        { name: "Matplotlib", logo: matplotlib },
        { name: "seaborn", logo: seaborn },
      ],
    },
    {
      title: "Singapore Mahjong Game",
      company: "",
      date: "April 2020 to Jul 2020",
      pointers: [
        "Supports real-time multiplayer gameplay, complete with lobby and room creation.",
        "Features include winning hand detection, combos identification, points calculation.",
        "Performed extensive unit testing using Unity Test Runner, a testing suite based on Java NUnit library.",
      ],
      logos: [
        { name: "C#", logo: cSharp },
        { name: "Unity3D", logo: unity },
        { name: "Photon", logo: photon },
      ],
    },
    {
      title: "Personal Website",
      company: "",
      date: "May 2021 to July 2021",
      pointers: [
        "One-page scrolling experience created using Intersection Observer API.",
        "Custom animations all written using CSS.",
      ],
      logos: [
        { name: "HTML", logo: html },
        { name: "CSS", logo: css },
        { name: "Javascript", logo: javascript },
        { name: "React", logo: reactLogo },
      ],
    },
    {
      title: "NUSFitness",
      company: "",
      date: "May 2021 to July 2021",
      pointers: [
        "Created a booking system for NUS sports facilities.",
        "Made a dashboard displaying the current capacity in each facility.",
        "Students can sync their timetables from NUSMods to filter out possible slots.",
      ],
      logos: [
        { name: "HTML", logo: html },
        { name: "CSS", logo: css },
        { name: "Javascript", logo: javascript },
        { name: "MongoDB", logo: mongoDB },
        { name: "Express", logo: express },
        { name: "React", logo: reactLogo },
        { name: "Node.js", logo: node },
      ],
    },
  ];

  return (
    <div className="margin-container">
      <h1>Portfolio</h1>
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
