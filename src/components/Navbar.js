import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import classnames from "classnames";
import { useEffect } from "react";

export default function Navbar() {
  const [showMenu, setMenu] = useState(false);

  const [visible, setVisible] = useState(true);
  
  const [prevScrollpos, setprevScrollpos] = useState(window.pageYOffset);


  const userInfo = useSelector((state) => state.userInfo);
  const educational = useSelector((state) => state.educational);
  const certification = useSelector((state) => state.certification);
  const projects = useSelector((state) => state.projects);
  const skills = useSelector((state) => state.skills);
  const objective = useSelector((state) => state.objective);

  const handleToggle = () => {
    setMenu(!showMenu);
  };


  const handleScroll = () => {
    

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    // this.setState({
    //   prevScrollpos: currentScrollPos,
    //   visible
    // });
 console.log("listening");
    setVisible(visible);
    setprevScrollpos(currentScrollPos);
  };


  // useEffect(() => {
   
  //   window.addEventListener("scroll", handleScroll);
  
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   }
  // }, [prevScrollpos])
  
  return (
    <header className={classnames( {
      "navbar--hidden": !visible
    })}>
      <div id="header__logo">
        <p>Guyz Resume BanaLo</p>
      </div>
      <nav id="header__main" className="desktop" >
        <NavLink to="/">Personal Details </NavLink>
        <img
          style={{ filter: !userInfo.name ? "grayscale(100%)" : "none" }}
          alt="next"
          src="https://img.icons8.com/external-kmg-design-outline-color-kmg-design/20/000000/external-next-arrow-kmg-design-outline-color-kmg-design.png"
        />
        {userInfo.name.length === 0 ? (
          <a className="disabled">Objective </a>
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
          <a className="disabled">Education </a>
        ) : (
          <NavLink to="/education">Education </NavLink>
        )}
        <img
          style={{
            filter: educational.length == 0 ? "grayscale(100%)" : "none",
          }}
          alt="next"
          src="https://img.icons8.com/external-kmg-design-outline-color-kmg-design/20/000000/external-next-arrow-kmg-design-outline-color-kmg-design.png"
        />
        {educational.length == 0 ? (
          <a className="disabled">Certifications </a>
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
          <a className="disabled">Projects </a>
        ) : (
          <NavLink to="/projects">Projects </NavLink>
        )}
        <img
          style={{ filter: projects.length === 0 ? "grayscale(100%)" : "none" }}
          alt="next"
          src="https://img.icons8.com/external-kmg-design-outline-color-kmg-design/20/000000/external-next-arrow-kmg-design-outline-color-kmg-design.png"
        />
        {projects.length === 0 ? (
          <a className="disabled">Skills </a>
        ) : (
          <NavLink to="/skills">Skills </NavLink>
        )}
     <img
          style={{ filter: skills.length === 0 ? "grayscale(100%)" : "none" }}
          alt="next"
          src="https://img.icons8.com/external-kmg-design-outline-color-kmg-design/20/000000/external-next-arrow-kmg-design-outline-color-kmg-design.png"
        />
{skills.length !== 0 ? (
          <a className="disabled" >Resume </a>
        ) : (
          <NavLink to="/resume" id="resume">Resume</NavLink>
        )}
      </nav>

      <nav className="mobile">
        <div onClick={handleToggle}><img src="https://img.icons8.com/fluency/30/000000/menu-rounded.png"/></div>
        <div className={showMenu ? "hamburger-list show" : "hamburger-list"}>
          
            <NavLink to="/">1. Personal Details </NavLink>
          
          {userInfo.name.length === 0 ? (
            <a className="disabled">2. Objective </a>
          ) : (
            <NavLink to="/objective">1. Objective </NavLink>
          )}
          {objective.length === 0 ? (
            <a className="disabled">3. Education </a>
          ) : (
            <NavLink to="/education">3. Education </NavLink>
          )}
          {educational.length === 0 ? (
            <a className="disabled">4. Certifications </a>
          ) : (
            <NavLink to="/certifications">4. Certifications </NavLink>
          )}
          {certification.length === 0 ? (
            <a className="disabled">5. Projects </a>
          ) : (
            <NavLink to="/projects">5. Projects </NavLink>
          )}
          {projects.length=== 0 ? (
            <a className="disabled">6. Skills </a>
          ) : (
            <NavLink to="/skills">6. Skills </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}
