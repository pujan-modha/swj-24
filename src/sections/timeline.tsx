import Title from "@/components/title";

const Timeline = () => {
  return (
    <div>
      {/*replace the hr tags with something cool later down the line like a moving beam on a trace or something idk*/}
      <Title title="Timeline" />
      <div className="flex flex-row py-10 items-centercontent-center">
        <img
          src="https://via.placeholder.com/150"
          alt="placeholder"
          className="mx-auto"
        />
        <p className="text-center mx-auto text-2xl mt-4">lorem ipsum</p>
      </div>
      <hr className="w-full bg-[#9AA0A6] h-1 " />
      <div className="flex flex-row py-10 items-centercontent-center">
        <p className="text-center mx-auto text-2xl mt-4">lorem ipsum</p>
        <img
          src="https://via.placeholder.com/150"
          alt="placeholder"
          className="mx-auto"
        />
      </div>
      <hr className="w-full bg-[#9AA0A6] h-1 " />
      <div className="flex flex-row py-10 items-centercontent-center">
        <img
          src="https://via.placeholder.com/150"
          alt="placeholder"
          className="mx-auto"
        />
        <p className="text-center mx-auto text-2xl mt-4">lorem ipsum</p>
      </div>
    </div>
  );
};

export default Timeline;
