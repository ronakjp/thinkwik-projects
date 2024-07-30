import React from "react";
import { AuthContextProvider } from "../hooks/useAuth";
import { Outlet } from "react-router-dom";
const AuthLayout = () => {
  return <AuthContextProvider>{<Outlet />}</AuthContextProvider>;
};

export default AuthLayout;
