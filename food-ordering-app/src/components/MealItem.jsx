import React from "react";
import "../index.css";
const MealItem = ({ mealDetails }) => {
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
          <button className="button">Add to Cart</button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
