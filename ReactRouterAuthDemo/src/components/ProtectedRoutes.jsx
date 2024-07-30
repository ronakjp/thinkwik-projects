import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
const ProtectedRoutes = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    console.log("User is not authenticated !! redirecting to the Login page");
    return <Navigate to={"/login"} />;
  }
  return children;
};

export default ProtectedRoutes;
