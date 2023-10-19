import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import FooterContainer from "../components/Footer/FooterContainer";

const Layout = () => {
  return (
    <div className="bg-black text-white">
      <Navbar className="sticky" />
      <div className="min-h-[90vh]">
        <Outlet />
      </div>
      <FooterContainer />
    </div>
  );
};

export default Layout;
