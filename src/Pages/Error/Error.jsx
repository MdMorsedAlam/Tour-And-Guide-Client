import Lottie from "lottie-react";
import error from "../../assets/error.json";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Lottie className="w-96 h-96" animationData={error} />
      <Link className="btn btn-accent text-xl text-white" to="/">
        Go Home
      </Link>
    </div>
  );
};

export default Error;
