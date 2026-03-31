import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[65vh]  flex flex-col items-center justify-center text-center gap-6 bg-primaryBg text-primaryText dark:bg-darkBg dark:text-darkText">
      <h1 className="text-6xl font-light tracking-[0.2em]">404</h1>

      <h2 className="text-xl tracking-widest font-light uppercase">
        This page seems to be lost somewhere
      </h2>

      <p className="text-gray-500 dark:text-gray-400 text-md max-w-md">
        Please return to the main page.
      </p>

      <div className="flex gap-4 mt-4">
        <NavLink
          to="/"
          className="border px-8 py-2.5 tracking-wide hover:tracking-widest transition-all duration-300"
        >
          GO HOME
        </NavLink>

        <NavLink
          to="/contact"
          className="border px-8 py-2.5 tracking-wide hover:tracking-widest transition-all duration-300"
        >
          CONTACT
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
