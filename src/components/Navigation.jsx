"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMyContext } from "./Providers";

const Navigation = () => {
  const [selected, setSelected] = useState("About");

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 5.5, duration: 0.2 }}
      className="px-6 py-4 flex justify-center  items-center text-secondary-300 bg-accent-200"
    >
      <ul className="flex justify-between items-center lg:hover:scale-105 transition space-x-1 md:space-x-2  bg-secondary-400 rounded-full px-4 py-3 text-sm md:text-base">
        <Chip
          text={"About"}
          selected={selected === "About"}
          setSelected={setSelected}
        />
        <Chip
          text={"Skills"}
          selected={selected === "Skills"}
          setSelected={setSelected}
        />
        <Chip
          text={"Projects"}
          selected={selected === "Projects"}
          setSelected={setSelected}
        />
        <Chip
          text={"Contact"}
          selected={selected === "Contact"}
          setSelected={setSelected}
        />
      </ul>
    </motion.div>
  );
};

const Chip = ({ text, selected, setSelected }) => {
  const { setIsAboutFirst, setRobotFirst, setContactFirst } = useMyContext();
  const handleClick = () => {
    setSelected(text);
    if (text === "Skills") {
      setIsAboutFirst(true);
      setRobotFirst(false);
      setContactFirst(false);
    } else if (text === "Projects") {
      setRobotFirst(true);
      setIsAboutFirst(false);
      setContactFirst(false);
    } else if (text === "Contact") {
      setContactFirst(true);
      setRobotFirst(false);
      setIsAboutFirst(false);
    } else {
      setIsAboutFirst(false);
      setRobotFirst(false);
      setContactFirst(false);
    }
  };
  return (
    <button
      onClick={handleClick}
      className={`${
        selected
          ? "text-monirBB1 font-medium"
          : "text-monirWT1 font-medium hover:transition hover:duration-500 hover:bg-monirWT1 hover:text-monirBB1"
      }  transition-colors px-3 py-2 rounded-full relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-monirWT1 rounded-full"
        ></motion.span>
      )}
    </button>
  );
};

export default Navigation;
