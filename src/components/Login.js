// components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const[welcomeMessage , setwelcomeMessage] = useState("");
  

  // Mock admin credentials for validation
  const mockAdmin = {
    userId: "admin123",
    password: "password123",
    name:"Ritiksha Tipre"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId === mockAdmin.userId && password === mockAdmin.password) {
      alert("Login Successful!");
      setError("");
      setwelcomeMessage(` Welcome , Hello ${mockAdmin.name}`)
      sessionStorage.setItem('adminName',mockAdmin.name)

      setTimeout(()=>{
        navigate("/admin-dashboard");
        
      },3000);

    
    } else {
      setError("Invalid User ID or Password");
    }
  };

  return (
    <div className="text-center mt-5 border border-secondary-subtle w-50  pt-4 pb-4  mx-auto text-white opacity-75 bg-dark"
     
    >
      {welcomeMessage && <p>{welcomeMessage}</p>}
      <h2 className="fs-4">Loan Management Application</h2>
      <h2 className="fs-5 mt-4">Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>
            Enter Admin User ID:
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              
              className="ms-3 mt-3 mb-2"
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>
            Enter Admin Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              
              className="ms-2 mb-2"
              required
            />
          </label>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        
        <button
          type="submit"
          className="btn btn-primary w-25 mb-4"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
