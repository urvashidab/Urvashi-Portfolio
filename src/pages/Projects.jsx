import React from "react";
import projectData from "../projectData";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <>
      <h1 className="heading-section py-10 uppercase">projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default Projects;
