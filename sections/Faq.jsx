"use client";

import { FaqCard } from "@/components";
import { faqsData } from "@/constants";
import styles from "@/styles";
import { fadeIn, staggerContainer, textVariant, zoomIn } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";

const Faq = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-5 px-5 mt-12 lg:px-52 mb-12">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col gap-10`}
      >
        <motion.h1
          variants={textVariant(1.1)}
          className={`${styles.sectionHeadText} text-center`}
          // className="text-[32px] font-semibold leading-[48px]"
        >
          FAQ
          <span className="font-thin md:text-[40px] text-[20px] ">s</span>
        </motion.h1>

        <motion.div
          variants={zoomIn(1.2, 1)}
          className="h-[2px] md:w-1/12 w-[20%]  bg-primary-red mt-[-40px]"
        />

        {/* <div className="text-center font-normal text-lg mb-5">
          We are a huge marketplace dedicated to connecting great artists
          of all NFT with their fans and unique token collectors!
        </div> */}
        {/* <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] md:px-10 font-normal sm:text-[20px] text-[14px] text-center text-secondary-white"
        >
          We are a huge marketplace dedicated to connecting great artists
          of all NFT with their fans and unique token collectors!
        </motion.p> */}

        <motion.div
          variants={fadeIn("up", "tween", 0.5, 1)}
          className="mx-auto flex w-full flex-col items-center justify-center"
        >
          <div className="h-[1px] w-full bg-gradient-to-l from-[#1E2230] to-primary-red"></div>

          {faqsData.map((item, index) => {
            return (
              <div className="w-full" key={index}>
                <FaqCard title={item.title} content={item.content} />
                <div className="h-[1px] w-full bg-gradient-to-l from-[#1E2230] to-primary-red"></div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Faq;
