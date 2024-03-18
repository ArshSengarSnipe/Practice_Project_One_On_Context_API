import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(username);
  };
  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Enter your username..."
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />{" "}
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Enter your password..."
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />{" "}
      <button name="submit" id="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Login;
