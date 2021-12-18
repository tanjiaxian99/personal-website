import React from "react";
import { InView } from "react-intersection-observer";

const Experience = ({ experience }) => {
  return (
    <InView threshold={0.5}>
      {({ inView, ref }) => (
        <div
          className={"flex-column flex-left slide-horiz-container"}
          ref={ref}
        >
          <div className={`slide ${inView ? "slide-right" : "slide-left"}`}>
            <h2>{experience.title}</h2>
            <h3>{experience.company}</h3>
            <h4>{experience.date}</h4>
            <ul className="font-medium">
              {experience.pointers.map((pointer, index) => (
                <li key={index}>{pointer}</li>
              ))}
            </ul>
            <div className="logo-container">
              {experience.logos.map(({ name, logo }) => {
                return (
                  <div key={name.slice(3)} className="hover-img-container">
                    <span data-hover-title={name}>
                      <img
                        src={logo}
                        alt={name}
                        aria-label={name}
                        className="logo"
                      />
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </InView>
  );
};

export default Experience;
