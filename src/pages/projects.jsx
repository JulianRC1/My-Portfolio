import { useState } from "react";

import { projects } from "../data/projects";
import ProjectCard from "../components/projectCard";

import "./projects.css";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const tags = [
    "All",
    ...new Set(
      projects.flatMap((project) => project.tags)
    ),
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.tags.includes(activeFilter)
        );

  return (
    <main className="projects-page">

      <div className="projects-container">

        <span className="section-tag">
          {"{ all_projects }"}
        </span>

        <div className="projects-heading">
          <div>
            <h1>
              Projects
            </h1>

            <p>
              A collection of applications, experiments
              and systems I've built.
            </p>
          </div>

          {/* FILTER */}
          <div className="project-filter">

            <label htmlFor="tag-filter">
              Filter by
            </label>

            <select
              id="tag-filter"
              value={activeFilter}
              onChange={(event) =>
                setActiveFilter(event.target.value)
              }
            >
              {tags.map((tag) => (
                <option
                  key={tag}
                  value={tag}
                >
                  {tag}
                </option>
              ))}
            </select>

          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>

    </main>
  );
};

export default Projects;