import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Schedule.css';

const Schedule = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleSchedule = () => {
    // Perform scheduling logic here
    // Simulating upload success for demonstration
    setUploadSuccess(true);
    setShowModal(true);

    // Simulating upload failure for demonstration
    // setUploadSuccess(false);
    // setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="schedule-container">
      <div className="section">
        <div className="section-heading">Starting Date & Time</div>
        <div className="input-container">
          <label htmlFor="start-date">Enter Start Date:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy-MM-dd"
            id="start-date"
          />
        </div>
        <div className="input-container">
          <label htmlFor="start-time">Enter Start Time:</label>
          <DatePicker
            selected={startTime}
            onChange={(time) => setStartTime(time)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="HH:mm"
            id="start-time"
          />
        </div>
      </div>
      <div className="section">
        <div className="section-heading">Ending Date & Time</div>
        <div className="input-container">
          <label htmlFor="end-date">Enter End Date:</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="yyyy-MM-dd"
            id="end-date"
          />
        </div>
        <div className="input-container">
          <label htmlFor="end-time">Enter End Time:</label>
          <DatePicker
            selected={endTime}
            onChange={(time) => setEndTime(time)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="HH:mm"
            id="end-time"
          />
        </div>
      </div>
      <button className="schedule-button" onClick={handleSchedule}>
        Schedule Upload
      </button>
      {showModal && (
        <div className={`modal ${uploadSuccess ? 'success' : 'failure'}`}>
          {uploadSuccess ? (
            <>
              <div className="modal-content">
                <span className="modal-icon">&#x2714;</span>
                <h3>Schedule Successful</h3>
              </div>
              <button className="modal-close" onClick={closeModal}>
                Close
              </button>
            </>
          ) : (
            <>
              <div className="modal-content">
                <span className="modal-icon">&#x2716;</span>
                <h3>Schedule Failed</h3>
              </div>
              <button className="modal-close" onClick={closeModal}>
                Close
              </button>
            </>
          )}
        </div>
      )}
      <div className='confirmalocation'>   <h1>  Confirm location   </h1>  
      <p> 591 Tres Pinos Rd, Holister, Ca </p>
        </div>
        <div className='confirmalocation'>   <h1> Confirm Playlist   </h1>  
      <p> Independence Day Ad  </p>
        </div>
    </div>
  );
};

export default Schedule;
