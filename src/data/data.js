import profilePic from "../images/profile-pic.jpg";
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
import java from "../logos/java.svg";
import mahjongCalculator from "../images/mahjong-calculator.png";
import nusfitness from "../images/nusfitness.png";
import mahjong from "../images/mahjong.png";

export const basicInfo = {
  name: "Tan Jia Xian",
  description: "Year 2 Computer Science, NUS",
};

export const intro = {
  profilePic,
  writeup: [
    `I am a Jia Xian, a Year 2 Computer Science undergraduate at the National University of Singapore. 
  Since young, I have always had an appetite and aptitude for problem-solving. I find that once I am hooked on to a 
  problem, I cannot let it go until it has been solved. After picking up my first programming language, I found the 
  beauty of programming as a medium to solve problems.`,
    `I delved into projects that involved solving problems that were near and dear to me. I found myself 
  approaching these problems with the same tenacity as I had when I was first solving maths problems in primary school. 
  There are still many problems out there in the world, and it is my hope that one day, I am sufficiently capable to 
  solve one of them.`,
  ],
};

export const experiences = [
  {
    title: "Data Structures and Algorithms Teaching Assistant",
    company: "NUS",
    date: "Aug 2021 - Dec 2021",
    pointers: [
      `Teach 23 students with another Teaching Assistant to guide students in their lab assignments, answer questions on
      data structures and algorithms, and give constructive feedback for their work.`,
    ],
    logos: [{ name: "Java", logo: java }],
  },
  {
    title: "Data Analyst Intern",
    company: "DSTA",
    date: "Jan 2020 - Mar 2020",
    pointers: [
      `Increased Navy ship engine fault detection rate by 45% through analyzing existing Navy Ship engine data using 
      Pandas and scikit-learn to develop a statistical model that predicts ship engine faults.`,
      `Challenges include working with hundreds of millions of rows of data and filtering the relevant ones, selecting 
      relevant ship engine sensors that correlate with the specified faults, and usingMatplotlib to stitch together 
      various time-series graphs.`,
    ],
    logos: [
      { name: "Python", logo: python },
      { name: "Pandas", logo: pandas },
      { name: "Matplotlib", logo: matplotlib },
      { name: "scikit-learn", logo: scikit },
    ],
  },
];

export const projects = [
  // {
  //   title: "Portfolio Website",
  //   date: "Dec 2021 - Dec 2021",
  //   writeup: `My interactive portfolio is a single-page web application that `,
  //   logos: [
  //     { name: "React", logo: reactLogo },
  //     { name: "HTML", logo: html },
  //     { name: "CSS", logo: css },
  //     { name: "Javascript", logo: javascript },
  //   ],
  //   urls: [
  //     {
  //       url: "https://github.com/tanjiaxian99/personal-website",
  //       description: "View the code for my website on Github.",
  //     },
  //   ],
  //   screenshot: "",
  // },
  {
    title: "Mahjong Calculator Bot",
    projectUrl: "https://t.me/MahjongCalculator_Bot",
    date: "Aug 2021 - Aug 2021",
    writeup: `Mahjong Calculator Bot is a Telegram Bot that automatically keeps track of Mahjong winnings. The idea for
    the bot came about through inconsistent tallies after each Mahjong game. The bot is able to update winnings in 2
    clicks, and allows for private room creation and unique winning systems.`,
    urls: [
      {
        url: "https://github.com/tanjiaxian99/mahjong-calculator-telebot",
        description: "View the code on Github.",
      },
    ],
    logos: [
      { name: "Node.js", logo: node },
      { name: "MongoDB", logo: mongoDB },
      { name: "Telegram Bot API", logo: telegram },
      { name: "Heroku", logo: heroku },
    ],
    screenshot: mahjongCalculator,
  },
  {
    title: "NUSFitness",
    projectUrl: "https://jereldlimjy.github.io/nusfitness/#/",
    date: "May 2021 - July 2021",
    writeup: `NUSFitness is a MERN stack web application and Telegram Bot designed for NUS gym/pool users. The app aims 
    to reduce the frustrations faced by such users due to overcrowding. This is achieved by integrating a booking system, 
    dashboard and timetable syncing all in one application.
    
    This app was built by a team of two.`,
    urls: [
      {
        url: "https://github.com/tanjiaxian99/nusfitness",
        description: "View the code on Github.",
      },
      {
        url: "https://www.youtube.com/watch?v=vt7mWXU9Njw",
        description: "Watch the demo video here.",
      },
    ],
    logos: [
      { name: "MongoDB", logo: mongoDB },
      { name: "Express", logo: express },
      { name: "React", logo: reactLogo },
      { name: "Node.js", logo: node },
      { name: "Telegram Bot API", logo: telegram },
      { name: "Material-UI", logo: materialUi },
      { name: "Heroku", logo: heroku },
    ],
    screenshot: nusfitness,
  },
  {
    title: "Singapore Mahjong Game",
    date: "May 2020 - Jul 2020",
    writeup: `Singapore Mahjong Game is a multiplayer real-time Mahjong game that is based on Singapore Mahjong rules.
    This project was inspired from the inability to play physical Singapore Mahjong during Singapore's circuit breaker. 
    The game features a lobby system, combos and winning hand detection, as well as localization for different languages.`,
    urls: [
      {
        url: "https://github.com/tanjiaxian99/Mahjong",
        description: "View the code on Github.",
      },
    ],
    logos: [
      { name: "C#", logo: cSharp },
      { name: "Unity3D", logo: unity },
      { name: "Photon", logo: photon },
    ],
    screenshot: mahjong,
  },
];
