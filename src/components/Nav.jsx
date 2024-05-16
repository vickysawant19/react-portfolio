import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Logo from "../assets/logo.svg";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <nav className=" mb-20 lg:mb-0 flex items-center justify-between py-2 ">
      <div className="flex flex-shrink-0 text-white font-bold text-2xl m-6  overflow-hidden ">
        <img className="w-16" src={Logo} />
        <div className="">
          <h1>Vitthal</h1>
          <h1>Sawant</h1>
        </div>
      </div>
      <div className="text-white flex items-center justify-center gap-6 text-2xl lg:text-3xl m-6">
        <motion.a
          className="hover:scale-110 transition-transform duration-300"
          href="https://www.linkedin.com/in/vitthal-sawant-b6476b194/"
          target="_blank"
        >
          <FaLinkedin />
        </motion.a>
        <a
          className="hover:scale-110 transition-transform duration-300"
          href="https://github.com/vickysawant19"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          className="hover:scale-110 transition-transform duration-300"
          href="https://twitter.com/vickysawant19"
          target="_blank"
        >
          <FaSquareXTwitter />
        </a>
        <a
          className="hover:scale-110 transition-transform duration-300"
          href="https://instagram.com/vicky.sawant19"
          target="_blank"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
