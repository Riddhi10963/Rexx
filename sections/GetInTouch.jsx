"use client";
import { staggerContainer, textVariant } from "@/utils/motion";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CustomButton } from "@/components";
import styles from "@/styles";
import { TitleTextTyping } from "@/components/CustomTexts";

const GetInTouch = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col gap-10`}
    >
      <TitleTextTyping title="Contact Us" />
      <motion.form variants={textVariant(1.1)} className="">
        <label className="text-white">Name</label>
        <input name="name" type="name" placeholder="Enter name" className="w-full h-8 my-2 bg-zinc-900 px-2 rounded mb-8" />
        <label className="text-white">Email</label>
        <input name="email" type="email" placeholder="Enter email" className="w-full h-8 px-2 bg-zinc-900 my-2 rounded mb-8" />
        <label className="text-white">Message</label>
        <textarea name="message" placeholder="Enter message" className="w-full h-15 my-2 px-2 rounded bg-zinc-900 mb-8" />

        <CustomButton
          // btnType="buyBtn"
          btnText="SEND"
          //   buyLink="https://presale.coinrexx.com"
        />
      </motion.form>
    </motion.div>
  </section>
);
export default GetInTouch;
