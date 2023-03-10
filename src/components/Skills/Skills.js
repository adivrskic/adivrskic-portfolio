import React from "react";
import "./skills.scss";
import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      {skills.map((skill) => (
        <div key={skill.id} className="skills__item">
          {skill.icon}

          <h3 className="skills__item-header">{skill.displayText}</h3>
          <p className="skills__item-subheader">{skill.displaySubtext}</p>
        </div>
      ))}
    </section>
  );
};

export default Skills;
