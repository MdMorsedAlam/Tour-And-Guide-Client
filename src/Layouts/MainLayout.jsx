import { Outlet, useLocation } from "react-router-dom";
import MaxWidth from "../Components/MaxWidth/MaxWidth";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <div>
      {noHeaderFooter || <Navbar />}
      <MaxWidth>
        <Outlet />
      </MaxWidth>
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default MainLayout;
