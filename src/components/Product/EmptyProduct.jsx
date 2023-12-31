import { Link } from "react-router-dom";

const EmptyProduct = () => {
  return (
    <div className="px-4 md:px-10 lg:px-0 lg:w-3/4 mx-auto text-center my-16 ">
      <h2 className="text-3xl font-semibold mb-6 ">
        Products Not Available Now!
      </h2>
      <span className="text-4xl font-semibold text-sky-600 mt-6">
        Launching Soon ...
      </span>

      <div>
        <Link
          to="/"
          className="my-4 btn bg-accent text-white hover:text-gray-600"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default EmptyProduct;
