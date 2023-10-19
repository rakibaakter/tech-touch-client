import { Link, useLocation, useNavigate } from "react-router-dom";
import bgImg from "../assets/images/cool-background-black.png";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // logInbyEmail(email, password)
    //   .then((res) => {
    //     console.log(res.user);
    //     toast.success("logged in successfully !", {
    //       position: toast.POSITION.BOTTOM_CENTER,
    //     });

    //     // navigate after login
    //     navigate(location?.state ? location.state : "/");
    //   })
    //   .catch((error) => {
    //     toast.error(error.message, {
    //       position: toast.POSITION.BOTTOM_CENTER,
    //     });
    //   });
  };

  const handleSignInByGoogle = () => {
    // signInByGoogle();
    navigate(location?.state ? location.state : "/");
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="hero-overlay opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col p-0">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-accent">
                Please Login Here!
              </h1>
            </div>
            <div className="card flex-shrink-0 shadow-2xl bg-transparent">
              <form onSubmit={handleLogIn} className="card-body text-black">
                <div className="form-control mt-2">
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered my-3"
                    required
                  />
                </div>
                <div className="form-control mt-2 relative h-11 w-full min-w-[200px]">
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
                  Do not have any account?
                  <Link
                    to="/register"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Create Account
                  </Link>
                </label>
                <div className="form-control mt-6">
                  <button className="btn bg-sky-600 text-white hover:text-gray-600">
                    Login
                  </button>
                </div>
              </form>
              <div>
                <p>Or</p>
                <div className="flex justify-center gap-2 items-center mb-10">
                  <span>Sign in with</span>
                  <button onClick={handleSignInByGoogle}>
                    <AiFillGoogleCircle className="text-2xl text-accent " />
                  </button>
                </div>
              </div>
              {/* <ToastContainer /> */}z
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
