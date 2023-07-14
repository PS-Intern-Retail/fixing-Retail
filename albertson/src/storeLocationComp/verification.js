import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'; // Import Button from Material-UI
import './verification.css';


const Verification = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const selectedState = searchParams.get('state');
  const selectedStoreId = searchParams.get('store');

  const handleBack = () => {
    // Go back to the previous page
    navigate('/sl')
    //history.goBack();
  };

  const handleSubmit = () => {
    // Add your submit logic here
    console.log('Submit form');
  };

  return (
    <div className="split-container">
      <div className="left-side">
        {/* Content for the left side */}
        <h2>PAVILION</h2>
      </div>
      <div className="right-side">
        {/* Content for the right side */}
        <div>
          <h2>Verification Page</h2>
          <h2> {selectedState}</h2>
          <p className='verify'>  Make sure your locations are correct before submitting.</p>
          <p>Selected Store ID: {selectedStoreId}</p>
          {/* Add your verification form or content here */}
          <div className="button-container">
            <Button variant="contained"  color="primary" className="back" onClick={handleBack}>Back</Button>
            <Button  variant="contained"  color="primary" className="next" onClick={handleSubmit}>Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
