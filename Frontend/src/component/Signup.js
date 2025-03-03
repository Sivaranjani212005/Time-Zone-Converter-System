import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
export default function Signup() {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    axios
      .post(`http://localhost:3006/timezone_converter/users`, formdata)
      .then(() => {
        setTimeout(() => {
          alert("Redirecting to Login Page");
          navigate('/login');
        }, 100);
      })
      .catch((err) => {
        console.log("cannot sign up");
        console.log(err);
      });
  };

  return (
    <div className="sign">
      <h1>Create Account</h1>
      <div className="up">
        <br></br>
        <br></br>
        
        
        <form onSubmit={handleSubmit}>
          <label style={{ fontWeight: "bold", fontFamily: "Arial" }}>
            UserName
          </label>
          <br></br>
          <br></br>
          <input
            type="text"
            name="username"
            value={formdata.username}
            onChange={handleChange}
            required
          />
          <br></br>
          <br></br>
          <label style={{ fontWeight: "bold", fontFamily: "Arial" }}>
            Email
          </label>
          <br></br>
          <br></br>
          <input
            type="email"
            name="email"
            value={formdata.email}
            onChange={handleChange}
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
            name="password"
            value={formdata.password}
            onChange={handleChange}
            style={{height:"40px",width:"320px"}}
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
            }} onClick={handleSubmit}
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

