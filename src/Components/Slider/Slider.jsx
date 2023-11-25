import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
  return (
    <div className="">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
      >
        <div data-src="https://i.ibb.co/Mkm9VFD/educational.jpg" />
        <div data-src="https://i.ibb.co/Mkm9VFD/educational.jpg" />
        <div data-src="https://i.ibb.co/Mkm9VFD/educational.jpg" />
        <div data-src="https://i.ibb.co/Mkm9VFD/educational.jpg" />
        <div data-src="https://i.ibb.co/Mkm9VFD/educational.jpg" />
      </AutoplaySlider>
    </div>
  );
};

export default Slider;
