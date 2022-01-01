import React from "react";
import { InView } from "react-intersection-observer";
import AboutWriteup from "./AboutWriteup.js";
import Skills from "./Skills.js";
import { Element } from "react-scroll";

const About = () => {
  return (
    <>
      <div className="section-anchor" id="about"></div>
      <InView>
        {({ inView, ref }) => (
          <section className="about" ref={ref}>
            <AboutWriteup inView={inView} />
            <Skills inView={inView} />
          </section>
        )}
      </InView>
    </>
  );
};

export default About;
