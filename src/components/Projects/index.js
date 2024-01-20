import React from "react";

import { projects } from "../../content";

export default function Projects() {
  return (
    <div className="root">
      <h1 id="Products-and-Products" className="projectsTitle">
        Products and Projects
      </h1>

      <div className="projectsContainer">
        {projects
          .filter((project) => !project.isDisabled)
          .map((project, i) => (
            <div
              key={project.title}
              className={i === 0 ? "firstProject" : "project"}
            >
              <div className="projectContainer">
                <div className="projectContent">
                  <div className="projectTitleContainer">
                    <h2 id={project.id} className="projectTitle">
                      {project.title}
                    </h2>
                    <em>{project.client}</em>
                  </div>
                  <div>
                    {[].concat(project.brief).map((brief) => (
                      <p key={brief} className="projectBrief">
                        {brief}
                      </p>
                    ))}
                    <Bullet bullets={project.bullets} />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

function Bullet({ bullets }) {
  return (
    <ul className="projectBullets">
      {bullets.map((bullet) => (
        <li key={bullet}>{bullet}</li>
      ))}
    </ul>
  );
}
