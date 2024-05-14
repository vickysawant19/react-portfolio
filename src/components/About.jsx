import React from "react";
import aboutImg from "../assets/vitthal2.jpg";
import { ABOUT } from "../constants";
import { motion } from "framer-motion";

motion;
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        About <span className="text-neutral-500">me</span>
      </motion.h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center p-8">
            <img className="rounded-2xl " src={aboutImg} alt="" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 text-center lg:text-start"
        >
          <p className="my-2 max-w-xl py-12 px-10">{ABOUT}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
