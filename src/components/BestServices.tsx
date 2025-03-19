import { motion } from "framer-motion";
import { services } from "../data.json";
import Reveal from "./Reveal";

const BestServices = () => {
  return (
    <section
      id="services"
      className="my-container mb-[60px] md:mb-[83px] lg:mb-[99px] xl:mb-[152px] "
    >
      <div className="md:grid md:grid-cols-2 mb-6 md:mb-[30px] lg:mb-10 ">
        <Reveal>
          <h2>Best Services!</h2>
        </Reveal>
        <Reveal>
          <p>
            Our marketing agency offers a full range of services to help
            businesses create, execute, and maintain a successful online
            presence. Services include website design, search engine
            optimization, content creation, social media marketing.
          </p>
        </Reveal>
      </div>
      <Reveal>
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
          className="border rounded-[30px] py-4 px-8 block mx-auto cursor-pointer"
        >
          Learn More!
        </motion.button>
      </Reveal>

      <ul className="grid gap-6 md:gap-9 md:grid-cols-2 lg:grid-cols-4 items-end mt-10 md:mt-11 lg:mt-[55px]">
        {services.map((item) => {
          return (
            <Reveal>
              <li key={item.id} className="text-[40px] font-medium ">
                {item.text}
                <span className="block mt-6 w-full h-[1px] bg-main"></span>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
};

export default BestServices;
