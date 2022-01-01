import React from "react";
import Experience from "./Experience";
import { experiences } from "../data/data.js";

const Experiences = () => {
  return (
    <>
      <div className="section-anchor" id="experiences"></div>
      <section>
        <h2>Experiences</h2>

        <div className="experiences">
          {experiences.map((experience, index) => (
            <Experience key={index} experience={experience} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Experiences;
