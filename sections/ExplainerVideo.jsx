import { useRef } from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { TitleText, TitleTextTyping } from "@/components/CustomTexts";
import { projectVideos } from "@/constants";

const ExplainerVideo = () => {
  const playerRef = useRef(null);
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col rounded gap-5`}
      >
        <TitleText title="Rexx Explainer Video" textStyle="text-center" />
        <div className="items-center justify-center shadow-[#9548ee] ">
          {/* <ReactPlayer
            height={350}
            width={500}
            ref={playerRef}
            url={projectVideos.rexxExplainerVideo}
            controls={true}
            className="max-h-[70%] shrink-0 m-5 rounded"
          /> */}
          <video className="h-[350px] w-full rounded-lg" ref={playerRef} src={projectVideos.rexxExplainerVideo} controls />
        </div>
      </motion.div>
    </section>
  );
};

export default ExplainerVideo;
