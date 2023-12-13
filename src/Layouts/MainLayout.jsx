import { Outlet, useLocation } from "react-router-dom";
import MaxWidth from "../Components/MaxWidth/MaxWidth";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { motion } from "framer-motion";

const MainLayout = () => {
  
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      transition={{ duration: 1.5 }}
      
    >
      {noHeaderFooter || <Navbar />}
      <MaxWidth>
        <Outlet />
      </MaxWidth>
      {noHeaderFooter || <Footer />}
    </motion.div>
  );
};

export default MainLayout;
