import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { roadmapDetails } from "../constants";
import { motion } from "framer-motion";
import styles from "@/styles";
import { fadeIn, textVariant } from "@/utils/motion";

const RoadmapCard = ({ roadmap }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        // background: "#1d1836",
        background: "black",
        color: "#fff",
        borderTopWidth: "1px",
        borderColor: "#9548ee",
        boxShadow: "none",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={roadmap.date}
      iconStyle={{
        background: "black",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full ">
          <img
            src="/animation_circle_small_6.gif"
            alt={roadmap.company_name}
            className="w-[100%] h-[100%] object-cover rounded-full"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {roadmap.title}
        </h3>
        {/* <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {roadmap.company_name}
        </p> */}
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {roadmap.points.map((point, index) => (
          <li
            key={`roadmap-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const RoadmapDesign_2 = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p> */}
        <motion.h2
          variants={fadeIn("left", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className={`${styles.sectionHeadText} text-center`}
        >
          Our <span className="text-[#9548ee] ">Roadmap</span>
        </motion.h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        className="mt-20 flex flex-col"
      >
        <VerticalTimeline lineColor={"#9548ee"}>
          {roadmapDetails.map((roadmap, index) => (
            <RoadmapCard key={`roadmap-${index}`} roadmap={roadmap} />
          ))}
        </VerticalTimeline>
      </motion.div>
    </>
  );
};

export default RoadmapDesign_2;
