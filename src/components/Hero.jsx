import React, { useState } from "react";
import { PROFILE } from "../constants";
import vitthal from "../assets/vitthal.png";
import { motion } from "framer-motion";
import WordsScroll from "./WordsScroll";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const handleResumeDownload = () => {
    // Create a link to the PDF file and trigger download
    const link = document.createElement('a');
    link.href = '/vitthal-sawant-web-developer.pdf'; 
    link.download = 'Vitthal_Sawant_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleHireMe = () => {
    window.location.href = 'tel:+919421265218';
  };

  const handleGetInTouch = () => {
    window.location.href = 'mailto:vitthal.sawant19@gmail.com';
  };

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-32">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start ml-2">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              {PROFILE.name}
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent h-16"
            >
              <WordsScroll words={PROFILE.title} />
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-center lg:text-start"
            >
              {PROFILE.summary}
            </motion.p>
            
            {/* Button Group */}
            <motion.div
              variants={container(1.2)}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto"
            >
              {/* Hire Me Button */}
              <button 
                onClick={handleHireMe}
                className="group relative px-8 py-3 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-neutral-900 font-medium rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Hire Me</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
              
              {/* Get in Touch Button */}
              <button 
                onClick={handleGetInTouch}
                className="group px-8 py-3 bg-transparent text-neutral-300 font-medium rounded-lg border border-neutral-700 hover:border-pink-300 transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </button>
              
              {/* Resume Download Button */}
              <button 
                onClick={handleResumeDownload}
                className="group flex items-center gap-2 px-8 py-3 justify-center bg-neutral-900 text-neutral-300 font-medium rounded-lg border border-neutral-800 hover:border-purple-500 transition-all duration-300 hover:scale-105"
              >
                <span>Download CV</span>
                <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center relative overflow-hidden">
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="w-auto h-auto"
              src={vitthal}
              alt="vitthal sawant"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;