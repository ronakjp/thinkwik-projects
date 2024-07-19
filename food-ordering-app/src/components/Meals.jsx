import React, { useEffect, useState } from "react";
import "../index.css";
import MealItem from "./MealItem";
const Meals = () => {
  const [mealsArr, setMealsArr] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fetchMealItems() {
      try {
        const first_response = await fetch("http://localhost:3000/meals");

        if (!first_response.ok) {
          throw new Error("Error in getting the response from the server");
        }
        const data = await first_response.json();
        setMealsArr(data);
      } catch (err) {
        setError(err.message);

        console.log(err);
      }
    }
    fetchMealItems();
  }, []);

  return (
    <>
      {error && (
        <p>Oops ... Problem fetching the data [ {error.toUpperCase()} ]</p>
      )}
      {!error && (
        <ul id="meals">
          {mealsArr.map((eachMeal) => (
            <MealItem key={eachMeal.id} mealDetails={eachMeal} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Meals;
