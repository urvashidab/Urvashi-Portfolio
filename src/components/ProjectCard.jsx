import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="group border border-primaryText/20 dark:border-darkText/20 p-6 bg-transparent transition-all duration-300 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] ">
      {/* image */}
      <div className="overflow-hidden mb-6 aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover   group-hover:scale-105 transition-all duration-700 transform"
        />
      </div>

      <h3 className="text-xl uppercase tracking-[0.2em] mb-3 font-medium">
        {project.title}
      </h3>

      <p className="text-sm opacity-80 mb-6 line-clamp-2">
        {project.description}
      </p>

      {/* tech stack used */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.techStack.map((tech, index) => (
          <span
            key={index}
            className="text-[10px] px-2 py-1 border border-primaryText/20 dark:border-darkText/20 uppercase tracking-widest opacity-80"
          >
            {tech}
          </span>
        ))}
      </div>
      {/* live links */}
      <div className="flex gap-4">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noreferrer"
          className="text-sm cursor-pointer border-b"
        >
          Live Demo
        </a>

        <a
          href={project.githubLink}
          target="_blank"
          rel="noreferrer"
          className="text-sm cursor-pointer border-b "
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
