import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full  mt-10">
      <div className="max-w-4xl mx-auto py-6 px-4 flex flex-col items-center text-center ">
        <h1 className="text-white text-lg font-semibold mb-2 tracking-wider">
         Shubham Nayak
        </h1>

        <div className="flex gap-6 my-2 text-white/60 hover:text-white text-xl transition-all duration-300">
          <a
            href="https://github.com/ShubhamNayak14"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shubhamnayak014/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="text-white/40 text-sm mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
