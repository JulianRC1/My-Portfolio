import React from "react";
import { Download } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        if (location.pathname === "/") {
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate("/");
            setTimeout(() => {
                const el = document.getElementById(sectionId);
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    };

    return (
        <>
        <header className="header">
            <div className="header-content">
                <Link to="/" className="header-logo">
                    Julian <span></span>
                </Link>

                <nav className="nav">
                    <a href="#about" onClick={(e) => handleNavClick(e, "about")}>About</a>
                    <a href="#skills" onClick={(e) => handleNavClick(e, "skills")}>Skills</a>
                    <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>Projects</a>
                    <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>Contact</a>

                    <a href="resume.pdf" className="resume-button"> Resume <Download size={16} /></a>
                </nav>
            </div>
        </header>
        </>
    )
}

export default Header;