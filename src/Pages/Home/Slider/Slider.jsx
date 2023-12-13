import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { motion, useScroll, useSpring } from "framer-motion";
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  return (
    <div>
      <motion.div
        style={{ scaleX }}
        className="w-full h-3 bg-red-500 fixed top-0 z-50 text-white text-center"
      >
      </motion.div>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
      >
        <div data-src="https://i.ibb.co/6yXg8LR/photography.jpg" />
        <div data-src="https://i.ibb.co/jhcfxRZ/img3.jpg" />
        <div data-src="https://i.ibb.co/xSgmMvz/banner.jpg" />
        <div data-src="https://i.ibb.co/4WqzcvK/grp.jpg" />
        <div data-src="https://i.ibb.co/N2bhYJK/group.jpg" />
      </AutoplaySlider>
    </div>
  );
};

export default Slider;
