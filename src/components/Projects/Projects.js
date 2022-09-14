import React from "react";
import Project from "./Project";
import {
  java,
  javafx,
  junit5,
  git,
  github,
  node,
  mongoDb,
  telegram,
  express,
  react,
  materialUi,
  cSharp,
  unity,
  photon,
} from "../../assets/logos.js";
import csbook from "../../assets/images/csbook-mockup.png";
import mahjongCalculator from "../../assets/images/mahjong-calculator-mockup.png";
import nusfitness from "../../assets/images/nusfitness-mockup.png";
import mahjong from "../../assets/images/mahjong-mockup.png";
import styles from "./Projects.module.scss";

export const projects = [
  {
    title: "CSBook",
    projectUrl:
      "https://github.com/AY2122S1-CS2103T-T09-3/tp/releases/tag/v1.4",
    date: "Aug 2021 - Nov 2021",
    writeup: `CSBook is a desktop app for Computer Science Teaching Assistants to manage their students. 
    It is optimized for use via a Command Line Interface while still having the benefits of a Graphical User 
    Interface. If you are faster at typing, CSBook can get your student management tasks done faster than 
    traditional GUI applications.`,
    urls: [
      {
        url: "https://github.com/AY2122S1-CS2103T-T09-3/tp",
        description: "View the code on Github",
      },
    ],
    logos: [java, javafx, junit5, git, github],
    screenshot: csbook,
  },
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
        description: "View the code on Github",
      },
    ],
    logos: [node, mongoDb, telegram],
    screenshot: mahjongCalculator,
  },
  {
    title: "NUSFitness",
    projectUrl: "https://nusfitness.netlify.app/#/",
    date: "May 2021 - July 2021",
    writeup: `NUSFitness is a MERN stack web application and Telegram Bot designed for NUS gym/pool users. The app aims 
    to reduce the frustrations faced by such users due to overcrowding. This is achieved by integrating a booking system, 
    dashboard and timetable syncing all in one application.
    
    This app was built by a team of two.`,
    urls: [
      {
        url: "https://github.com/tanjiaxian99/nusfitness",
        description: "View the code on Github",
      },
      {
        url: "https://www.youtube.com/watch?v=vt7mWXU9Njw",
        description: "Watch the demo video here",
      },
    ],
    logos: [mongoDb, express, react, node, telegram, materialUi],
    screenshot: nusfitness,
  },
  {
    title: "Online Singapore Mahjong Game",
    date: "May 2020 - Jul 2020",
    writeup: `Singapore Mahjong Game is a multiplayer real-time Mahjong game that is based on Singapore Mahjong rules.
    This project was inspired from the inability to play physical Singapore Mahjong during Singapore's circuit breaker. 
    The game features a lobby system, combos and winning hand detection, as well as localization for different languages.`,
    urls: [
      {
        url: "https://github.com/tanjiaxian99/Mahjong",
        description: "View the code on Github",
      },
    ],
    logos: [cSharp, unity, photon],
    screenshot: mahjong,
  },
];

const Projects = () => {
  const flipSeparation = 0.2;

  return (
    <section id="projects" className={styles.container}>
      <h2>projects.</h2>
      <div className={styles.projects}>
        {projects.map((project, i) => (
          <Project
            project={project}
            flipDelay={`${flipSeparation * i}s`}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
