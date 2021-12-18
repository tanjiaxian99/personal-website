import React from "react";
import { basicInfo, intro } from "../data/data.js";
import { InView } from "react-intersection-observer";

const Intro = () => {
  return (
    <div className="viewport-fit flex-center flex-column">
      <InView threshold={1}>
        {({ inView, ref }) => (
          <div className="slide-vert-container" ref={ref}>
            <img
              src={intro.profilePic}
              alt={basicInfo.name}
              className={`rounded-img slide ${
                inView ? "slide-up" : "slide-down"
              }`}
            />
          </div>
        )}
      </InView>

      <InView threshold={1}>
        {({ inView, ref }) => (
          <div className="slide-vert-container" ref={ref}>
            <p
              className={`slide justify-text font-medium ${
                inView ? "slide-up" : "slide-down"
              }`}
            >
              {intro.writeUpOne}
            </p>
          </div>
        )}
      </InView>

      <InView threshold={1}>
        {({ inView, ref }) => (
          <div className="slide-vert-container" ref={ref}>
            <p
              className={`slide justify-text font-medium ${
                inView ? "slide-up" : "slide-down"
              }`}
            >
              {intro.writeUpTwo}
            </p>
          </div>
        )}
      </InView>
    </div>
  );
};

export default Intro;
