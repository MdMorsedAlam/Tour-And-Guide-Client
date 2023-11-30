import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PropTypes from "prop-types";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashboardLayout from "../Layouts/DashboardLayout";
import MyProfile from "../UserDashbboard/MyProfile";
import WishList from "../UserDashbboard/WishList";
import Bookings from "../UserDashbboard/Bookings";
import AddPackage from "../AdminDashboard/AddPackage";
import ManageUser from "../AdminDashboard/ManageUser";
import Error from "../Pages/Error/Error";
import AllStories from "../Pages/AllStories/AllStories";
import DetailsStory from "../Pages/AllStories/DetailsStory";
import AllPackages from "../Pages/Home/Tourism/AllPackages";
import DetailsPackage from "../Pages/Home/Tourism/DetailsPackage";
import AssignedTours from "../GuideDashboard/AssignedTours";
import GuideProfile from "../Pages/Home/Tourism/GuideProfile";

const myRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/allstories",
        element: <AllStories />,
      },
      {
        path: "/story/:id",
        element: <DetailsStory />,
      },
      {
        path: "/allpackages",
        element: <AllPackages />,
      },
      {
        path: "/packagedetails/:id",
        element: <DetailsPackage />,
      },
      {
        path: "/guideprofile/:id",
        element: <GuideProfile />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "profile",
        element: <MyProfile />,
      },
      {
        path: "wishlist",
        element: <WishList />,
      },
      {
        path: "bookings",
        element: <Bookings />,
      },
      {
        path: "addpackage",
        element: <AddPackage />,
      },
      {
        path: "manageuser",
        element: <ManageUser />,
      },
      {
        path: "assignedtours",
        element: <AssignedTours />,
      },
    ],
  },
]);
const MainRoute = ({ children }) => {
  return <RouterProvider router={myRoute}>{children}</RouterProvider>;
};
MainRoute.propTypes = {
  children: PropTypes.node,
};
export default MainRoute;
