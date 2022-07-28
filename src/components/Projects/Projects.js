import React from "react";
import { projects } from "../../data/data";
import Project from "./Project";
import styles from "./Projects.module.scss";

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
