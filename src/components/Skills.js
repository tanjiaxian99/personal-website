import Skill from "./Skill.js";

const Skills = () => {
  const coding = [
    { name: "HTML", rating: 5 },
    { name: "CSS", rating: 5 },
    { name: "Javascript", rating: 5 },
    { name: "C#", rating: 5 },
    { name: "Java", rating: 5 },
    { name: "Python", rating: 4 },
    { name: "SQL", rating: 2 },
    { name: "C", rating: 2 },
    { name: "Ruby", rating: 1 },
  ];

  const frameworks = [
    { name: "MongoDB", rating: 5 },
    { name: "Express", rating: 5 },
    { name: "React", rating: 5 },
    { name: "Node.js", rating: 5 },
    { name: "Unity3D", rating: 5 },
    { name: "Photon", rating: 5 },
    { name: "Matplotlib", rating: 4 },
    { name: "pandas", rating: 4 },
    { name: "scikit-learn", rating: 3 },
    { name: "seaborn", rating: 3 },
    { name: "NumPy", rating: 1 },
    { name: "Ruby on Rails", rating: 1 },
  ];
  return (
    <>
      <h2>Skill Name</h2>
      <div className="grid"></div>
      <Skill />
    </>
  );
};

export default Skills;
