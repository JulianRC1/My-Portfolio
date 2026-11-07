import React, { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        setMenuOpen(false);
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

                {/* Desktop nav */}
                <nav className="nav">
                    <a href="#about" onClick={(e) => handleNavClick(e, "about")}>About</a>
                    <a href="#skills" onClick={(e) => handleNavClick(e, "skills")}>Skills</a>
                    <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>Projects</a>
                    <a href="#timeline" onClick={(e) => handleNavClick(e, "timeline")}>Timeline</a>
                    <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>Contact</a>
                    <a href="Julian_Rendon_CV.pdf" className="resume-button" download> Resume <Download size={14} /></a>
                </nav>

                {/* Hamburger button (mobile only) */}
                <button
                    className="hamburger"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile drawer */}
            {menuOpen && (
                <nav className="mobile-nav">
                    <a href="#about" onClick={(e) => handleNavClick(e, "about")}>About</a>
                    <a href="#skills" onClick={(e) => handleNavClick(e, "skills")}>Skills</a>
                    <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>Projects</a>
                    <a href="#timeline" onClick={(e) => handleNavClick(e, "timeline")}>Timeline</a>
                    <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>Contact</a>
                    <a href="Julian_Rendon_CV.pdf" className="resume-button mobile-resume" download>
                        Resume <Download size={14} />
                    </a>
                </nav>
            )}
        </header>
        </>
    )
}

export default Header;