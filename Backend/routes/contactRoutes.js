const express = require('express');
const Contact = require('../models/Contacts');
const router = express.Router();
router.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ message: 'All fields are required.' });
    }
    try {
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(200).json({ message: 'Your message has been sent successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;
