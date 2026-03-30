import React, { useContext, useState } from "react";
import { ProjectContext } from "../context/ProjectContext";

import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";

import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { isDark, setIsDark } = useContext(ProjectContext);

  const handleMenu = () => setMenu((prev) => !prev);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <nav className="flex justify-between items-center py-5 font-medium tracking-wide bg-primaryBg dark:bg-darkBg">
      {/* left hand side */}
      <Link to="/">
        <p className="font-bold">URVASHI</p>
      </Link>

      {/* middle part list */}

      <ul className="lg:flex justify-center text-sm  gap-6 hidden  ">
        <NavLink
          to="/about"
          className="flex flex-col items-center gap-1  group"
        >
          <p className="nav-link">ABOUT</p>
          <hr className="link-line" />
        </NavLink>

        <NavLink
          to="/skills"
          className="flex flex-col items-center gap-1 group"
        >
          <p className="nav-link">SKILLS</p>
          <hr className="link-line"></hr>
        </NavLink>

        <NavLink
          to="/experience"
          className="flex flex-col items-center gap-1 group"
        >
          <p className="nav-link">EXPERIENCE</p>
          <hr className="link-line"></hr>
        </NavLink>

        <NavLink
          to="/projects"
          className="flex flex-col items-center gap-1 group"
        >
          <p className="nav-link">PROJECTS</p>
          <hr className="link-line"></hr>
        </NavLink>
        <NavLink
          to="/contact"
          className="flex flex-col items-center gap-1 group"
        >
          <p className="nav-link">LET'S TALK</p>
          <hr className="link-line"></hr>
        </NavLink>
      </ul>

      {/* right hand side */}

      <button
        className="text-xl border p-2 cursor-pointer"
        onClick={toggleTheme}
      >
        {isDark ? <MdOutlineLightMode /> : <MdDarkMode />}
      </button>

      {/* mobile screens */}
      <button onClick={handleMenu} className="lg:hidden">
        {!menu ? (
          <GiHamburgerMenu className="text-2xl md:text-4xl" />
        ) : (
          <MdCancel className="text-2xl md:text-4xl" />
        )}
      </button>

      {menu && (
        <ul className="flex flex-col gap-6 md:gap-12 fixed top-20 right-0  w-1/2  h-screen bg-primaryBg dark:bg-darkBg md:text-2xl shadow-lg p-10 lg:hidden">
          <NavLink to="/about" onClick={handleMenu}>
            ABOUT
          </NavLink>
          <NavLink to="/skills" onClick={handleMenu}>
            SKILLS
          </NavLink>
          <NavLink to="/experience" onClick={handleMenu}>
            EXPERIENCE
          </NavLink>
          <NavLink to="/projects" onClick={handleMenu}>
            PROJECTS
          </NavLink>
          <NavLink to="/contact" onClick={handleMenu}>
            LET'S TALK
          </NavLink>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
