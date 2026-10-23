import { useRef, useState } from "react";

import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiExpo,
  SiPython,
  SiDjango,
  SiNodedotjs,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiDocker,
  SiLangchain,
  SiHuggingface,
  SiGooglecolab,
  SiFigma,
  SiBlender,
  SiOpenrouter,
  SiAndroidstudio,
  SiPostman,
} from "react-icons/si";

import "./skills.css";

const technologies = [
  // =========================
  // FRONTEND
  // =========================
  {
    name: "React",
    category: "frontend",
    icon: SiReact,
  },
  {
    name: "Next.js",
    category: "frontend",
    icon: SiNextdotjs,
  },
  {
    name: "JavaScript",
    category: "frontend",
    icon: SiJavascript,
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: SiTypescript,
  },
  {
    name: "HTML5",
    category: "frontend",
    icon: SiHtml5,
  },
  {
    name: "CSS",
    category: "frontend",
    icon: SiCss,
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: SiTailwindcss,
  },
  {
    name: "Expo",
    category: "frontend",
    icon: SiExpo,
  },

  // =========================
  // BACKEND
  // =========================
  {
    name: "Python",
    category: "backend",
    icon: SiPython,
  },
  {
    name: "Django",
    category: "backend",
    icon: SiDjango,
  },
  {
    name: "Node.js",
    category: "backend",
    icon: SiNodedotjs,
  },
  {
    name: "PostgreSQL",
    category: "backend",
    icon: SiPostgresql,
  },
  {
    name: "Android Studio",
    category: "backend",
    icon: SiAndroidstudio,
  },

  // =========================
  // GENERAL / AI
  // =========================
  {
    name: "Git",
    category: "general",
    icon: SiGit,
  },
  {
    name: "GitHub",
    category: "general",
    icon: SiGithub,
  },
  {
    name: "Docker",
    category: "general",
    icon: SiDocker,
  },
  {
    name: "LangChain",
    category: "general",
    icon: SiLangchain,
  },
  {
    name: "Hugging Face",
    category: "general",
    icon: SiHuggingface,
  },
  {
    name: "Google Colab",
    category: "general",
    icon: SiGooglecolab,
  },
  {
    name: "Figma",
    category: "general",
    icon: SiFigma,
  },
  {
    name: "Blender",
    category: "general",
    icon: SiBlender,
  },
  {
    name: "OpenRouter",
    category: "general",
    icon: SiOpenrouter,
  },
  {
    name: "Postman",
    category: "general",
    icon: SiPostman,
  },
];

const filters = [
  {
    id: "frontend",
    label: "Frontend",
  },
  {
    id: "backend",
    label: "Backend",
  },
  {
    id: "general",
    label: "General",
  },
];

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState("frontend");

  const sliderRef = useRef(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  const filteredTechnologies = technologies.filter(
    (technology) => technology.category === activeFilter
  );

  // =========================
  // DRAG
  // =========================

  const handlePointerDown = (event) => {
    const slider = sliderRef.current;

    if (!slider) return;

    isDragging.current = true;
    startX.current = event.clientX;
    startScrollLeft.current = slider.scrollLeft;

    slider.setPointerCapture(event.pointerId);
    slider.classList.add("is-dragging");
  };

  const handlePointerMove = (event) => {
    if (!isDragging.current) return;

    const slider = sliderRef.current;

    if (!slider) return;

    const distance = event.clientX - startX.current;

    slider.scrollLeft = startScrollLeft.current - distance;
  };

  const handlePointerUp = (event) => {
    const slider = sliderRef.current;

    if (!slider) return;

    isDragging.current = false;

    if (slider.hasPointerCapture(event.pointerId)) {
      slider.releasePointerCapture(event.pointerId);
    }

    slider.classList.remove("is-dragging");
  };

  // =========================
  // FILTER
  // =========================

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);

    requestAnimationFrame(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft = 0;
      }
    });
  };

  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        {/* HEADER */}
        <div className="skills-header">
          <span className="section-tag">
            {"{ technical_skills }"}
          </span>

          <h2>
            Technologies & concepts I work with
          </h2>
        </div>

        {/* FILTERS */}
        <div className="skills-filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-button ${
                activeFilter === filter.id ? "active" : ""
              }`}
              onClick={() => handleFilterChange(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* TECHNOLOGIES */}
        <div
          ref={sliderRef}
          className="technologies-slider"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <div className="technologies-track">
            {filteredTechnologies.map((technology, index) => {
              const Icon = technology.icon;

              return (
                <div
                  className="technology"
                  key={technology.name}
                  style={{
                    "--delay": `${index * 0.15}s`,
                  }}
                >
                  <div className="technology-icon-wrapper">
                    <Icon className="technology-icon" />
                  </div>

                  <span className="technology-name">
                    {technology.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* DRAG HINT */}
        <div className="drag-hint">
          ← drag to explore →
        </div>

      </div>
    </section>
  );
};

export default Skills;