import React, { useState, useRef } from 'react';
import './Uploader.css';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';

export default function Uploader() {
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const newImages = Array.from(files).map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
    }));
    setImages((prevImages) => [...prevImages, ...newImages]);
    event.target.value = null; // Reset the file input value
  };

  const handleDeleteImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleWidgetClick = () => {
    fileInputRef.current.click();
    console.log('Button Clicked.')
  };

  return (
    <main>
      <div className="upload-widget">
        {images.length === 0 ? (
          <>
            <MdCloudUpload color="#FFFFFF" border="#1475CF" size={60} />
            <p className="form">Select Images to Upload</p>
          </>
        ) : null}
        <input
          type="file"
          accept="image/*"
          className="picture-input"
          ref={fileInputRef}
          onChange={handleImageUpload}
          multiple
          onClick={(e) => { e.target.value = null; }} // Allow selecting the same file again
        />
        
         </div>
      {/* </div> */}

      {images.length > 0 && (
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
