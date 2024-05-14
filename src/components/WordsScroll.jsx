import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const WordsScroll = ({ words }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [partialWord, setPartialWord] = useState("");

  useEffect(() => {
    let interval;
    const currentWord = words[currentIndex];
    const wordLength = currentWord.length;

    // Start typing the word
    if (partialWord.length < wordLength) {
      interval = setInterval(() => {
        setPartialWord((prevPartialWord) =>
          currentWord.substring(0, prevPartialWord.length + 1)
        );
      }, 100); // Speed of scrolling
    }

    // Clear interval and update state when word is fully typed
    if (partialWord.length === wordLength) {
      clearInterval(interval);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setPartialWord("");
      }, 2000); // Delay before displaying the next word
    }

    return () => clearInterval(interval);
  }, [currentIndex, partialWord, words]);

  return <div>{partialWord}</div>;
};

export default WordsScroll;
