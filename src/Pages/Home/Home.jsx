import { Helmet } from "react-helmet-async";
import Slider from "../../Components/Slider/Slider";
import Tourism from "../../Components/Tourism/Tourism";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Tourist Guide</title>
      </Helmet>
      <Slider />
      <Tourism/>
    </div>
  );
};

export default Home;
