import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../uploadWidget/Uploader.css';

export default function Uploader() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();


  const handleImageUpload = async (event) => {
    const files = event.target.files;
    setLoading(true);
    try {
      const newImages = await Promise.all(
        Array.from(files).map(async (file) => ({
          name: file.name,
          url: await uploadImage(file),
        }))
      );
      setImages((prevImages) => [...prevImages, ...newImages]);
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setLoading(false);
      event.target.value = null; // Reset the file input value
    }
  };

  const uploadImage = (file) => {
    return new Promise((resolve, reject) => {
      // Simulating image upload delay with setTimeout
      setTimeout(() => {
        const imageUrl = URL.createObjectURL(file);
        resolve(imageUrl);
      }, 2000);
    });
  };

  const navigateToGallery = () => {
    localStorage.setItem('uploadedImages', JSON.stringify(images));
    navigate('/login');
  };

  return (
    <main>
      <div className="upload-widget">
        <input
          type="file"
          accept="image/*"
          className="picture-input"
          ref={fileInputRef}
          onChange={handleImageUpload}
          multiple
          disabled={loading}
        />
      </div>

      {loading && (
        <div className="loading-container">
          <div className="loading-bar"></div>
          <div className="loading-text">Uploading...</div>
        </div>
      )}

      <div className="gallery-button-container">
        {images.length > 0 && (
          <button className="view-gallery-button" onClick={navigateToGallery}>
            View Gallery
          </button>
        )}
      </div>
    </main>
  );
}
