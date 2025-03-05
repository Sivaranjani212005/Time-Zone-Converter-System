import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar= () => {
  return (
    <div className="home-container">
      <header className="navbar">
        <div className="logo">
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/converter">Converter</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </header>

      
    </div>
  );
};

export default Navbar;

