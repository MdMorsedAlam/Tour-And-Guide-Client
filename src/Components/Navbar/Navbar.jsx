import { Link, NavLink, useNavigate } from "react-router-dom";
import MaxWidth from "../MaxWidth/MaxWidth";
import logo from '../../assets/logo.json'
import Lottie from "lottie-react";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
const Navbar = () => {
  const {user,logOutUser}=UseAuth();
  const navigate=useNavigate()

  const handelLogout=async()=>{
    await logOutUser()
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Successfully Logout",
      showConfirmButton: false,
      timer: 1500
    });
     navigate('/')
  }
 return (

   <div className=" bg-[#1bdbf0]">
     <MaxWidth>
  <div className="flex flex-col gap-5 mx-2 md:flex-row justify-between items-center py-2">
  <div>
    <Link to='/' className="lg:text-2xl text-2xl md:text-xl flex justify-center items-center lg:font-bold font-bold md:font-semibold text-white"><Lottie className="lg:w-24 w-28 md:w-20 h-12" animationData={logo} />Tour & <span className="text-red-500">Guide</span></Link>
  </div>
  <div>
    <ul className="flex font-semibold gap-3 px-1">
      <li><NavLink to='/' className={({ isActive }) =>
    isActive ? "text-white border-b-2 border-[#10909e] pb-2" : "hover:text-[#ddd]"
  }>Home</NavLink></li>
      <li><NavLink to='/about' className={({ isActive }) =>
    isActive ? "text-white border-b-2 border-[#10909e] pb-2" : "hover:text-[#ddd]"
  }>About Us</NavLink></li>
      <li><NavLink to='/community' className={({ isActive }) =>
    isActive ? "text-white border-b-2 border-[#10909e] pb-2" : "hover:text-[#ddd]"
  }>Community</NavLink></li>
      <li><NavLink to='/blogs' className={({ isActive }) =>
    isActive ? "text-white border-b-2 border-[#10909e] pb-2" : "hover:text-[#ddd]"
  }>Blogs</NavLink></li>
      <li><NavLink to='/contact' className={({ isActive }) =>
    isActive ? "text-white border-b-2 border-[#10909e] pb-2" : "hover:text-[#ddd]"
  }>Contact Us</NavLink></li>
      
      
    </ul>
  </div>
  <div className="mb-5 md:mb-0">
  {
    user?<div className="dropdown dropdown-end z-50">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
      </div>
    </label>
    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
      <li>
        <p>{user?.displayName}</p>
      </li>
      <li><p className="text-xs italic">{user?.email}</p></li>
      <li><Link to="/dashboard/profile">Dashboard</Link></li>
      <li><p onClick={handelLogout}>Logout</p></li>
    </ul>
  </div>:<Link className="bg-[#10909e] rounded-3xl text-white mr-2 border-4 font-bold px-6 py-2" to='/login'>Login</Link>
  }
  </div>
  </div>
  </MaxWidth>
</div>

 );
};

export default Navbar;