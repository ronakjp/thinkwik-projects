import React from "react";
import "../index.css";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} />
        <h1>Food Ordering App</h1>
      </div>
      <nav>
        <Button txtOnly>Cart (0)</Button>
      </nav>
    </header>
  );
};

export default Header;
