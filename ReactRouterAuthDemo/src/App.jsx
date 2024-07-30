import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login, { loginAction, loginLoader } from "./pages/Login";
import Profile from "./pages/Profile";
import ProtectedRoutes from "./components/ProtectedRoutes.jsx";
import Dashboard from "./pages/Dashboard.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AuthLayout from "./pages/AuthLayout.jsx";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {" "}
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={<Login />}
          loader={loginLoader}
          action={loginAction}
        />
        <Route element={<ProtectedRoutes />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>
    </>
  )
);
