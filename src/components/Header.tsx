import { navLinks } from "../data.json";
import logo from "../assets/logo.png";
import HamburgerButton from "./HamburgerButton";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // prevet scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className="w-full py-[32px] md:py-10  mb-8 md:mb-12 lg:mb-[95px]"
      id="header"
    >
      <div className="my-container flex items-center justify-between">
        {/* logo */}
        <div className="w-6 h-6 md:w-[33px] md:h-[33px] lg:w-[62px] lg:h-[62px]">
          <img src={logo} alt="logo" className="w-full h-full" />
        </div>
        {/* menu button */}
        <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
        {/* when menu is open add dark ovelay */}
        {isOpen && (
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className="fixed inset-0 bg-overlay"
          />
        )}
        {/* nav links */}
        <motion.nav
          animate={isOpen || isDesktop ? "open" : "closed"}
          variants={{
            open: { x: 0 },
            closed: { x: "100vw" },
          }}
          transition={{ type: "tween", duration: 0.6 }}
          className="bg-white fixed pt-32 md:p-0 md:static top-0 right-0 bottom-0 left-1/3 z-30 flex flex-col items-center md:flex-row gap-11 lg:gap-[57px]"
        >
          <ul className="flex flex-col md:flex-row md:items-center gap-11 lg:gap-[57px]">
            {navLinks.map((item) => {
              return (
                <motion.li
                  whileHover={{
                    scale: 1.2,
                    fontWeight: "500",
                    textShadow: "0px 0px 10px rgba(0,0,0,0.3)",
                  }}
                  key={item.id}
                  onClick={() => setIsOpen(false)}
                >
                  <a href={item.url}>{item.text}</a>
                </motion.li>
              );
            })}
          </ul>
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.3)",
              backgroundColor: "#ffff",
              color: "hsla(0, 0%, 11%, 1)",
            }}
            whileTap={{
              scale: 0.9,
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="cursor-pointer bg-main text-white rounded-[30px] py-3 px-6 lg:py-4 lg:px-8 absolute bottom-40 md:static"
          >
            Get in touch
          </motion.button>
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;
