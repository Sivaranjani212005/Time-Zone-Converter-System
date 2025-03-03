import React from 'react';
import './Home.css'
const Home= () => {
  return (
    <div className="home-container">
      <header className="navbar">
        <div className="logo">
          <h1>TIME ZONE CONVERTER SYSTEM</h1>
        </div>
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/signup">Sign Up</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/converter">Converter</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </header>

      <section className="hero-section">
        <h2>Welcome to Time Zone Converter</h2>
        <p>
          Easily convert times across different time zones with accuracy and speed. 
          This tool helps you plan meetings, events, and manage international schedules seamlessly.
        </p>
      </section>

      <section className="content-section">
        <h3>About Our Tool</h3>
        <p>
          Our Time Zone Converter makes it simple to view and compare times worldwide. 
          Just input your time, choose the zones, and get results instantly.
        </p>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Time Zone Converter. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
