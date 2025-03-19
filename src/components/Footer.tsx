import logo from "../assets/footer-logo.png";
import { navLinks, socials } from "../data.json";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const Footer = () => {
  return (
    <footer className="my-container bg-main text-white flex flex-col gap-6 md:gap-[114px] lg:gap-[173px] xl:gap-[377px] md:flex-row md:items-center border-t-2 py-[50px] md:pt-[55px] lg:pt-[60px] md:pb-[65px] lg:mb-[80px]">
      <div className="flex flex-col gap-4 md:gap-5 md:flex-1">
        <Reveal color="white">
          <div>
            <img src={logo} alt="logo" />
          </div>
        </Reveal>
        <Reveal color="white">
          <p>
            We are a designer engaged in design that provides design and
            renovation services for your home or office.
          </p>
        </Reveal>
        <Reveal color="white">
          <p>Hello.Varc@gmail.com</p>
        </Reveal>
        <Reveal color="white">
          <p>(406) 777-9280</p>
        </Reveal>
      </div>
      <div className="grid grid-cols-2 gap-y-6 md:grid-cols-3 md:flex-1">
        <ul className="grid gap-4 w-max h-max">
          {navLinks.map((item) => {
            return (
              <Reveal color="white">
                <li key={item.id}>
                  <motion.a
                    className="inline-block"
                    href={item.url}
                    whileHover={{
                      textShadow: "0px 0px 10px rgba(255,255,255,0.8)",
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.text}
                  </motion.a>
                </li>
              </Reveal>
            );
          })}
        </ul>
        <ul className="grid gap-4 w-max h-max">
          {socials.map((item) => {
            return (
              <Reveal color="white">
                <li key={item.id}>
                  <motion.a
                    className="inline-block"
                    href={item.url}
                    target="_blank"
                    whileHover={{
                      textShadow: "0px 0px 10px rgba(255,255,255,0.8)",
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.text}
                  </motion.a>
                </li>
              </Reveal>
            );
          })}
        </ul>
        <ul className="col-span-2 grid gap-4 md:col-span-1 w-max h-max">
          {["Privacy", "Terms and Conditions", "FAQ’s"].map((text, index) => (
            <Reveal color="white">
              <li key={index}>
                <motion.a
                  className="inline-block"
                  href="#"
                  whileHover={{
                    textShadow: "0px 0px 8px rgba(255,255,255,0.8)",
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {text}
                </motion.a>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
