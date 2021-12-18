import React from "react";
import Experience from "./Experience";
import { experiences } from "../data/data.js";

const WorkExperience = () => {
  return (
    <div className="margin-container">
      <h1>Work Experience</h1>
      {experiences.map((experience, index) => (
        <Experience key={index} experience={experience} />
      ))}
    </div>
  );
};

export default WorkExperience;
