import React from "react";

import { FaPhoneAlt, FaInstagram, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-12">
      {/* left side */}

      <div className="flex flex-col gap-8">
        <h2 className="text-3xl tracking-[0.25em] font-light">CONTACT</h2>

        <p className=" max-w-md text-gray-600 dark:text-gray-400">
          Let’s create something meaningful together. I’d love to hear about
          your project, big or small.
        </p>

        {/* contact info */}

        <div>
          <h3 className="text-md tracking-[0.2em] uppercase  mb-4">
            EMAIL & PHONE
          </h3>

          <div className="flex items-center gap-3 ">
            <FaPhoneAlt className="text-sm" />
            <span>(647) 965-0612</span>
          </div>

          <div className="flex items-center gap-3  mt-4">
            <MdEmail />
            <a
              href="mailto:urvashi.ucoe@gmail.com"
              className="underline hover:text-gray-500 dark:hover:text-[#f1e1b9] transition"
            >
              urvashi.ucoe@gmail.com
            </a>
          </div>
        </div>

        {/* social icons */}

        <div className=" flex gap-8 mt-6 text-xl ">
          {/* github */}
          <a
            href="https://github.com/urvashidab"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="social-btns" />
          </a>
          {/* insta */}
          <a
            href="https://github.com/urvashidab"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="social-btns" />
          </a>
          {/* twitter */}
          <a
            href="https://github.com/urvashidab"
            target="_blank"
            rel="noreferrer"
          >
            <FaXTwitter className="social-btns" />
          </a>

          {/* facebook */}
          <a
            href="https://github.com/urvashidab"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF className="social-btns" />
          </a>
        </div>

        <p className="uppercase tracking-[0.2em] text-gray-500">
          I’m currently accepting projects. Also, compliments.
        </p>
      </div>

      {/* right side */}

      <form className="flex flex-col gap-6">
        {/* name */}
        <input
          type="text"
          required
          placeholder="NAME"
          className="input-form "
        />

        {/* email */}

        <input
          type="email"
          required
          placeholder="E-MAIL"
          className="input-form "
        />

        {/* message */}

        <textarea
          required
          rows="4"
          placeholder="YOUR MESSAGE"
          className="input-form resize-none"
        ></textarea>

        {/* submit button */}

        <button
          type="submit"
          className="w-fit border px-10 py-3 mt-4 tracking-widest text-sm cursor-pointer hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-200"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Contact;
