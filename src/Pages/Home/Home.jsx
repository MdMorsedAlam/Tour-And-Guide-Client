import { Helmet } from 'react-helmet-async';
import Slider from '../../Components/Slider/Slider';
const Home = () => {
 return (
  <div>
   <Helmet>
    <title>Home | Tourist Guide</title>
   </Helmet>
   <Slider/>
  </div>
 );
};

export default Home;