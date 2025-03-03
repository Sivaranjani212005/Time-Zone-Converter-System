import React from 'react';
import { Link } from 'react-router-dom';
import './Results.css';

export default function Results({ originalTime, sourceZone, targetZone, convertedTime }) {
    return (
        <div className="results-container">
            <h1 className="title">Conversion Results</h1>

            <div className="result-card">
                <p><strong>Original Time:</strong> {originalTime}</p>
                <p><strong>Source Time Zone:</strong> {sourceZone}</p>
                <p><strong>Target Time Zone:</strong> {targetZone}</p>
                <p className="converted-time"><strong>Converted Time:</strong> {convertedTime}</p>

                <div className="actions">
                    <button className="copy-btn" onClick={() => navigator.clipboard.writeText(convertedTime)}>Copy Time</button>
                    <Link to="/" className="back-btn">Back to Converter</Link>
                </div>
            </div>
        </div>
    );
}