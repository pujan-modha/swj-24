import { useState, useEffect } from "react";
import Hero from "../sections/hero";
import Overview from "@/sections/overview.jsx";
import Sponsors from "@/sections/sponsors.jsx";
import Objectives from "@/sections/objectives.jsx";
import Faq from "@/sections/faq.jsx";
import Contact from "@/sections/contact.jsx";
import Timeline from "@/sections/timeline.tsx";
import { CouponPopup } from "@/components/coupon-popup";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 240,
      delay: 0,
      duration: 1000,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });

    const hasSeenPopup = localStorage.getItem("hasSeenPopup");
    if (!hasSeenPopup) {
      localStorage.setItem("hasSeenPopup", "true");
      setShowPopup(true);
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <div id="home" data-aos="fade-up">
          <Hero />
        </div>
        <div className="grid grid-cols-1 my-16 lg:my-4">
          <div data-aos="fade-up">
            <Overview />
          </div>
          <div data-aos="fade-up">
            <Sponsors />
          </div>
          <div data-aos="fade-up">
            <Timeline />
          </div>
          <div data-aos="fade-up">
            <Objectives />
          </div>
          <div data-aos="fade-up">
            <Faq />
          </div>
          <div data-aos="fade-up">
            <Contact />
          </div>
        </div>
      </div>
      {showPopup && <CouponPopup onClose={handleClosePopup} />}
    </>
  );
}
