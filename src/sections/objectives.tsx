import Title from "@/components/title";

const Objectives = () => {
  return (
    <div className="py-10">
      <Title title="Objectives" />
      {/* <p className="text-lg text-center font-medium mb-4">
        There are many important objectives for you that are important for your
        entrepreneurial career.
      </p> */}
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="rounded-lg bg-brand/10 border-2 border-brand p-4 text-center hover:bg-transparent duration-300">
          <img src="/connect.png" alt="Connect with Like-minded People" className="h-64 mx-auto" />
          <h4 className="text-brand font-semibold text-xl py-2">
            Connect with Like-minded People
          </h4>
          <p>
            Network with aspiring entrepreneurs, potential co-founders, and
            industry experts. There’s no better place to build valuable
            connections and find mentors.
          </p>
        </div>
        <div className="rounded-lg bg-brand/10 border-2 border-brand p-4 text-center hover:bg-transparent duration-300">
          <img src="/build-skills.png" alt="Build Essential Skills" className="h-64 mx-auto" />
          <h4 className="text-brand font-semibold text-xl py-2">
            Build Essential Skills
          </h4>
          <p>
            Enhance your capabilities in a hands-on environment. Whether you are
            a developer, designer, or business enthusiast, you’ll gain practical
            skills crucial for startup success.
          </p>
        </div>
        <div className="rounded-lg bg-brand/10 border-2 border-brand p-4 text-center hover:bg-transparent duration-300">
          <img src="/transform-idea.png" alt="Validate and Transform Your Ideas" className="h-64 mx-auto" />
          <h4 className="text-brand font-semibold text-xl py-2">
            Validate and Transform Your Ideas
          </h4>
          <p>
            Quickly validate your business idea and receive feedback to refine
            it. Winning teams get support to turn their concepts into reality,
            with help from investors and mentors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Objectives;