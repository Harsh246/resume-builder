import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [showMenu, setMenu] = useState(false);

  const userInfo = useSelector((state) => state.userInfo);
  const educational = useSelector((state) => state.educational);
  const certification = useSelector((state) => state.certification);
  const projects = useSelector((state) => state.projects);
  const skills = useSelector((state) => state.skills);
  const objective = useSelector((state) => state.objective);

  const handleToggle = () => {
    setMenu(!showMenu);
  };

  return (
    <header>
      <div id="header__logo">
        <p>Guyz Resume BanaLo</p>
      </div>
      <nav id="header__main" className="desktop">
        <NavLink to="/">Personal Details </NavLink>
        <img
          style={{ filter: !userInfo.name ? "grayscale(100%)" : "none" }}
          alt="next"
          src="https://img.icons8.com/external-kmg-design-outline-color-kmg-design/20/000000/external-next-arrow-kmg-design-outline-color-kmg-design.png"
        />
        {userInfo.name.length === 0 ? (
          <div className="disabled">Objective </div>
        ) : (
          <NavLink to="/objective"> Objective </NavLink>
        )}
        <img
          style={{
            filter: objective.length === 0 ? "grayscale(100%)" : "none",
          }}
          alt="next"
          src="https://img.icons8.com/external-kmg-design-outline-color-kmg-design/20/000000/external-next-arrow-kmg-design-outline-color-kmg-design.png"
        />
        {objective.length === 0 ? (
          <div className="disabled">Education </div>
        ) : (
          <NavLink to="/education">Education </NavLink>
        )}
        <img
          style={{
            filter: educational.length === 0 ? "grayscale(100%)" : "none",
          }}
          alt="next"
          src="https://img.icons8.com/external-kmg-design-outline-color-kmg-design/20/000000/external-next-arrow-kmg-design-outline-color-kmg-design.png"
        />
        {educational.length === 0 ? (
          <div className="disabled">Certifications </div>
        ) : (
          <NavLink to="/certifications">Certifications </NavLink>
        )}
        <img
          style={{
            filter: certification.length === 0 ? "grayscale(100%)" : "none",
          }}
          alt="next"
          src="https://img.icons8.com/external-kmg-design-outline-color-kmg-design/20/000000/external-next-arrow-kmg-design-outline-color-kmg-design.png"
        />
        {certification.length === 0 ? (
          <div className="disabled">Projects </div>
        ) : (
          <NavLink to="/projects">Projects </NavLink>
        )}
        <img
          style={{ filter: projects.length === 0 ? "grayscale(100%)" : "none" }}
          alt="next"
          src="https://img.icons8.com/external-kmg-design-outline-color-kmg-design/20/000000/external-next-arrow-kmg-design-outline-color-kmg-design.png"
        />
        {projects.length === 0 ? (
          <div className="disabled">Skills </div>
        ) : (
          <NavLink to="/skills">Skills </NavLink>
        )}
        <img
          style={{ filter: skills.length === 0 ? "grayscale(100%)" : "none" }}
          alt="next"
          src="https://img.icons8.com/external-kmg-design-outline-color-kmg-design/20/000000/external-next-arrow-kmg-design-outline-color-kmg-design.png"
        />
        {skills.length === 0 ? (
          <div className="disabled">Resume </div>
        ) : (
          <NavLink to="/resume" id="resume">
            Resume
          </NavLink>
        )}
      </nav>

      <nav className="mobile">
        <div onClick={handleToggle}>
          <img
            alt="menu"
            src="https://img.icons8.com/fluency/30/000000/menu-rounded.png"
          />
        </div>
        <div className={showMenu ? "hamburger-list show" : "hamburger-list"}>
          <NavLink to="/">1. Personal Details </NavLink>

          {userInfo.name.length === 0 ? (
            <div className="disabled">2. Objective </div>
          ) : (
            <NavLink to="/objective">1. Objective </NavLink>
          )}
          {objective.length === 0 ? (
            <div className="disabled">3. Education </div>
          ) : (
            <NavLink to="/education">3. Education </NavLink>
          )}
          {educational.length === 0 ? (
            <div className="disabled">4. Certifications </div>
          ) : (
            <NavLink to="/certifications">4. Certifications </NavLink>
          )}
          {certification.length === 0 ? (
            <div className="disabled">5. Projects </div>
          ) : (
            <NavLink to="/projects">5. Projects </NavLink>
          )}
          {projects.length === 0 ? (
            <div className="disabled">6. Skills </div>
          ) : (
            <NavLink to="/skills">6. Skills </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}
