import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import useAuthInfoHook from "../../Hooks/useAuthInfoHook";
import profile from "../../assets/images/profile.jpg";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const Navbar = () => {
  const { user, logOut } = useAuthInfoHook();
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "bg-sky-600" : "bg-none")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-product"
          className={({ isActive }) => (isActive ? "bg-sky-600" : "bg-none")}
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "bg-sky-600" : "bg-none")}
        >
          My Cart
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar px-2 md:px-10 lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  bg-black text-white rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Logo />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-3 px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex flex-col md:flex-row md:gap-3">
            <span className="">
              <img
                className="h-6 w-6 md:h-10 md:w-10 rounded-full ml-4"
                src={user.photoURL ? user.photoURL : profile}
                alt=""
              />
              <span className="mr-3">{user.displayName}</span>
            </span>
            <Link onClick={logOut} className="md:mt-2">
              <a className="text-accent font-semibold md:text-xl ">Sign Out</a>
            </Link>
          </div>
        ) : (
          <Link to="/login">
            <a className="text-accent font-semibold text-xl ">Sign In</a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
