import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "./HomePage";
import MainNavigation from "../components/MainNavigation";
const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};

export default RootLayout;
