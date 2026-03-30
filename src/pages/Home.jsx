import React from "react";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className=" flex items-center justify-center min-h-[65vh]">
      <div className=" max-w-2xl text-center ">
        {/* name */}
        <h1 className="text-5xl md:text-6xl font-light tracking-wide">
          Hi, I'm Urvashi
        </h1>

        {/* role */}
        <h2 className="text-2xl mt-4 text-gray-600 dark:text-gray-300">
          Full-Stack Developer
        </h2>
        <hr className="w-12 mx-auto mt-6 border-gray-400 dark:border-gray-600" />

        {/* some description */}
        <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          I build clean, practical web applications that solve real-world
          problems using the MERN stack. I enjoy turning ideas into simple,
          thoughtful digital experiences.
        </p>

        {/* links */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Link to="/projects">
            <button className="btn uppercase">View Projects</button>
          </Link>

          <Link to="/contact">
            <button className="btn uppercase">Contact me</button>
          </Link>
          <a
            href="/resume.pdf"
            download="Urvashi_Resume.pdf"
            className="btn uppercase bg-primaryText text-primaryBg dark:bg-darkText dark:text-darkBg hover:opacity-70"
          >
            resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
