import React, { useContext } from "react";
import "../index.css";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
const Header = () => {
  const { items } = useContext(CartContext);

  function calculateItems() {
    return items.reduce((accum, item) => accum + item.quantity, 0);
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} />
        <h1>Food Ordering App</h1>
      </div>
      <nav>
        <Button txtOnly>Cart ({calculateItems()})</Button>
      </nav>
    </header>
  );
};

export default Header;
