import Lottie from "lottie-react";
import registerLogo from "../../assets/registerlogo.json";
import {
  BsFillEyeFill,
  BsFillEyeSlashFill,
  BsGoogle,
  BsBoxArrowInRight,
} from "react-icons/bs";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import { saveUser, setToken } from "../../utils/userAuth";
const Login = () => {
  const { googleLogin, loginUser } = UseAuth();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handelLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pwd = form.pwd.value;
    try {
      const result = await loginUser(email, pwd);
      await setToken(result?.user?.email);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Congress Login Success",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid Email Or Password",
      });
    }
  };

  const handelGoogleLogin = async () => {
    try {
      const result = await googleLogin();
      await saveUser(result?.user);
      await setToken(result?.user?.email);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully Login With Google",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    } catch (err) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Something Wrong With ${err.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="md:w-1/2 w-full">
            <Lottie className="" animationData={registerLogo} />
          </div>
          <div className="card shrink-0 w-full md:w-3/4 lg:w-1/2 shadow-2xl bg-base-100">
            <form onSubmit={handelLogin} className="card-body">
              <h1 className="text-center font-bold text-4xl text-[#226c6a]">
                Login Now
              </h1>

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
                <button
                  type="submit"
                  className="btn btn-accent font-bold text-center text-xl text-white"
                >
                  Login
                  <BsBoxArrowInRight className="text-3xl" />
                </button>
              </div>
            </form>
            <div className="px-10">
              <p className="mb-3 italic text-lg">
                Create A New Account ?{" "}
                <Link className="text-blue-500 font-bold" to="/register">
                  Register
                </Link>
              </p>
              <div className="divider mt-0">OR</div>
              <div className="flex justify-center my-3">
                <button
                  onClick={handelGoogleLogin}
                  className="btn hover:text-white text-xl mb-3 btn-accent px-10 font-bold btn-outline"
                >
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

export default Login;
