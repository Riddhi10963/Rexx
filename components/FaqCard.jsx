"use client";

import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import React, { useState } from "react";

const FaqCard = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);

  return (
    <motion.div
      variants={fadeIn("up", "tween", 0.5, 1)}
      className="w-full cursor-pointer bg-transparent shadow-sm"
      onClick={toggleExpanded}
    >
      <div className="flex h-16 select-none flex-row items-center justify-between text-left md:h-16">
        <h5 className="flex-1 text-white text-sm font-normal leading-tight sm:text-lg md:text-lg">
          {title}
        </h5>
        <div className="flex h-6 w-6 items-center justify-center rounded-full text-primary-red">
          {expanded ? "-" : "+"}
        </div>
      </div>
      <div
        className={`overflow-hidden pt-0 transition-[max-height] duration-500 ease-in ${
          expanded ? "max-h-40" : "max-h-0"
        }`}
      >
        <p className="pb-4 text-left text-xs font-normal tracking-[0.01em] opacity-60 sm:text-sm leading-[28px]">
          {content}
        </p>
      </div>
    </motion.div>
  );
};

export default FaqCard;
