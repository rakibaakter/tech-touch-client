import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";

const Layout = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Outlet />
      {/* <h2>Footer</h2> */}
    </div>
  );
};

export default Layout;
