import React from "react";
import { useInView } from "react-intersection-observer";
import { about, skills } from "../../data/data.js";
import Icons from "../Icons/Icons.js";
import styles from "./About.module.scss";

const About = () => {
  const { logos: icons } = about;
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  return (
    <section id="about" ref={ref}>
      <div
        className={`${styles.container} ${styles.slide} ${
          !inView && styles.slideRightHidden
        }`}
      >
        <h2>about myself.</h2>
        <div>
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
          <Icons icons={icons} />
        </div>
      </div>
      <div
        className={`${styles.container} ${styles.slide} ${
          !inView && styles.slideRightHidden
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
