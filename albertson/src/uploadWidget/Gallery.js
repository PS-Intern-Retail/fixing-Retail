import React, { useEffect, useState } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Retrieve the uploaded images from local storage or through state management
    const uploadedImages = JSON.parse(localStorage.getItem('uploadedImages'));
    if (uploadedImages) {
      setImages(uploadedImages);
    }
  }, []);

  return (
    <div>
      <h2>Gallery</h2>
      <div className="image-list">
        {images.map((image, index) => (
          <div className="image-item" key={index}>
            <img src={image.url} alt={image.name} width={200} height={200} />
            <span>{image.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
