import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import projectsData from "./ProjectData";

const Projects = () => {
  const [visibleProjects, setVIsibleProjects] = useState(
    projectsData.slice(0, 4)
  );
  const [showMoreButton, setShowMoreButton] = useState(projectsData.length > 4);

  const handleShowMore = () => {
    const nextStartIndex = visibleProjects.length;
    const nextEndIndex = Math.min(nextStartIndex + 4, projectsData.length);
    setVIsibleProjects([
      ...visibleProjects,
      ...projectsData.slice(nextStartIndex, nextEndIndex),
    ]);
    setShowMoreButton(nextEndIndex < projectsData.length);
  };

  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          PROJECTS
        </p>
        <h2 className="py-4">What I have built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {visibleProjects.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </div>
        {showMoreButton && (
          <button
            onClick={handleShowMore}
            className="bg=[#5651e5] text-white px-4 py-2 rounded mt-8"
          >
            View More
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;
