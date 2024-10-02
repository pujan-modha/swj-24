import Title from "@/components/title";
import Slider from "react-infinite-logo-slider";

const Sponsors = () => {
  return (
    <div id="sponsors">
      <Title title="Sponsors" />
      <Slider
        // width="250px"
        duration={50}
        pauseOnHover={false}
        blurBorders={true}
        blurBoderColor={"#282A36"}
      >
        <Slider.Slide>
          <img src="/nine.webp" alt="Nine" className="w-24 h-auto" />
        </Slider.Slide>
        <Slider.Slide>
          <img src="/unstop.webp" alt="Unstop" className="w-24 h-auto" />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src="/easemytrip.webp"
            alt="EaseMyTrip"
            className="w-24 h-auto"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src="/globalhues.webp"
            alt="TheGlobalHues"
            className="w-24 h-auto"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src="/sbi.webp"
            alt="State Bank of India"
            className="w-24 h-auto"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img src="/brex.png" alt="Brex" className="w-24 h-auto" />
        </Slider.Slide>
        <Slider.Slide>
          <img src="/deel.png" alt="Deel" className="w-24 h-auto" />
        </Slider.Slide>
      </Slider>
      <div>
        <Title title="Partners" />
        <div className="flex flex-row justify-center items-center gap-24">
          <div>
            <img
              src="/muj.webp"
              alt="Manipal University Jaipur"
              className="w-48 h-auto"
            />
            <p className="text-brand font-semibold mt-4 text-xl text-center">
              Venue Partner
            </p>
          </div>
          <div>
            <img src="/aic.webp" alt="AIC" className="h-36 w-auto" />
            <p className="text-brand font-semibold mt-4 text-xl text-center">
              Partner
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
