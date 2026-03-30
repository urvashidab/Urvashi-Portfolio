import React from "react";
import { images } from "../skillsData";

const Home = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center grayscale opacity-20"
        style={{
          backgroundImage: `url(${images.urvashi_hero})`,
        }}
      ></div>

      {/* Light overlay (improves readability) */}
      <div className="absolute inset-0 bg-primaryBg/70  dark:bg-darkBg/80"></div>

      {/* Hero content */}
      <div className="relative max-w-2xl text-center">
        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-light tracking-wide">
          Hi, I'm Urvashi
        </h1>

        {/* Role */}
        <h2 className="text-2xl mt-4 text-gray-600 dark:text-gray-300">
          Full-Stack Developer
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg leading-relaxed">
          I build clean, practical web applications that solve real-world
          problems using the MERN stack. I enjoy turning ideas into simple,
          thoughtful digital experiences.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-2 border border-gray-400 dark:border-gray-500 hover:border-primaryText dark:hover:border-[#f1e1b9] transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-2 border border-gray-400 dark:border-gray-500 hover:border-primaryText dark:hover:border-[#f1e1b9] transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
