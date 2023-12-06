// FileUploader.js
import React, { useState } from 'react';
import axios from 'axios';
import './../App.css'

const FileUploader = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('ht', formData);
      console.log(response.data); // This can contain the S3 upload URL
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className='fileuploader'>
    <input type="file" id="file-input" onChange={handleFileChange} />
    <button id="upload-button" onClick={handleUpload}>Upload</button>
  </div>
  );
};

export default FileUploader;
