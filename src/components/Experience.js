import React from "react";
import { InView } from "react-intersection-observer";
import ClickableLogo from "./ClickableLogo";
import Logos from "./Logos";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const Experience = ({ experience }) => {
  const { date, title, companyLogo, pointers, logos } = experience;

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element"
      contentArrowStyle={{ borderRight: "7px solid rgb(115, 158, 223)" }}
      iconStyle={{ background: "rgb(115, 158, 223)", color: "#fff" }}
      intersectionObserverProps={{ triggerOnce: false }}
    >
      <h4 className="date">{date}</h4>
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
    </VerticalTimelineElement>
  );
};

export default Experience;
