import React from "react";
import { InView } from "react-intersection-observer";

const Welcome = () => {
  return (
    <InView threshold={1}>
      {({ inView, ref }) => (
        <div className="welcome-container">
          <div
            className={`welcome viewport-fit flex-center ${
              inView ? "fade-in" : "fade-out"
            }`}
            ref={ref}
          >
            <h1>Hi</h1>
            {inView}
          </div>
        </div>
      )}
    </InView>
  );
};

export default Welcome;
