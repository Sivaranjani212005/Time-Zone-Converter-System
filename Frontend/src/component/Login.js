import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:3006/timezone_converter/users")
      .then((res) => {
        const user = res.data.find(
          (x) => x.username === username && x.password === password);
        if (user) {
          alert("Login Successful");
          setTimeout(() => {
            navigate("/Converter");
          }, 500);
        } else {
          alert("Invalid Username or password");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <div className="lg">
        <br></br>
        <br></br>
       
        <form onSubmit={handleSubmit}>
          <label style={{ fontWeight: "bold", fontFamily: "Arial" }}>
            Username
          </label>
          <br></br>
          <br></br>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{height:"15px"
            }}
            required
          />
          <br></br>
          <br></br>
          <label style={{ fontWeight: "bold", fontFamily: "Arial" }}>
            Password
          </label>
          <br></br>
          <br></br>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br></br>
          <br></br>
          <button
            type="submit"
            style={{
              height: "40px",
              width: "100px",
              backgroundColor: "seagreen",
              cursor: "pointer",
              borderRadius: "5px",
              color: "white",
              border: "none",
              fontWeight: "bold",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}