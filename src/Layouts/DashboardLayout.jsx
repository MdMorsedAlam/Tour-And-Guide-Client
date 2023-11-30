import { Link, NavLink, Outlet } from "react-router-dom";
import MaxWidth from "../Components/MaxWidth/MaxWidth";
import Lottie from "lottie-react";
import logo from "../assets/logo.json";
import { useEffect, useState } from "react";
import axiosSecure from "../Hooks/UseAxiosSecure";
import UseAuth from "../Hooks/UseAuth";

const DashboardLayout = () => {
  const { user } = UseAuth();
  // tourist,tourguide,admin
  const [userRole, setUserRole] = useState();
  useEffect(() => {
    axiosSecure
      .get(`/users/${user?.email}`)
      .then((res) => {
        setUserRole(res.data.role);
      })
      .catch();
  }, [user?.email]);
  // const userRole = "admin";
  return (
    <MaxWidth>
      <div className="grid grid-cols-7">
        <div className="col-span-2 bg-[#1bdbf0] min-h-screen">
          <div className="flex flex-col gap-5 mx-2 justify-between items-center py-2">
            <div>
              <Link
                to="/dashboard/profile"
                className="text-3xl flex justify-center items-center lg:font-bold font-bold md:font-semibold text-white"
              >
                <Lottie className="w-28 h-20" animationData={logo} />
                Tour &<span className="text-red-500 ml-2"> Guide</span>
              </Link>
            </div>
            <div>
              <ul className="flex flex-col font-semibold gap-3 px-1">
                {userRole === "tourist" ? (
                  <>
                    <li>
                      <NavLink
                        to="/dashboard/profile"
                        className={({ isActive }) =>
                          isActive
                            ? "text-white text-2xl border-b-2 border-[#10909e] pb-2"
                            : "hover:text-[#ddd] text-2xl"
                        }
                      >
                        My Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/wishlist"
                        className={({ isActive }) =>
                          isActive
                            ? "text-white text-2xl border-b-2 border-[#10909e] pb-2"
                            : "hover:text-[#ddd] text-2xl"
                        }
                      >
                        My Wishlist
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/bookings"
                        className={({ isActive }) =>
                          isActive
                            ? "text-white text-2xl border-b-2 border-[#10909e] pb-2"
                            : "hover:text-[#ddd] text-2xl"
                        }
                      >
                        My Bookings
                      </NavLink>
                    </li>
                  </>
                ) : userRole === "tourguide" ? (
                  <>
                    <li>
                      <NavLink
                        to="/dashboard/profile"
                        className={({ isActive }) =>
                          isActive
                            ? "text-white text-2xl border-b-2 border-[#10909e] pb-2"
                            : "hover:text-[#ddd] text-2xl"
                        }
                      >
                        My Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/assignedtours"
                        className={({ isActive }) =>
                          isActive
                            ? "text-white text-2xl border-b-2 border-[#10909e] pb-2"
                            : "hover:text-[#ddd] text-2xl"
                        }
                      >
                        My Assigned Tours
                      </NavLink>
                    </li>
                    
                  </>
                ) : userRole === "admin" ? (
                  <>
                    <li>
                      <NavLink
                        to="/dashboard/profile"
                        className={({ isActive }) =>
                          isActive
                            ? "text-white text-2xl border-b-2 border-[#10909e] pb-2"
                            : "hover:text-[#ddd] text-2xl"
                        }
                      >
                        My Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/addpackage"
                        className={({ isActive }) =>
                          isActive
                            ? "text-white text-2xl border-b-2 border-[#10909e] pb-2"
                            : "hover:text-[#ddd] text-2xl"
                        }
                      >
                        Add Package
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/manageuser"
                        className={({ isActive }) =>
                          isActive
                            ? "text-white text-2xl border-b-2 border-[#10909e] pb-2"
                            : "hover:text-[#ddd] text-2xl"
                        }
                      >
                        Manage Users
                      </NavLink>
                    </li>
                  </>
                ) : (
                  ""
                )}
                <div className="divider divider-info"></div>
                <li>
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive
                            ? "text-white text-2xl border-b-2 border-[#10909e] pb-2"
                            : "hover:text-[#ddd] text-2xl"
                        }
                      >
                        Home
                      </NavLink>
                    </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-5 m-20">
          <Outlet />
        </div>
      </div>
    </MaxWidth>
  );
};

export default DashboardLayout;
