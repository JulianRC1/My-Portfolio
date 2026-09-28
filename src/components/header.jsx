import React from "react";
import { Download } from "lucide-react";
import "./header.css";

const Header = () => {
    return (
        <>
        <header className="header">
            <div className="header-content">
                <a href="/" className="header-logo">
                    Julian <span></span>
                </a>

                <nav className="nav">
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>

                    <a href="resume.pdf" className="resume-button"> Resume <Download size={16} /></a>
                </nav>
            </div>
        </header>
        </>
    )
}

export default Header;