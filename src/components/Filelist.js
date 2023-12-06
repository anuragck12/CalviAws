// FileList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('http://localhost:3001/files');
        setFiles(response.data);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div>
      <h2>File List</h2>
      <ul>
        {files.map((file) => (
          <li key={file._id}>{file.fileName}</li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
