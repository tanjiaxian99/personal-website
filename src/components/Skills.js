import { skills } from "../data/data.js";
import Logos from "./Logos.js";

const Skills = ({ inView }) => {
  return (
    <div className={`skills slide-right-left ${inView ? "" : "reverse"}`}>
      <h2>skills.</h2>
      {skills.map((skillType) => (
        <>
          <h4>{skillType.title}</h4>
          <Logos logos={skillType.logos} />
        </>
      ))}
    </div>
  );
};

export default Skills;
