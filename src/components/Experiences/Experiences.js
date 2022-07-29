import React from "react";
import { useInView } from "react-intersection-observer";
import useBreakpointValue from "../../hooks/useBreakpointValue";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import StarIcon from "../../assets/logos/star.svg";
import Experience from "./Experience";
import {
  nus,
  java,
  dsta,
  python,
  pandas,
  matplotlib,
  scikitLearn,
  govtech,
  typescript,
  react,
  sass,
  chakraUi,
  dynamoDb,
  jest,
} from "../../assets/logos.js";
import styles from "./Experiences.module.scss";

const experiences = [
  {
    title: "Software Engineer Intern",
    companyLogo: govtech,
    date: "May 2022 - Jul 2022",
    pointers: [
      `Developed a shared database of food charities' supports that reduced food wastage by 30% by using React and 
      DynamoDB to consolidate and display food supports across 100+ food charities.`,
      `Optimised household address access by 5x by applying modelling and indexing techniques to DynamoDB to cache 
      OneMap API results.`,
      `Challenges include working together with 5 other developers on a production codebase, designing NoSQL schemas 
      and evaluating different design paradigms, and communicating and clarifying user requirements with designers and 
      business users.`,
    ],
    logos: [react, typescript, sass, chakraUi, dynamoDb, jest],
  },
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
      `Challenges include writing a Python script that optimally searches for anomalies within hundreds of millions of 
      rows of data, selecting relevant ship engine sensors that correlate with the specified faults, and using 
      Matplotlib to stitch together various time-series graphs.`,
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
              iconStyle={{
                display: "flex",
                background: "rgb(115, 158, 223)",
              }}
              icon={<img src={StarIcon} alt="" className={styles.starIcon} />}
              intersectionObserverProps={{ triggerOnce: false }}
            />
          </VerticalTimeline>
        )}
      </div>
    </section>
  );
};

export default Experiences;
