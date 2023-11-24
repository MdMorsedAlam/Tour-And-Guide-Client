import { Outlet } from "react-router-dom";
import MaxWidth from "../Components/MaxWidth/MaxWidth";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
 return (
  <div>
   <Navbar/>
   <MaxWidth><Outlet/></MaxWidth>
   <Footer/>
  </div>
 );
};

export default MainLayout;