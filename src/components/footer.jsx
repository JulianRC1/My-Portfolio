import { SiGithub } from "react-icons/si";
import { ArrowUpRight } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* TOP ROW */}
        <div className="footer-top">
          <a href="/" className="footer-logo">
            Julian<span className="footer-cursor" />
          </a>

          <nav className="footer-socials" aria-label="Social links">
            <a
              href="https://github.com/JulianRC1"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="footer-link"
            >
              <SiGithub size={14} />
              <span>/github</span>
              <ArrowUpRight size={10} className="footer-external-icon" />
            </a>

            <a
              href="https://www.linkedin.com/in/YOUR_PROFILE/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="footer-link"
            >
              <FaLinkedin size={14} />
              <span>/linkedin</span>
              <ArrowUpRight size={10} className="footer-external-icon" />
            </a>
          </nav>
        </div>

        {/* BOTTOM ROW */}
        <div className="footer-bottom">
          <p>
            © {currentYear} Julián Rendón. All rights reserved.
          </p>

          <p className="footer-credit">
            Designed & built from scratch
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;