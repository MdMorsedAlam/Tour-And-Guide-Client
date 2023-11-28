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
import { imageUpload } from "../../utils/imageUpload";
import { saveUser, setToken } from "../../utils/userAuth";
const Register = () => {
  const [show, setShow] = useState(false);
  const { googleLogin, createUser, userUpdate, logOutUser } = UseAuth();
  const navigate = useNavigate();

  const handelRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.files[0];
    const pwd = form.pwd.value;

    try {
      const imageData = await imageUpload(image);

      const result = await createUser(email, pwd);
      await userUpdate(name, imageData?.data?.display_url);
      await saveUser(result?.user);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully Create A New Account",
        showConfirmButton: false,
        timer: 1500,
      });
      logOutUser();
      navigate("/login");
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
      console.log(err);
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
            <form onSubmit={handelRegister} className="card-body">
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
                <input
                  type="file"
                  name="image"
                  className="file-input file-input-bordered file-input-accent w-full max-w-xs"
                  required
                  accept="image/*"
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
                  Register
                  <BsBoxArrowInRight className="text-3xl" />
                </button>
              </div>
            </form>
            <div className="px-10">
              <p className="mb-3 italic text-lg">
                Already Have An Accout ?{" "}
                <Link className="text-blue-500 font-bold" to="/login">
                  Login
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

export default Register;
