import { motion } from "framer-motion";

import { fadeIn, staggerContainer } from "@/utils/motion";
import styles from "@/styles";
import { TypingText } from "@/components";
import { TitleTextTyping } from "@/components/CustomTexts";

const BuyRexx = () => {
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
        <TitleTextTyping title="How to Buy Rexx" textStyle="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] md:px-10 font-normal sm:text-xl text-sm text-center text-secondary-white"
        >
          <h2 className="text-[#9548ee] text-left  font-bold py-4">
            {" "}
            Download the Official Trust Wallet App
          </h2>
          <p className="text-left">
            Head over to the app store and download the Trust Wallet app. Which
            is a wallet backed by Binance exchange. It is available on both
            Android and iOS devices.
          </p>
          <h2 className="text-[#9548ee] text-left  font-bold py-4">
            Create Your Wallet
          </h2>
          <p className="text-left">
            Once the app is installed, open it and create your wallet. All you
            need to do is provide a secure password and confirm it. You’ll be
            ready to go in no time.
          </p>
          <h2 className="text-[#9548ee] text-left  font-bold py-4">
            Backup Your Passphrase
          </h2>
          <p className="text-left">
            It is important to back up your 12-word passphrase and store it
            somewhere safe. This is the only way to recover your wallet if you
            ever lose access to it.
          </p>
          {/* Once you open the website, click the “Get Started” button and then
          click “Create a Wallet”.{" "}
          <span className="font-bold text-[#9548ee] text-left text-xl font-bold py-4 py-4">
            At this point, you will be asked to create a wallet by entering a
            password. Make sure that your password is secure and not easy to
            guess.
          </span>{" "}
          Once you’ve entered your password, you will be asked to write down
          your recovery phrase. This is a very important step, as it will be
          used in case you forget your password.
          <span className="font-bold text-[#9548ee] text-left text-xl font-bold py-4">
            blockchain ecosystem.
          </span>{" "}
          We aim to facilitate the widespread adoption and understanding of
          blockchain technology across various sectors such as{" "}
          <span className="font-bold text-[#9548ee] text-left text-xl font-bold py-4">
            gaming, finance, news, supply chain, and more.
          </span>{" "} */}
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

export default BuyRexx;
