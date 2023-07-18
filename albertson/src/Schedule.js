import React, { useState } from 'react';
import './Schedule.css';

const Schedule = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSchedule = () => {
    // Perform scheduling logic here
    console.log('Scheduled!');
  };

  return (
    <div className="schedule-container">
      <div className="section">
        <div className="section-heading">Starting Date & Time</div>
        <div className="input-container">
          <label htmlFor="start-date">Enter Start Date (MM DD YYYY):</label>
          <input
            type="text"
            id="start-date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="start-time">Enter Start Time (HH:MM AM/PM):</label>
          <input
            type="text"
            id="start-time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
      </div>
      <div className="section">
        <div className="section-heading">Ending Date & Time</div>
        <div className="input-container">
          <label htmlFor="end-date">Enter End Date (MM DD YYYY):</label>
          <input
            type="text"
            id="end-date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="end-time">Enter End Time (HH:MM AM/PM):</label>
          <input
            type="text"
            id="end-time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>
      </div>
      <button className="schedule-button" onClick={handleSchedule}>
        Schedule Upload
      </button>
    </div>
  );
};

export default Schedule;
