import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PRODUCTS } from "./Products";

const ProductItem = () => {
  const { pid } = useParams();
  const prod = PRODUCTS.find((each) => each.id == pid);
  const navigate = useNavigate();
  return (
    <>
      <div>This is the page for {prod.title}</div>
      <button onClick={() => navigate(-1)}>Back</button>
      <Link to=".." relative="path">
        Back
      </Link>
    </>
  );
};

export default ProductItem;
