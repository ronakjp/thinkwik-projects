import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./App.jsx";
import { AuthContextProvider } from "./hooks/useAuth.jsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
