import { Link } from "react-router-dom";

import { projects } from "../data/projects";
import ProjectCard from "../components/projectCard";

import "./featured-projects.css";

const FeaturedProjects = () => {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section
      className="featured-projects"
      id="projects"
    >
      <div className="featured-projects-container">

        {/* HEADER */}
        <div className="featured-header">

          <div>
            <span className="section-tag">
              {"{ featured_projects }"}
            </span>

            <h2>
              Selected projects
            </h2>
          </div>

          <Link
            to="/projects"
            className="view-projects-button"
          >
            View all projects →
          </Link>

        </div>

        {/* PROJECTS */}
        <div className="featured-grid">
          {featuredProjects.slice(0, 3).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;