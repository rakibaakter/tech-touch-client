import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/ErrorPage";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import Products from "../Pages/Products";
import ProductDetails from "../Pages/ProductDetails";
import UpdateProduct from "../Pages/UpdateProduct";
import MyCart from "../Pages/MyCart";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/brands.json"),
      },
      {
        path: "/add-product",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
        loader: () => fetch("/brands.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/update-product/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-woad-tau.vercel.app/product/${params.id}`
          ),
      },
      {
        path: "/products/:name",
        element: <Products />,
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-woad-tau.vercel.app/products/${params.name}`
          ),
      },
      {
        path: "/product/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-woad-tau.vercel.app/product/${params.id}`
          ),
      },

      {
        path: "/my-cart",
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://brand-shop-server-woad-tau.vercel.app/carts"),
      },
    ],
  },
]);

export default Router;
