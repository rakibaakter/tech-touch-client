import { Link, useRouteError } from "react-router-dom";
import errorImg from "../assets/images/error.png";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div
      className="font-semibold text-2xl text-center bg-black min-h-screen text-white "
      id="error-page"
    >
      <div className="max-h-[50vh] flex justify-center pt-10">
        <img className="w-1/3" src={errorImg} alt="" />
      </div>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link
        to="/"
        className="my-4 btn bg-accent text-white hover:text-gray-600"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
