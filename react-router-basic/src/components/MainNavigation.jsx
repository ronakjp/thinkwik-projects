import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../index.css";
const MainNavigation = () => {
  return (
    <header>
      <nav id="navbar">
        <p className="active">
          <NavLink to="/">Home</NavLink>
        </p>
        <p>
          <Link to="/dashboard">Dashboard</Link>
        </p>
        <p>
          <Link to="/contact">Contact</Link>
        </p>
      </nav>
    </header>
  );
};

export default MainNavigation;
