import React from "react";
import { PROJECTS } from "../constants";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center "
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 max-w-xl"
            >
              <h2 className="font-semibold mb-2 text-xl  ">{project.name}</h2>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-3/4 max-w-xl mb-8"
            >
              <h4 className="mb-4 text-sm text-neutral-400 ">
                {project.details}
              </h4>
         
                <div className="flex flex-wrap items-center mb-3 ">
                  {project.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="mb-2 flex mr-2 rounded text-purple-400 text-sm bg-neutral-800 py-1 px-2"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              
              <div className="flex">
                {project.links &&
                  Object.entries(project.links).map(([key, value]) => (
                    <div
                      key={value.slice(1, 10)}
                      className="bg-neutral-800 py-1 px-2 rounded flex items-center mr-2 "
                    >
                      <a className="text-sm" href={value || ""} target="_blank">
                        {key.slice(0, 1).toUpperCase() + key.slice(1)}
                      </a>
                      <MdOutlineArrowOutward className="ml-2 text-xl text-purple-600" />
                    </div>
                  ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
