import React, { useState } from 'react';
import { States } from './States.js'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import './StoresLocation.css';

const StoreLocation = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [stateOptions, setStateOptions] = useState(States);

  const { state } = useLocation()
  let storeN = "Pavilions"
  if(state){
    storeN = state.storeName
  }

  const [storeList, setStoreList] = useState([]);
  const [checkedState, setCheckedState] = useState(
    new Array(2).fill(false)
  )

  const navigate = useNavigate();

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    )
    setCheckedState(updatedCheckedState)
  }

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
    navigate('/banner')
  };

  const handleNext = () => {
    if (selectedState) {
      navigate(`/verification?state=${selectedState.label}`
      ,
      {state: {stores: storeList, 
               checkedStores: checkedState, 
               storeName: storeN}}
      );
    } else {
      console.log('Please select a state');
    }
  };

  return (
    <div className="split-container">
      <div className="left-side">
      </div>
      <div className="right-side">
        <div className="search-bar-wrapper">
          <div className="search-bar">
            <Autocomplete
              options={stateOptions}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <div className="search-input-container">
                  <SearchIcon className="search-icon" />
                  <TextField
                    {...params}
                    // label="Search location"
                    variant="outlined"
                    className="search-input"
                    sx={{
                      width:600,
                      backgroundColor: "#EAEAEA",
                      borderRadius: '7px',
                      boxShadow: '0px 5px 8px rgba(0, 0, 0, 0.2)'
                    }}
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
        </div>
        <div className="store-list">
          <h3 className="locSelect">Location Selection</h3>
          <p className="subheader">Search for banner locations. You may select multiple locations.</p>
          <ul className="s-list">
            {storeList.map((store, index) => (
              <li key={index} className="listEle">
                <label>
                  <input 
                    type="checkbox"
                    className="check"
                    id={`custom-checkbox-${index}`}
                    name={store}
                    value={store}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />  
                  <span class="checktext"> {store.name}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="button-container">
          <button className="back-button" onClick={handleBack}>Back</button>
          <button className="next-button" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default StoreLocation;
