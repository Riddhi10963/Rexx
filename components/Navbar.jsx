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
      <div className="flex  md:gap-10">
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
  </motion.nav>
);

export default Navbar;
