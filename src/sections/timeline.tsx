import Title from "@/components/title";

const Timeline = () => {
  return (
    <div>
      {/*replace the hr tags with something cool later down the line like a moving beam on a trace or something idk*/}
      <Title title="Timeline" />
      <div className="flex flex-row py-10 items-centercontent-center">
        {/*<img*/}
        {/*    src="https://via.placeholder.com/150"*/}
        {/*    alt="placeholder"*/}
        {/*    className="mx-auto "*/}
        {/*/>*/}
        <div className=" px-2">
          <h2 className="mx-auto text-3xl">Day 1</h2>
          <p className=" mx-auto text-2xl m-4">
            Get to meet new people, and present your business idea. Build a
            reliable team to help you get through to the next step.
          </p>
          <h2 className="mx-auto text-2xl">Dinner & Networking</h2>
          <p className=" mx-auto text-2xl m-4">
            Make new friends and get to know and find the people you’ll be
            working with.
          </p>
          <h2 className="mx-auto text-2xl">Pitch your idea</h2>
          <p className=" mx-auto text-2xl m-4">
            Got a brainwave? You will have 1 minute to present your idea.
          </p>
          <h2 className="mx-auto text-2xl">Choose your project</h2>
          <p className=" mx-auto text-2xl m-4">
            Pick one from the top-rated projects that you’ll spend their weekend
            working on.
          </p>
          <h2 className="mx-auto text-2xl">Build a Team</h2>
          <p className=" mx-auto text-2xl mt-4">
            Create a functional team to work on the idea over the weekend and
            bring it to realization.
          </p>
        </div>
      </div>
      <hr className="w-full bg-[#9AA0A6] h-1 " />
      <div className="flex flex-row py-10 items-centercontent-center">
        <div className=" px-2">
          <h2 className="mx-auto text-3xl">Day 2</h2>
          <h2 className="mx-auto text-2xl">Get to work</h2>
          <p className=" mx-auto text-2xl mt-4">
            Your team will have an arsenal of resources and support at your
            disposal to make things happen in a short period of time. <br />
            <br />
            Your team will be responsible for everything from building your
            product to finding customers.
          </p>
          <h2 className="mx-auto text-2xl">Learn from the best</h2>
          <p className=" mx-auto text-2xl mt-4">
            Mentors will chip in throughout the event to help you guide
            yourselves through the hard problems. <br />
            <br />
            The mentors will always be there to help when you need it.
          </p>
        </div>
        {/*<img*/}
        {/*    src="https://via.placeholder.com/150"*/}
        {/*    alt="placeholder"*/}
        {/*    className="mx-auto "*/}
        {/*/>*/}
      </div>
      <hr className="w-full bg-[#9AA0A6] h-1 " />
      <div className="flex flex-row py-10 items-center content-center">
        {/*<img*/}
        {/*    src="https://via.placeholder.com/150"*/}
        {/*    alt="placeholder"*/}
        {/*    className="mx-auto "*/}
        {/*/>*/}
        <div className=" px-2">
          <h2 className="mx-auto text-3xl">Day 3</h2>
          <h2 className="mx-auto text-2xl">
            Present to a panel of expert Judges
          </h2>
          <p className=" mx-auto text-2xl m-4">
            This is it! Your team will have 5 minutes to present your creation
            to a panel of Judges and the rest of the attendees. <br />
            <br />
            You will get expert guidance from the mentors beforehand to prepare
            your best for the pitches. <br />
            <br />
            Anyone is welcome to come and enjoy the pitches.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;