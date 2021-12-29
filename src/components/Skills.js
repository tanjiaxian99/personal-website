import { skills } from "../data/data.js";
import Logos from "./Logos.js";

const Skills = () => {
  return (
    <div className="container">
      <h2>Skills</h2>
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
