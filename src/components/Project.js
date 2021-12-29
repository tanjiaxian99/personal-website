import React from "react";
import InView from "react-intersection-observer";

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
                    <a href={project.projectUrl} target="_blank">
                      {project.title}
                    </a>
                  </h3>
                </div>
              ) : (
                <h3>{project.title}</h3>
              )}

              <p>{project.writeup}</p>

              <div className="logos-container">
                {project.logos.map(({ name, logo }, index) => (
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

              <div className="project-urls">
                {project.urls.map(({ url, description }, index) => (
                  <div className="project-url">
                    <a href={url} target="_blank" key={index}>
                      {description}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`slide-right-left ${inView ? "" : "reverse"}`}>
            <img className="project-img" src={project.screenshot} />
          </div>
        </div>
      )}
    </InView>
  );
};

export default Project;
