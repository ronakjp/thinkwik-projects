import React from "react";
import { Outlet, Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      <h1>Secured Profile's Dashboard</h1>
      <nav>
        <Link to="/settings">Settings</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Dashboard;
