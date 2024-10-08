import React, { useContext, useState } from "react";
import "../index.css";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import Cart from "./Cart";
import { UserProgressContext } from "../store/UserProgressContext";
const Header = () => {
  const { items } = useContext(CartContext);
  const usrctx = useContext(UserProgressContext);
  function calculateItems() {
    return items.reduce((accum, item) => accum + item.quantity, 0);
  }

  function handleShowCart() {
    usrctx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} />
        <h1>Food Ordering App</h1>
      </div>
      <nav>
        <Button txtOnly onClick={handleShowCart}>
          Cart ({calculateItems()})
        </Button>
      </nav>
    </header>
  );
};

export default Header;
