// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skill"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
      A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    {/*  */}

    <div className="flex flex-wrap gap-6 py-10 justify-center lg:justify-between">
  {SkillsInfo.map((category) => (
    <div
      key={category.title}
      className="bg-gray-900 backdrop-blur-md px-4 sm:px-6 py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
    >
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-400 mb-4 text-center">
        {category.title}
      </h3>

      <Tilt
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        perspective={1000}
        scale={1.05}
        transitionSpeed={1000}
        gyroscope={true}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-3">
          {category.skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center text-center border border-gray-700 rounded-xl px-3 py-3 bg-gray-800 w-full h-full"
            >
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain mb-2"
              />
              <span className="text-xs sm:text-sm text-gray-300 break-words w-full">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </Tilt>
    </div>
  ))}
</div>

  </section>
);

export default Skills;