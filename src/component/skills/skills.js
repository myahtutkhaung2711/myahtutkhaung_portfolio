import React from "react";
import "./skills.css";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 70 },
      { name: "JavaScript", level: 75 },
      { name: "Tailwind CSS", level: 75 }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Laravel", level: 90 },
      { name: "PHP", level: 85 },
      { name: "MySQL", level: 80 }
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 85 }
    ]
  }
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      {skills.map((group, index) => (
        <div key={index} className="category-section">
          <h3 className="category-title">{group.category}</h3>
          {group.items.map((skill, i) => (
            <div key={i} className="skill">
              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Skills;
