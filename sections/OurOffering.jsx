import { motion } from "framer-motion";
import styles from "@/styles";
import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion";
import { TypingText, CustomButton } from "@/components";
import { projectVideos } from "@/constants";
import { TitleTextTyping } from "@/components/CustomTexts";

const OurOffering = () => {
  return (
    <section
      className={`${styles.paddings} relative z-10  flex flex-col gap-6 justify-center items-center`}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 justify-between items-center`}
      >
        <motion.div
          // variants={fadeIn("up", "tween", 0.5, 1)}
          variants={zoomIn(0.5, 1)}
          className={`${styles.flexCenter} md:w-[50%] w-[90%] h-full`}
        >
          <video
            autoPlay
            loop
            muted
            src={projectVideos.rexxVerse}
            alt="RexxVerse image"
            // className="w-[90%] h-[90%] object-contain border-2 rounded-full border-purple-500 hover:border-white shadow-lg shadow-white hover:shadow-purple-500"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex justify-center flex-col gap-2"
        >
          <TypingText title="| Our Offering" />
          <TitleTextTyping title="RexxVerse" />
          <p className="max-w-[370px] font-normal text-[16px] text-[#B0B0B0] leading-[24px]">
            ReXXverse is a{" "}
            <span className="text-[#9548ee]">
              blockchain powered gaming
            </span>{" "}
            ecosystem that provides an immersive 3D gaming experience.
          </p>
          <CustomButton btnText="COMING SOON" />
        </motion.div>
      </motion.div>
      <div className=" h-[2px] bg-white opacity-10" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 justify-between`}
      >
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex justify-center flex-col gap-2"
        >
          <motion.div
            // variants={fadeIn("up", "tween", 0.5, 1)}
            variants={zoomIn(0.5, 1)}
            className={`${styles.flexCenter} md:hidden block`}
          >
            <video
              autoPlay
              loop
              muted
              src={projectVideos.rexxChange}
              alt="Rexxchange video"
              // className="w-[90%] h-[90%] object-contain"
            />
          </motion.div>
          {/* <TypingText title="| Our Offering" /> */}
          <TitleTextTyping title="ReXXchange" />
          <p className="max-w-[370px] font-normal text-[16px] text-[#B0B0B0] leading-[24px]">
            ReXXchange is a decentralized exchange that uses{" "}
            <span className="text-[#9548ee]">
              Automated Market Making (AMM)
            </span>{" "}
            protocol to enable direct peer-to-peer token swaps.
          </p>
          <CustomButton btnText="COMING SOON" />
        </motion.div>
        <motion.div
          // variants={fadeIn("up", "tween", 0.5, 1)}
          variants={zoomIn(0.5, 1)}
          className={`${styles.flexCenter}  hidden md:flex w-[50%] h-full `}
        >
          <video
            autoPlay
            loop
            muted
            src={projectVideos.rexxChange}
            alt="Rexxchange video"
            // className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
      <div className=" h-[2px] bg-white opacity-10" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 justify-between`}
      >
        <motion.div
          // variants={fadeIn("up", "tween", 0.5, 1)}
          variants={zoomIn(0.5, 1)}
          className={`${styles.flexCenter} md:w-[50%] w-[90%] h-full`}
        >
          <video
            autoPlay
            loop
            muted
            src={projectVideos.rexxConnect}
            alt="RexxConnnect video"
            // className="md:w-[50%] w-[90%] h-[90%] object-contain "
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex justify-center flex-col gap-2"
        >
          {/* <TypingText title="| Our Offering" /> */}
          <TitleTextTyping title="ReXXconnect" />
          <p className="max-w-[370px] font-normal text-[16px] text-[#B0B0B0] leading-[24px]">
            ReXXconnect facilitates the easy conversion between fiat
            currencies and cryptocurrencies, ensuring{" "}
            <span className="text-[#9548ee]">liquidity</span> and{" "}
            <span className="text-[#9548ee]">accessibility</span> for a
            broad range of users.
          </p>
          <CustomButton btnText="COMING SOON" />
        </motion.div>
      </motion.div>
      <div className=" h-[2px] bg-white opacity-10" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 justify-between items-center `}
      >
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex justify-center flex-col gap-2"
        >
          <motion.div
            // variants={fadeIn("up", "tween", 0.5, 1)}
            variants={zoomIn(0.5, 1)}
            className={`${styles.flexCenter} md:hidden block`}
          >
            <video
              autoPlay
              loop
              muted
              src={projectVideos.rexxPress}
              alt="RexxPress image"
              // className="w-[90%] h-[90%] object-contain "
            />
          </motion.div>
          {/* <TypingText title="| Our Offering" /> */}
          <TitleTextTyping title="ReXXpress" />
          <p className="max-w-[370px] font-normal text-[16px] text-[#B0B0B0] leading-[24px] ">
            Our blockchain powered{" "}
            <span className="text-[#9548ee]">decentralized</span> news
            portal focused on providing{" "}
            <span className="text-[#9548ee]">reliable</span>, up-to-date
            information about the ever-evolving crypto industry.
          </p>
          <CustomButton btnText="COMING SOON" />
        </motion.div>
        <motion.div
          // variants={fadeIn("up", "tween", 0.5, 1)}
          variants={zoomIn(0.5, 1)}
          className={`${styles.flexCenter} hidden md:flex w-[50%] h-full`}
        >
          <video
            autoPlay
            loop
            muted
            src={projectVideos.rexxPress}
            alt="RexxPress image"
            // className="w-[50%] h-[50%] object-contain "
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurOffering;
