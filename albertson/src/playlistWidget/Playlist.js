import React from 'react';
import './Playlist.css';
import { useNavigate } from 'react-router-dom';

const Playlister = () => {
  const navigate = useNavigate();

  const navigateToPlaylist = () => {
    navigate('/playlist');
  };


  return (
    <main>
      <div className="playlist-button-container">
        <button className="view-playlist-button" onClick={navigateToPlaylist}>
          View Playlists
        </button>
      </div>
    </main>
  );
}

export default Playlister;