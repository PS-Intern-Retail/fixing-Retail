import React, { useState } from 'react';
import './ImagePlaylistPage.css';

const ImagePlaylistPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePanelClick = (index) => {
    setActiveIndex(index);
  };

  const handleViewAllPlaylists = () => {
    // Implement your logic for "View All Playlists" button here
    console.log('View All Playlists button clicked');
  };

  const recommendationURLs = [
    'https://www.weeklyadpro.com/wp-content/uploads/2020/10/Albertsons_1021_1027_1.jpg',
    'https://i.pinimg.com/736x/76/17/8d/76178d19b9e7d3755c60b5c4c0fe85ef.jpg',
    'https://th.bing.com/th/id/OIP.tQTbihTAmqpjhdZFk3ytGQHaRf?pid=ImgDet&w=148&h=350&c=7&dpr=1.5',
    'https://th.bing.com/th/id/OIP.MlYyjJNqewxlq-KIybfuGQHaM9?pid=ImgDet&w=171&h=299&c=7&dpr=1.5',
    'https://th.bing.com/th/id/OIP.e3qBsIbxz4DiiPwbAjOqFQHaOJ?pid=ImgDet&w=171&h=326&c=7&dpr=1.5',
  ];

  return (
    <div className="container">
      <div
        className={`panel ${activeIndex === 0 ? 'active' : ''}`}
        style={{
          backgroundImage: `url(${recommendationURLs[0]})`,
        }}
        onClick={() => handlePanelClick(0)}
      ></div>

      <div
        className={`panel ${activeIndex === 1 ? 'active' : ''}`}
        style={{
          backgroundImage: `url(${recommendationURLs[1]})`,
        }}
        onClick={() => handlePanelClick(1)}
      ></div>

      <div
        className={`panel ${activeIndex === 2 ? 'active' : ''}`}
        style={{
          backgroundImage: `url(${recommendationURLs[2]})`,
        }}
        onClick={() => handlePanelClick(2)}
      ></div>

      <div
        className={`panel ${activeIndex === 3 ? 'active' : ''}`}
        style={{
          backgroundImage: `url(${recommendationURLs[3]})`,
        }}
        onClick={() => handlePanelClick(3)}
      ></div>

      <div
        className={`panel ${activeIndex === 4 ? 'active' : ''}`}
        style={{
          backgroundImage: `url(${recommendationURLs[4]})`,
        }}
        onClick={() => handlePanelClick(4)}
      ></div>
        <div>
      <button className="view-all-button" onClick={handleViewAllPlaylists}>
        View All Playlists
      </button>
      </div>
    </div>
  );
};

export default ImagePlaylistPage;
