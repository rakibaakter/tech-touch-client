import AboutUs from "../components/AboutUs/AboutUs";
import BrandsContainer from "../components/Brands/BrandsContainer";
import Category from "../components/Category/Category";
import Banner from "../components/Header/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <BrandsContainer />
      <AboutUs />
    </div>
  );
};

export default Home;
