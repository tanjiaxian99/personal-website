import React from "react";
import { InView } from "react-intersection-observer";
import profilePic from "../images/profile-pic.jpg";

const Intro = () => {
  return (
    <div className="viewport-fit flex-center flex-column">
      <InView threshold={1}>
        {({ inView, ref }) => (
          <div className="slide-vert-container" ref={ref}>
            <img
              src={profilePic}
              alt="Tan Jia Xian"
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
              I am a Jia Xian, a Year 2 Computer Science undergraduate at the
              National University of Singapore. Since young, I have always had
              an appetite and aptitude for problem-solving. I find that once I
              am hooked on to a problem, I cannot let it go until it has been
              solved. After picking up my first programming language, I found
              the beauty of programming as a medium to solve problems.
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
              I delved into projects that involved solving problems that were
              near and dear to me. I found myself approaching these problems
              with the same tenacity as I had when I was first solving maths
              problems in primary school. There are still many problems out
              there in the world, and it is my hope that one day, I am
              sufficiently capable to solve one of them.
            </p>
          </div>
        )}
      </InView>
    </div>
  );
};

export default Intro;
