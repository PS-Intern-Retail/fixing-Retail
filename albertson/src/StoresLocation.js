import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import './StoresLocation.css';

const StoreLocation = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [stateOptions, setStateOptions] = useState([
    { label: 'Alabama', value: 'AL' },
    { label: 'Alaska', value: 'AK' },
    // Rest of the state options...
  ]);

  const [storeList, setStoreList] = useState([]);

  const navigate = useNavigate();

  const handleStateSelection = (event, newValue) => {
    if (newValue) {
      setSelectedState(newValue);
      fetchStores(newValue.value);
    }
  };

  const fetchStores = (selectedStateValue) => {
    const stores = [
      { name: 'Store 1', city: 'City A', state: selectedStateValue },
      { name: 'Store 2', city: 'City B', state: selectedStateValue },
      // Rest of the stores...
    ];
    setStoreList(stores);
  };

  const handleBack = () => {
    console.log('Go back');
  };

  const handleNext = () => {
    if (selectedState) {
      console.log('Go next');
      navigate(`/verification?state=${selectedState.label}`);
    } else {
      console.log('Please select a state');
    }
  };

  const handleStoreClick = (store) => {
    console.log('Clicked store:', store);
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
