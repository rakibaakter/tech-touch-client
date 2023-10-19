import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiLocationMarker, HiOutlineMail } from "react-icons/hi";
import Logo from "../Logo/Logo";

const FooterContainer = () => {
  return (
    <footer className="px-4 md:px-10 lg:w-3/4 mx-auto mt-20 py-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        <div className=" space-y-3">
          <Logo />
          <p className="mt-3 italic ">We work for make your life easier</p>
          <div className="flex text-2xl gap-3 text-accent ">
            <BsFacebook />
            <BsInstagram />
            <BsLinkedin />
            <BsYoutube />
          </div>
        </div>
        <div>
          <h3 className="my-3 text-2xl font-semibold">Contact Us</h3>
          <ul className="font-semibold text-accent text-left">
            <li className="flex mt-1 items-center gap-3 ">
              <BiSolidPhoneCall />
              <h4>+88 0183330001</h4>
            </li>
            <li className="flex mt-1 items-center gap-3 ">
              <HiOutlineMail />
              <h4>tech@touch.com</h4>
            </li>
            <li className="flex mt-1 items-center gap-3 ">
              <HiLocationMarker />
              <h4>Dhaka, Bangladesh</h4>
            </li>
          </ul>
        </div>
        <div>
          <form>
            <header className="footer-title">Newsletter</header>
            <fieldset className="form-control w-76 md:w-80">
              <div className="relative">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-full pr-16"
                />
                <button className="btn btn-accent text-white absolute top-0 right-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
      <div className=" mt-16 text-center">
        <hr className="w-11/12 mx-auto mb-6" />
        <span>Copyright © 2023 - All right reserved</span>
      </div>
    </footer>
  );
};

export default FooterContainer;
