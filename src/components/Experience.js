import React from "react";

const Experience = React.forwardRef(({ exp, animate }, ref) => {
  return (
    <div
      className={"flex-column flex-left slide-horiz-container"}
      ref={ref}
    >
      <div className={`slide ${animate ? "slide-right" : "slide-left"}`}>
        <h2>{exp.title}</h2>
        <h3>{exp.company}</h3>
        <h4>{exp.date}</h4>
        <ul className="font-medium">
          {exp.bullets.map((bullet) => (
            <li key={bullet.slice(0, 3)}>{bullet}</li>
          ))}
        </ul>
        <div className="logo-container">
          {exp.logos.map(({ name, logo }) => {
            return (
              <div key={name.slice(3)} className="hover-img-container">
                <span data-hover-title={name}>
                  <img
                    src={logo}
                    alt={name}
                    aria-label={name}
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
