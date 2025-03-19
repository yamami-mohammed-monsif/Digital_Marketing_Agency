import heroImg from "../assets/hero_img.png";
import { motion } from "motion/react";
import Reveal from "./Reveal";

const HeroSecion = () => {
  return (
    <section className="my-container mb-[60px] md:mb-[82px] lg:mb-[150px] h-[679px] md:h-[728px] lg:h-[869px] ">
      <h1>
        <Reveal>
          <span>Unlock your brand's potential</span>
        </Reveal>
        <Reveal>
          <span>with our creative solutions.</span>
        </Reveal>
      </h1>
      <div className="absolute right-0 w-full h-[495px] md:h-[529px] lg:h-[629px] overflow-hidden">
        <motion.img
          src={heroImg}
          alt="Abstract geometric architectural design featuring interconnected triangular and diamond-shaped patterns with modern metallic elements"
          className="h-full object-cover absolute md:right-0 w-[1340px]"
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
};

export default HeroSecion;
