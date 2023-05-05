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
  enzyme,
  grab,
  docker,
  golang,
  grpc,
  wireshark,
  gitlab,
} from "../../assets/logos.js";
import styles from "./Experiences.module.scss";

const experiences = [
  {
    title: "Backend Engineer Intern",
    companyLogo: grab,
    date: "May 2022 - Jul 2022",
    pointers: [
      `Streamlined service onboarding process by 4 hours using Golang and Docker to automate and optimise 
      information retrieval from Grab's staging environment, thereby eliminating the human errors that were 
      previously encountered in the manual process.`,
      `Diagnosed and resolved a gRPC client bug that disrupted a tool's functionality in 3 services by using
       Wireshark to intercept gRPC calls to an upstream service and analyse gRPC unary interceptors.`,
      `Increased test coverage by 22.78% using Go 1.20 to set up a testing infrastructure to automatically 
      execute integration tests and calculate code coverage across multiple tools both locally and on CI, 
      ensuring the integrity of the tools and the reliability of the deployments.`,
    ],
    logos: [golang, docker, grpc, wireshark, gitlab],
  },
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
    logos: [react, typescript, sass, chakraUi, dynamoDb, jest, enzyme],
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
