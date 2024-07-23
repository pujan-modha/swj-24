import Hero from "../sections/hero";
import Overview from "@/sections/overview.jsx";
import Sponsors from "@/sections/sponsors.jsx";
import Timeline from "@/sections/timeline.jsx";
import Objectives from "@/sections/objectives.jsx";
import Mentors from "@/sections/mentors.jsx";
import Judges from "@/sections/judges.jsx";
import Faq from "@/sections/faq.jsx";
import Contact from "@/sections/contact.jsx";
export default function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <div id="home">
          <Hero />
        </div>
        <div className="grid grid-cols-1 my-16 lg:my-4">
          <Overview />
          <Sponsors />
          <Timeline />
          <Objectives />
          <Mentors />
          <Judges />
          <Faq />
          <Contact />
        </div>
      </div>
    </>
  );
}