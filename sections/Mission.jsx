import { motion } from "framer-motion";

import { fadeIn, staggerContainer } from "@/utils/motion";
import styles from "@/styles";
import { TypingText } from "@/components";
import { TitleTextTyping } from "@/components/CustomTexts";

const Mission = () => {
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
        <TitleTextTyping title="Mission & Vision" textStyle="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] md:px-10 font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
          Our mission at <span className="font-bold text-[#9548ee]">Rexx</span>{" "}
          is to empower individuals and businesses by providing a comprehensive,
          secure,and user-friendly{" "}
          <span className="font-bold text-[#9548ee]">
            blockchain ecosystem.
          </span>{" "}
          We aim to facilitate the widespread adoption and understanding of
          blockchain technology across various sectors such as{" "}
          <span className="font-bold text-[#9548ee]">
            gaming, finance, news, supply chain, and more.
          </span>{" "}
        </motion.p>
        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
      </motion.div>
    </section>
  );
};

export default Mission;
