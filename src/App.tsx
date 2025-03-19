import Header from "./components/Header";
import HeroSecion from "./components/HeroSecion";
import AboutSection from "./components/AboutSection";
import BestServices from "./components/BestServices";
import RecentWork from "./components/RecentWork";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

import Lenis from "lenis";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Header />
      <HeroSecion />
      <AboutSection />
      <BestServices />
      <RecentWork />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
