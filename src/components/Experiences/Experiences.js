import React from "react";
import { experiences } from "../../data/data.js";
import { useInView } from "react-intersection-observer";
import useBreakpointValue from "../../hooks/useBreakpointValue";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import StarIcon from "@mui/icons-material/Star";
import Experience from "./Experience";
import styles from "./Experiences.module.scss";

const Experiences = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
  });

  const desktopView = useBreakpointValue({ base: false, desktop: true });

  return (
    <section id="experiences" ref={ref}>
      <div className={`${styles.container}`}>
        <h2>experiences.</h2>

        {!desktopView && (
          <div
            className={`${styles.experiences} ${styles.slide} ${
              !inView && styles.slideRightHidden
            } `}
          >
            {experiences.map((experience, i) => (
              <Experience experience={experience} key={i} />
            ))}
          </div>
        )}

        {desktopView && (
          <VerticalTimeline
            className={styles.verticalTimeline}
            layout="1-column left"
            lineColor="rgb(200, 200, 200)"
          >
            {experiences.map((experience, i) => (
              <VerticalTimelineElement
                contentStyle={{ padding: "12px 18px" }}
                contentArrowStyle={{
                  borderRight: "7px solid rgb(115, 158, 223)",
                }}
                iconStyle={{ background: "rgb(115, 158, 223)", color: "#fff" }}
                intersectionObserverProps={{ triggerOnce: false }}
              >
                <Experience experience={experience} key={i} />
              </VerticalTimelineElement>
            ))}

            <VerticalTimelineElement
              iconStyle={{ background: "rgb(115, 158, 223)", color: "#fff" }}
              icon={<StarIcon />}
              intersectionObserverProps={{ triggerOnce: false }}
            />
          </VerticalTimeline>
        )}
      </div>
    </section>
  );
};

export default Experiences;
