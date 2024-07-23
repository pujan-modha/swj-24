import Title from "@/components/title";

const Overview = () => {
  return (
    <div>
      <Title title="Overview" />
      <div className="grid lg:grid-cols-2 gap-4 items-center content-center">
        <div className="text-2xl mt-4">
          <p>
            Startup Weekend is a three-day workshop that provides a
            collaborative and creative environment for participants to develop
            their entrepreneurial skills. The event revolves around pitching,
            designing, and prototyping business ideas.
          </p>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque in
            natus sint autem magni aliquid amet quibusdam? Dolor, quidem! Eum
            praesentium officia perspiciatis neque reprehenderit distinctio
            recusandae vero dicta suscipit.
          </p>
        </div>
        <div>
          <div className="bg-brand/10 border-2 border-brand rounded-md hover:bg-transparent duration-300">
            <img
              src="https://image.pujan.pm/image/https://swj.pujan.pm/images/overview.webp"
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
