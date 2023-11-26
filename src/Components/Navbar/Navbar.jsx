import { Link, NavLink } from "react-router-dom";
import MaxWidth from "../MaxWidth/MaxWidth";
import logo from '../../assets/logo.json'
import Lottie from "lottie-react";
const Navbar = () => {
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
  <Link className="bg-[#10909e] rounded-3xl text-white mr-2 border-4 font-bold px-6 py-2" to='/login'>Login</Link>
  </div>
  </div>
  </MaxWidth>
</div>

 );
};

export default Navbar;