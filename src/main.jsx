import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Providers/Router.jsx";
import AuthProvider from "./Providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Router} />
    </AuthProvider>
  </React.StrictMode>
);
