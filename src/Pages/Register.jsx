import { Link, useLocation, useNavigate } from "react-router-dom";
import bgImg from "../assets/images/cool-background.png";
// import useAuthInfoHooks from "../Hooks/useAuthInfoHooks";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
// import { updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  //   const { createUserByEmail } = useAuthInfoHooks();
  const [showPassword, setShowPassword] = useState(false);
  //   const navigate = useNavigate();
  //   const location = useLocation();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
  };

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="hero min-h-screen ">
            <div className="hero-content flex-col p-0">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-accent">
                  Register now!
                </h1>
              </div>
              <div className="card flex-shrink-0  shadow-2xl bg-transparent">
                <form
                  onSubmit={handleRegister}
                  className="card-body text-black"
                >
                  <div className="form-control mt-6">
                    <input
                      type="text"
                      placeholder="your name"
                      name="name"
                      className="input input-bordered "
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="email"
                      placeholder="email"
                      name="email"
                      className="input input-bordered my-3"
                      required
                    />
                  </div>
                  <div className="form-control  relative h-11 w-full min-w-[200px]">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder=" password"
                      name="password"
                      required
                      className=" h-full w-full rounded-md border px-3 py-3 "
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-1/3 right-3 text-xl"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                  <label className="label mt-3 text-white ">
                    Already have account?
                    <Link
                      to="/login"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Please login !
                    </Link>
                  </label>
                  <div className="form-control mt-6">
                    <button className="btn bg-sky-600 text-white hover:text-gray-600">
                      Register
                    </button>
                  </div>
                  {/* <ToastContainer /> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
