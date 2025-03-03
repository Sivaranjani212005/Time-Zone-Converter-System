import React from 'react';
import './About.css';

export default function About() {
    return (
        <div className="about-container">
            <h1>About Time Zone Converter</h1>
            <p>
                Our Time Zone Converter helps you effortlessly convert time across different regions. 
                Whether you're scheduling meetings, coordinating with teams globally, or just curious 
                about time zones, we’ve got you covered.
            </p>
            
            <h2>Our Mission</h2>
            <p>
                We aim to simplify global time management, ensuring users can easily switch between time 
                zones without confusion. Accuracy, speed, and simplicity are at the core of our tool.
            </p>

            <h2>Features</h2>
            <ul>
                <li>Instant time conversion between any two time zones.</li>
                <li>User-friendly interface with intuitive controls.</li>
                <li>Support for daylight saving time (DST).</li>
            </ul>

          
           
        </div>
    );
}
