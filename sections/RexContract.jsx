import { motion } from "framer-motion";

import { fadeIn, staggerContainer } from "@/utils/motion";
import styles from "@/styles";

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
          className="mt-20 md:px-10 font-normal border p-4  rounded text-sm sm:text-base text-center  text-[#9548ee]  shadow-gray-200 hover:shadow-purple-400"
        >
          0xfd140b8d01ceaa28defb38b837b7928c
        </motion.p>
      </motion.div>
    </section>
  );
};

export default RexContract;
