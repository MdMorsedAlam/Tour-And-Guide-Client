import MaxWidth from "../MaxWidth/MaxWidth";
import logo from "../../assets/logo.json";
import Lottie from "lottie-react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="px-4 py-8 bg-gray-100 text-gray-400">
        <MaxWidth>
          <div className="flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
            <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
              <Link to="/" className="flex items-center justify-center flex-shrink-0 w-24 h-24 rounded-full bg-cyan-400">
                <Lottie animationData={logo} />
              </Link>
              <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
                <li>
                  <p>Tour And Guide</p>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
              <li>
                <p
                  rel="noopener noreferrer"
                  className="text-3xl text-cyan-300 hover:text-cyan-500"
               
                >
                  <BsFacebook />
                </p>
              </li>
              <li>
                <p
                  rel="noopener noreferrer"
                  className="text-3xl text-cyan-300 hover:text-cyan-500"
                
                >
                  <BsInstagram />
                </p>
              </li>
              <li>
                <p
                  rel="noopener noreferrer"
                  className="text-3xl text-cyan-300 hover:text-cyan-500"
                 
                >
                  <BsTwitter />
                </p>
              </li>
            </ul>
          </div>
        </MaxWidth>
      </footer>
    </div>
  );
};

export default Footer;
