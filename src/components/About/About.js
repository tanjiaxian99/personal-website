import React from "react";
import { useInView } from "react-intersection-observer";
import {
  github,
  linkedin,
  email,
  javascript,
  python,
  java,
  mongoDb,
  express,
  react,
  node,
  materialUi,
  git,
} from "../../assets/logos.js";
import useBreakpointValue from "../../hooks/useBreakpointValue";
import Icons from "../Icons/Icons.js";
import styles from "./About.module.scss";

const skills = [
  {
    title: "languages",
    logos: [javascript, python, java],
  },
  {
    title: "frameworks & tools",
    logos: [mongoDb, express, react, node, materialUi, git],
  },
];

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
  });
  const desktopView = useBreakpointValue({ base: false, desktop: true });

  return (
    <section className={styles.container} id="about" ref={ref}>
      <div className={styles.writeup}>
        <h2>about.</h2>
        <div
          className={`${styles.slide} ${!inView && styles.slideRightHidden}`}
        >
          <p>
            I am Jia Xian, a Year 2 Computer Science undergraduate at the
            National University of Singapore (NUS). Since young, I have always
            had an appetite and aptitude for problem-solving. I find that once I
            am hooked on to a problem, I cannot let it go until it has been
            solved. After picking up my first programming language, I found the
            beauty of programming as a medium to solve problems.
          </p>
          <br></br>
          <p>
            I delved into projects that involved solving problems that were near
            and dear to me. I found myself approaching these problems with the
            same tenacity as I had when I was first solving maths problems in
            primary school. There are still many problems out there in the
            world, and it is my hope that one day, I am sufficiently capable to
            solve one of them.
          </p>
          <Icons icons={[github, linkedin, email]} />
        </div>
      </div>
      <div
        className={`${styles.skills} ${styles.slide} ${
          !inView &&
          (desktopView ? styles.slideLeftHidden : styles.slideRightHidden)
        }`}
      >
        <h2>skills.</h2>
        <div>
          {skills.map((skillType) => (
            <>
              <h3>{skillType.title}</h3>
              <Icons icons={skillType.logos} />
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
