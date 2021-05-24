import React from "react";

const Hi = React.forwardRef(({ animate }, ref) => {
  return (
    <div style={{ height: "1500px" }}>
      <div
        className={`section hi ${animate ? "fade-in" : "fade-out"}`}
        ref={ref}
      >
        <h1>Hi</h1>
      </div>
    </div>
  );
});

export default Hi;
