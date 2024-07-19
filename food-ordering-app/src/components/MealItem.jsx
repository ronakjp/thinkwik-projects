import React, { useContext } from "react";
import "../index.css";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
const MealItem = ({ mealDetails }) => {
  const { items, addItem, removeItem } = useContext(CartContext);

  function handleAddToCart(meal) {
    addItem(meal);
  }

  return (
    <li className="meal-item">
      <article>
        <img
          src={`http://localhost:3000/${mealDetails.image}`}
          alt={mealDetails.name}
        />
        <div>
          <h3>{mealDetails.name} </h3>
          <p className="meal-item-description">{mealDetails.description}</p>
          <p className="meal-item-price">${mealDetails.price}</p>
        </div>
        <p className="meal-item-actions">
          <Button
            txtOnly={false}
            onClick={() => {
              handleAddToCart(mealDetails);
            }}
          >
            {" "}
            Add to Cart
          </Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
