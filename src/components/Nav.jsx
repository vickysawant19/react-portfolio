import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Logo from "../assets/logo.svg";

const Nav = () => {
  return (
    <nav className=" mb-20 lg:mb-0 flex items-center justify-between py-6 ">
      <div className="flex flex-shrink-0 text-white font-bold text-2xl m-8  overflow-hidden ">
        <img className="w-16" src={Logo} />
        <div className="">
          <h1>Vitthal</h1>
          <h1>Sawant</h1>
        </div>
      </div>
      <div className="text-white flex items-center justify-center gap-4 text-2xl lg:text-3xl m-8">
        <a
          href="https://www.linkedin.com/in/vitthal-sawant-b6476b194/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/vickysawant19" target="_blank">
          <FaGithub />
        </a>
        <a href="https://twitter.com/vickysawant19" target="_blank">
          <FaSquareXTwitter />
        </a>
        <a href="https://instagram.com/vicky.sawant19" target="_blank">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
