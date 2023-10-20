import { FaMobileAlt } from "react-icons/fa";
import { FiWatch } from "react-icons/fi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaHeadphonesSimple } from "react-icons/fa6";
import bgImg from "../../assets/images/cool-background-black.png";

const Category = () => {
  // const categories = ['Phone, ']
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="px-4 md:px-10 lg:px-0 lg:w-3/4 mx-auto text-center my-16 ">
        <h2 className="text-3xl font-semibold ">Product Category</h2>

        <div className="flex justify-evenly py-20 text-9xl text-accent ">
          <FiWatch />
          <FaMobileAlt />
          <HiOutlineDesktopComputer />
          <FaHeadphonesSimple />
        </div>
      </div>
    </div>
  );
};

export default Category;
