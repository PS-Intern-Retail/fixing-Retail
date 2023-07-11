import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from 'react-router-dom';
import './StoresLocation.css';

const StoreLocation = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [stateOptions, setStateOptions] = useState([
    { label: 'Alabama', value: 'AL' },
    { label: 'Alaska', value: 'AK' },
    { label: 'Arizona', value: 'AZ' },
    { label: 'Arkansas', value: 'AR' },
    { label: 'California', value: 'CA' },
    { label: 'Colorado', value: 'CO' },
    { label: 'Connecticut', value: 'CT' },
    { label: 'Delaware', value: 'DE' },
    { label: 'Florida', value: 'FL' },
    { label: 'Georgia', value: 'GA' },
    { label: 'Hawaii', value: 'HI' },
    { label: 'Idaho', value: 'ID' },
    { label: 'Illinois', value: 'IL' },
    { label: 'Indiana', value: 'IN' },
    { label: 'Iowa', value: 'IA' },
    { label: 'Kansas', value: 'KS' },
    { label: 'Kentucky', value: 'KY' },
    { label: 'Louisiana', value: 'LA' },
    { label: 'Maine', value: 'ME' },
    { label: 'Maryland', value: 'MD' },
    { label: 'Massachusetts', value: 'MA' },
    { label: 'Michigan', value: 'MI' },
    { label: 'Minnesota', value: 'MN' },
    { label: 'Mississippi', value: 'MS' },
    { label: 'Missouri', value: 'MO' },
    { label: 'Montana', value: 'MT' },
    { label: 'Nebraska', value: 'NE' },
    { label: 'Nevada', value: 'NV' },
    { label: 'New Hampshire', value: 'NH' },
    { label: 'New Jersey', value: 'NJ' },
    { label: 'New Mexico', value: 'NM' },
    { label: 'New York', value: 'NY' },
    { label: 'North Carolina', value: 'NC' },
    { label: 'North Dakota', value: 'ND' },
    { label: 'Ohio', value: 'OH' },
    { label: 'Oklahoma', value: 'OK' },
    { label: 'Oregon', value: 'OR' },
    { label: 'Pennsylvania', value: 'PA' },
    { label: 'Rhode Island', value: 'RI' },
    { label: 'South Carolina', value: 'SC' },
    { label: 'South Dakota', value: 'SD' },
    { label: 'Tennessee', value: 'TN' },
    { label: 'Texas', value: 'TX' },
    { label: 'Utah', value: 'UT' },
    { label: 'Vermont', value: 'VT' },
    { label: 'Virginia', value: 'VA' },
    { label: 'Washington', value: 'WA' },
    { label: 'West Virginia', value: 'WV' },
    { label: 'Wisconsin', value: 'WI' },
    { label: 'Wyoming', value: 'WY' }
  ]);

  const [storeList, setStoreList] = useState([]);

  const history = useHistory();

  const handleStateSelection = (event, newValue) => {
    if (newValue) {
      setSelectedState(newValue);
      fetchStores(newValue.value);
    }
  };

  const fetchStores = (selectedStateValue) => {
    // Simulating an API call to fetch the list of stores based on the selected state
    // Replace this with your actual API call logic
    const stores = [
      { name: 'Store 1', city: 'City A', state: selectedStateValue },
      { name: 'Store 2', city: 'City B', state: selectedStateValue },
      { name: 'Store 3', city: 'City C', state: selectedStateValue },
    ];
    setStoreList(stores);
  };

  const handleBack = () => {
    // Add logic for going back
    console.log('Go back');
  };

  const handleNext = () => {
    if (selectedState) {
      // Add logic for going next
      console.log('Go next');
      history.push(`/verification?state=${selectedState.label}`);
    } else {
      console.log('Please select a state');
    }
  };
  
  const handleStoreClick = (store) => {
    console.log('Clicked store:', store);
    // Add logic to handle store click
  };

  return (
    <div className="split-container">
      <div className="left-side">
        <h2>PAVILION</h2>
      </div>
      <div className="right-side">
        <div className="search-bar">
          <Autocomplete
            options={stateOptions}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <div className="search-input-container">
                <SearchIcon className="search-icon" />
                <TextField
                  {...params}
                  label="Search location"
                  variant="outlined"
                  className="search-input"
                />
              </div>
            )}
            value={selectedState}
            onChange={handleStateSelection}
            filterOptions={(options, { inputValue }) =>
              options.filter((option) =>
                option.label.toLowerCase().includes(inputValue.toLowerCase())
              )
            }
          />
        </div>
        <div className="store-list">
          <h3>Store List:</h3>
          <ul>
            {storeList.map((store, index) => (
              <li key={index}>
                <Button onClick={() => handleStoreClick(store)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="#20509C" stroke="#20509C" strokeWidth="1.5">
                    <circle cx="5" cy="5" r="4" />
                  </svg>
                  {store.name}
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="button-container">
          <Button variant="contained" color="primary" onClick={handleBack} className="back-button">
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={handleNext} className="next-button">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StoreLocation;
