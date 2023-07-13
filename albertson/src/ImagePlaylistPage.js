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
    'https://th.bing.com/th/id/OIP.6tSSldzehqBowRd3mDzsDgAAAA?pid=ImgDet&rs=1',
    'https://th.bing.com/th/id/OIP.6tSSldzehqBowRd3mDzsDgAAAA?pid=ImgDet&rs=1',
    'https://static0.tiendeo.us/images/tiendas/52798/catalogos/1277282/paginas/mid2/00001.jpg',
    'https://static0.tiendeo.us/images/tiendas/113552/catalogos/1264515/paginas/mid2/00001.jpg',
    'https://static0.tiendeo.us/images/tiendas/113552/catalogos/1253229/paginas/mid2/00001.jpg',
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
