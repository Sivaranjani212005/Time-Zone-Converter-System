// routes/converterRoutes.js
const express = require('express');
const moment = require('moment-timezone');
const ConversionLog = require('../models/TimeConverter');

const router = express.Router();

router.post('/create', async (req, res) => {
  const { time, sourceZone, targetZone } = req.body;

  if (!time || !sourceZone || !targetZone) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  try {
    const today = moment().format('YYYY-MM-DD');
    const dateTimeStr = `${today} ${time}`;

    const sourceTime = moment.tz(dateTimeStr, 'YYYY-MM-DD HH:mm', sourceZone);
    const targetTime = sourceTime.clone().tz(targetZone);

    const convertedTime = targetTime.format('HH:mm');

    // Optional: Save the conversion log to the database
    const conversionLog = new ConversionLog({
      sourceTime: time,
      sourceZone,
      targetZone,
      convertedTime
    });

    await conversionLog.save();

    res.status(200).json({ convertedTime });
  } catch (error) {
    res.status(500).json({ message: 'Error converting time', error: error.message });
  }
});

module.exports = router;
