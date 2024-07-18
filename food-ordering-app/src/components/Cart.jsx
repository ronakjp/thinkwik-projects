import React, { useContext } from "react";
import Modal from "./UI/Modal";
import "../index.css";
import CartContext from "../store/CartContext";
import Button from "./UI/Button";
import { UserProgressContext } from "../store/UserProgressContext";

const Cart = () => {
  const { addItem, removeItem, items } = useContext(CartContext);

  const usrctx = useContext(UserProgressContext);
  const cartTotal = items.reduce((accum, eachItem) => {
    return accum + eachItem.price * eachItem.quantity;
  }, 0);

  function handleCloseBtn() {
    console.log("Cancel button clicked");
    usrctx.hideCart();
    console.log(usrctx);
  }
  return (
    <Modal open={usrctx.progress === "cart"} classname="cart">
      <h2>Your Cart</h2>
      <ul>
        {items.map((eachItem) => (
          <li key={eachItem.id}>
            {eachItem.name} - {eachItem.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">${cartTotal}</p>
      <p className="modal-actions">
        <Button txtOnly onClick={handleCloseBtn}>
          Close
        </Button>
        <Button>Checkout</Button>
      </p>
    </Modal>
  );
};

export default Cart;
