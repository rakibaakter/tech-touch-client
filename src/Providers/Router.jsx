import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/brands.json"),
      },
      {
        path: "/add-product",
        element: <AddProduct />,
        loader: () => fetch("/brands.json"),
      },
    ],
  },
]);

export default Router;
