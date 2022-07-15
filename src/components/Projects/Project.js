import React from "react";
import Icons from "../Icons/Icons.js";
import { useInView } from "react-intersection-observer";
import styles from "./Project.module.scss";

const Project = ({ project }) => {
  const { ref, inView } = useInView({
    threshold: 0.15,
  });

  return (
    <div ref={ref}>
      <div
        className={`${styles.project} ${styles.slide} ${
          !inView && styles.slideRightHidden
        }`}
      >
        <img src={project.screenshot} alt={`${project.title} screenshot`} />

        <h4 className={styles.date}>{project.date}</h4>
        <h3>
          {project.projectUrl ? (
            <a
              className={styles.link}
              href={project.projectUrl}
              target="_blank"
              rel="noreferrer"
            >
              {project.title}
            </a>
          ) : (
            <span className={styles.title}>{project.title}</span>
          )}
        </h3>

        <p>{project.writeup}</p>
        <Icons icons={project.logos} />

        <div className={styles.links}>
          {project.urls.map(({ url, description }, index) => (
            <div>
              <a
                className={styles.link}
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
  );
};

export default Project;
