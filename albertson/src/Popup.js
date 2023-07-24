import React, { useState } from 'react';
import 'reactjs-popup/dist/index.css';
import Schedule from './Schedule';

const Pop = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="popup-container">
      {/* Button to open the popup */}
      {!isPopupVisible && (
        <button className="popup-button" onClick={togglePopup}>
          Open up Popup!
        </button>
      )}

      {/* Actual popup content */}
      {isPopupVisible && (
        <div className="popup">
            <button onClick={togglePopup}>Close the popup!</button>
            <Schedule onClose={togglePopup} />
          </div>
      )}
    </div>
  );
};

export default Pop;
