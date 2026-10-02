import "./about.css";

const About = () => {
  return (
    <section className="about">
    <div className="about-container">

        <div className="about-image">
            <img src= "./public/about-julian.png"/>
        </div>

        <div className="about-content">
        <span className="section-tag">
            {"{ about_me }"}
        </span>

        <h2>My journey into software development</h2>

        <p>
            I've always been interested in understanding how technology works
            and turning ideas into useful software. After completing my
            Computer Science degree, I've focused on building a strong
            foundation in software development while exploring artificial
            intelligence, language models, and natural language processing.
        </p>

        <p>
            Throughout my studies, I've worked on projects ranging from web
            and mobile applications to machine learning and NLP systems. I
            enjoy learning by building, experimenting with new technologies,
            and turning complex problems into practical solutions with clean
            and maintainable code.
        </p>

        <p className="about-highlight">
            &gt; Always curious, always learning, always building.
        </p>
        </div>

    </div>
    </section>
    );
};

export default About;