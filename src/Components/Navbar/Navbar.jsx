import { NavLink } from "react-router-dom";
import MaxWidth from "../MaxWidth/MaxWidth";

const Navbar = () => {
 return (

   <div className="bg-base-200 shadow-md">
     <MaxWidth>
  <div className="flex flex-col lg:flex-row justify-center items-center py-2">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu font-semibold menu-horizontal flex gap-3 px-1">
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/'>About Us</NavLink></li>
      <li><NavLink to='/'>Community</NavLink></li>
      <li><NavLink to='/'>Blogs</NavLink></li>
      <li><NavLink to='/'>Contact Us</NavLink></li>
      <li><NavLink to='/login'>Login</NavLink></li>
      
    </ul>
  </div>
  </div>
  </MaxWidth>
</div>

 );
};

export default Navbar;