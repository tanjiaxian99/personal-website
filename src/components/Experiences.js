import React from "react";
import Experience from "./Experience";
import { experiences } from "../data/data.js";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experiences = () => {
  return (
    <>
      <div className="section-anchor" id="experiences"></div>
      <section>
        <h2>Experiences</h2>

        <VerticalTimeline layout="1-column left" lineColor="rgb(200, 200, 200)">
          {experiences.map((experience, index) => (
            <Experience key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </section>
    </>
  );
};

export default Experiences;
