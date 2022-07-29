import React from "react";
import Icons from "../Icons/Icons.js";
import { useInView } from "react-intersection-observer";
import useBreakpointValue from "../../hooks/useBreakpointValue";
import styles from "./Project.module.scss";

const Project = ({ project, flipDelay }) => {
  const desktopView = useBreakpointValue({ base: false, desktop: true });
  const { ref, inView } = useInView({
    threshold: desktopView ? 0.4 : 0.15,
  });

  const content = (
    <>
      <img src={project.screenshot} alt={`${project.title} screenshot`} />

      <h4 className={styles.date}>{project.date}</h4>
      <h3 className={styles.title}>
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
          <span>{project.title}</span>
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
    </>
  );

  return desktopView ? (
    <div className={styles.flipCard} ref={ref}>
      <div
        className={`${styles.flipCardInner} ${inView && styles.flip}`}
        style={{ transitionDelay: flipDelay }}
      >
        {<div className={styles.flipCardFront}></div>}

        <div className={`${styles.project} ${styles.flipCardBack}`}>
          {content}
        </div>
      </div>
    </div>
  ) : (
    <div ref={ref}>
      <div
        className={`${styles.project} ${styles.slide} ${
          !inView && styles.slideRightHidden
        }`}
      >
        {content}
      </div>
    </div>
  );
};

export default Project;
