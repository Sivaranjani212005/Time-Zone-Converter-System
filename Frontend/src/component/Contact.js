import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3006//timezone_converter/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setResponseMessage(data.message || 'Your message has been sent!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setResponseMessage(data.message || 'Failed to send message.');
            }
        } catch (error) {
            setResponseMessage('Server error. Please try again later.');
        }
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>Got questions or feedback? Fill out the form below, and we will get back to you!</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>

                <button type="submit">Send Message</button>
            </form>

            {responseMessage && <div className="response-message">{responseMessage}</div>}
        </div>
    );
}
