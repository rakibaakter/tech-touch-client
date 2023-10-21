import banner1 from "../../assets/images/diamond.png";
import banner2 from "../../assets/images/cool-background.png";
import banner3 from "../../assets/images/cool-background-black.png";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const Advertisement = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div
          className="hero max-h-[80vh]"
          style={{
            backgroundImage: `url(${banner3})`,
          }}
        >
          <div className="hero-content text-center text-white">
            <div className="max-w-md">
              <h1 className="mb-5 text-3xl md:text-5xl font-bold">
                Black Friday Sell!
              </h1>
              <p className="mb-5 text-xl md:text-3xl">
                Get <span className="text-red-600 font-bold">15% off</span> to
                all phone.
              </p>
              <PrimaryButton>Get Started</PrimaryButton>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div
          className="hero max-h-[80vh]"
          style={{
            backgroundImage: `url(${banner2})`,
          }}
        >
          <div className="hero-content text-center text-White ">
            <div className="max-w-md">
              <h1 className="mb-5 text-3xl md:text-5xl font-bold">
                Launching New Product
              </h1>
              <p className="mb-5 text-xl md:text-3xl">Coming Soon ...</p>
              <PrimaryButton>Get Started</PrimaryButton>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div
          className="hero min-h-[80vh]"
          style={{
            backgroundImage: `url(${banner1})`,
          }}
        >
          <div className="hero-content text-center text-White ">
            <div className="max-w-md text-slate-600">
              <h1 className="mb-5 text-3xl md:text-5xl font-bold">
                Year 2023 Sell
              </h1>
              <p className="mb-5 text-xl md:text-3xl">
                Get 23% discount to all product in December
              </p>
              <PrimaryButton>Get Started</PrimaryButton>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
