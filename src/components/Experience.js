import React from "react";

const Experience = React.forwardRef(({ exp, animate }, ref) => {
  return (
    <div className={"exp slide-container"} ref={ref}>
      <div class={animate ? "slide-right" : "slide-left"}>
        <h3>{exp.title}</h3>
        <h4>{exp.company}</h4>
        <h5>{exp.date}</h5>
        <ul>
          {exp.pointers.map((pointer) => (
            <li key={pointer.slice(0, 3)}>{pointer}</li>
          ))}
        </ul>
        <div className="logos">
          {exp.logos.map((logo) => {
            let logoName = logo.split(".")[0].split("/")[3];
            logoName = logoName.charAt(0).toUpperCase() + logoName.slice(1);
            return (
              <div key={logoName.slice(3)} className="logo">
                <span data-title={logoName}>
                  <img src={logo} alt={logoName} aria-label={logoName} />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

export default Experience;
