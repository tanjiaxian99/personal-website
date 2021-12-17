import React from "react";
import { InView } from "react-intersection-observer";

const Hi = () => {
  return (
    <InView threshold={1}>
      {({ inView, ref }) => (
        <div className="sticky-box-container">
          <div
            className={`viewport-fit flex-column flex-center sticky-box fade ${
              inView ? "fade-in" : "fade-out"
            }`}
            ref={ref}
          >
            <h1>Hi</h1>
          </div>
        </div>
      )}
    </InView>
  );
};

export default Hi;
