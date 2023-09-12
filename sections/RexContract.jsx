import { motion } from "framer-motion";

import { fadeIn, staggerContainer } from "@/utils/motion";
import styles from "@/styles";
import { TypingText } from "@/components";
import { TitleTextTyping } from "@/components/CustomTexts";

const RexContract = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      {/* <div className="gradient-02 z-0" /> */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TitleTextTyping title="Rexx Contract" textStyle="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] md:px-10 font-normal sm:text-xl text-sm text-center text-secondary-white"
        >
          <h2 className="text-[#9548ee] border shadow-gray-200 hover:shadow-purple-400 p-4 rounded text-left  font-bold py-4">
            0xfd140b8d01ceaa28defb38b837b7928c7c2f085d58fb149db905ce78a12ab1dc
          </h2>
        </motion.p>
        {/* <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          c        lassName="w-[18px] h-[28px] object-contain mt-[28px]"
        /> */}
      </motion.div>
    </section>
  );
};

export default RexContract;
