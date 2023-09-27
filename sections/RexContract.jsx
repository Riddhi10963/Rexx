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
        <TitleTextTyping title="Rexx Tokenomics" textStyle="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className=" w-[95%] lg:w-1/2 mt-20 md:px-10 font-normal border py-4  rounded text-sm sm:text-base text-center  text-white  shadow-gray-200 hover:shadow-purple-400"
        >
          Contract address:{" "}
          <span className="font-semibold hover:underline">
            <a href="https://bscscan.com/token/0x1C07B56d1765D15Aa9d28C5e6cfe2cC2A765b27b">0xfd140b8d01ceaa28defb38b837b79</a>
          </span>
        </motion.p>
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className=" w-[95%] lg:w-1/2 mt-10 md:px-10 font-normal border py-4  rounded text-sm sm:text-base text-center  text-white  shadow-gray-200 hover:shadow-purple-400"
        >
          Token Symbol: <span className="font-semibold">REXX</span>
        </motion.p>
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className=" w-[95%] lg:w-1/2 mt-10 md:px-10 font-normal border py-4  rounded text-sm sm:text-base text-center  text-white  shadow-gray-200 hover:shadow-purple-400"
        >
          Decimal: <span className="font-semibold">18</span>
        </motion.p>
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className=" w-[95%] lg:w-1/2 mt-10 md:px-10 font-normal border py-4  rounded text-sm sm:text-base text-center  text-white  shadow-gray-200 hover:shadow-purple-400"
        >
          Total Suppy: <span className="font-semibold">700 Million</span>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default RexContract;
