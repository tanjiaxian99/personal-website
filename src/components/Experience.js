import React from "react";
import { InView } from "react-intersection-observer";
import ClickableLogo from "./ClickableLogo";
import Logos from "./Logos";

const Experience = ({ experience }) => {
  const { date, title, companyLogo, pointers, logos } = experience;

  return (
    <InView>
      {({ inView, ref }) => (
        <div className="experience-container" ref={ref}>
          <div className={`slide-left-right ${inView ? "" : "reverse"}`}>
            <p className="date">{date}</p>
            <h3 className="experience-title">
              <span>{title}</span> @
              <ClickableLogo logo={companyLogo} />
            </h3>

            <ul>
              {pointers.map((pointer, index) => (
                <li key={index}>{pointer}</li>
              ))}
            </ul>

            <Logos logos={logos} />
          </div>
        </div>
      )}
    </InView>
  );
};

export default Experience;
