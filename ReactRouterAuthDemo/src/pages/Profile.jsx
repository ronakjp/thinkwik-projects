import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";
const Profile = () => {
  const { logout } = useAuth();

  function handleLogout() {
    console.log("Logging OUt......");
    logout();
  }

  function handleLogout() {
    console.log("Logging OUt......");
    logout();
  }

  return (
    <div>
      Secured User Profile <button onClick={handleLogout}>Logout</button>
      <Link to={"/dashboard"}> Dashboard</Link>
    </div>
  );
};

export default Profile;
