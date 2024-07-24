import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <p>
        GO to the <Link to="/dashboard">dashboard </Link>page
      </p>
    </>
  );
};

export default Home;
