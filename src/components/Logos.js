import React from "react";

const Logos = ({ logos }) => {
  console.log(logos);
  return (
    <div className="logos-container">
      {logos.map(({ name, logo }, index) => (
        <div className="logo-container" key={index}>
          <img className="logo" src={logo} alt={name} aria-label={name} />
          <span className="logo-name">{name}</span>
        </div>
      ))}
    </div>
  );
};

export default Logos;
