import React from "react";
import { Link } from "react-router-dom";

export const PRODUCTS = [
  { id: 1, title: "washing powder", price: 20 },
  { id: 2, title: "Balaji Wafer", price: 10 },
  { id: 3, title: "Soap", price: 40 },
  { id: 4, title: "Sev Mamara", price: 5 },
];

const Products = () => {
  return (
    <>
      <h1>Products List</h1>
      <ul>
        {PRODUCTS.map((each) => (
          <li key={each.id}>
            <Link to={`/products/${each.id}`}>{each.title}</Link>
            
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
