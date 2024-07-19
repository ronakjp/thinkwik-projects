import React, { useContext } from "react";
import "../index.css";
import CartContext from "../store/CartContext";
const CartItem = ({ eachItem }) => {
  const { addItem, removeItem } = useContext(CartContext);

  function handleRemoveQty(eid) {
    console.log("called");
    removeItem(eid);
  }

  function handleAddQty(eachItm) {
    addItem(eachItm);
  }

  return (
    <li className="cart-item">
      <p>
        {eachItem.name} - {eachItem.quantity} x {eachItem.price}
      </p>
      <p className="cart-item-actions">
        <button onClick={() => handleAddQty(eachItem)}>+</button>
        <span>{eachItem.quantity}</span>
        <button onClick={() => handleRemoveQty(eachItem.id)}>-</button>
      </p>
    </li>
  );
};

export default CartItem;
