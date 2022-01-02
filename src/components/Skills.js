import { skills } from "../data/data.js";
import Logos from "./Logos.js";

const Skills = ({ inView }) => {
  return (
    <div className={`slide-right-left ${inView ? "" : "reverse"}`}>
      <h2>skills.</h2>
      {skills.map((skillType) => (
        <>
          <h3 className="skill-title">{skillType.title}</h3>
          <Logos logos={skillType.logos} />
        </>
      ))}
    </div>
  );
};

export default Skills;
