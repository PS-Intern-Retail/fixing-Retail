import React, { useState, useRef } from 'react';
import './Icon.css';
import { useNavigate } from 'react-router-dom'

export default function Icon(){
    const navigate = useNavigate()
    
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    const handleChangeButtonClick = () => {
        navigate('/sl');
    }

    const handleViewButtonClick = () => {
        console.log('view');
    }

    const handleProfileButtonClick = () => {
        console.log('profile');
    }

    const handleLogoutButtonClick = () => {
        navigate('/');
    }

    return (
        <div>
            <img
                className="icon"
                src="https://th.bing.com/th/id/R.ea0d38e91f172b985c948f989e98c39f?rik=NR0pbQNo1c8XMw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_357118.png&ehk=cUAdriibLw7xEDkfIXfwIR3GAAijwWJWZIpc7ctVbmo%3d&risl=&pid=ImgRaw&r=0"
                alt="Icon"
                onClick={toggleDropdown}
            />
            {isDropdownOpen && (
                <div className="dropdown">
                    <div className="option" onClick={handleChangeButtonClick}>
                        <img className="small-icon" 
                         src="https://cdn.icon-icons.com/icons2/1883/PNG/512/twocirclingarrows1_120592.png" 
                         alt="Change Banner/Location Icon" 
                        />
                        <span className="option-text">Change Banner/Location</span>
                    </div>
                    <div className="divider"></div>
                    <div className="option" onClick={handleViewButtonClick}>
                        <img className="small-icon" 
                         src="https://cdn-icons-png.flaticon.com/256/2370/2370264.png" 
                         alt="View Schedules Icon" 
                        />
                        <span className="option-text">View Schedules</span>
                    </div>                    
                    <div className="divider"></div>
                    <div className="option" onClick={handleProfileButtonClick}>
                        <img className="small-icon" 
                         src="https://cdn-icons-png.flaticon.com/512/3106/3106773.png" 
                         alt="Account/Profile Icon" 
                        />
                        <span className="option-text">Account/Profile</span>
                    </div>
                    <div className="divider"></div>
                    <div className="option" onClick={handleLogoutButtonClick}>
                        <img className="small-icon"
                         src="https://www.svgrepo.com/show/132889/logout.svg"
                         alt="Logout Icon" 
                        />
                        <span className="option-text">Logout</span>
                    </div>
                </div>
            )}
        </div>
      ); 
}