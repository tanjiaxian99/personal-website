import React from "react";
import InView from "react-intersection-observer";
import Logos from "./Logos";

const Project = ({ project }) => {
  return (
    <InView>
      {({ inView, ref }) => (
        <div className="project-container slide-horiz-container" ref={ref}>
          <div className={`slide-left-right ${inView ? "" : "reverse"}`}>
            <div className="project-details">
              <p className="date">{project.date}</p>
              {project.projectUrl ? (
                <div className="project-url">
                  <h3>
                    <a
                      className="link"
                      href={project.projectUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>
                </div>
              ) : (
                <h3>{project.title}</h3>
              )}

              <p>{project.writeup}</p>

              <Logos logos={project.logos} />

              <div className="project-urls">
                {project.urls.map(({ url, description }, index) => (
                  <div className="project-url">
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

          <div className={`slide-right-left ${inView ? "" : "reverse"}`}>
            <img
              className="project-img"
              src={project.screenshot}
              alt={`${project.title} screenshot`}
            />
          </div>
        </div>
      )}
    </InView>
  );
};

export default Project;
