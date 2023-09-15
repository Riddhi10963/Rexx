import { motion } from "framer-motion";
// import Image from "next/image";
import { fadeIn, staggerContainer } from "@/utils/motion";
import styles from "@/styles";
import { TypingText } from "@/components";
import { TitleText, TitleTextTyping } from "@/components/CustomTexts";

const Backers = ({}) => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TitleText title="Backers & Partners" textStyle="text-center" className="px-5" />

        <motion.div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8" variants={fadeIn("up", "tween", 0.2, 1)}>
          <motion.img src="/Binance Smart Chain.svg" alt="Binance Smart Chain logo" height={250} width={250} />
          <motion.img src="/BlockSafu-logo-dark.svg" alt="BlockSafu logo dark" height={250} width={250} />
          <motion.img src="/Blockliz Logo by side 2.png" alt="Blockliz Logo" height={250} width={250} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Backers;
