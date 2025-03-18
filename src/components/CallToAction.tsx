import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="my-container bg-main text-white flex flex-col md:flex-row gap-6 items-center md:justify-between px-5 md:px-12 lg:px-[100px] py-[50px] md:py-20 ">
      <h2 className="m-0 md:text-[38px] lg:text-[42px] text-center md:text-left">
        LET'S DEVELOP,
        <br /> LET'S COOPERATE!
      </h2>

      {/* arrow */}
      <div className="w-[130px] h-[130px] md:w-[190px] lg:w-[377px] flex justify-center items-center ">
        <div className="relative w-full h-[3px] bg-white rotate-90 md:rotate-0">
          <div
            className=" absolute top-1/2 -right-1 -translate-y-1/2 w-0 h-0 -rotate-90
                        border-l-[12px] border-l-transparent 
                        border-r-[12px] border-r-transparent 
                        border-t-[24px] border-t-white"
          ></div>
        </div>
      </div>

      <motion.button
        whileHover={{
          scale: 1.05,
          y: -5,
          boxShadow: "0px 10px 15px hsla(0, 0%, 100%, 0.2)",
          backgroundColor: "#ffff",
          color: "hsla(0, 0%, 11%, 1)",
        }}
        whileTap={{
          scale: 0.9,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="border rounded-[60px] bg-transparent px-[72px] py-9 cursor-pointer "
      >
        LET’S TALK!
      </motion.button>
    </section>
  );
};

export default CallToAction;
