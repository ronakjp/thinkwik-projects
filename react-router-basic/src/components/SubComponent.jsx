import React from "react";
import { useParams } from "react-router-dom";

const SubComponent = () => {
  const { uid } = useParams();
  console.log("gotId", uid);
  return (
    <>
      <div>SubComponent</div>
      
    </>
  );
};

export default SubComponent;
