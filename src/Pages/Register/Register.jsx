import Lottie from "lottie-react";
import registerLogo from "../../assets/registerlogo.json";
import { BsFillEyeFill, BsFillEyeSlashFill, BsGoogle,BsBoxArrowInRight  } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="md:w-1/2 w-full">
            <Lottie className="" animationData={registerLogo} />
          </div>
          <div className="card shrink-0 w-full md:w-3/4 lg:w-1/2 shadow-2xl bg-base-100">
            <form className="card-body">
              <h1 className="text-center font-bold text-4xl text-[#226c6a]">
                Register Now
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Photo URL</span>
                </label>
                <input type="file" className="file-input file-input-bordered file-input-accent w-full max-w-xs" accept="image/*" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={show ? "text" : "password"}
                    placeholder="********"
                    name="pwd"
                    className="input w-full input-bordered"
                    required
                  />
                  <span
                    className="text-2xl absolute right-3 top-3"
                    onClick={() => setShow(!show)}
                  >
                    {show ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                  </span>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent font-bold text-center text-xl text-white">
                Register
                 <BsBoxArrowInRight className="text-3xl"/>
                 
                </button>
              </div>
            </form>
            <div className="px-10">
             <p className="mb-3 italic text-lg">Already Have An Accout ? <Link className="text-blue-500 font-bold" to='/login'>Login</Link></p>
              <div className="divider mt-0">OR</div>
              <div className="flex justify-center my-3">
                <button className="btn hover:text-white text-xl mb-3 btn-accent px-10 font-bold btn-outline">
                  <BsGoogle className="text-3xl" />
                  Goole Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
