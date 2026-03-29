import React from "react";
import skillsData from "../skillsData";

const Skills = () => {
  return (
    <>
      <h1 className="text-3xl tracking-[0.25em] font-light py-10">SKILLS</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {skillsData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-6 border py-8 px-4 border-gray-300 dark:border-gray-600 hover:shadow-md dark:hover:shadow-gray-800 transition"
          >
            <h2 className="uppercase text-center text-lg font-light tracking-[0.25em]">
              {item.section}
            </h2>

            {/* icons */}
            <div className="grid grid-cols-3 gap-6 mt-4">
              {item.skills.map((skill, i) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={i}
                    className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-200"
                  >
                    <Icon className={`text-4xl ${skill.hoverColor}`} />

                    <span className="font-medium text-sm group-hover:text-gray-500 dark:group-hover:text-[#f1e1b9] transition ">
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
