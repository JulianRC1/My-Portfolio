import { useState } from "react";
import { GitMerge, ExternalLink, ChevronDown } from "lucide-react";

import "./project-card.css";

const ProjectCard = ({ project }) => {
  const [githubOpen, setGithubOpen] = useState(false);

  return (
    <article className="project-card">

      {/* IMAGE */}
      <div className="project-image">
        <img
          src={project.image}
          alt={project.title}
        />
      </div>

      {/* CONTENT */}
      <div className="project-content">

        <h3>{project.title}</h3>

        <p>
          {project.description}
        </p>

        {/* TAGS */}
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span
              className="project-tag"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>

      </div>

      {/* ACTIONS */}
      <div className="project-actions">

        {project.github?.length > 0 && (
          <div className="github-dropdown">

            <button
              className="project-action github-button"
              onClick={() => setGithubOpen(!githubOpen)}
            >
              <GitMerge size={13} />
              Code
              <ChevronDown
                size={12}
                className={githubOpen ? "rotate" : ""}
              />
            </button>

            {githubOpen && (
              <div className="github-menu">
                {project.github.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="github-option"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}

          </div>
        )}

        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noreferrer"
            className="project-action"
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
        )}

      </div>

    </article>
  );
};

export default ProjectCard;