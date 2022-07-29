import React from "react";
import { useInView } from "react-intersection-observer";
import useBreakpointValue from "../../hooks/useBreakpointValue";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import StarIcon from "@mui/icons-material/Star";
import Experience from "./Experience";
import {
  nus,
  java,
  dsta,
  python,
  pandas,
  matplotlib,
  scikitLearn,
} from "../../assets/logos.js";
import styles from "./Experiences.module.scss";

const experiences = [
  {
    title: "Data Structures and Algorithms Teaching Assistant",
    companyLogo: nus,
    date: "Aug 2021 - Dec 2021",
    pointers: [
      `Teach 23 students with another Teaching Assistant to guide students in their lab assignments, answer questions on
      data structures and algorithms, and give constructive feedback for their work.`,
    ],
    logos: [java],
  },
  {
    title: "Data Analyst Intern",
    companyLogo: dsta,
    date: "Jan 2020 - Mar 2020",
    pointers: [
      `Increased Navy ship engine fault detection rate by 45% through analyzing existing Navy Ship engine data using 
      Pandas and scikit-learn to develop a statistical model that predicts ship engine faults.`,
      `Challenges include working with hundreds of millions of rows of data and filtering the relevant ones, selecting 
      relevant ship engine sensors that correlate with the specified faults, and usingMatplotlib to stitch together 
      various time-series graphs.`,
    ],
    logos: [python, pandas, matplotlib, scikitLearn],
  },
];

const Experiences = () => {
  const desktopView = useBreakpointValue({ base: false, desktop: true });
  const { ref, inView } = useInView({
    threshold: 0.15,
  });

  return (
    <section id="experiences" ref={ref}>
      <div className={`${styles.container}`}>
        <h2>experiences.</h2>

        {!desktopView && (
          <div
            className={`${styles.experiences} ${styles.slide} ${
              !inView && styles.slideRightHidden
            } `}
          >
            {experiences.map((experience, i) => (
              <Experience experience={experience} key={i} />
            ))}
          </div>
        )}

        {desktopView && (
          <VerticalTimeline
            className={styles.verticalTimeline}
            layout="1-column left"
            lineColor="rgb(200, 200, 200)"
          >
            {experiences.map((experience, i) => (
              <VerticalTimelineElement
                contentStyle={{ padding: "12px 18px" }}
                contentArrowStyle={{
                  borderRight: "7px solid rgb(115, 158, 223)",
                }}
                iconStyle={{ background: "rgb(115, 158, 223)", color: "#fff" }}
                intersectionObserverProps={{ triggerOnce: false }}
              >
                <Experience experience={experience} key={i} />
              </VerticalTimelineElement>
            ))}

            <VerticalTimelineElement
              iconStyle={{ background: "rgb(115, 158, 223)", color: "#fff" }}
              icon={<StarIcon />}
              intersectionObserverProps={{ triggerOnce: false }}
            />
          </VerticalTimeline>
        )}
      </div>
    </section>
  );
};

export default Experiences;
