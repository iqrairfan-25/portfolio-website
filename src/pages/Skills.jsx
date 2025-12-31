import React, { useEffect, useState } from "react";
import skillsData from "../data/skills";

const Skills = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("skills");
      if (section) {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="mb-4 text-center" style={{ color: "#d84a83" }}>Skills</h2>
        {skillsData.map(skill => (
          <div key={skill.id} className="mb-3">
            <h5 style={{ color: "black" }}>{skill.name}</h5>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: visible ? `${skill.level}%` : "0%", backgroundColor: "#d84a83" }}
                aria-valuenow={skill.level}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {skill.level}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
