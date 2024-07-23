import Title from "@/components/title";
import Slider from "react-infinite-logo-slider";

const Sponsors = () => {
  return (
    <div>
        <Title title="Sponsors" />
      <Slider
        width="250px"
        duration={50}
        pauseOnHover={false}
        blurBorders={true}
        blurBoderColor={"#282A36"}
      >
        <Slider.Slide><p className="text-2xl font-bold">Sponsor 1</p></Slider.Slide>
        <Slider.Slide><p className="text-2xl font-bold">Sponsor 2</p></Slider.Slide>
        <Slider.Slide><p className="text-2xl font-bold">Sponsor 3</p></Slider.Slide>
        <Slider.Slide><p className="text-2xl font-bold">Sponsor 4</p></Slider.Slide>
      </Slider>
    </div>
  );
};

export default Sponsors;
