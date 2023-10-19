import logo from "../../assets/images/logo1.png";

const Logo = () => {
  return (
    <a className="btn btn-ghost normal-case md:text-3xl">
      <span>Tech</span>
      <img src={logo} className="mt-4" alt="" />
      <span>Touch</span>
    </a>
  );
};

export default Logo;
