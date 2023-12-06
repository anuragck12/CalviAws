// FileReader.js
import React, { useState } from 'react';
import axios from 'axios';

const FileReader = ({ fileId }) => {
  const [fileData, setFileData] = useState([]);

  const handleViewFile = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/file/${fileId}`);
      setFileData(response.data);
    } catch (error) {
      console.error('Error fetching file data:', error);
    }
  };

  return (
    <div>
      <button onClick={handleViewFile}>View File</button>
      {fileData.map((data, index) => (
        <div key={index}>
          Voltage: {data.voltage}, Time: {data.time}
        </div>
      ))}
    </div>
  );
};

export default FileReader;
