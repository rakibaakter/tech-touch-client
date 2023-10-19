import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";
// import bgImg from "../../assets/images/cool-background-black.png";

const BrandsContainer = () => {
  const { brands } = useLoaderData();
  //   console.log(brands);

  return (
    <div
    //   style={{
    //     backgroundImage: `url(${bgImg})`,
    //   }}
    >
      <div className="px-4 lg:px-0 lg:w-3/4 mx-auto text-center my-16 ">
        <h2 className="text-3xl font-semibold ">Our Brands </h2>
        <p className="mt-6 mb-16">
          We are working for you to make your life easier. We provide authentic
          producs with brands guarantee.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsContainer;
