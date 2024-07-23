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
        <Slider.Slide>Sponsor 1</Slider.Slide>
        <Slider.Slide>Sponsor 2</Slider.Slide>
        <Slider.Slide>Sponsor 3</Slider.Slide>
        <Slider.Slide>Sponsor 4</Slider.Slide>
      </Slider>
    </div>
  );
};

export default Sponsors;
