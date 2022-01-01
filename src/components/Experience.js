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
      // contentStyle={{ background: "rgb(115, 158, 223)", color: "#fff" }}
      // contentStyle={{ border: "2px solid rgb(115, 158, 223)" }}
      contentArrowStyle={{ borderRight: "7px solid rgb(115, 158, 223)" }}
      iconStyle={{ background: "rgb(115, 158, 223)", color: "#fff" }}
    >
      <div className="vertical-timeline-element-container">
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
      </div>
    </VerticalTimelineElement>
    // <InView>
    //   {({ inView, ref }) => (
    //     <div className="experience-container" ref={ref}>
    //       <div className={`slide-left-right ${inView ? "" : "reverse"}`}>
    //         <p className="date">{date}</p>
    //         <h3 className="experience-title">
    //           <span>{title}</span> @
    //           <ClickableLogo logo={companyLogo} />
    //         </h3>

    //         <ul>
    //           {pointers.map((pointer, index) => (
    //             <li key={index}>{pointer}</li>
    //           ))}
    //         </ul>

    //         <Logos logos={logos} />
    //       </div>
    //     </div>
    //   )}
    // </InView>
  );
};

export default Experience;
