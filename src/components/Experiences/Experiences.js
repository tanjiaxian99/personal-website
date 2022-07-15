import React from "react";
import ClickableIcon from "../ClickableIcon/ClickableIcon";
import Icons from "../Icons/Icons";
import { experiences } from "../../data/data.js";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import styles from "./Experiences.module.scss";

const Experiences = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
  });

  return (
    <section id="experiences" ref={ref}>
      <div className={`${styles.container}`}>
        <h2>experiences.</h2>

        <div
          className={`${styles.experiences} ${styles.slide} ${
            !inView && styles.slideRightHidden
          } `}
        >
          {experiences.map((experience, i) => {
            const { date, title, companyLogo, pointers, logos } = experience;
            return (
              <div key={i}>
                <h4 className={styles.date}>{date}</h4>
                <div>
                  <h3>{title}</h3>
                  <h3 className={styles.company}>
                    <ClickableIcon icon={companyLogo} />
                  </h3>
                </div>

                <ul className={styles.list}>
                  {pointers.map((pointer, index) => (
                    <li key={index}>{pointer}</li>
                  ))}
                </ul>

                <Icons icons={logos} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
