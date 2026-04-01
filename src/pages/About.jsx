import React from "react";
import { images } from "../skillsData";

const About = () => {
  return (
    <>
      <h1 className="heading-section py-10 uppercase">
        A Few Things That Make Me, Me
      </h1>
      <div className="flex flex-col gap-8 ">
        {/* photo section */}
        <div className="flex flex-col sm:flex-row justify-center items-end gap-7 mt-4">
          <img
            src={images.cooking}
            alt="cooking"
            className="w-56 h-72 object-cover grayscale hover:grayscale-0  hover:shadow-lg dark:hover:shadow-[#21212187] hover:-rotate-3 transition-all duration-500 ease-out -rotate-2"
          />
          <img
            src={images.reading}
            alt="reading"
            className="w-56 h-72 object-cover grayscale hover:grayscale-0 hover:shadow-lg dark:hover:shadow-[#21212187]  rotate-1 mb-6 hover:-rotate-2 transition-all duration-500 ease-out"
          />
          <img
            src={images.cycle}
            alt="cycling"
            className="w-56 h-72 object-cover grayscale hover:grayscale-0 hover:shadow-lg dark:hover:shadow-[#21212187]  -rotate-1 hover:rotate-1 transition-all duration-500 ease-out "
          />
        </div>
        {/* -------- */}

        {/* description section */}
        <div className="flex flex-col gap-6 text-lg mt-8">
          <p>
            Cooking is one of the ways I slow down and recharge. I enjoy
            experimenting with flavors and recipes, and there’s something very
            satisfying about creating something meaningful with my own hands.
          </p>

          <p>
            I love reading books that explore deeper ideas about life and human
            nature. Thoughtful writing and philosophy inspire how I see the
            world and often shape the way I approach my work.
          </p>

          <p>
            Cycling helps me reset both mentally and physically. It gives me the
            space to think clearly, stay active, and return to my work with
            fresh energy and focus.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
