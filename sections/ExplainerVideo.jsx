import { useRef } from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { TitleTextTyping } from "@/components/CustomTexts";
const VIDEO_PATH = "https://youtu.be/0BIaDVnYp2A";

const ExplainerVideo = () => {
  const playerRef = useRef(null);
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col rounded`}
      >
        <TitleTextTyping title="Demo Video" textStyle="text-center" />
        <div className={`${styles.paddings}items-center justify-center`}>
          <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
        </div>
      </motion.div>
    </section>
  );
};

export default ExplainerVideo;
