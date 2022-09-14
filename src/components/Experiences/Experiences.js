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
      `Consolidated and displayed aggregated food donations from ~100 food benefactors by using React and 
      DynamoDB to build a responsive Frontend view of food beneficiaries that can be sorted and filtered.`,
      `Optimised and scaled access to household data by 5x by applying modelling and indexing techniques to 
      DynamoDB to cache OneMap API results.`,
      `Collaborated with 5 other team members by communicating code logic with other developers and clarifying
       user requirements with designers and business users.`,
    ],
    logos: [react, typescript, sass, chakraUi, dynamoDb, jest],
  },
  {
    title: "Data Structures and Algorithms Teaching Assistant",
    companyLogo: nus,
    date: "Aug 2021 - Dec 2021",
    pointers: [
      `Improved data structures and algorithms proficiency of 23 students by breaking down difficult 
      algorithmic concepts and illustrating the workings of algorithms in a step-by-step process.`,
    ],
    logos: [java],
  },
  {
    title: "Data Analyst Intern",
    companyLogo: dsta,
    date: "Jan 2020 - Mar 2020",
    pointers: [
      `Increased Navy ship engine fault detection rate by 25% through analyzing existing Navy Ship engine data 
      using Pandas and scikit-learn to develop a statistical model that predicts ship engine faults.`,
      `Processed hundreds of millions of rows of data by writing a Python script that optimally searches for 
      anomalous ship sensor data.`,
      `Consulted 4 naval engineers to sieve through ~150 ship engine sensors and select the relevant sensors that
       may correlate with ship engine faults.`,
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
