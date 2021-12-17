import React from "react";
import Experience from "./Experience";
import python from "../logos/python.svg";
import pandas from "../logos/pandas.svg";
import scikit from "../logos/scikit-learn.svg";
import matplotlib from "../logos/matplotlib.svg";
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
import telegram from "../logos/telegram.svg";
import materialUi from "../logos/material-ui.svg";
import heroku from "../logos/heroku.svg";

const WorkExperience = () => {
  const exps = [
    {
      title: "Data Analyst",
      company: "Defence Science and Technology Agency (DSTA)",
      date: "Jan 2020 to Mar 2020",
      bullets: [
        "Increased Navy ship engine fault detection rate by 45% through analyzing existing Navy Ship engine data using " +
          "Pandas and scikit-learn to develop a statistical model that predicts ship engine faults.",
        "Challenges include working with hundreds of millions of rows of data and filtering the relevant ones, selecting " +
          "relevant ship engine sensors that correlate with the specified faults, and usingMatplotlib to stitch together " +
          " various time-series graphs.",
      ],
      logos: [
        { name: "Python", logo: python },
        { name: "pandas", logo: pandas },
        { name: "Matplotlib", logo: matplotlib },
        { name: "scikit-learn", logo: scikit },
      ],
    },
    {
      title: "Singapore Mahjong Game",
      company: "",
      date: "April 2020 to Jul 2020",
      bullets: [
        "Created a real-time multiplayer mahjong game based on Singapore rules using Unity3D and deploying a lobby system, " +
          "combos and winning hand detection, and localization for different languages.",
        "Challenges included designing a recursive backtracking algorithm to determine winning hands, implementing " +
          "multiplayer gaming without prior computer networking experience, and generating relevant test cases to perform unit " +
          "testing.",
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
      bullets: [
        "Built a user-friendly portfolio interface by using React to implement a static page that is single-page, responsive, " +
          "and animated.",
        "Challenges include using Intersection Observer API to detect when to change views, creating custom CSS animations " +
          "that activate on scroll, and writing CSS classes from scratch.",
      ],
      logos: [
        { name: "Javascript", logo: javascript },
        { name: "React", logo: reactLogo },
        { name: "HTML", logo: html },
        { name: "CSS", logo: css },
      ],
    },
    {
      title: "NUSFitness",
      company: "",
      date: "May 2021 to July 2021",
      bullets: [
        "Enhanced user satisfaction from 37% to 92% by using MERN stack to devise a full-stack solution, integrating a " +
          "booking system, dashboard, and timetable syncing.",
        "Reduced time to view gym traffic by 2.3 times by using Telegraf.js to build a Telegram bot that allows bookings, " +
          "cancellations, and displays a traffic chart for various facilities.",
        "Challenges include working with a partner and maintaining proper git branching workflow, learning MERN stack " +
          "within a span of 2 weeks, building an API that fetches gym/pool traffic data from NUS website, and maintaining " +
          "sessions and cookies to keep users logged in.",
      ],
      logos: [
        { name: "Javascript", logo: javascript },
        { name: "MongoDB", logo: mongoDB },
        { name: "Express", logo: express },
        { name: "React", logo: reactLogo },
        { name: "Node.js", logo: node },
        { name: "Telegram Bot API", logo: telegram },
        { name: "Material-UI", logo: materialUi },
        { name: "Heroku", logo: heroku },
      ],
    },
  ];

  return (
    <div className="margin-container">
      <h1>Work Experience</h1>
      {exps.map((exp, index) => (
        <Experience key={index} exp={exp} />
      ))}
    </div>
  );
};

export default WorkExperience;
