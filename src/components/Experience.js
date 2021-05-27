import React from "react";

const Experience = React.forwardRef(({ exp, animate }, ref) => {
  return (
    <div
      className={"viewport-fit flex-column flex-left slide-container"}
      ref={ref}
    >
      <div className={`slide ${animate ? "slide-right" : "slide-left"}`}>
        <h2>{exp.title}</h2>
        <h3>{exp.company}</h3>
        <h4>{exp.date}</h4>
        <ul className="font-medium">
          {exp.pointers.map((pointer) => (
            <li key={pointer.slice(0, 3)}>{pointer}</li>
          ))}
        </ul>
        <div className="logo-container">
          {exp.logos.map((logo) => {
            let logoName = logo.split(".")[0].split("/")[3];
            logoName = logoName.charAt(0).toUpperCase() + logoName.slice(1);
            return (
              <div key={logoName.slice(3)} className="hover-img-container">
                <span data-hover-title={logoName}>
                  <img
                    src={logo}
                    alt={logoName}
                    aria-label={logoName}
                    className="logo"
                  />
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
