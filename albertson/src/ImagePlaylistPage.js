import React from 'react';
import './ImagePlaylistPage.css'; 

const ImagePlaylistPage = () => {
  // Sample data of customer ad recommendation URLs
  const recommendationURLs = [
    'https://th.bing.com/th/id/OIP.6tSSldzehqBowRd3mDzsDgAAAA?pid=ImgDet&rs=1',
    'https://th.bing.com/th/id/OIP.6tSSldzehqBowRd3mDzsDgAAAA?pid=ImgDet&rs=1',
    'https://static0.tiendeo.us/images/tiendas/52798/catalogos/1277282/paginas/mid2/00001.jpg',
    'https://static0.tiendeo.us/images/tiendas/113552/catalogos/1264515/paginas/mid2/00001.jpg',
    'https://static0.tiendeo.us/images/tiendas/113552/catalogos/1253229/paginas/mid2/00001.jpg',
  ];

  return (
    <div className="image-playlist-container">
      <div className="image-playlist">
        {recommendationURLs.map((url, index) => (
          <div className="image-slide" key={index}>
            <img src={url} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="centered-button">
        <button>View All Playlists</button>
      </div>
    </div>
  );
};

export default ImagePlaylistPage;
