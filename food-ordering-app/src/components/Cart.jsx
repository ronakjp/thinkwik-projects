import React, { useContext } from "react";
import Modal from "./UI/Modal";
import "../index.css";
import CartContext from "../store/CartContext";
import Button from "./UI/Button";
import { UserProgressContext } from "../store/UserProgressContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { addItem, removeItem, items } = useContext(CartContext);

  const usrctx = useContext(UserProgressContext);
  const cartTotal = items.reduce((accum, eachItem) => {
    return accum + eachItem.price * eachItem.quantity;
  }, 0);

  function handleCloseBtn() {
    console.log("Cancel button clicked");
    usrctx.hideCart();
  }

  function handleCheckoutBtn() {
    usrctx.showCheckout();
  }
  return (
    <Modal open={usrctx.progress === "cart"} classname="cart">
      <h2>Your Cart</h2>
      <ul>
        {items.map((eachItem) => (
          <CartItem key={eachItem.id} eachItem={eachItem} />
        ))}
      </ul>
      <p className="cart-total">${cartTotal}</p>
      <p className="modal-actions">
        <Button txtOnly onClick={handleCloseBtn}>
          Close
        </Button>
        {items.length > 0 && (
          <Button onClick={handleCheckoutBtn}>Checkout</Button>
        )}
      </p>
    </Modal>
  );
};

export default Cart;
