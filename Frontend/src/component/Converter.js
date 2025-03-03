import React, { useState } from 'react';
import moment from 'moment-timezone';
import './Converter.css';

export default function Converter() {
    const [time, setTime] = useState('');
    const [sourceZone, setSourceZone] = useState('');
    const [targetZone, setTargetZone] = useState('');
    const [result, setResult] = useState('');

    const handleConvert = () => {
        if (time && sourceZone && targetZone) {
            try {
                const format = 'HH:mm';
                const sourceTime = moment.tz(time, format, sourceZone);
                const targetTime = sourceTime.clone().tz(targetZone).format(format);
                setResult(`Converted time: ${targetTime}`);
            } catch (error) {
                console.error('Error:', error);
                setResult('Error converting time. Please check your inputs.');
            }
        } else {
            setResult('Please fill in all fields.');
        }
    };

    return (
        <div className="converter-container">
            <h1>Time Zone Converter</h1>
            <div className="converter-form">
                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="time-input"
                />
                <select
                    value={sourceZone}
                    onChange={(e) => setSourceZone(e.target.value)}
                    className="zone-select"
                >
                    <option value="">Select Source Time Zone</option>
                    <option value="GMT">GMT</option>
                    <option value="UTC">UTC</option>
                    <option value="America/New_York">America/New_York (EST)</option>
                    <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
                    <option value="America/Los_Angeles">America/Los_Angeles (PST)</option>
                </select>
                <select
                    value={targetZone}
                    onChange={(e) => setTargetZone(e.target.value)}
                    className="zone-select"
                >
                    <option value="">Select Target Time Zone</option>
                    <option value="GMT">GMT</option>
                    <option value="UTC">UTC</option>
                    <option value="America/New_York">America/New_York (EST)</option>
                    <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
                    <option value="America/Los_Angeles">America/Los_Angeles (PST)</option>
                </select>
                <button onClick={handleConvert} className="convert-btn">Convert Time</button>
            </div>
            {result && <div className="result">{result}</div>}
        </div>
    );
}
