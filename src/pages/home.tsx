import Hero from "../sections/hero";
import Overview from "@/sections/overview.jsx";
import Sponsors from "@/sections/sponsors.jsx";
import Objectives from "@/sections/objectives.jsx";
import Faq from "@/sections/faq.jsx";
import Contact from "@/sections/contact.jsx";
import Timeline from "@/sections/timeline.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 240, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

  });
  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <div id="home" data-aos="fade-up">
          <Hero />
        </div>
        <div className="grid grid-cols-1 my-16 lg:my-4">
          <div data-aos="fade-up"><Overview /></div>
          <div data-aos="fade-up"><Sponsors /></div>
          <div data-aos="fade-up"><Timeline /></div>
          <div data-aos="fade-up"><Objectives /></div>
          {/*<div data-aos="fade-up"><Mentors /></div>*/}
          {/*<div data-aos="fade-up"><Judges /></div>*/}
          <div data-aos="fade-up"><Faq /></div>
          <div data-aos="fade-up"><Contact /></div>
        </div>
      </div>
    </>
  );
}
