import React from "react";
import "../index.css";
import logo from "../assets/logo.jpg";
const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} />
        <h1>Food Ordering App</h1>
      </div>
      <nav>
        <button>Cart (0)</button>
      </nav>
    </header>
  );
};

export default Header;
