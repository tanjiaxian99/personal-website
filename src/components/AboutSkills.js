import React from "react";
import { InView } from "react-intersection-observer";
import About from "./About.js";
import Skills from "./Skills.js";

const AboutSkills = () => {
  return (
    <>
      <div className="section-anchor" id="about"></div>
      <InView>
        {({ inView, ref }) => (
          <section className="about-skills" ref={ref}>
            <About inView={inView} />
            <Skills inView={inView} />
          </section>
        )}
      </InView>
    </>
  );
};

export default AboutSkills;
