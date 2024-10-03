import Title from "@/components/title";

const Timeline = () => {
  return (
    <div id="timeline">
      {/*replace the hr tags with something cool later down the line like a moving beam on a trace or something idk*/}
      <Title title="Timeline" />
      <div className="overflow-hidden">
        <div
          className="tabular-nums justify-center items-center flex"
          data-aos="fade-up"
        >
          {/*component*/}
          <div className="justify-center items-center xl:mx-auto max-w-7xl justify-items-center align-middle flex">
            <div className="flex flex-col md:grid grid-cols-9 mx-auto text-dracxt">
              {/*left*/}
              <div className="flex flex-row-reverse md:contents">
                <div
                  className="bg-brand md:text-right  w-full bg-opacity-10 backdrop-blur-0 border-brand border-2 col-start-1 col-end-5 p-4 rounded-lg my-8 ml-auto shadow-md"
                  data-aos="fade-right"
                >
                  <h3 className="font-semibold text-brand text-4xl mb-1">
                    OCTOBER 04
                  </h3>
                  <h3 className="font-semibold text-brand text-2xl mb-1">
                    4:00 pm - 5:30 pm
                  </h3>
                  <p className="leading-tight md:text-right">
                    Inauguration Ceremony
                  </p>
                </div>
                <div className="col-start-5 col-end-6 md:mx-auto relative mr-5">
                  <div className="h-full w-6 flex items-end justify-center">
                    <div className="h-[50%] w-1 bg-brand pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-brand bg-opacity-100 backdrop-blur-0 border-brand border-2 shadow"></div>
                </div>
              </div>
              {/*right*/}
              <div className="flex md:contents">
                <div className="col-start-5 col-end-6 mr-5 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-brand pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-brand bg-opacity-100 backdrop-blur-0 border-brand border-2 shadow"></div>
                </div>
                <div
                  className="bg-brand w-full  bg-opacity-10 backdrop-blur-0 border-brand border-2 col-start-6 col-end-10 p-4 rounded-lg my-8 mr-auto shadow-md"
                  data-aos="fade-left"
                >
                  <h3 className="font-semibold text-brand text-2xl mb-1">
                    6:00pm - 7:45pm
                  </h3>
                  <p className="leading-tight">Ice Breaker & Pitching Session</p>
                </div>
              </div>
              {/*left*/}
              <div className="flex flex-row-reverse md:contents">
                <div
                  className="bg-brand md:text-right  w-full bg-opacity-10 backdrop-blur-0 border-brand border-2 col-start-1 col-end-5 p-4 rounded-lg my-8 ml-auto shadow-md"
                  data-aos="fade-right"
                >
                  <h3 className="font-semibold text-brand text-2xl mb-1">
                    7:45 pm - 8:00 pm
                  </h3>
                  <p className="leading-tight md:text-right">Voting For Ideas</p>
                </div>
                <div className="col-start-5 col-end-6 md:mx-auto relative mr-5">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-brand pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-brand bg-opacity-100 backdrop-blur-0 border-brand border-2 shadow"></div>
                </div>
              </div>
              {/*right*/}
              <div className="flex md:contents">
                <div className="col-start-5 col-end-6 mr-5 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-brand pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-brand bg-opacity-100 backdrop-blur-0 border-brand border-2 shadow"></div>
                </div>
                <div
                  className="bg-brand w-full  bg-opacity-10 backdrop-blur-0 border-brand border-2 col-start-6 col-end-10 p-4 rounded-lg my-8 mr-auto shadow-md"
                  data-aos="fade-left"
                >
                  <h3 className="font-semibold text-brand text-2xl mb-1">
                    8:00 pm - 9:00 pm
                  </h3>
                  <p className="leading-tight">Dinner</p>
                </div>
              </div>
              {/*left*/}
              <div className="flex flex-row-reverse md:contents">
                <div
                  className="bg-brand md:text-right  w-full bg-opacity-10 backdrop-blur-0 border-brand border-2 col-start-1 col-end-5 p-4 rounded-lg my-8 ml-auto shadow-md"
                  data-aos="fade-right"
                >
                  <h3 className="font-semibold text-brand text-2xl mb-1">
                    11:00 pm
                  </h3>
                  <p className="leading-tight md:text-right">Resting Period</p>
                </div>
                <div className="col-start-5 col-end-6 md:mx-auto relative mr-5">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-brand pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-brand bg-opacity-100 backdrop-blur-0 border-brand border-2 shadow"></div>
                </div>
              </div>
              {/*right*/}
              <div className="flex md:contents">
                <div className="col-start-5 col-end-6 mr-5 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-brand pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-brand bg-opacity-100 backdrop-blur-0 border-brand border-2 shadow"></div>
                </div>
                <div
                  className="bg-brand w-full  bg-opacity-10 backdrop-blur-0 border-brand border-2 col-start-6 col-end-10 p-4 rounded-lg my-8 mr-auto shadow-md"
                  data-aos="fade-left"
                >
                  <h3 className="font-semibold text-brand text-4xl mb-1">
                    OCTOBER 05
                  </h3>
                  <h3 className="font-semibold text-brand text-2xl mb-1">
                    8:00 am
                  </h3>
                  <p className="leading-tight">Breakfast</p>

                </div>
              </div>
              {/*left*/}
              <div className="flex flex-row-reverse md:contents">
                <div
                  className="bg-brand md:text-right  w-full bg-opacity-10 backdrop-blur-0 border-brand border-2 col-start-1 col-end-5 p-4 rounded-lg my-8 ml-auto shadow-md"
                  data-aos="fade-right"
                >
                  <h3 className="font-semibold text-brand text-2xl mb-1">
                    10:30 am
                  </h3>
                  <p className="leading-tight md:text-right">Workshop</p>
                </div>
                <div className="col-start-5 col-end-6 md:mx-auto relative mr-5">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-brand pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-brand bg-opacity-100 backdrop-blur-0 border-brand border-2 shadow"></div>
                </div>
              </div>
              {/*right*/}
              <div className="flex md:contents">
                <div className="col-start-5 col-end-6 mr-5 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-brand pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-brand bg-opacity-100 backdrop-blur-0 border-brand border-2 shadow"></div>
                </div>
                <div
                  className="bg-brand w-full  bg-opacity-10 backdrop-blur-0 border-brand border-2 col-start-6 col-end-10 p-4 rounded-lg my-8 mr-auto shadow-md"
                  data-aos="fade-left"
                >
                  <h3 className="font-semibold text-brand text-2xl mb-1">
                    1:00 pm - 2:00 pm
                  </h3>
                  <p className="leading-tight">
                    Lunch
                  </p>
                </div>
              </div>
              {/*left*/}
              <div className="flex flex-row-reverse md:contents">
                <div
                    className="bg-brand md:text-right  w-full bg-opacity-10 backdrop-blur-0 border-brand border-2 col-start-1 col-end-5 p-4 rounded-lg my-8 ml-auto shadow-md"
                    data-aos="fade-right"
                >
                  <h3 className="font-semibold text-brand text-2xl mb-1">
                    2:30 pm
                  </h3>
                  <p className="leading-tight md:text-right">Mentoring Session & Progress Evaluation</p>
                </div>
                <div className="col-start-5 col-end-6 md:mx-auto relative mr-5">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-brand pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-brand bg-opacity-100 backdrop-blur-0 border-brand border-2 shadow"></div>
                </div>
              </div>
              {/*right*/}
              <div className="flex md:contents">
                <div className="col-start-5 col-end-6 mr-5 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-brand pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-brand bg-opacity-100 backdrop-blur-0 border-brand border-2 shadow"></div>
                </div>
                <div
                    className="bg-brand w-full  bg-opacity-10 backdrop-blur-0 border-brand border-2 col-start-6 col-end-10 p-4 rounded-lg my-8 mr-auto shadow-md"
                    data-aos="fade-left"
                >
                  <h3 className="font-semibold text-brand text-2xl mb-1">
                    5:30 pm
                  </h3>
                  <p className="leading-tight">
                    High Tea & Fun Activity
                  </p>
                </div>
              </div>
              {/*left*/}
              <div className="flex flex-row-reverse md:contents">
                <div
                    className="bg-brand md:text-right  w-full bg-opacity-10 backdrop-blur-0 border-brand border-2 col-start-1 col-end-5 p-4 rounded-lg my-8 ml-auto shadow-md"
                    data-aos="fade-right"
                >
                  <h3 className="font-semibold text-brand text-2xl mb-1">
                    8:00 pm
                  </h3>
                  <p className="leading-tight md:text-right">Dinner</p>
                </div>
                <div className="col-start-5 col-end-6 md:mx-auto relative mr-5">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-brand pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-brand bg-opacity-100 backdrop-blur-0 border-brand border-2 shadow"></div>
                </div>
              </div>
              {/*right*/}
              <div className="flex md:contents">
                <div className="col-start-5 col-end-6 mr-5 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-brand pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-brand bg-opacity-100 backdrop-blur-0 border-brand border-2 shadow"></div>
                </div>
                <div
                    className="bg-brand w-full  bg-opacity-10 backdrop-blur-0 border-brand border-2 col-start-6 col-end-10 p-4 rounded-lg my-8 mr-auto shadow-md"
                    data-aos="fade-left"
                >
                  <h3 className="font-semibold text-brand text-2xl mb-1">
                    11:00 pm
                  </h3>
                  <p className="leading-tight">
                    Resting Period
                  </p>
                </div>
              </div>
              {/*left*/}
              <div className="flex flex-row-reverse md:contents">
                <div
                  className="bg-brand md:text-right  w-full bg-opacity-10 backdrop-blur-0 border-brand border-2 col-start-1 col-end-5 p-4 rounded-lg my-8 ml-auto shadow-md"
                  data-aos="fade-right"
                >
                  <h3 className="font-semibold text-brand text-4xl mb-1">
                    OCTOBER 06
                  </h3>
                  <h3 className="font-semibold text-brand text-2xl mb-1">
                    08:00 am
                  </h3>
                  <p className="leading-tight md:text-right">Breakfast</p>
                </div>
                <div className="col-start-5 col-end-6 md:mx-auto relative mr-5">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-brand pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-brand bg-opacity-100 backdrop-blur-0 border-brand border-2 shadow"></div>
                </div>
              </div>
              {/*right*/}
              <div className="flex md:contents">
                <div className="col-start-5 col-end-6 mr-5 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-brand pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-brand bg-opacity-100 backdrop-blur-0 border-brand border-2 shadow"></div>
                </div>
                <div
                  className="bg-brand w-full  bg-opacity-10 backdrop-blur-0 border-brand border-2 col-start-6 col-end-10 p-4 rounded-lg my-8 mr-auto shadow-md"
                  data-aos="fade-left"
                >
                  <h3 className="font-semibold text-brand text-2xl mb-1">
                    10:00 am - 1:30 pm
                  </h3>
                  <p className="leading-tight">Pitch submission</p>
                </div>
              </div>
              {/*left*/}
              <div className="flex flex-row-reverse md:contents">
                <div
                  className="bg-brand md:text-right  w-full bg-opacity-10 backdrop-blur-0 border-brand border-2 col-start-1 col-end-5 p-4 rounded-lg my-8 ml-auto shadow-md"
                  data-aos="fade-right"
                >
                  <h3 className="font-semibold text-brand text-2xl mb-1">
                    1:00 pm - 2:00 pm
                  </h3>
                  <p className="leading-tight md:text-right">Lunch</p>
                </div>
                <div className="col-start-5 col-end-6 md:mx-auto relative mr-5">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-1/2 mb-auto w-1 bg-brand pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-brand bg-opacity-100 backdrop-blur-0 border-brand border-2 shadow"></div>
                </div>
              </div>
              {/*right*/}
              <div className="flex md:contents">
                <div className="col-start-5 col-end-6 mr-5 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-brand pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-brand bg-opacity-100 backdrop-blur-0 border-brand border-2 shadow"></div>
                </div>
                <div
                    className="bg-brand w-full  bg-opacity-10 backdrop-blur-0 border-brand border-2 col-start-6 col-end-10 p-4 rounded-lg my-8 mr-auto shadow-md"
                    data-aos="fade-left"
                >
                  <h3 className="font-semibold text-brand text-2xl mb-1">
                    2:00 pm - 4:30 pm
                  </h3>
                  <p className="leading-tight">Final Pitches to Judges</p>
                </div>
              </div>
              {/*left*/}
              <div className="flex flex-row-reverse md:contents">
                <div
                    className="bg-brand md:text-right  w-full bg-opacity-10 backdrop-blur-0 border-brand border-2 col-start-1 col-end-5 p-4 rounded-lg my-8 ml-auto shadow-md"
                    data-aos="fade-right"
                >
                  <h3 className="font-semibold text-brand text-2xl mb-1">
                    4:30 pm - 5:30 pm
                  </h3>
                  <p className="leading-tight md:text-right">Closing Ceremony & Prize Distribution</p>
                </div>
                <div className="col-start-5 col-end-6 md:mx-auto relative mr-5">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-1/2 mb-auto w-1 bg-brand pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-brand bg-opacity-100 backdrop-blur-0 border-brand border-2 shadow"></div>
                </div>
              </div>
              {/*right*/}
              {/* <div className="flex md:contents">
                <div className="col-start-5 col-end-6 mr-5 md:mx-auto relative">
                  <div className="h-[50%] w-6 flex items-start justify-center">
                    <div className="h-full w-1 bg-brand pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-brand bg-opacity-100 backdrop-blur-0 border-brand border-2 shadow"></div>
                </div>
                <div
                  className="bg-brand w-full  bg-opacity-10 backdrop-blur-0 border-brand border-2 col-start-6 col-end-10 p-4 rounded-lg my-8 mr-auto shadow-md"
                  data-aos="fade-left"
                >
                  <h3 className="font-semibold text-brand text-2xl mb-1">
                    16:30-17:00
                  </h3>
                  <p className="leading-tight">Evening Snacks and Dispersal</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
