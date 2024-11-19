import React from "react";
import { EXPERIENCE } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className=" my-10 text-center text-4xl p-8"
      >
        Experience
      </motion.h1>
      <div>
        {EXPERIENCE.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">
                {experience.duration}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} -
                <span className="text-sm text-purple-200">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">
                {experience.responsibilities}
              </p>
              <div className="flex flex-wrap">
                {experience.technology.map((tech, index) => (
                  <div
                    key={index}
                    className="mr-2 mt-3 rounded bg-neutral-800 pr-2 py-1 px-2 text-sm font-medium text-purple-500"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
