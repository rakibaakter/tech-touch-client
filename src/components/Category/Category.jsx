import { FaMobileAlt } from "react-icons/fa";
import { FiWatch } from "react-icons/fi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaHeadphonesSimple } from "react-icons/fa6";
import useAuthInfoHook from "../../Hooks/useAuthInfoHook";

const Category = () => {
  const { isWhite } = useAuthInfoHook();

  return (
    <div
      className={`${isWhite ? "bg-white text-black" : "bg-black text-white"}`}
    >
      <div className="px-4 md:px-10 lg:px-0 lg:w-3/4 mx-auto text-center py-16 ">
        <h2 className="text-3xl font-semibold mb-16">Product Category</h2>

        <div className="flex  justify-evenly text-5xl md:text-9xl text-accent ">
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
