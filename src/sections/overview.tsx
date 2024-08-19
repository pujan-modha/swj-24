import Title from "@/components/title";

const Overview = () => {
  return (
    <div>
      <Title title="Overview" />
      <div className="grid lg:grid-cols-10 gap-4">
        <div className="text-lg md:col-span-6">
          <p>
            Startup Weekend Jaipur is a three-day program where aspiring
            entrepreneurs can experience startup life. You get the best mentors,
            investors, co-founders, and sponsors, to help you learn what it
            really takes to innovate, disrupt, and start a company.
          </p>
          <br />
          <p>
            It's about pitching, business model creation, prototyping,
            designing, and market validation, in a friendly and supportive team
            environment.
          </p>
          <br />
          <p>You have 54 hours to change the world!</p>
        </div>
        <div className="md:col-span-4">
          <div className="bg-brand/10 border-2 border-brand rounded-md hover:bg-transparent duration-300">
            <img
              src="https://images.prismic.io/swj24/Zp_y8h5LeNNTxbxe_overview.webp?auto=format,compress"
              alt="Startup Weekend Logo"
              className="w-full rounded-lg p-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;