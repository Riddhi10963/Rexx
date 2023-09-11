"use client";
import { staggerContainer, textVariant } from "@/utils/motion";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CustomButton } from "@/components";

const GetInTouch = () => (
  <div className="flex flex-col sm:flex-row w-[90%] lg:w-1/2 shadow-lg shadow-[#9548ee]  px-4 py-4 rounded mx-auto md:flex-auto items-center justify-center gap-7">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      //   className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <div className=" flex flex-col items-center justify-center rounded px-4 py-2 gap-4 ">
        <motion.h1
          variants={textVariant(1.1)}
          className="text-3xl text-white font-extrabold "
        >
          Get In Touch
        </motion.h1>
        <motion.form variants={textVariant(1.1)} className="gap-4">
          <label className="text-white">Name</label>
          <input
            name="name"
            type="name"
            placeholder="Enter name"
            className="w-full h-8 my-2 bg-zinc-900 px-2 rounded"
          />
          <label className="text-white">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter email"
            className="w-full h-8 px-2 bg-zinc-900 my-2 rounded"
          />
          <label className="text-white">Message</label>
          <textarea
            name="message"
            placeholder="Enter message"
            className="w-full h-15 my-2 px-2 rounded bg-zinc-900"
          />

          <CustomButton
            // btnType="buyBtn"
            btnText="SEND"
            //   buyLink="https://presale.coinrexx.com"
          />
        </motion.form>
      </div>
      <div className=""></div>
    </motion.div>
  </div>
);
export default GetInTouch;
