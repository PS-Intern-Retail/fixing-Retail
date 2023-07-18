import React, { useState, useRef } from 'react';
import './Uploader.css';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';

export default function Uploader() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

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

  const handleDeleteImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleAddMoreImages = () => {
    fileInputRef.current.click();
  };

  return (
    <main>
      <div className={`upload-widget ${loading ? 'empty' : images.length === 0 ? 'empty' : 'non-empty'}`}>
        {images.length === 0 && !loading ? (
          <>
            <MdCloudUpload color="#FFFFFF" border="#1475CF" size={60} />
            <label htmlFor="file-input" >
              Select Images to Upload
            </label>
          </>
        ) : null}
        <input
          type="file"
          accept="image/*"
          className="picture-input"
          ref={fileInputRef}
          onChange={handleImageUpload}
          multiple
          style={{ display: 'none' }}
          id="file-input"
          disabled={loading}
        />
    
        {images.length > 0 && (
          <button className="add-more-button" onClick={handleAddMoreImages} disabled={loading}>
            Add More Images
          </button>
        )}
      </div>

      {loading && <div class="loading-container">
    <div class="loading-bar"></div>
    <div class="loading-text">Uploading...</div>
  </div>
}

     
      {!loading && (
        <div className="image-list-container">
          <div className="image-list">
            {images.map((image, index) => (
              <div className="image-item" key={index}>
                <img src={image.url} alt={image.name} width={20} height={20} />
                <div className="image-item-overlay">
                  <span>{image.name}</span>
                  <MdDelete onClick={() => handleDeleteImage(index)} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
