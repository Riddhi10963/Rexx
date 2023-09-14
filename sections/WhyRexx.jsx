import { motion } from "framer-motion";

import { fadeIn, staggerContainer } from "@/utils/motion";
import styles from "@/styles";
import { TypingText } from "@/components";
import { TitleTextTyping } from "@/components/CustomTexts";

const WhyRex = () => {
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
        <TitleTextTyping title="WhyRexx" textStyle="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] md:px-10 font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
          Rexx stands out from the{" "}
          <span className="font-bold text-[#9548ee]">crowd</span> because of our
          broad and inclusive ecosystem. We do not just target one niche;
          instead, we provide solutions for a variety of sectors all under one
          roof.Our ecosystem incorporates everything from gaming, trading, news,
          exploration, payments to supply chain management, offering diverse use
          cases and utility. By using
          <span className="font-bold text-[#9548ee]">
            {" "}
            the Binance Smart Chain, we provide fast, secure, and cost-effective
            transactions across all platforms.
          </span>{" "}
          <span className="font-bold text-[#9548ee]"></span>{" "}
          {/* We envision a world where blockchain technology is seamlessly
          integrated into everyday life, fostering{" "}
          <span className="font-bold text-[#9548ee]">
            transparency, efficiency, and trust.{" "}
          </span>
          Through the Rexx Ecosystem, we strive to revolutionize
          traditional industries and drive forward the{" "}
          <span className="font-bold text-[#9548ee]">
            digital economy.
          </span> */}
        </motion.p>
        {/* <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        /> */}
      </motion.div>
    </section>
  );
};

export default WhyRex;
