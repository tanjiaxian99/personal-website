import React from "react";
import { basicInfo, intro } from "../data/data.js";
import { InView } from "react-intersection-observer";

const Intro = () => {
  return (
    <div className="intro-container flex-center">
      <InView>
        {({ inView, ref }) => (
          <div className="slide-vert-container" ref={ref}>
            <img
              src={intro.profilePic}
              alt={basicInfo.name}
              className={`rounded-img ${inView ? "slide-up" : "slide-down"}`}
            />
          </div>
        )}
      </InView>

      {intro.writeup.map((writeup, index) => (
        <InView threshold={1} key={index}>
          {({ inView, ref }) => (
            <div className="slide-vert-container" ref={ref}>
              <p
                className={`justify-text ${inView ? "slide-up" : "slide-down"}`}
              >
                {writeup}
              </p>
            </div>
          )}
        </InView>
      ))}
    </div>
  );
};

export default Intro;
