import "./timeline.css";

const timelineItems = [
  {
    period: "2021 – 2026",
    title: "Degree in Systems Engineering",
    organization: "Universidad del Valle · Colombia",
    details: [
      "Built a strong foundation in software engineering, data structures, databases, and web development.",
      "Developed web and mobile applications through hands-on academic projects.",
      "Explored machine learning, large language models, and natural language processing.",
    ],
  },
];
const Timeline = () => {
  return (
    <section className="timeline" id="experience">
      <div className="timeline-container">
        <header className="timeline-header">
          <span className="section-tag">
            {"{ history_and_education }"}
          </span>

          <h2>My journey so far</h2>
        </header>

        <div className="timeline-list">
          {timelineItems.map((item) => (
            <article className="timeline-item" key={item.title}>
              <time className="timeline-period">
                {item.period}
              </time>

              <div className="timeline-marker" aria-hidden="true">
                <span />
              </div>

              <div className="timeline-content">
                <h3>{item.title}</h3>

                <p className="timeline-organization">
                  {item.organization}
                </p>

                <ul className="timeline-details">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;