import React from "react";
import Experience from "./Experience";
import { experiences } from "../data/data.js";

const Experiences = () => {
  return (
    <div className="experiences-container">
      <h1>Experience</h1>

      {experiences.map((experience, index) => (
        <Experience key={index} experience={experience} />
      ))}
    </div>
  );
};

export default Experiences;
