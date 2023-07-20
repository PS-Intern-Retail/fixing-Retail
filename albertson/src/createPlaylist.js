import React, { useState, useRef } from 'react';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import PublishIcon from '@mui/icons-material/Publish';
import html2pdf from 'html2pdf.js';
import './createPlaylist.css';

function CreatePlaylist() {
  const [imageSrc, setImageSrc] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      setImageSrc(fileReader.result);
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  };

  const handlePublishIconClick = () => {
    fileInputRef.current.click();
  };

  const handleExport = () => {
    if (imageSrc) {
      const content = document.createElement('div');
      const imageElement = document.createElement('img');
      imageElement.src = imageSrc;
      imageElement.style.width = '100%';
      content.appendChild(imageElement);

      html2pdf().from(content).save('exported_image.pdf');
    } else {
      alert('Please upload an image first.');
    }
  };

  return (
    <div>
      <div className='title'> PAVILIONS </div>

      <div className='create-section'>
        <img
          src="https://th.bing.com/th/id/R.86aff27675b3c44f1ba9bcef9e9ab268?rik=AjaxIZSY%2f%2b0pHQ&riu=http%3a%2f%2fthehealthgardener.com%2fwp-content%2fuploads%2f2018%2f11%2fcolour-wheel.png&ehk=d1uaGkz9InPVRYv%2b%2fZWTJTVTk%2fE%2bOtOIPj6NhxBJCww%3d&risl=&pid=ImgRaw&r=0"
          alt="Color Wheel"
          style={{ width: '30px', height: '30px', marginRight: '10px' }} // Adjust the width and height as needed
        />
        Independence day
        <button className='Schedulebtn'>Schedule</button>
        <button className='Exportbtn' onClick={handleExport}>
          Export
        </button>
      </div>

      <div className="text-icon">
        <div className='container'>
          {imageSrc ? <img src={imageSrc} alt="Uploaded" /> : "Upload an image"}
        </div>
        <ul className="icon-list">
          <li className="icon-container">
            <TextFieldsIcon />
          </li>
          <li className="icon-container">
            <PublishIcon onClick={handlePublishIconClick} />
            <input
              type="file"
              onChange={handleImageUpload}
              ref={fileInputRef}
              style={{ display: 'none' }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CreatePlaylist;
