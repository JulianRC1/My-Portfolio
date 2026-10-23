import "./hero.css";
import networkBg from "../assets/network.jpg";

const Hero = () => {
  return (
    <section className="hero-banner">

      <div className="hero-container">

        {/* Left side */}
        <div className="hero-content">

          <p className="hero-comment">
            // Hello, world! My name is
          </p>

          <h1>
            Julián Rendón
          </h1>

          <h2>
            &lt; Junior Systems Engineer /&gt;
          </h2>

          <p className="hero-description">
            Building high-performing, beautifully clean web architectures.
            Self-taught builder and CS honors grader eager to ship production
            code and collaborate on complex systems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              Explore Projects →
            </a>

            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>

        </div>

        {/* Right side */}
        <div className="code-window">

          <div className="window-header">
            <div className="window-buttons">
              <span className="window-button red"></span>
              <span className="window-button yellow"></span>
              <span className="window-button green"></span>
            </div>

            <span className="file-name">
              developer_config.json
            </span>
          </div>

          <div className="code-content">

            <div className="code-line">
              <span className="line-number">1</span>
              <span>{'{'}</span>
            </div>

            <div className="code-line">
              <span className="line-number">2</span>
              <span>
                "name": "Julián Rendón",
              </span>
            </div>

            <div className="code-line">
              <span className="line-number">3</span>
              <span>
                "role": "Software Engineer",
              </span>
            </div>

            <div className="code-line active">
              <span className="line-number">4</span>
              <span>
                "stack": ["React", "JavaScript", "Python"],
              </span>
            </div>

            <div className="code-line">
              <span className="line-number">5</span>
              <span>
                "openToRemote": true,
              </span>
            </div>

            <div className="code-line">
              <span className="line-number">6</span>
              <span>
                "interests": {'{'}
              </span>
            </div>

            <div className="code-line">
              <span className="line-number">7</span>
              <span>
                &nbsp;&nbsp;"AI": "LLMs & NLP",
              </span>
            </div>

            <div className="code-line">
              <span className="line-number">8</span>
              <span>
                &nbsp;&nbsp;"building": "Web applications"
              </span>
            </div>

            <div className="code-line">
              <span className="line-number">9</span>
              <span>
                {'}'}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;