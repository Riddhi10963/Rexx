import { motion } from "framer-motion";

import { navVariants } from "@/utils/motion";
import styles from "@/styles";
import { CustomButton } from ".";

const viewWhitePaper = () => {
  window.open("./pdf/whitepaper.pdf");
};

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    {/* <div className="absolute w-[50%] inset-0 gradient-01" /> */}
    <div className={`${styles.innerWidth} flex justify-between`}>
      <img
        src="/Rexx Logo.png"
        alt="rexxlogo"
        className="w-auto md:h-[28px] h-[30px] object-contain"
      />
      <div className="flex justify-center md:gap-10">
        <CustomButton
          btnBuyText="Buy REXX"
          btnType="buyBtn"
          buyLink="https://presale.coinrexx.com"
        />
        <CustomButton
          handleClick={() => {
            window.open("https://coinrexx.com/Rexx-Whitepaper.pdf");
          }}
          btnText="VIEW WHITEPAPER &rarr;"
        />
      </div>
    </div>
    <div className="w-full mt-6">
      <div className="moving-text  top-[4rem] z-[1] flex items-center gap-2 whitespace-nowrap md:top-[6rem] text-white">
        <p>
          Discover the evolution of gaming with GameFi & the metaverse{" "}
          <span className="text-red-500">Live!</span>
        </p>
        <a href="" target="_blank">
          <button className="rounded-lg border border-white/60 px-1 py-0.5">
            Click Here
          </button>
        </a>
        <p>25 sept 2023</p>
        <p>
          Discover the evolution of gaming with GameFi & the metaverse{" "}
          <span className="text-red-500">Live!</span> Rexx Pre sale page
        </p>
        <a href="" target="_blank">
          <button className="rounded-lg border border-white/60 px-1 py-0.5">
            Click Here
          </button>
        </a>
        <p>25 sept 2023</p>
        <p>
          Discover the evolution of gaming with GameFi & the metaverse{" "}
          <span className="text-red-500">Live!</span> Rexx Pre sale page
        </p>
        <a href="" target="_blank">
          <button className="rounded-lg border border-white/60 px-1 py-0.5">
            Click Here
          </button>
        </a>
        <p>25 sept 2023</p>
        <p>
          Discover the evolution of gaming with GameFi & the metaverse{" "}
          <span className="text-red-500">Live!</span> Rexx Pre sale page
        </p>
        <a href="" target="_blank">
          <button className="rounded-lg border border-white/60 px-1 py-0.5">
            Click Here
          </button>
        </a>
        <p>25 sept 2023</p>
        <p>
          Discover the evolution of gaming with GameFi & the metaverse{" "}
          <span className="text-red-500">Live!</span> Rexx Pre sale page
        </p>
        <a href="" target="_blank">
          <button className="rounded-lg border border-white/60 px-1 py-0.5">
            Click Here
          </button>
        </a>
        <p>25 sept 2023</p>
        <p>
          Discover the evolution of gaming with GameFi & the metaverse{" "}
          <span className="text-red-500">Live!</span> Rexx Pre sale page
        </p>
        <a href="" target="_blank">
          <button className="rounded-lg border border-white/60 px-1 py-0.5">
            Click Here
          </button>
        </a>
        <p className="news-text">25 sept 2023</p>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
