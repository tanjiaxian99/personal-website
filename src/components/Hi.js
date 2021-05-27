import React from "react";

const Hi = React.forwardRef(({ animate }, ref) => {
  return (
    <div className="sticky-box-container">
      <div
        className={`viewport-fit flex-column flex-center sticky-box fade ${
          animate ? "fade-in" : "fade-out"
        }`}
        ref={ref}
      >
        <h1>Hi</h1>
      </div>
    </div>
  );
});

export default Hi;
