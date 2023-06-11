import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  let userData = localStorage.getItem("user");

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/login", user).then((res) => {
      alert(res.data.message);

      window.location.assign("http://localhost:3000/home");

      localStorage.setItem("user", JSON.stringify(res.data.user));
    });
  };
  return (
    <div className="container">
      <form>
        <label htmlFor="email">Email Id</label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />

        <div className="btn-container">
          <button className="btn" onClick={handleSubmit}>
            Login
          </button>
          <button
            className="btn"
            // onClick={() =>
            // window.location.assign("http://localhost:3000/register")
            // }
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
