import React from "react";
import { skillsData } from "../skillsData";

const Skills = () => {
  return (
    <>
      <h1 className="heading-section py-10">SKILLS</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {skillsData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-6 border py-8 px-4 border-primaryText/20 dark:border-darkText/20 hover:shadow-xl dark:hover:shadow-[#21212187] transition-all duration-300"
          >
            <h2 className="uppercase text-center text-lg font-light tracking-[0.25em]">
              {item.section}
            </h2>

            <div className="grid grid-cols-3 gap-6 mt-4">
              {item.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className=" flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-200"
                  >
                    <Icon className={`text-3xl ${skill.hoverColor}`} />

                    <span className="text-sm  uppercase tracking-widest opacity-80">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
