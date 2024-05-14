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
      <div className="text-white flex items-center justify-center gap-4 text-2xl m-8">
        <FaLinkedin />
        <FaGithub />
        <FaSquareXTwitter />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Nav;
