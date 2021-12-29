import React from "react";
import { InView } from "react-intersection-observer";

const Experience = ({ experience }) => {
  return (
    <InView threshold={0.5}>
      {({ inView, ref }) => (
        <div className="experience-container slide-horiz-container" ref={ref}>
          <div className={`${inView ? "slide-right" : "slide-left"}`}>
            <p className="date">{experience.date}</p>
            <h3>
              {experience.title} @ {experience.company}
            </h3>

            <ul>
              {experience.pointers.map((pointer, index) => (
                <li key={index}>{pointer}</li>
              ))}
            </ul>

            <div className="logos-container">
              {experience.logos.map(({ name, logo }, index) => (
                <div className="logo-container" key={index}>
                  <img
                    className="logo"
                    src={logo}
                    alt={name}
                    aria-label={name}
                  />
                  <span className="logo-name">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </InView>
  );
};

export default Experience;
