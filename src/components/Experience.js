import React from "react";
import { InView } from "react-intersection-observer";
import Logos from "./Logos";

const Experience = ({ experience }) => {
  return (
    <InView>
      {({ inView, ref }) => (
        <div className="experience-container" ref={ref}>
          <div className={`slide-left-right ${inView ? "" : "reverse"}`}>
            <p className="date">{experience.date}</p>
            <h3>
              {experience.title} @ {experience.company}
            </h3>

            <ul>
              {experience.pointers.map((pointer, index) => (
                <li key={index}>{pointer}</li>
              ))}
            </ul>

            <Logos logos={experience.logos} />
          </div>
        </div>
      )}
    </InView>
  );
};

export default Experience;
