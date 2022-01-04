import React from "react";
import InView from "react-intersection-observer";
import Logos from "./Logos";

const Project = ({ project, index }) => {
  return (
    <InView>
      {({ inView, ref }) => (
        <div
          style={inView ? { overflow: "visible" } : { overflow: "hidden" }}
          ref={ref}
        >
          <div
            className={`project ${
              index % 2 == 0 ? "slide-up-down" : "slide-down-up"
            } ${inView ? "" : "reverse"}`}
          >
            <img
              className="project-img"
              src={project.screenshot}
              alt={`${project.title} screenshot`}
            />

            <div className="project-details">
              <p className="date">{project.date}</p>
              {project.projectUrl ? (
                <h3 className="project-title">
                  <a
                    className="link"
                    href={project.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
              ) : (
                <h3 className="project-title">{project.title}</h3>
              )}

              <p>{project.writeup}</p>

              <Logos logos={project.logos} />

              <div className="links">
                {project.urls.map(({ url, description }, index) => (
                  <div>
                    <a
                      className="link"
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      key={index}
                    >
                      {description}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </InView>
  );
};

export default Project;
