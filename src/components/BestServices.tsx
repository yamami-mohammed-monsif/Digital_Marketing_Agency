import { motion } from "framer-motion";

const BestServices = () => {
  return (
    <section
      id="services"
      className="my-container mb-10 md:mb-[60px] lg:mb-[109px] "
    >
      <div className="md:grid md:grid-cols-2 mb-6 md:mb-[30px] lg:mb-10 ">
        <h2>Best Services!</h2>
        <p>
          Our marketing agency offers a full range of services to help
          businesses create, execute, and maintain a successful online presence.
          Services include website design, search engine optimization, content
          creation, social media marketing.
        </p>
      </div>
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
    </section>
  );
};

export default BestServices;
