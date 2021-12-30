import React from "react";
import Project from "./Project.js";
import { projects } from "../data/data";

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>

      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
