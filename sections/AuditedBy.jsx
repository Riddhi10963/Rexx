import { TitleText, TitleTextTyping } from "@/components/CustomTexts";
import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";

const AuditedBy = () => {
  return (
    <section className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} ${styles.xPaddings} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TitleText title="Your assets, secured" textStyle="text-center" className="px-5" />

        <motion.div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 py-8" variants={fadeIn("up", "tween", 0.2, 1)}>
          <motion.img
            className="h-[150px] md:h-[250px] w-[250px] md:w-[350px] border-[2px] border-gray-900  p-5 "
            src="/BlockSafu-logo-dark.svg"
            alt="BlockSafu logo dark"
          />
          <motion.p className="text-white md:w-[50%] text-center md:text-left">
            Audited by the world’s leading security firm,{" "}
            <span className="font-bold text-purple-600 hover:underline">
              <a href="https://blocksafu.com/audit/0x1C07B56d1765D15Aa9d28C5e6cfe2cC2A765b27b">BlockSafu</a>
            </span>
            , we're pleased to say that our trust score of <span className="font-bold text-purple-600">100%</span>, makes us one of the safest
            projects coming to the market this year.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AuditedBy;
