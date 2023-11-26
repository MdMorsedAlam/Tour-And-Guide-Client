import { Helmet } from "react-helmet-async";
import Slider from "./Slider/Slider";
import Tourism from "./Tourism/Tourism";
import TourType from "./TourType/TourType";
import TouristStory from "./TouristStory/TouristStory";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Tourist Guide</title>
      </Helmet>
      <Slider />
      <Tourism/>
      <TourType/>
      <TouristStory/>
    </div>
  );
};

export default Home;
