import styles from "@/styles";
import React from "react";
// import HeroBgVideo from "@/public/videos/heroBg.mp4";

const HeroAnimation = () => {
  return (
    <section className={`${styles.yPaddings} relative w-[100vw]`}>
      <div
        className={`${styles.yPaddings} absolute top-0 left-0 h-full w-full bg-black  opacity-[0.25] `}
      />
      <video
        autoPlay
        loop
        muted
        // src={projectVideos.heroBgVideo}
        src="/videos/heroBg.mp4"
        className=" backdrop-filter w-full"
      />
    </section>
  );
};

export default HeroAnimation;
