import React from "react";

const Logos = ({ logos }) => {
  return (
    <div className="logos-container">
      {logos.map(({ name, img }, index) => (
        <div className="logo-container" key={index}>
          <img className="logo" src={img} alt={name} aria-label={name} />
          <span className="logo-name">{name}</span>
        </div>
      ))}
    </div>
  );
};

export default Logos;
