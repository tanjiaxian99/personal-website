import { intro } from "../data/data.js";
import { InView } from "react-intersection-observer";
import { forwardRef } from "react";

const IntroWriteup = ({ inView }) => {
  return (
    <div
      className={`intro-writeup slide-left-right ${inView ? "" : "reverse"}`}
    >
      <h2>about myself.</h2>

      {intro.writeup.map((writeup, index) => (
        <p className="justify-text" key={index}>
          {writeup}
        </p>
      ))}
    </div>
  );
};

export default IntroWriteup;
