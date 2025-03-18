import { motion } from "motion/react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

const RecentWork = () => {
  return (
    <section className="my-container mb-[60px] md:mb-20 lg:mb-24 xl:mb-[150px]">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-9 md:mb-11 lg:mb-[58px] ">
        <h2>Recent Work!</h2>
        <motion.button
          whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.3)",
            backgroundColor: "hsla(0, 0%, 11%, 1)",
            color: "#ffff",
            border: "none",
          }}
          whileTap={{
            scale: 0.9,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="border rounded-[30px] py-4 px-8 self-start cursor-pointer"
        >
          See More!
        </motion.button>
      </div>
      <div className="grid justify-center items-center gap-6 md:gap-9 lg:gap-[50px] md:grid-cols-2">
        <div>
          <img src={project1} alt="" />
        </div>
        <div>
          <img src={project2} alt="" />
        </div>
        <div>
          <img src={project3} alt="" />
        </div>
        <div>
          <img src={project4} alt="" />
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
