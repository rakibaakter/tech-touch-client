import banner from "../../assets/images/banner2.jpg";
import logo2 from "../../assets/images/logo2.png";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div
      className="hero min-h-[70vh]"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-90"></div>
      <div className="hero ">
        <div className="hero-content flex-col-re lg:flex-row-reverse px-20">
          <img src={logo2} className=" md:h-72 md:w-72 object-cover" />
          <div>
            <h1 className="text-5xl font-bold">Tech Touch</h1>
            <p className="py-6">
              Here Tech Touch is for you. You can get lots of brands products at
              a single touch. We are working for you to make your life easier.
              We provide <b>authentic</b> producs with brands <b>guarantee.</b>
              We believe in customer happiness. So for any kind of electronics
              or technological gadget , you can visit us.
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
