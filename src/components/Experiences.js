import React from "react";
import Experience from "./Experience";
import { experiences } from "../data/data.js";

const Experiences = () => {
  return (
    <div className="container">
      <h2>Experiences</h2>

      {experiences.map((experience, index) => (
        <Experience key={index} experience={experience} />
      ))}
    </div>
  );
};

export default Experiences;
