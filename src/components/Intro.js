import React from "react";
import { InView } from "react-intersection-observer";
import IntroWriteup from "./IntroWriteup.js";
import Skills from "./Skills.js";

const Intro = () => {
  return (
    <InView>
      {({ inView, ref }) => (
        <section className="intro" ref={ref}>
          <IntroWriteup inView={inView} />
          <Skills />
        </section>
      )}
    </InView>
  );
};

export default Intro;
