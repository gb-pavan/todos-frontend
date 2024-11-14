// src/components/Auth/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/auth";
import "./index.css";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser(form);
    console.log("token",response.token);
    localStorage.setItem("token", response.token);
    console.log('in local storage', localStorage.getItem("token"));
    localStorage.setItem("user", JSON.stringify(response.user));
    navigate("/dashboard");
  };

  return (
    // <div className="login-form-container">
    //   <form className="login-form" onSubmit={handleSubmit}>
    //     <div className="login-fields">
    //     <input name="email" placeholder="Email" onChange={handleChange} /></div>
    //     <div className="login-fields">
    //     <input name="password" type="password" placeholder="Password" onChange={handleChange} /></div>
    //     <button type="submit">Login</button>
    //   </form>
    // </div>

    <div className="form-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <p>Login Form</p>
        <div className="form-section">
          <input name="email" placeholder="Email" onChange={handleChange} />
        </div>
        <div className="form-section">
          <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        </div>
        <div>
          <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
