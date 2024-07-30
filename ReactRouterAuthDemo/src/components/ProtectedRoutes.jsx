import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoutes = ({}) => {
  const { user } = useAuth();

  if (!user) {
    console.log("User is not authenticated !! redirecting to the Login page");
    return <Navigate to={"/login"} />;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
