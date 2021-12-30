import React from "react";
import Project from "./Project.js";
import { projects } from "../data/data";

const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>

      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </section>
  );
};

export default Projects;
