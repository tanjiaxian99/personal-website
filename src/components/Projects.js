import React from "react";
import Project from "./Project.js";
import { projects } from "../data/data";

const Projects = () => {
  return (
    <>
      <div className="section-anchor" id="projects"></div>
      <section>
        <h2 className="section-title">projects.</h2>
        <div className="projects">
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
