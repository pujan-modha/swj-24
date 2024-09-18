const Overview = () => {
  return (
    <div id="overview">
      <div className="grid lg:grid-cols-10 gap-8">
        <div className="md:col-span-5">
          <div className="bg-brand/10 border-2 border-brand rounded-md hover:bg-transparent duration-300">
            <img
              src="https://images.prismic.io/swj24/Zp_y8h5LeNNTxbxe_overview.webp?auto=format,compress"
              alt="Startup Weekend Logo"
              className="w-full rounded-lg p-2"
            />
          </div>
        </div>
        <div className="text-lg md:col-span-5">
          <h2 className="font-bold text-brand mb-10 text-center lg:text-left text-5xl uppercase">
            Overview
          </h2>
          <p className="text-muted-foreground mb-6">
            Startup Weekend Jaipur 🚀 is a three-day program where aspiring
            entrepreneurs can experience the startup life.
          </p>
          <p className="text-muted-foreground mb-6">
            You get the best mentors, investors, co-founders, and sponsors, 🧑‍🏫🤝
            to help you learn what it really takes to innovate, disrupt, and
            start a business. 💼🔥
          </p>
          <p className="text-muted-foreground mb-6">
            It's about pitching, 🎤 business model creation 📊, prototyping 🛠️,
            designing 🎨, and market validation ✅, in a friendly and supportive
            team environment. 🌟
          </p>
          <p className="text-muted-foreground mb-6">
            You have 54 hours to change the world! 💪🎉
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;