import React from "react";
import Experience from "./Experience";
import { experiences } from "../data/data.js";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import StarIcon from "@mui/icons-material/Star";

const Experiences = () => {
  return (
    <>
      <div className="section-anchor" id="experiences"></div>
      <section>
        <h2 className="section-title">experiences.</h2>

        <VerticalTimeline layout="1-column left" lineColor="rgb(200, 200, 200)">
          {experiences.map((experience, index) => (
            <Experience key={index} experience={experience} />
          ))}
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(115, 158, 223)", color: "#fff" }}
            icon={<StarIcon />}
            intersectionObserverProps={{ triggerOnce: false }}
          />
        </VerticalTimeline>
      </section>
    </>
  );
};

export default Experiences;
