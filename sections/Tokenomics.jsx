import { DougnutChart } from "@/components";
import { TitleTextTyping } from "@/components/CustomTexts";
import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { motion } from "framer-motion";
import { Doughnut } from "react-chartjs-2";

Chart.register(Tooltip, Title, ArcElement, Legend);

const data = {
  labels: [
    "ICO Presale Platform: 10%",
    "Initial Dex Offering: 15%",
    "Initial Exchange Offering: 15%",
    "Centralized Exchange Listing: 25%",
    "Ecosystem Development: 30%",
    "Marketing & Promotions: 5%",
  ],
  datasets: [
    {
      label: "Token Distribution",
      data: [10, 15, 15, 25, 30, 5],
      backgroundColor: [
        "rgb(189,147,240)",
        "rgb(209,185,241)",
        "rgb(169,110,239)",
        "rgb(189,147,240)",
        "rgb(149,72,238)",
        "rgb(115,59,196)",
      ],
      hoverOffset: 4,
    },
  ],
};

const Tokenomics = () => {
  return (
    <section
      className={`${styles.paddings} relative z-10 flex items-center justify-center`}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col gap-4`}
      >
        <TitleTextTyping title="Tokenomics" />

        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
          <DougnutChart />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Tokenomics;
