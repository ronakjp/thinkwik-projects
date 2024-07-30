import React from "react";
import { useAuth } from "../hooks/useAuth";

const Profile = () => {
  const { logout } = useAuth();

  function handleLogout() {
    console.log("Logging OUt......");
    logout();
  }
  return (
    <div>
      Secured User Profile <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
