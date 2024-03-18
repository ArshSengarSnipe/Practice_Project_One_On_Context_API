import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h2>{user ? user : "No one"} has logged in!</h2>
    </div>
  );
};

export default Profile;
