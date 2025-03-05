const mongoose = require('mongoose');
const timeConversionSchema = new mongoose.Schema({
    sourceTime: { type: String, required: true },
    sourceZone: { type: String, required: true },
    targetZone: { type: String, required: true },
    convertedTime: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const TimeConverter = mongoose.model('TimeConverter', timeConversionSchema);

module.exports = TimeConverter;
