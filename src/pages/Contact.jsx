import React from "react";

import { FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 py-10">
        {/* left side */}

        <div className="flex flex-col gap-8 ">
          <h2 className="text-2xl tracking-widest font-light mb-2">CONTACT</h2>
          <p>
            Let’s create something meaningful together. I’d love to hear about
            your project, big or small.
          </p>

          <div>
            <h2 className="text-xl tracking-widest font-light mb-3 uppercase">
              email & phone
            </h2>

            <div className="flex items-center gap-2 text-gray-700">
              <FaPhoneAlt className="text-sm" />
              <span>(647) 965-0612</span>
            </div>

            <div className="flex items-center gap-2 text-gray-700 mt-4">
              <MdEmail className="text-base" />
              <a
                href="mailto:urvashi.ucoe@gmail.com"
                className="underline hover:text-gray-500 transition"
              >
                urvashi.ucoe@gmail.com
              </a>
            </div>

            {/* <p className=" text-sm mt-1">I usually respond within 24 hours</p> */}
          </div>

          {/* social */}
          <div className="flex gap-4  mt-4">
            <FaGithub />
            <FaInstagram />
            <FaXTwitter />
          </div>
        </div>

        {/* right side */}

        <form className="flex flex-col gap-4 ">
          {/* name */}
          <input
            type="text"
            required
            placeholder="NAME"
            className="border-b  mb-2 border-gray-400  py-2 px-2 outline-none placeholder:text-gray-300"
          ></input>

          {/* email */}
          <input
            type="email"
            required
            placeholder="E-MAIL"
            className="border-b  mb-2 border-gray-400  py-2 px-2 outline-none placeholder:text-gray-300 "
          ></input>

          {/* message */}
          <textarea
            required
            rows="5"
            placeholder="YOUR MESSAGE"
            className="border-b  mb-2 border-gray-400  py-2 px-2 outline-none placeholder:text-gray-300 "
          ></textarea>

          {/* button */}
          <button
            type="submit"
            className="w-fit self-start border py-2.5 px-10 cursor-pointer hover:bg-black hover:text-white  mt-6 "
          >
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
