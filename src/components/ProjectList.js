import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  
  console.log(projects);
  const renderProj = projects.map((proj) => {
    return (
      <div id="project-list" key={proj.id}>
        <ProjectItem id={proj.id} name={proj.name} about={proj.about} technologies={proj.technologies}/>
      </div>
    );
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
        {renderProj}
    </div>
  );
}

export default ProjectList;
